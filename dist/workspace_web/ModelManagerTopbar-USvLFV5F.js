import{f as T,r as h,j as e,g as I,h as V,a3 as O,b as ye,o as ee,i as te,k as we,ab as ve,B as S,a8 as $,ac as Se,L as se,ad as _e,O as ne,Q as oe,S as be,X as Ce,M as Me,N as Ie,R as ke,P as Te,_ as Ee}from"./input.js";import{ad as Ae,ac as Le,W as Pe,ae as L,l as R,F as E,T as b,B as ae,a5 as re,j as W,o as Q,w as De,H as A,k as F,af as Ne,m as le,ag as ie,X as Re,Y as Be,Z as ze,_ as Oe,$ as We,ab as ce,ah as Fe,a6 as Ge,ai as Ke,aj as Ue,ak as He}from"./App-OS6BLwC7.js";import{I as de,G as Ve,C as $e}from"./chunk-JARCRF6W-PrvQlAIl.js";import{app as N}from"/scripts/app.js";import{api as z}from"/scripts/api.js";var ue=T(function(s,r){const{spacing:o="0.5rem",spacingX:a,spacingY:n,children:i,justify:c,direction:l,align:d,className:m,shouldWrapChildren:g,...u}=s,f=h.useMemo(()=>g?h.Children.map(i,(y,v)=>e.jsx(Y,{children:y},v)):i,[i,g]);return e.jsx(I.div,{ref:r,className:V("chakra-wrap",m),...u,children:e.jsx(I.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:d,flexDirection:l,listStyleType:"none",gap:o,columnGap:a,rowGap:n,padding:"0"},children:f})})});ue.displayName="Wrap";var Y=T(function(s,r){const{className:o,...a}=s;return e.jsx(I.li,{ref:r,__css:{display:"flex",alignItems:"flex-start"},className:V("chakra-wrap__listitem",o),...a})});Y.displayName="WrapItem";function X(t){return Le(t,s=>s==="auto"?"auto":`span ${s}/span ${s}`)}var he=T(function(s,r){const{area:o,colSpan:a,colStart:n,colEnd:i,rowEnd:c,rowSpan:l,rowStart:d,...m}=s,g=Ae({gridArea:o,gridColumn:X(a),gridRow:X(l),gridColumnStart:n,gridColumnEnd:i,gridRowStart:d,gridRowEnd:c});return e.jsx(I.div,{ref:r,__css:g,...m})});he.displayName="GridItem";function Ye(t,s,r){return(t-s)*100/(r-s)}O({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}});O({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});var qe=O({"0%":{left:"-40%"},"100%":{left:"100%"}}),Qe=O({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function Xe(t){const{value:s=0,min:r,max:o,valueText:a,getValueText:n,isIndeterminate:i,role:c="progressbar"}=t,l=Ye(s,r,o);return{bind:{"data-indeterminate":i?"":void 0,"aria-valuemax":o,"aria-valuemin":r,"aria-valuenow":i?void 0:s,"aria-valuetext":(()=>{if(s!=null)return typeof n=="function"?n(s,l):a})(),role:c},percent:l,value:s}}var[Je,Ze]=ye({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),et=T((t,s)=>{const{min:r,max:o,value:a,isIndeterminate:n,role:i,...c}=t,l=Xe({value:a,min:r,max:o,isIndeterminate:n,role:i}),m={height:"100%",...Ze().filledTrack};return e.jsx(I.div,{ref:s,style:{width:`${l.percent}%`,...c.style},...l.bind,...c,__css:m})}),me=T((t,s)=>{var r;const{value:o,min:a=0,max:n=100,hasStripe:i,isAnimated:c,children:l,borderRadius:d,isIndeterminate:m,"aria-label":g,"aria-labelledby":u,"aria-valuetext":f,title:y,role:v,...p}=ee(t),x=te("Progress",t),_=d??((r=x.track)==null?void 0:r.borderRadius),j={animation:`${Qe} 1s linear infinite`},K={...!m&&i&&c&&j,...m&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${qe} 1s ease infinite normal none running`}},w={overflow:"hidden",position:"relative",...x.track};return e.jsx(I.div,{ref:s,borderRadius:_,__css:w,...p,children:e.jsxs(Je,{value:x,children:[e.jsx(et,{"aria-label":g,"aria-labelledby":u,"aria-valuetext":f,min:a,max:n,value:o,isIndeterminate:m,css:K,borderRadius:_,title:y,role:v}),l]})})});me.displayName="Progress";var pe=T(function(s,r){const{children:o,placeholder:a,className:n,...i}=s;return e.jsxs(I.select,{...i,ref:r,className:V("chakra-select",n),children:[a&&e.jsx("option",{value:"",children:a}),o]})});pe.displayName="SelectField";function tt(t,s){const r={},o={};for(const[a,n]of Object.entries(t))s.includes(a)?r[a]=n:o[a]=n;return[r,o]}var q=T((t,s)=>{var r;const o=te("Select",t),{rootProps:a,placeholder:n,icon:i,color:c,height:l,h:d,minH:m,minHeight:g,iconColor:u,iconSize:f,...y}=ee(t),[v,p]=tt(y,ve),x=Pe(p),_={width:"100%",height:"fit-content",position:"relative",color:c},j={paddingEnd:"2rem",...o.field,_focus:{zIndex:"unset",...(r=o.field)==null?void 0:r._focus}};return e.jsxs(I.div,{className:"chakra-select__wrapper",__css:_,...v,...a,children:[e.jsx(pe,{ref:s,height:d??l,minH:m??g,placeholder:n,...x,__css:j,children:t.children}),e.jsx(fe,{"data-disabled":we(x.disabled),...(u||c)&&{color:u||c},__css:o.icon,...f&&{fontSize:f},children:i})]})});q.displayName="Select";var st=t=>e.jsx("svg",{viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),nt=I("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),fe=t=>{const{children:s=e.jsx(st,{}),...r}=t,o=h.cloneElement(s,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return e.jsx(nt,{...r,className:"chakra-select__icon-wrapper",children:h.isValidElement(s)?o:null})};fe.displayName="SelectIcon";function ot({selectedModel:t,setSelectedModel:s,modelTypeList:r}){const o=a=>{s(a)};return e.jsx(ue,{children:r.map(a=>e.jsx(Y,{children:e.jsx(S,{colorScheme:"blue",variant:t===a?"solid":"outline",onClick:()=>o(a),size:"sm",children:a})},a))})}const at={checkpoints:"CheckpointLoaderSimple",vae:"VAELoader",loras:"LoraLoader",controlnet:"ControlNetLoader",upscale_models:"UpscaleModelLoader"};function rt({data:t}){const[s,r]=h.useState("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg"),[o,a]=h.useState(!t.file_hash),[n,i]=h.useState();h.useEffect(()=>{a(!t.file_hash),c()},[t.file_hash]);const c=async()=>{var m,g,u,f;const d=await L.models.get(t.model_name+"@"+t.model_type);if(d!=null)i(d),(m=d.imageUrl)!=null&&m.length&&r(d.imageUrl);else if(t.file_hash!=null)try{const y=`https://civitai.com/api/v1/model-versions/by-hash/${t.file_hash}`,p=await(await fetch(y)).json();let x;if(await((g=R)==null?void 0:g.getSetting("showNsfwModelThumbnail"))===!0)x=(f=(u=p==null?void 0:p.images)==null?void 0:u[0])==null?void 0:f.url;else if(!p.model.nsfw){const j=p.images.find(P=>P.nsfw==="None");x=j==null?void 0:j.url}x&&r(x),L.models.add({id:t.model_name+"@"+t.model_type,fileHash:t.file_hash,fileFolder:t.model_type,fileName:t.model_name,civitModelID:String(p.modelId),civitModelVersionID:String(p.id),imageUrl:x??null})}catch{}},l=d=>{const m=at[t.model_type];m&&(d.dataTransfer.setData("eventName","WorkspaceManagerAddNode"),d.dataTransfer.setData("modelRelativePath",t.model_name+t.model_extension),d.dataTransfer.setData("nodeType",m))};return o?e.jsxs(E,{position:"relative",borderRadius:4,bg:"rgba(0, 0, 0, 0.5)",height:178,justifyContent:"center",alignItems:"center",children:[o&&e.jsx($,{}),e.jsx(b,{position:"absolute",bottom:"0",left:"0",right:"0",bg:"rgba(0, 0, 0, 0.5)",color:"white",textAlign:"center",p:"0",fontSize:12,borderBottomRightRadius:4,borderBottomLeftRadius:4,children:t.model_name})]}):e.jsxs(ae,{position:"relative",borderRadius:4,draggable:!0,onDragStart:l,children:[e.jsx(de,{src:s,draggable:!1,boxSize:"100%",height:178,objectFit:"cover",borderRadius:4,cursor:(n==null?void 0:n.civitModelID)!=null?"pointer":"auto",onClick:()=>{(n==null?void 0:n.civitModelID)==null||(n==null?void 0:n.civitModelVersionID)==null||window.open(`https://civitai.com/models/${n==null?void 0:n.civitModelID}?modelVersionId=${n==null?void 0:n.civitModelVersionID}`)}}),e.jsx(b,{position:"absolute",bottom:"0",left:"0",right:"0",bg:"rgba(0, 0, 0, 0.5)",color:"white",textAlign:"center",p:"0",fontSize:14,borderBottomRightRadius:4,borderBottomLeftRadius:4,children:t.model_name})]})}function lt({list:t}){return e.jsx(Ve,{templateColumns:"repeat(3, 1fr)",gap:1,marginTop:2,children:t.map(s=>e.jsx(he,{children:e.jsx(rt,{data:s})},s.model_name))})}const it=async t=>{window.dispatchEvent(new CustomEvent("model_install_message",{detail:`Installing model ${t.filename} to ${t.save_path}, check progress in the server console.`}));try{const r=await(await z.fetchApi("/model_manager/install_model",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).text();window.dispatchEvent(new CustomEvent("model_install_message",{detail:r}))}catch(s){console.error("Failed to connect to the server:",s)}};function J(t,s=1){const a=t/1024;return a>=1024?(a/1024).toFixed(s)+" GB":a.toFixed(s)+" MB"}const Z=280;function ct({model:t,onClickInstallModel:s,installing:r}){var g,u,f,y,v;const o=(y=(f=(u=(g=t.modelVersions)==null?void 0:g.at(0))==null?void 0:u.images)==null?void 0:f.at(0))==null?void 0:y.url,a=t.modelVersions,n=a==null?void 0:a.map(p=>{var x;return(x=p==null?void 0:p.files)==null?void 0:x.at(0)}),[i,c]=h.useState(((v=n==null?void 0:n.at(0))==null?void 0:v.name)??""),l=n==null?void 0:n.find(p=>(p==null?void 0:p.name)===i),d=()=>{window.open(`https://civitai.com/models/${t.id}`)},m=h.useCallback(()=>{if(l==null){console.error("no file is find by name",i);return}s(l,t)},[i]);return e.jsxs(re,{width:Z,justifyContent:"space-between",mb:2,gap:1,children:[e.jsx(de,{borderRadius:3,boxSize:Z+"px",objectFit:"cover",src:o,alt:"model cover image",cursor:"pointer",onClick:()=>d()}),e.jsxs(W,{p:1,children:[e.jsx(Q,{label:t.name,children:e.jsx(b,{fontWeight:500,noOfLines:1,children:t.name})}),e.jsxs(E,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(S,{borderRadius:14,noOfLines:1,size:"xs",colorScheme:"teal",maxWidth:"40%",flexShrink:1,variant:"outline",px:1,cursor:"text",children:e.jsx(b,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:t.type})}),e.jsx(S,{leftIcon:e.jsx(De,{size:18}),iconSpacing:1,borderRadius:10,size:"sm",py:1,colorScheme:"teal",type:"submit",onClick:()=>m(),isDisabled:!!(i&&r.includes(i)),children:"Install"})]}),e.jsxs(A,{children:[e.jsx(q,{size:"md",style:{paddingLeft:4},onChange:p=>{c(p.target.value)},children:n==null?void 0:n.map(p=>{const x=p==null?void 0:p.name;return x?e.jsx("option",{value:x,style:{padding:0},children:x},p.id):null})}),(l==null?void 0:l.sizeKB)&&e.jsx(Q,{label:J(l.sizeKB),children:e.jsx(b,{flexShrink:1,noOfLines:1,width:"40%",children:J(l.sizeKB)})})]})]})]})}function dt({searchQuery:t,setSearchQuery:s,onSearch:r}){return e.jsxs(E,{gap:1,alignItems:"center",grow:1,children:[e.jsx(F,{placeholder:"Search models in CivitAI",width:"60%",value:t,onChange:o=>s(o.target.value),onKeyUp:o=>{o.code==="Enter"&&r()}}),e.jsx(S,{size:"sm",onClick:()=>r(),colorScheme:"teal",children:"Search"})]})}function ut({isOpen:t,file:s,onClose:r,selectFolder:o}){const[a,n]=h.useState(""),[i,c]=h.useState([]),[l,d]=h.useState(""),m=h.useRef(null);h.useEffect(()=>{g()},[]);const g=async()=>{const u=await Ne();u&&c(u.filter(f=>!["custom_nodes","config","saved_prompts"].includes(f)))};return e.jsx(Se,{isOpen:t,leastDestructiveRef:m,onClose:r,children:e.jsx(se,{children:e.jsxs(_e,{children:[e.jsx(ne,{fontSize:"lg",fontWeight:"bold",children:"Choose Folder"}),e.jsx(oe,{children:e.jsxs(W,{spacing:4,children:[(s==null?void 0:s.downloadUrl)||e.jsxs(e.Fragment,{children:[e.jsx(b,{children:"Model download url"}),e.jsx(F,{placeholder:"https://civitai.com/api/download/models/311399",onChange:u=>d(u.target.value),value:l})]}),e.jsx(b,{children:"Choose model install folder"}),e.jsx(q,{placeholder:"Select option",value:a,onChange:u=>n(u.target.value),children:i.map(u=>e.jsx("option",{value:u,children:u},u))})]})}),e.jsxs(be,{children:[e.jsx(S,{ref:m,onClick:r,children:"Cancel"}),e.jsx(S,{onClick:()=>o(a,l),ml:3,isDisabled:l.length===0,children:"Confirm"})]})]})})})}function ht(){const{colorMode:t}=Ce(),s=le(),[r,o]=h.useState([]);return h.useEffect(()=>{z.addEventListener("download_progress",a=>{o(a.detail)}),z.addEventListener("download_error",a=>{s({title:"Download Error",description:a.detail,status:"error",duration:4e3,isClosable:!0})})},[]),e.jsx(W,{spacing:5,pos:"absolute",bottom:"0",left:"0",width:"50%",zIndex:80,backgroundColor:t==="light"?"white":"#242424",paddingX:5,children:r.map(({save_path:a,progress:n})=>e.jsxs(A,{children:[e.jsx(b,{fontSize:16,width:"40%",children:a.replace(/^.*[\\/]/,"")}),e.jsx(me,{isIndeterminate:!n,hasStripe:!0,width:"50%",value:n}),e.jsxs(b,{fontSize:16,width:"10%",children:[n.toFixed(1),"%"]})]},a))})}const ge="WORKSPACE_CIVIT_API_KEY_STORAGE_KEY";function mt(){return localStorage.getItem(ge)}function pt(t){localStorage.setItem(ge,t)}function ft(){const[t,s]=h.useState(""),{onOpen:r,onClose:o,isOpen:a}=ie(),n=()=>{pt(t),o()};return e.jsxs(Re,{isOpen:a,onOpen:r,onClose:o,placement:"right",closeOnBlur:!1,children:[e.jsx(Be,{children:e.jsx(S,{size:"sm",py:1,mr:8,children:"Set Civitai API Key"})}),e.jsxs(ze,{p:5,children:[e.jsx(Oe,{}),e.jsx(We,{}),e.jsxs(W,{spacing:4,children:[e.jsx(b,{fontSize:14,children:"Some Civitai.com models require user login to download, you will nedd a Civitai API key to download in that case"}),e.jsx(F,{value:t,onChange:i=>s(i.target.value),placeholder:"API Key"}),e.jsx(S,{size:"sm",py:1,mr:8,onClick:n,children:"Save"})]})]})]})}const gt=t=>typeof t=="function",xe=t=>{const[s,r]=h.useState(t),o=h.useRef(s),a=h.useCallback(n=>{o.current=gt(n)?n(o.current):n,r(o.current)},[]);return[s,a,o]},xt=["Checkpoint","TextualInversion","Hypernetwork","LORA","Controlnet","Upscaler","VAE"],jt=2,yt={Checkpoint:"checkpoints",TextualInversion:"embeddings",Hypernetwork:"hypernetworks",LORA:"loras",Controlnet:"controlnet",Upscaler:"upscale_models",VAE:"vae"};function wt({onclose:t,searchQuery:s="",modelType:r}){const[o,a]=h.useState([]),[n,i]=h.useState(!1),[c,l]=h.useState(r),d=le(),[m,g]=h.useState([]),[u,f]=h.useState(s),{isOpen:y,onOpen:v,onClose:p}=ie(),[x,_,j]=xe(),P=h.useCallback(async()=>{var D;i(!0);const w={limit:"30",nsfw:"false"};u!==""&&(w.query=u),c!=null&&(w.types=c);const C=`https://civitai.com/api/v1/models?${new URLSearchParams(w).toString()}`,M=await((D=L.cache)==null?void 0:D.get(C));if((M==null?void 0:M.value)!=null)try{const{data:H,timestamp:je}=JSON.parse(M==null?void 0:M.value);if((Date.now()-je)/(1e3*60*60*24)<jt){a(H),i(!1);return}}catch(H){console.error("err fetching cache",H)}const B=await(await fetch(C)).json();a(B.items),u===""&&L.cache.put({id:C,value:JSON.stringify({data:B.items,timestamp:Date.now()})}),i(!1)},[u,c]),G=w=>{var M,U;if(!((M=j.current)!=null&&M.downloadUrl)){console.error("file.downloadUrl is null");return}if(!j.current.name&&(j.current.name=j.current.downloadUrl.split("/").pop(),!j.current.name)){console.error("file.downloadUrl is malformed");return}d({title:"Installing...",description:j.current.name,status:"info",duration:4e3,isClosable:!0}),j.current.name!=null&&g(B=>{var D;return[...B,((D=j.current)==null?void 0:D.name)??""]});let k=j.current.downloadUrl;const C=mt();C&&(k+=`?token=${C}`),it({filename:j.current.name,name:j.current.name,file_hash:(U=j.current.hashes)==null?void 0:U.SHA256,save_path:w,url:k}),_(void 0),p()},K=(w,k)=>{const C=yt[k.type];_(w),C==null?v():G(C)};return h.useEffect(()=>{P()},[c]),e.jsxs(e.Fragment,{children:[e.jsxs(Me,{isOpen:!0,onClose:t,blockScrollOnMount:!0,children:[e.jsx(se,{}),e.jsxs(Ie,{width:"90%",maxWidth:"90vw",height:"90vh",children:[e.jsxs(ne,{children:[e.jsxs(A,{gap:2,mb:2,alignItems:"center",children:[e.jsx(ce,{size:"md",mr:2,children:"Models"}),e.jsx(dt,{searchQuery:u,setSearchQuery:f,onSearch:P}),e.jsx(S,{size:"sm",py:1,mr:8,onClick:v,children:"Custom URL Install"}),e.jsx(ft,{})]}),e.jsxs(A,{gap:2,mb:2,wrap:"wrap",children:[e.jsx(S,{size:"sm",py:1,onClick:()=>{l(void 0)},isActive:c==null,children:"All"}),xt.map(w=>e.jsx(S,{size:"sm",py:1,isActive:c===w,onClick:()=>{l(w)},children:w},w))]}),n&&e.jsx($,{thickness:"4px",emptyColor:"gray.200",color:"pink.500",size:"lg"})]}),e.jsx(ke,{}),e.jsxs(oe,{overflowY:"auto",children:[e.jsx(A,{wrap:"wrap",children:o==null?void 0:o.map(w=>e.jsx(ct,{model:w,onClickInstallModel:K,installing:m},w.id))}),e.jsx(ht,{})]})]})]}),e.jsx(ut,{file:x,isOpen:y,onClose:p,selectFolder:(w,k)=>{j.current||_({id:0,downloadUrl:k}),G(w)}})]})}function vt(){const[t,s]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(S,{size:"sm",colorScheme:"teal",onClick:()=>s(!0),children:"Install Models"}),t&&e.jsx(wt,{modelType:"Checkpoint",onclose:()=>s(!1)})]})}const St=()=>{const[t,s]=h.useState(["checkpoints"]),[r,o]=h.useState([]),[a,n]=h.useState(!0);h.useEffect(()=>{i(),z.addEventListener("model_list",l=>{c(l.detail)})},[]);const i=async()=>{const l=await Fe();c(l)},c=async l=>{if(!l)return;n(!1);const d=Array.from(new Set(l.map(g=>g.model_type))),m=d.indexOf("checkpoints");m>=0&&d.splice(m,1),d.unshift("checkpoints"),s(d),o(l)};return{modelTypeList:t,modelsList:r,loading:a}};function _t(){const[t,s,r]=xe(!1),o=()=>{var c;(c=R)==null||c.getSetting("showNsfwModelThumbnail").then(l=>{s(l??!1)})};h.useEffect(()=>{o()},[]);const a=c=>{var d;const l=c.target.checked;(d=R)==null||d.upsert({showNsfwModelThumbnail:l}).then(()=>{o(),n(),window.dispatchEvent(new Event("showNsfwModelThumbnail"))})},n=async()=>{const c=await L.models.toArray();for(let l=0;l<c.length;l+=5){const d=c.slice(l,l+5);await Promise.all(d.map(i))}},i=async c=>{var l,d;try{const m=`https://civitai.com/api/v1/model-versions/by-hash/${c.fileHash}`,u=await(await fetch(m)).json();let f;if(r.current)f=(d=(l=u==null?void 0:u.images)==null?void 0:l[0])==null?void 0:d.url;else if(!u.model.nsfw){const y=u.images.find(v=>v.nsfw==="None");f=y==null?void 0:y.url}L.models.update(c.id,{imageUrl:f??null})}catch{}};return e.jsx($e,{isChecked:t,onChange:a,width:"100px",children:"Show NSFW"})}function bt({onClose:t}){const[s,r]=h.useState("checkpoints"),[o,a]=h.useState(""),{loading:n,modelTypeList:i,modelsList:c}=St(),[l,d]=h.useState([]);h.useEffect(()=>{const u=c.filter(f=>o.length?f.model_name.toLowerCase().includes(o.toLowerCase()):f.model_type===s);d(u)},[s,c,o]),h.useEffect(()=>(N.canvasEl.addEventListener("click",t),()=>{N.canvasEl.removeEventListener("click",t)}),[]);const m=440,g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{gap:4,justifyContent:"center",alignItems:"center",mb:2,children:[e.jsx(F,{size:"sm",placeholder:"Search",value:o,onChange:u=>a(u.target.value)}),e.jsx(_t,{})]}),e.jsx(ot,{modelTypeList:i,setSelectedModel:r,selectedModel:s}),e.jsx(lt,{list:l}),n&&e.jsx(E,{justifyContent:"center",alignItems:"center",height:"100%",children:e.jsx($,{})})]});return e.jsx(Te,{children:e.jsx(ae,{style:{width:m},children:e.jsxs(re,{width:m,height:"100vh",p:4,gap:2,position:"fixed",top:0,left:0,shadow:"xl",zIndex:Ge,overflowY:"auto",children:[e.jsx(Ke,{children:e.jsxs(E,{justifyContent:"space-between",alignContent:"center",children:[e.jsx(ce,{size:"md",mr:2,children:"Models"}),e.jsx(vt,{})]})}),g()]})})})}const Ct=h.lazy(()=>Ee(()=>import("./InstallMissingModelsButton-hM2mhIGv.js"),__vite__mapDeps([0,1,2,3,4,5])));function Mt(){const[t,s]=h.useState(!1),[r,o]=h.useState(),a=async i=>{if(i.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const l=i.dataTransfer.getData("modelRelativePath"),d=i.dataTransfer.getData("nodeType"),m=LiteGraph.createNode(d);m.pos=[i.canvasX,i.canvasY],m.configure({widgets_values:[l]}),N.graph.add(m)};h.useEffect(()=>{var i;return(i=R)==null||i.getSetting("modelManagerTopBarStyle").then(c=>{n(c,!1)}),N.canvasEl.addEventListener("drop",a),()=>{N.canvasEl.removeEventListener("drop",a)}},[]);const n=(i,c=!1)=>{var _;const{top:l=0,right:d=0}=r||{},{top:m=0,right:g=0}=i??{};let u=l+m,f=r===void 0?g:d-g;const y=document.documentElement.clientWidth,v=document.documentElement.clientHeight,p=document.getElementById("modelManagerTopBar"),x=(p==null?void 0:p.offsetWidth)||224;u+32>v&&(u=v-38),f+x>y&&(f=y-x-4),o({top:Math.max(4,u),right:Math.max(4,f)}),c&&((_=R)==null||_.upsert({modelManagerTopBarStyle:{top:u,right:f}}))};return e.jsx(Ue,{onDragEnd:i=>{n({top:i.y,right:i.x},!0)},dragIconId:"dragModelManagerTopBarIcon",children:r?e.jsxs(A,{style:{position:"fixed",...r},gap:2,draggable:!1,id:"modelManagerTopBar",className:"model-manager-top-bar",children:[e.jsx(He,{id:"dragModelManagerTopBarIcon",className:"drag-model-manager-top-bar-icon",cursor:"move",size:15,color:"#FFF"}),e.jsx(Ct,{}),e.jsx(S,{size:"sm",colorScheme:"blue","aria-label":"My models",onClick:()=>s(!0),px:1,children:"Models"}),t&&e.jsx(bt,{onClose:()=>s(!1)})]}):""})}const Pt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"}));export{he as G,vt as I,Pt as M};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["workspace_web/InstallMissingModelsButton-hM2mhIGv.js","workspace_web/input.js","workspace_web/App-OS6BLwC7.js","workspace_web/assets/App-JXePnJiV.css","workspace_web/chunk-NTCQBYKE-LgT_gA-8.js","workspace_web/chunk-JARCRF6W-PrvQlAIl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}