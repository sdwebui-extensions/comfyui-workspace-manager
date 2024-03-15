import{r}from"./input.js";import{app as n}from"/scripts/app.js";import{a6 as g,j as m,ar as b,o as S,E as v,A as l}from"./App-uSvPF0mX.js";import"/scripts/api.js";function y(c,f){const o=r.useRef(0),s=r.useCallback(()=>{o.current!==null&&(clearTimeout(o.current),o.current=0)},[]),d=r.useCallback((...p)=>{s(),o.current=setTimeout(()=>c(...p),f)},[c,f,s]);return r.useEffect(()=>()=>{s()},[]),[d,s]}function _(){const{setIsDirty:c,setRoute:f,saveCurWorkflow:o}=r.useContext(g),s=m();r.useEffect(()=>{const a=async t=>{switch(t){case v.SAVE:o();break;case v.SAVE_AS:f("saveAsModal");break}},e=n.graph.onAfterChange;n.graph.onAfterChange=function(){e==null||e.apply(n.canvas,arguments),w()},document.addEventListener("click",t=>{(n.canvas.node_over!=null||n.canvas.node_capturing_input!=null||n.canvas.node_widget!=null)&&w()}),document.addEventListener("keydown",async function(t){var i;if(document.visibilityState==="hidden")return;const u=await b(t);u?a(u):(i=t.target)!=null&&i.matches("input, textarea")&&w()})},[]);const d=async()=>{var e;const a=JSON.stringify(n.graph.serialize());a!=null&&await((e=l)==null?void 0:e.updateFlow(l.curWorkflow.id,{json:a})),c(!1)},[p,E]=y(d,2e3),w=async()=>{var e,t,u,i,h,k;if((t=(e=l)==null?void 0:e.curWorkflow)!=null&&t.saveLock)return;const a=await((u=S)==null?void 0:u.getSetting("autoSave"));if(!a){c(!0);return}(h=(i=l)==null?void 0:i.curWorkflow)!=null&&h.id&&a&&(await((k=l)==null?void 0:k.latestVersionCheck())?p():s({title:"Your changes cannot be saved!",description:"You are working on an outdated version. This workflow is changed by another tab. Please refresh to get the latest version.",status:"warning",isClosable:!0,duration:null}))};return null}export{_ as default};
