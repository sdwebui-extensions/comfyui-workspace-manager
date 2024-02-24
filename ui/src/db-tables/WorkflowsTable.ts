import { foldersTable, userSettingsTable } from "./WorkspaceDB";
import { Folder, Workflow } from "../types/dbTypes";
import { sortFileItem } from "../utils";
import { v4 as uuidv4 } from "uuid";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";
import {
  deleteJsonFileMyWorkflows,
  generateFilePathAbsolute,
  saveJsonFileMyWorkflows,
} from "./DiskFileUtils";
import { ESortTypes, ImportWorkflow } from "../RecentFilesDrawer/types";
import { defaultGraph } from "../defaultGraph";
import { scanMyWorkflowsDir } from "../utils/twowaySyncUtils";
import { osPathJoin } from "../utils/FilesysUtils";

export class WorkflowsTable extends TableBase<Workflow> {
  static readonly TABLE_NAME = "workflows";
  private _curWorkflow: Workflow | null = null;
  public get curWorkflow() {
    return this._curWorkflow;
  }

  constructor() {
    super("workflows");
  }

  static async load(): Promise<WorkflowsTable> {
    const instance = new WorkflowsTable();
    return instance;
  }
  public updateCurWorkflowID(id: string | null) {
    if (id == null) {
      this._curWorkflow = null;
      return;
    }
    this.get(id).then((w) => {
      this._curWorkflow = w ?? null;
    });
  }
  public async genAbsPath(id: string): Promise<string | null> {
    const workflow = await this.get(id);
    if (workflow == null) {
      alert(
        `Workflow not found <${id}> when gen abs path, Please refresh and try again`,
      );
      return null;
    }

    let filePath = workflow.name + ".json";
    let curFolderID = workflow?.parentFolderID;
    while (curFolderID != null) {
      const folder = await foldersTable?.get(curFolderID);
      if (folder == null) {
        console.error(
          "Folder not found <" + curFolderID + "> Please refresh and try again",
        );
        throw new Error("Folder not found <" + curFolderID + ">");
      }
      const folderName = folder.name;
      filePath = `${folderName}/${filePath}`;
      curFolderID = folder.parentFolderID ?? undefined;
    }
    let myWorkflowsDir = await userSettingsTable?.getSetting("myWorkflowsDir");
    return myWorkflowsDir! + "/" + filePath;
  }
  // public async get(id: string): Promise<Workflow | undefined> {
  //   const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");

