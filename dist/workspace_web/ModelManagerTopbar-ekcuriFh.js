import{f as q,r as m,j as n,g as U,h as Se,a6 as X,b as Ue,o as $e,l as He,i as T,U as re,P as Ve,ac as qe,N as be,ad as Ye,Q as Ce,S as ke,T as Qe,a0 as Je,M as Xe,O as Ze,R as et,_ as tt}from"./input.js";import{av as st,m as nt,aw as G,ax as ae,B as oe,F as R,am as Le,l as N,n as ie,a8 as Ie,ay as ot,p as H,af as Ee,ag as it,ao as Te,o as Z,H as W,az as Ae,aA as pe,k as Y,A as rt,aB as Ne,j as De,aC as at,aD as Fe,a2 as lt,a3 as ct,a4 as dt,a5 as ht,a6 as ut,aE as ft,aF as mt,aG as te,aH as pt,aI as gt,aJ as xt}from"./App-unMuTva5.js";import{G as yt,C as vt}from"./chunk-JARCRF6W-KBqbesG1.js";import{app as z}from"/scripts/app.js";import{api as V}from"/scripts/api.js";import{S as ee}from"./chunk-3RSXBRAN-BNF8Z6oA.js";var Pe=q(function(e,s){const{spacing:o="0.5rem",spacingX:i,spacingY:r,children:a,justify:l,direction:c,align:h,className:d,shouldWrapChildren:f,...u}=e,g=m.useMemo(()=>f?m.Children.map(a,(p,x)=>n.jsx(le,{children:p},x)):a,[a,f]);return n.jsx(U.div,{ref:s,className:Se("chakra-wrap",d),...u,children:n.jsx(U.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:l,alignItems:h,flexDirection:c,listStyleType:"none",gap:o,columnGap:i,rowGap:r,padding:"0"},children:g})})});Pe.displayName="Wrap";var le=q(function(e,s){const{className:o,...i}=e;return n.jsx(U.li,{ref:s,__css:{display:"flex",alignItems:"flex-start"},className:Se("chakra-wrap__listitem",o),...i})});le.displayName="WrapItem";function ge(t){return nt(t,e=>e==="auto"?"auto":`span ${e}/span ${e}`)}var Oe=q(function(e,s){const{area:o,colSpan:i,colStart:r,colEnd:a,rowEnd:l,rowSpan:c,rowStart:h,...d}=e,f=st({gridArea:o,gridColumn:ge(i),gridRow:ge(c),gridColumnStart:r,gridColumnEnd:a,gridRowStart:h,gridRowEnd:l});return n.jsx(U.div,{ref:s,__css:f,...d})});Oe.displayName="GridItem";function Mt(t,e,s){return(t-e)*100/(s-e)}X({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}});X({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});var jt=X({"0%":{left:"-40%"},"100%":{left:"100%"}}),wt=X({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function _t(t){const{value:e=0,min:s,max:o,valueText:i,getValueText:r,isIndeterminate:a,role:l="progressbar"}=t,c=Mt(e,s,o);return{bind:{"data-indeterminate":a?"":void 0,"aria-valuemax":o,"aria-valuemin":s,"aria-valuenow":a?void 0:e,"aria-valuetext":(()=>{if(e!=null)return typeof r=="function"?r(e,c):i})(),role:l},percent:c,value:e}}var[St,bt]=Ue({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),Ct=q((t,e)=>{const{min:s,max:o,value:i,isIndeterminate:r,role:a,...l}=t,c=_t({value:i,min:s,max:o,isIndeterminate:r,role:a}),d={height:"100%",...bt().filledTrack};return n.jsx(U.div,{ref:e,style:{width:`${c.percent}%`,...l.style},...c.bind,...l,__css:d})}),ze=q((t,e)=>{var s;const{value:o,min:i=0,max:r=100,hasStripe:a,isAnimated:l,children:c,borderRadius:h,isIndeterminate:d,"aria-label":f,"aria-labelledby":u,"aria-valuetext":g,title:p,role:x,...j}=$e(t),w=He("Progress",t),C=h??((s=w.track)==null?void 0:s.borderRadius),k={animation:`${wt} 1s linear infinite`},D={...!d&&a&&l&&k,...d&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${jt} 1s ease infinite normal none running`}},b={overflow:"hidden",position:"relative",...w.track};return n.jsx(U.div,{ref:e,borderRadius:C,__css:b,...j,children:n.jsxs(St,{value:w,children:[n.jsx(Ct,{"aria-label":f,"aria-labelledby":u,"aria-valuetext":g,min:i,max:r,value:o,isIndeterminate:d,css:D,borderRadius:C,title:p,role:x}),c]})})});ze.displayName="Progress";function K(t){return Array.isArray?Array.isArray(t):Re(t)==="[object Array]"}const kt=1/0;function Lt(t){return t==null?"":function(e){if(typeof e=="string")return e;let s=e+"";return s=="0"&&1/e==-kt?"-0":s}(t)}function F(t){return typeof t=="string"}function Be(t){return typeof t=="number"}function It(t){return t===!0||t===!1||function(e){return function(s){return typeof s=="object"}(e)&&e!==null}(t)&&Re(t)=="[object Boolean]"}function A(t){return t!=null}function se(t){return!t.trim().length}function Re(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Et=t=>`Missing ${t} property in key`,Tt=t=>`Property 'weight' in key '${t}' must be a positive integer`,xe=Object.prototype.hasOwnProperty;class At{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(o=>{let i=We(o);this._keys.push(i),this._keyMap[i.id]=i,s+=i.weight}),this._keys.forEach(o=>{o.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function We(t){let e=null,s=null,o=null,i=1,r=null;if(F(t)||K(t))o=t,e=ye(t),s=ve(t);else{if(!xe.call(t,"name"))throw new Error(Et("name"));const a=t.name;if(o=a,xe.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Tt(a));e=ye(a),s=ve(a),r=t.getFn}return{path:e,id:s,weight:i,src:o,getFn:r}}function ye(t){return K(t)?t:t.split(".")}function ve(t){return K(t)?t.join("."):t}var M={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(t,e){let s=[],o=!1;const i=(r,a,l)=>{if(A(r))if(a[l]){const c=r[a[l]];if(!A(c))return;if(l===a.length-1&&(F(c)||Be(c)||It(c)))s.push(Lt(c));else if(K(c)){o=!0;for(let h=0,d=c.length;h<d;h+=1)i(c[h],a,l+1)}else a.length&&i(c,a,l+1)}else s.push(r)};return i(t,F(e)?e.split("."):e,0),o?s:s[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const Nt=/[^ ]+/g;class ce{constructor({getFn:e=M.getFn,fieldNormWeight:s=M.fieldNormWeight}={}){this.norm=function(o=1,i=3){const r=new Map,a=Math.pow(10,i);return{get(l){const c=l.match(Nt).length;if(r.has(c))return r.get(c);const h=1/Math.pow(c,.5*o),d=parseFloat(Math.round(h*a)/a);return r.set(c,d),d},clear(){r.clear()}}}(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,F(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();F(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!A(e)||se(e))return;let o={v:e,i:s,n:this.norm.get(e)};this.records.push(o)}_addObject(e,s){let o={i:s,$:{}};this.keys.forEach((i,r)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(A(a)){if(K(a)){let l=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:h,value:d}=c.pop();if(A(d))if(F(d)&&!se(d)){let f={v:d,i:h,n:this.norm.get(d)};l.push(f)}else K(d)&&d.forEach((f,u)=>{c.push({nestedArrIndex:u,value:f})})}o.$[r]=l}else if(F(a)&&!se(a)){let l={v:a,n:this.norm.get(a)};o.$[r]=l}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Ge(t,e,{getFn:s=M.getFn,fieldNormWeight:o=M.fieldNormWeight}={}){const i=new ce({getFn:s,fieldNormWeight:o});return i.setKeys(t.map(We)),i.setSources(e),i.create(),i}function J(t,{errors:e=0,currentLocation:s=0,expectedLocation:o=0,distance:i=M.distance,ignoreLocation:r=M.ignoreLocation}={}){const a=e/t.length;if(r)return a;const l=Math.abs(o-s);return i?a+l/i:l?1:a}const B=32;function Dt(t,e,s,{location:o=M.location,distance:i=M.distance,threshold:r=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,includeMatches:c=M.includeMatches,ignoreLocation:h=M.ignoreLocation}={}){if(e.length>B)throw new Error(`Pattern length exceeds max of ${B}.`);const d=e.length,f=t.length,u=Math.max(0,Math.min(o,f));let g=r,p=u;const x=l>1||c,j=x?Array(f):[];let w;for(;(w=t.indexOf(e,p))>-1;){let b=J(e,{currentLocation:w,expectedLocation:u,distance:i,ignoreLocation:h});if(g=Math.min(b,g),p=w+d,x){let L=0;for(;L<d;)j[w+L]=1,L+=1}}p=-1;let C=[],k=1,P=d+f;const Q=1<<d-1;for(let b=0;b<d;b+=1){let L=0,I=P;for(;L<I;)J(e,{errors:b,currentLocation:u+I,expectedLocation:u,distance:i,ignoreLocation:h})<=g?L=I:P=I,I=Math.floor((P-L)/2+L);P=I;let O=Math.max(1,u-I+1),E=a?f:Math.min(u+I,f)+d,y=Array(E+2);y[E+1]=(1<<b)-1;for(let v=E;v>=O;v-=1){let _=v-1,S=s[t.charAt(_)];if(x&&(j[_]=+!!S),y[v]=(y[v+1]<<1|1)&S,b&&(y[v]|=(C[v+1]|C[v])<<1|1|C[v+1]),y[v]&Q&&(k=J(e,{errors:b,currentLocation:_,expectedLocation:u,distance:i,ignoreLocation:h}),k<=g)){if(g=k,p=_,p<=u)break;O=Math.max(1,2*u-p)}}if(J(e,{errors:b+1,currentLocation:u,expectedLocation:u,distance:i,ignoreLocation:h})>g)break;C=y}const D={isMatch:p>=0,score:Math.max(.001,k)};if(x){const b=function(L=[],I=M.minMatchCharLength){let O=[],E=-1,y=-1,v=0;for(let _=L.length;v<_;v+=1){let S=L[v];S&&E===-1?E=v:S||E===-1||(y=v-1,y-E+1>=I&&O.push([E,y]),E=-1)}return L[v-1]&&v-E>=I&&O.push([E,v-1]),O}(j,l);b.length?c&&(D.indices=b):D.isMatch=!1}return D}function Ft(t){let e={};for(let s=0,o=t.length;s<o;s+=1){const i=t.charAt(s);e[i]=(e[i]||0)|1<<o-s-1}return e}class Pt{constructor(e,{location:s=M.location,threshold:o=M.threshold,distance:i=M.distance,includeMatches:r=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,isCaseSensitive:c=M.isCaseSensitive,ignoreLocation:h=M.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:i,includeMatches:r,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:h},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(u,g)=>{this.chunks.push({pattern:u,alphabet:Ft(u),startIndex:g})},f=this.pattern.length;if(f>B){let u=0;const g=f%B,p=f-g;for(;u<p;)d(this.pattern.substr(u,B),u),u+=B;if(g){const x=f-B;d(this.pattern.substr(x),x)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return o&&(p.indices=[[0,e.length-1]]),p}const{location:i,distance:r,threshold:a,findAllMatches:l,minMatchCharLength:c,ignoreLocation:h}=this.options;let d=[],f=0,u=!1;this.chunks.forEach(({pattern:p,alphabet:x,startIndex:j})=>{const{isMatch:w,score:C,indices:k}=Dt(e,p,x,{location:i+j,distance:r,threshold:a,findAllMatches:l,minMatchCharLength:c,includeMatches:o,ignoreLocation:h});w&&(u=!0),f+=C,w&&k&&(d=[...d,...k])});let g={isMatch:u,score:u?f/this.chunks.length:1};return u&&o&&(g.indices=d),g}}const Me=[];function je(t,e){for(let s=0,o=Me.length;s<o;s+=1){let i=Me[s];if(i.condition(t,e))return new i(t,e)}return new Pt(t,e)}function Ot(t,e){const s=t.matches;e.matches=[],A(s)&&s.forEach(o=>{if(!A(o.indices)||!o.indices.length)return;const{indices:i,value:r}=o;let a={indices:i,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),e.matches.push(a)})}function zt(t,e){e.score=t.score}class ${constructor(e,s={},o){if(this.options={...M,...s},this.options.useExtendedSearch)throw new Error("Extended search is not available");this._keyStore=new At(this.options.keys),this.setCollection(e,o)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ce))throw new Error("Incorrect 'index' type");this._myIndex=s||Ge(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){A(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let o=0,i=this._docs.length;o<i;o+=1){const r=this._docs[o];e(r,o)&&(this.removeAt(o),o-=1,i-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:r,sortFn:a,ignoreFieldNorm:l}=this.options;let c=F(e)?F(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(h,{ignoreFieldNorm:d=M.ignoreFieldNorm}){h.forEach(f=>{let u=1;f.matches.forEach(({key:g,norm:p,score:x})=>{const j=g?g.weight:null;u*=Math.pow(x===0&&j?Number.EPSILON:x,(j||1)*(d?1:p))}),f.score=u})}(c,{ignoreFieldNorm:l}),r&&c.sort(a),Be(s)&&s>-1&&(c=c.slice(0,s)),function(h,d,{includeMatches:f=M.includeMatches,includeScore:u=M.includeScore}={}){const g=[];return f&&g.push(Ot),u&&g.push(zt),h.map(p=>{const{idx:x}=p,j={item:d[x],refIndex:x};return g.length&&g.forEach(w=>{w(p,j)}),j})}(c,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(e){const s=je(e,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:r,i:a,n:l})=>{if(!A(r))return;const{isMatch:c,score:h,indices:d}=s.searchIn(r);c&&i.push({item:r,idx:a,matches:[{score:h,value:r,norm:l,indices:d}]})}),i}_searchLogical(e){throw new Error("Logical search is not available")}_searchObjectList(e){const s=je(e,this.options),{keys:o,records:i}=this._myIndex,r=[];return i.forEach(({$:a,i:l})=>{if(!A(a))return;let c=[];o.forEach((h,d)=>{c.push(...this._findMatches({key:h,value:a[d],searcher:s}))}),c.length&&r.push({idx:l,item:a,matches:c})}),r}_findMatches({key:e,value:s,searcher:o}){if(!A(s))return[];let i=[];if(K(s))s.forEach(({v:r,i:a,n:l})=>{if(!A(r))return;const{isMatch:c,score:h,indices:d}=o.searchIn(r);c&&i.push({score:h,key:e,value:r,idx:a,norm:l,indices:d})});else{const{v:r,n:a}=s,{isMatch:l,score:c,indices:h}=o.searchIn(r);l&&i.push({score:c,key:e,value:r,norm:a,indices:h})}return i}}$.version="7.0.0",$.createIndex=Ge,$.parseIndex=function(t,{getFn:e=M.getFn,fieldNormWeight:s=M.fieldNormWeight}={}){const{keys:o,records:i}=t,r=new ce({getFn:e,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(i),r},$.config=M;function Bt({selectedModel:t,setSelectedModel:e,modelTypeList:s}){const o=i=>{e(i)};return n.jsx(Pe,{children:s.map(i=>n.jsx(le,{children:n.jsx(T,{colorScheme:"blue",variant:t===i?"solid":"outline",onClick:()=>o(i),size:"sm",children:i})},i))})}const Rt={checkpoints:"CheckpointLoaderSimple",vae:"VAELoader",loras:"LoraLoader",controlnet:"ControlNetLoader",upscale_models:"UpscaleModelLoader"};function Wt({data:t}){const[e,s]=m.useState("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg"),[o,i]=m.useState(!t.file_hash),[r,a]=m.useState();m.useEffect(()=>{i(!t.file_hash),l()},[t.file_hash]);const l=async()=>{var d;const h=await G.models.get(t.model_name+"@"+t.model_type);if(h!=null&&(a(h),(d=h.imageUrl)!=null&&d.length&&s(h.imageUrl)),!(h!=null&&h.imageUrl)&&t.file_hash!=null)try{const f=await ae(t.file_hash),u=f.imageUrl;u&&s(u);const g={id:t.model_name+"@"+t.model_type,fileHash:t.file_hash,fileFolder:t.model_type,fileName:t.model_name+t.model_extension,modelName:f.modelName??null,civitModelID:f.civitModelID,civitModelVersionID:f.civitModelVersionID,imageUrl:u??null};a(g)}catch{}t.preview&&s(t.preview)},c=h=>{const d=Rt[t.model_type];d&&(h.dataTransfer.setData("eventName","WorkspaceManagerAddNode"),h.dataTransfer.setData("modelRelativePath",t.model_name+t.model_extension),h.dataTransfer.setData("nodeType",d))};return n.jsxs(oe,{children:[n.jsxs(oe,{position:"relative",borderRadius:4,draggable:!0,onDragStart:c,children:[o?n.jsx(R,{bg:"rgba(0, 0, 0, 0.5)",height:178,justifyContent:"center",alignItems:"center",children:n.jsx(re,{})}):n.jsx(Le,{src:e,draggable:!1,boxSize:"100%",height:150,objectFit:"cover",borderRadius:4,cursor:(r==null?void 0:r.civitModelID)!=null?"pointer":"auto",onClick:()=>{(r==null?void 0:r.civitModelID)==null||(r==null?void 0:r.civitModelVersionID)==null||window.open(`https://civitai.com/models/${r==null?void 0:r.civitModelID}?modelVersionId=${r==null?void 0:r.civitModelVersionID}`)}}),n.jsx(N,{position:"absolute",bottom:"0",left:"0",right:"0",color:"white",fontSize:14})]}),n.jsx(ie,{label:n.jsxs("span",{children:[t.model_name+t.model_extension,n.jsx("br",{}),t.date.toLocaleDateString()]}),children:n.jsx(N,{textAlign:"center",p:"1",fontSize:14,noOfLines:2,children:t.model_name+t.model_extension})})]})}function Gt({list:t}){return n.jsx(yt,{templateColumns:"repeat(3, minmax(0, 1fr))",gap:1,marginTop:2,children:t.map(e=>n.jsx(Oe,{children:n.jsx(Wt,{data:e})},e.model_name+e.date.getTime()))})}function Kt(){const{setRoute:t}=m.useContext(Ie);return n.jsx(n.Fragment,{children:n.jsx(T,{size:"sm",colorScheme:"teal",onClick:()=>t("installModels"),children:"Install Models"})})}const Ut=()=>{const[t,e]=m.useState(["checkpoints"]),[s,o]=m.useState([]),[i,r]=m.useState(!0);m.useEffect(()=>{a(),V.addEventListener("model_list",async c=>{l(c.detail)})},[]);const a=async()=>{const c=await ot();l(c)},l=async c=>{if(!c)return;r(!1);const h=Array.from(new Set(c.map(f=>f.model_type))),d=h.indexOf("checkpoints");d>=0&&h.splice(d,1),h.unshift("checkpoints"),e(h),o(c.map(f=>({...f,date:new Date(f.date*1e3)})))};return{modelTypeList:t,modelsList:s,loading:i}};function $t(){const[t,e]=m.useState(!1),s=()=>{var a;(a=H)==null||a.getSetting("showNsfwModelThumbnail").then(l=>{e(l??!1)})};m.useEffect(()=>{s()},[]);const o=a=>{var c;const l=a.target.checked;(c=H)==null||c.upsert({showNsfwModelThumbnail:l}).then(()=>{s(),i(),window.dispatchEvent(new Event("showNsfwModelThumbnail"))})},i=async()=>{const a=await G.models.toArray();for(let l=0;l<a.length;l+=5){const c=a.slice(l,l+5);await Promise.all(c.map(r))}},r=async a=>{try{if(a.fileHash==null)return;const c=(await ae(a.fileHash)).imageUrl;G.models.update(a.id,{imageUrl:c??null})}catch{}};return n.jsx(vt,{isChecked:t,onChange:o,children:"Show NSFW"})}function Ht(){const t=async e=>{if(e.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const o=e.dataTransfer.getData("modelRelativePath"),i=e.dataTransfer.getData("nodeType"),r=LiteGraph.createNode(i);r.pos=[e.canvasX,e.canvasY],r.configure({widgets_values:[o]}),z.graph.add(r)};return m.useEffect(()=>(z.canvasEl.addEventListener("drop",t),()=>{z.canvasEl.removeEventListener("drop",t)}),[]),null}function Vt({onClose:t}){const[e,s]=m.useState("checkpoints"),[o,i]=m.useState(""),[r,a]=m.useState("name"),{loading:l,modelTypeList:c,modelsList:h}=Ut(),[d,f]=m.useState([]),[u,g]=m.useState([]);m.useEffect(()=>{x();async function x(){const j=await G.models.toArray();f(h.map(w=>({...w,db:j.find(C=>C.id===w.model_name+"@"+w.model_type)})))}},[h]),m.useEffect(()=>{let x=[];o.length?x=new $(d,{keys:["model_name","db.modelName"]}).search(o).map(C=>C.item):x=h.filter(j=>j.model_type===e).sort((j,w)=>r==="name"?j.model_name.localeCompare(w.model_name):w.date.getTime()-j.date.getTime()),g(x)},[e,h,o,r,d]),m.useEffect(()=>(z.canvasEl.addEventListener("click",t),()=>{z.canvasEl.removeEventListener("click",t)}),[t]);const p=440;return n.jsx(Ve,{children:n.jsxs(oe,{style:{width:p},children:[n.jsxs(Ee,{width:p,height:"100vh",p:4,gap:2,position:"fixed",top:0,left:0,shadow:"xl",zIndex:it,overflowY:"auto",children:[n.jsxs(R,{justifyContent:"space-between",alignContent:"center",py:3,children:[n.jsx(Te,{size:"md",mr:2,children:"Models"}),n.jsx(Kt,{})]}),n.jsx(R,{gap:4,justifyContent:"center",alignItems:"center",mb:1,children:n.jsx(Z,{size:"sm",placeholder:"Search",value:o,onChange:x=>i(x.target.value)})}),n.jsxs(R,{gap:4,justifyContent:"space-between",alignItems:"center",mb:1,children:[!o.length&&n.jsxs(W,{children:[n.jsx("span",{children:"Sort By"}),n.jsxs(ee,{value:r,size:"sm",width:"120px",onChange:x=>a(x.target.value),children:[n.jsx("option",{value:"name",children:"Name"}),n.jsx("option",{value:"date",children:"Date"})]})]}),n.jsx($t,{})]}),!o.length&&n.jsx(Bt,{modelTypeList:c,setSelectedModel:s,selectedModel:e}),n.jsx(Gt,{list:u}),l&&n.jsx(R,{justifyContent:"center",alignItems:"center",height:"100%",children:n.jsx(re,{})})]}),n.jsx(Ht,{})]})})}const qt=async t=>{try{const s=await(await V.fetchApi("/model_manager/install_model",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).text();window.dispatchEvent(new CustomEvent("model_install_message",{detail:s}))}catch(e){console.error("Failed to connect to the server:",e)}};function we(t,e=1){const i=t/1024;return i>=1024?(i/1024).toFixed(e)+" GB":i.toFixed(e)+" MB"}function _e(t,e){if(!t||t.length===0)return;let s=t.find(o=>o.nsfw==="None");return e&&(s=s??t[0]),s}function Yt(t,e=280,s){var o,i,r,a;if(t)return Ae(t)?(r=_e((i=(o=t.modelVersions)==null?void 0:o.at(0))==null?void 0:i.images,s))==null?void 0:r.url:`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${(a=_e(t.images,s))==null?void 0:a.url}/width=${e}/`}const ne=280;function Qt({model:t,onClickInstallModel:e,installing:s}){var u,g;const[o,i]=m.useState();m.useEffect(()=>{p();async function p(){var j;const x=await((j=H)==null?void 0:j.getSetting("showNsfwModelThumbnail"));i(Yt(t,ne,x))}},[t]);const r=Ae(t)?t.modelVersions:t.versions,[a,l]=m.useState(((u=r==null?void 0:r[0])==null?void 0:u.name)??""),c=r==null?void 0:r.find(p=>(p==null?void 0:p.name)===a),h=()=>{window.open(`https://civitai.com/models/${t.id}`)},d=m.useCallback(()=>{if(c==null){console.error("no file is find by name",a);return}e(pe(c,t.name),t)},[a]),f=(g=pe(c))==null?void 0:g.sizeKB;return n.jsxs(Ee,{width:ne,justifyContent:"space-between",mb:2,gap:1,children:[n.jsx(Le,{borderRadius:3,boxSize:ne+"px",objectFit:"cover",src:o,alt:"model cover image",cursor:"pointer",onClick:()=>h()}),n.jsxs(Y,{p:1,children:[n.jsx(ie,{label:t.name,children:n.jsx(N,{fontWeight:500,noOfLines:1,children:t.name})}),n.jsxs(R,{justifyContent:"space-between",alignItems:"center",children:[n.jsx(T,{borderRadius:14,noOfLines:1,size:"xs",colorScheme:"teal",maxWidth:"40%",flexShrink:1,variant:"outline",px:1,cursor:"text",children:n.jsx(N,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:t.type})}),n.jsx(T,{leftIcon:n.jsx(rt,{size:18}),iconSpacing:1,borderRadius:10,size:"sm",py:1,colorScheme:"teal",type:"submit",onClick:()=>d(),isDisabled:!!(a&&s.includes(a)),children:"Install"})]}),n.jsxs(W,{children:[n.jsx(ee,{size:"md",style:{paddingLeft:4},onChange:p=>{l(p.target.value)},children:r==null?void 0:r.map(p=>{const x=p==null?void 0:p.name;return x?n.jsx("option",{value:x,style:{padding:0},children:x},p.id):null})}),f&&n.jsx(ie,{label:we(f),children:n.jsx(N,{flexShrink:1,noOfLines:1,width:"40%",children:we(f)})})]})]})]})}function Jt({searchQuery:t,setSearchQuery:e,onSearch:s}){return n.jsxs(R,{gap:1,alignItems:"center",grow:1,children:[n.jsx(Z,{placeholder:"Search models in CivitAI",width:"60%",value:t,onChange:o=>e(o.target.value),onKeyUp:o=>{o.code==="Enter"&&s()}}),n.jsx(T,{size:"sm",onClick:()=>s(),colorScheme:"teal",children:"Search"})]})}function Xt({isOpen:t,fileSelected:e,onClose:s,selectFolder:o}){const[i,r]=m.useState(""),[a,l]=m.useState([]),[c,h]=m.useState(""),d=m.useRef(null);m.useEffect(()=>{f()},[]);const f=async()=>{const u=await Ne();u&&(["custom_nodes","config","saved_prompts"].forEach(g=>{delete u[g]}),l(Object.values(u).flatMap(g=>g)))};return n.jsx(qe,{isOpen:t,leastDestructiveRef:d,onClose:s,children:n.jsx(be,{children:n.jsxs(Ye,{children:[n.jsx(Ce,{fontSize:"lg",fontWeight:"bold",children:"Choose Folder"}),n.jsx(ke,{children:n.jsxs(Y,{spacing:4,children:[!e&&n.jsxs(n.Fragment,{children:[n.jsx(N,{children:"Model download url"}),n.jsx(Z,{placeholder:"https://civitai.com/api/download/models/311399",onChange:u=>h(u.target.value),value:c})]}),n.jsx(N,{children:"Choose model install folder"}),n.jsx(ee,{placeholder:"Select option",value:i,onChange:u=>r(u.target.value),children:a.map(u=>n.jsx("option",{value:u,children:u},u))})]})}),n.jsxs(Qe,{children:[n.jsx(T,{ref:d,onClick:s,children:"Cancel"}),n.jsx(T,{onClick:()=>o(i,c),ml:3,isDisabled:c.length===0,children:"Confirm"})]})]})})})}function Zt(){const{colorMode:t}=Je(),e=De(),[s,o]=m.useState([]);return m.useEffect(()=>{V.addEventListener("download_progress",i=>{o(i.detail)}),V.addEventListener("download_error",i=>{e({title:"Download Error",description:i.detail,status:"error",duration:4e3,isClosable:!0})})},[]),n.jsx(Y,{spacing:5,pos:"absolute",bottom:"0",left:"0",width:"50%",zIndex:80,backgroundColor:t==="light"?"white":"#242424",paddingX:5,pt:2,children:s.map(({save_path:i,progress:r})=>n.jsxs(W,{children:[n.jsx(N,{fontSize:16,width:"40%",children:i.replace(/^.*[\\/]/,"")}),n.jsx(ze,{isIndeterminate:!r,hasStripe:!0,width:"50%",value:r}),n.jsxs(N,{fontSize:16,width:"10%",children:[r.toFixed(1),"%"]}),n.jsx(T,{variant:"outline",size:"sm",colorScheme:"red",onClick:()=>at(i),children:"Cancel"})]},i))})}function es(){const[t,e]=m.useState(""),{onOpen:s,onClose:o,isOpen:i}=Fe(),r=()=>{ft(t),o()};return n.jsxs(lt,{isOpen:i,onOpen:s,onClose:o,placement:"right",closeOnBlur:!1,children:[n.jsx(ct,{children:n.jsx(T,{size:"sm",py:1,mr:8,children:"Set Civitai API Key"})}),n.jsxs(dt,{p:5,children:[n.jsx(ht,{}),n.jsx(ut,{}),n.jsxs(Y,{spacing:4,children:[n.jsx(N,{fontSize:14,children:"Some Civitai.com models require user login to download, you will nedd a Civitai API key to download in that case"}),n.jsx(Z,{value:t,onChange:a=>e(a.target.value),placeholder:"API Key"}),n.jsx(T,{size:"sm",py:1,mr:8,onClick:r,children:"Save"})]})]})]})}async function ts(t,e){var a,l;const s={queries:[{q:t,indexUid:"models_v7",facets:["category.name","checkpointType","fileFormats","lastVersionAtUnix","tags.name","type","user.username","version.baseModel"],attributesToHighlight:["*"],highlightPreTag:"__ais-highlight__",highlightPostTag:"__/ais-highlight__",limit:80,offset:0}]};return e&&(s.queries[0].filter=[[`"type"="${e}"`]]),((l=(a=await(await fetch("https://meilisearch-v1-6.civitai.com/multi-search",{headers:{"Content-Type":"application/json",Authorization:"Bearer 102312c2b83ea0ef9ac32e7858f742721bbfd7319a957272e746f84fd1e974af"},method:"POST",body:JSON.stringify(s)})).json())==null?void 0:a.results)==null?void 0:l.at(0)).hits??[]}function ss({onclose:t,searchQuery:e="",modelType:s}){const[o,i]=m.useState([]),[r,a]=m.useState(!1),[l,c]=m.useState(s),h=De(),[d,f]=m.useState([]),[u,g]=m.useState(e),{isOpen:p,onOpen:x,onClose:j}=Fe(),[w,C,k]=mt(),[P,Q]=m.useState({}),[D,b]=m.useState(te),L=m.useCallback(async()=>{var S;a(!0);const y=await ts(u,l);i(y);const v=await Ne();v&&Q(v);const _=await((S=H)==null?void 0:S.getSetting("defaultFolders"));_&&b(_),a(!1)},[u,l]),I=(y,v)=>{var he,ue,fe,me;if(!((he=k.current)!=null&&he.id)&&!v){console.error("no url to download");return}let _=v??`https://civitai.com/api/download/models/${(ue=k.current)==null?void 0:ue.id}`,S=(fe=k.current)==null?void 0:fe.name;if(!S&&(S=_.split("/").pop(),!S)){console.error("downloadUrl is malformed");return}h({title:"Installing...",description:S,status:"info",duration:4e3,isClosable:!0}),S!=null&&f(Ke=>[...Ke,S??""]);const de=gt();de&&(_+=`?token=${de}`),qt({file_hash:(me=k.current)==null?void 0:me.SHA256,filename:S,save_path:y,url:_}),C(void 0),j()},O=async(y,v)=>{const _=D[v.type];C(y),_==null?x():I(_)},E=async(y,v)=>{var S;const _={...D,[y]:v};await((S=H)==null?void 0:S.upsert({defaultFolders:_})),b(_)};return m.useEffect(()=>{L()},[l]),n.jsxs(n.Fragment,{children:[n.jsxs(Xe,{isOpen:!0,onClose:t,blockScrollOnMount:!0,children:[n.jsx(be,{}),n.jsxs(Ze,{width:"90%",maxWidth:"90vw",height:"90vh",children:[n.jsxs(Ce,{pb:1,children:[n.jsxs(W,{gap:2,mb:2,alignItems:"center",children:[n.jsx(Te,{size:"md",mr:2,children:"Models"}),n.jsx(Jt,{searchQuery:u,setSearchQuery:g,onSearch:L}),n.jsx(T,{size:"sm",py:1,mr:8,onClick:x,children:"Custom URL Install"}),n.jsx(es,{})]}),n.jsxs(W,{gap:2,wrap:"wrap",children:[n.jsx(T,{size:"sm",py:1,onClick:()=>{c(void 0)},isActive:l==null,children:"All"}),pt.map(y=>n.jsx(T,{size:"sm",py:1,isActive:l===y,onClick:()=>{c(y)},children:y},y)),l&&P[te[l]]&&n.jsxs(W,{ml:"auto",children:[n.jsx(N,{fontSize:17,whiteSpace:"nowrap",children:"Default Download Folder:"}),n.jsx(ee,{value:D[l],onChange:y=>E(l,y.target.value),children:P[te[l]].map(y=>n.jsx("option",{value:y,children:y},y))})]})]}),r&&n.jsx(re,{thickness:"4px",emptyColor:"gray.200",color:"pink.500",size:"lg"})]}),n.jsx(et,{}),n.jsxs(ke,{overflowY:"auto",children:[n.jsx(W,{wrap:"wrap",children:o==null?void 0:o.map(y=>n.jsx(Qt,{model:y,onClickInstallModel:O,installing:d},y.id))}),n.jsx(Zt,{})]})]})]}),n.jsx(Xt,{fileSelected:!!w,isOpen:p,onClose:j,selectFolder:(y,v)=>{I(y,k.current?void 0:v)}})]})}const ns=m.lazy(()=>tt(()=>import("./InstallMissingModelsButton-kd2HtD4o.js"),__vite__mapDeps([0,1,2,3,4,5,6])));function os(){const{setRoute:t,route:e}=m.useContext(Ie),s=async o=>{if(o.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const r=o.dataTransfer.getData("modelRelativePath"),a=o.dataTransfer.getData("nodeType"),l=LiteGraph.createNode(a);l.pos=[o.canvasX,o.canvasY],l.configure({widgets_values:[r]}),z.graph.add(l)};return m.useEffect(()=>(z.canvasEl.addEventListener("drop",s),V.addEventListener("model_list",async o=>{var a;const i=(a=o.detail)==null?void 0:a.map(async l=>{const c=await G.models.get(l.model_name+"@"+l.model_type);if(c!=null&&c.fileHash)return c;let h={id:l.model_name+"@"+l.model_type,modelName:null,fileHash:l.file_hash??null,fileFolder:l.model_type,fileName:l.model_name+l.model_extension};if(!l.file_hash)return h;const d=await ae(l.file_hash);return h={...h,modelName:d.modelName??null,civitModelID:d.civitModelID,civitModelVersionID:d.civitModelVersionID,imageUrl:d.imageUrl??null},h}),r=(await Promise.all(i)).filter(l=>l!=null);await G.models.clear(),await G.models.bulkPut(r.filter(l=>l!=null)),window.dispatchEvent(new CustomEvent("model_list_updated"))}),()=>{z.canvasEl.removeEventListener("drop",s)}),[]),n.jsxs(Y,{style:{position:"relative"},children:[n.jsx(T,{size:"sm",colorScheme:"blue","aria-label":"My models",onClick:()=>t("modelList"),px:1,height:xt+"px",children:"Models"}),n.jsx("div",{style:{position:"absolute",top:"38px",left:"0px"},children:n.jsx(m.Suspense,{children:n.jsx(ns,{})})}),e==="modelList"&&n.jsx(Vt,{onClose:()=>t("root")}),e==="installModels"&&n.jsx(ss,{modelType:"Checkpoint",onclose:()=>t("root")})]})}const hs=Object.freeze(Object.defineProperty({__proto__:null,default:os},Symbol.toStringTag,{value:"Module"}));export{Oe as G,hs as M,qt as i};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["workspace_web/InstallMissingModelsButton-kd2HtD4o.js","workspace_web/input.js","workspace_web/App-unMuTva5.js","workspace_web/assets/App-JXePnJiV.css","workspace_web/chunk-JARCRF6W-KBqbesG1.js","workspace_web/index-pz0vT7Or.js","workspace_web/chunk-3RSXBRAN-BNF8Z6oA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}