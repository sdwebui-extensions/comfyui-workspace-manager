import asyncio
import tempfile
import server
import os
from aiohttp import web
import json
import uuid

async def read_workflow_file(path, id):
    if not os.path.exists(path):
        return {"error": f"No file found in {path}"}
    
    try:
        with open(path, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
            if 'extra' in json_data and 'workspace_info' in json_data['extra'] and 'id' in json_data['extra']['workspace_info']:
                workflow_id = json_data['extra']['workspace_info']['id']
                if workflow_id == id:
                    return {"json": json.dumps(json_data)}
    except json.JSONDecodeError:
        return {"error": "Invalid JSON format in file"}
    except Exception as e:
        return {"error": str(e)}
    
    return {"error": "Workflow ID doesn't match"}

@server.PromptServer.instance.routes.post('/workspace/get_workflow_file')
async def get_workflow_file(request):
    reqJson = await request.json()
    path = reqJson.get('path')
    id = reqJson.get('id')
    print("Get workflow file:", path, id)
    
    data = await asyncio.to_thread(read_workflow_file, path, id)
    if "json" in data:
        return web.Response(text=data["json"], content_type='application/json')
    else:
        return web.Response(text=json.dumps(data), status=404, content_type='application/json')

# For two way sync
# Scan .json and folders, extract extra.workspace_info.id in the .json files 
@server.PromptServer.instance.routes.post("/workspace/scan_my_workflows_files")
async def scan_local_new_files(request):
    reqJson = await request.json()
    path = reqJson['path']
    print("Scanning path: ", path)
    
    fileList = await asyncio.to_thread(folder_handle, path)
    return web.Response(text=json.dumps(fileList), content_type='application/json')

def folder_handle(path):
    fileList = []
    for item in os.listdir(path):
        item_path = os.path.join(path, item)
        if os.path.isfile(item_path) and item_path.endswith('.json'):
            with open(item_path, 'r', encoding='utf-8') as f:
                file_handle(item, f, fileList, item_path)

        elif os.path.isdir(item_path):
            fileList.append({
                'name': item,
                'type': 'folder',
            })
    return fileList

def file_handle(name, file, fileList, file_path):
    json_data = json.load(file)
    if 'extra' in json_data and 'workspace_info' in json_data['extra'] and 'id' in json_data['extra']['workspace_info']:
        workflow_id = json_data['extra']['workspace_info']['id']
    else:
        # If ID does not exist, generate a new UUID and add it to the JSON data
        new_id = str(uuid.uuid4())
        json_data.setdefault('extra', {}).setdefault('workspace_info', {})['id'] = new_id
        atomic_json_update(file_path, json_data)
    fileInfo = {
            'json': json.dumps(json_data),
            'name': name,
            'type': "workflow",
            'id': json_data['extra']['workspace_info']['id']
        }
    fileList.append(fileInfo) 

def atomic_json_update(filepath, data):
    # Generate a temporary file
    dir_name, file_name = os.path.split(filepath)
    with tempfile.NamedTemporaryFile(mode='w', encoding='utf-8', dir=dir_name, delete=False) as tmp_file:
        json.dump(data, tmp_file, indent=4)
        temp_name = tmp_file.name
    # Replace the old file with the new file atomically
    os.replace(temp_name, filepath)