  //   const wf = await indexdb.workflows.get(id);
  //   if (wf == null) {
  //     return undefined;
  //   }
  //   if (twoWaySyncEnabled) {
  //     const data = await this.getWorkflowFromMyWorkflowsDir(id);
  //     if (data.error || data.json == null) {
  //       alert(data.error);
  //       return wf;
  //     }
  //     return {
  //       ...wf,
  //       json: JSON.stringify(data.json),
  //     };
  //   }
  //   return wf;
  // }
  public async getWorkflowFromMyWorkflowsDir(
    id: string,
  ): Promise<{ json?: Object; error?: string }> {
    const workflowAbsPath = await this.genAbsPath(id);
    console.log("getWorkflowFromMyWorkflowsDir", id, workflowAbsPath);
    const data = await fetch("/workspace/get_workflow_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: workflowAbsPath,
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("get_workflow_file", data);
        return data;
      })
      .catch((error) => {
        console.error("Error getting workflow file:", error);
      });
    return data;
  }
  /**
   * Check whether the currently opened workflow is the latest version and is consistent with the DB.
   * Through updateTime comparison, if it is inconsistent, it means that a newer version already exists in the DB.
   * If the automatic save function is turned on at this time, the latest version in the DB will be overwritten.
   * Therefore, the user needs to confirm whether to continue to enable automatic saving.
   * @returns boolean
   */
  public async latestVersionCheck() {
    if (this._curWorkflow) {
      const curFlowInDB = await this.get(this._curWorkflow.id);
      if (curFlowInDB) {
        return curFlowInDB?.updateTime === this._curWorkflow.updateTime;
      }
      return true;
    }
    return true;
  }

  async generateUniqueName(name?: string, parentFolderID?: string) {
    /**
     * Generate a unique name
     * For imported scenes, the default name is the file name.
     * For new scenes, the default name is Untitled Flow.
     * Get the full workflow list. If the default name already exists, search incrementally starting from 2.
     * Looks for a unique name in the format `${default name} ${number}`.
     */
    let newFlowName = name ?? "Untitled Flow";
    const flowList = (await this.listAll()) ?? [];
    const flowNameList = flowList
      .filter((f) => f.parentFolderID == parentFolderID)
      .map((flow) => flow.name);
    if (flowNameList.includes(newFlowName)) {
      let num = 2;
      let flag = true;
      while (flag) {
        if (flowNameList.includes(`${newFlowName} ${num}`)) {
          num++;
        } else {
          newFlowName = `${newFlowName} ${num}`;
          flag = false;
        }
      }
    }
    return newFlowName;
  }

  public async createFlow(input: Partial<Workflow>): Promise<Workflow> {
    const { id, json, name } = input;
    const newFlowName = await this.generateUniqueName(
      name,
      input.parentFolderID ?? undefined,
    );
    const uuid = id ?? uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const time = Date.now();
    const newWorkflow: Workflow = {
      ...input,
      id: uuid,
      json: json ?? JSON.stringify(defaultGraph),
      name: newFlowName,
      updateTime: time,
      createTime: time,
    };
    //add to IndexDB
    await indexdb.workflows.add(newWorkflow);
    // add to disk file db
    this.saveDiskDB();
    // add to my_workflows/
    saveJsonFileMyWorkflows(newWorkflow);
    return newWorkflow;
  }

  public async update(
    id: string,
    change: Partial<Workflow>,
  ): Promise<Workflow | null> {
    //update indexdb
    await indexdb.workflows.update(id, change);
    const newWorkflow = (await this.get(id)) ?? null;
    //update curWorkflow RAM
    if (this._curWorkflow && this._curWorkflow.id === id) {
      this._curWorkflow = newWorkflow;
    }
    await this.saveDiskDB();
    return newWorkflow;
  }

  public async updateFlow(id: string, input: Partial<Workflow>) {
    const before = await this.get(id);
    if (before == null) {
      return;
    }
    const after = {
      ...before,
      ...input,
      id,
    };
    const beforeStr = JSON.stringify(before);
    const afterStr = JSON.stringify(after);
    if (beforeStr === afterStr) {
      // no change detected
      return;
    }
    const newWorkflow: Workflow = after;
    // When modifying the associated tag or modifying the directory, updateTime is not modified.
    const updateKey = Object.keys(input);
    const isModifyingTagOrFolder =
      updateKey.length === 1 &&
      ["tags", "parentFolderID"].includes(updateKey[0]);
    if (!isModifyingTagOrFolder) {
      newWorkflow.updateTime = Date.now();
      // update parent folder updateTime
      if (newWorkflow.parentFolderID != null) {
        await foldersTable?.update(newWorkflow.parentFolderID, {
          updateTime: Date.now(),
        });
      }
    }
    //update indexdb
    await indexdb.workflows.update(id, newWorkflow);
    //update curWorkflow RAM
    if (this._curWorkflow && this._curWorkflow.id === id) {
      this._curWorkflow = newWorkflow;
    }
    await this.saveDiskDB();
    // save to my_workflows/
    if ("name" in input || "parentFolderID" in input) {
      // renamed file or moved file folder
      await deleteJsonFileMyWorkflows(before);
      await saveJsonFileMyWorkflows(after);
      return;
    }
    if (input.json != null) {
      await saveJsonFileMyWorkflows(after);
    }
  }

  /**
   * Add flows in batches
   * @param flowList Need to add a new flow list
   * @param isOverwriteExistingFile By automatically scanning the newly added flow on the local disk,
   *  when synchronizing the DB, the flow on the local disk needs to be rewritten
   * because extra.comfyspace_tracking.id needs to be appended to json.
   * @param parentFolderID If you are adding batches to the specified files, provide the folder id.
   * @returns
   */
  public async batchCreateFlows(
    flowList: ImportWorkflow[] = [],
    isOverwriteExistingFile: boolean = false,
    parentFolderID?: string,
  ) {
    const newWorkflows: Workflow[] = [];
    for (const flow of flowList) {
      const newFlowName =
        flow.name && isOverwriteExistingFile
          ? flow.name
          : await this.generateUniqueName(flow.name, parentFolderID);
      const uuid = uuidv4();
      const time = Date.now();
      const newWorkflow: Workflow = {
        id: uuid,
        name: newFlowName,
        json: flow.json,
        parentFolderID: parentFolderID,
        updateTime: time,
        createTime: time,
        tags: [],
      };
      newWorkflows.push(newWorkflow);
      await saveJsonFileMyWorkflows(newWorkflow);
    }
    await indexdb.workflows.bulkAdd(newWorkflows);
    this.saveDiskDB();
  }

  public async deleteFlow(id: string) {
    const workflow = await this.get(id);
    if (workflow) {
      deleteJsonFileMyWorkflows({ ...workflow });
    }
    //add to IndexDB
    await indexdb.workflows.delete(id);
    this.saveDiskDB();
  }

  public async batchDeleteFlow(ids: string[]) {
    const workflowList = (await indexdb.workflows.bulkGet(ids)) as Workflow[];
    for (const flow of workflowList) {
      flow && (await deleteJsonFileMyWorkflows(flow));
    }
    await indexdb.workflows.bulkDelete(ids);
    this.saveDiskDB();
  }

  public async listFolderContent(
    folderID?: string, // undefined if root folder
    sortBy?: ESortTypes,
  ): Promise<(Workflow | Folder)[]> {
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    if (twoWaySyncEnabled) {
      return await scanMyWorkflowsDir(folderID);
    }
    const workflows =
      (await this.listAll().then((list) =>
        list.filter((w) => w.parentFolderID == folderID),
      )) ?? [];
    const folders =
      (await foldersTable
        ?.listAll()
        .then((list) => list.filter((f) => f.parentFolderID == folderID))) ??
      [];

    const all = [...workflows, ...folders];

    return sortFileItem(all, sortBy ?? ESortTypes.RECENTLY_MODIFIED);
  }
}
