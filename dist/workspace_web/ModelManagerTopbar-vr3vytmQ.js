import{f as V,r as p,j as n,g as z,h as re,a0 as J,b as Ve,o as qe,l as Qe,i as A,U as ae,P as Ye,a1 as Je,N as ke,a2 as Xe,Q as Ie,S as Le,T as Ze,$ as et,M as tt,O as st,R as nt,_ as ot}from"./input.js";import{an as it,m as rt,ao as at,ap as lt,aq as $,ar as le,B as oe,F as R,ae as Ee,h as N,i as ie,Z as Ae,as as ct,k as H,a5 as U,a6 as Te,a7 as dt,ag as Ne,j as X,H as W,at as De,au as xe,g as q,w as ht,av as Fe,f as Pe,aw as ye,ax as ut,ay as Oe,az as ft,aA as pt,aB as mt,aC as gt,aD as xt,aE as yt,aF as ee,aG as wt,aH as vt,aI as jt}from"./App-eQybp91e.js";import{G as Mt,C as _t}from"./chunk-JARCRF6W-OjDz07lE.js";import{api as ce}from"/scripts/api.js";import{S as Z}from"./chunk-3RSXBRAN-LXNJ9qB5.js";var ze=V(function(e,s){const{spacing:o="0.5rem",spacingX:i,spacingY:r,children:a,justify:c,direction:l,align:d,className:h,shouldWrapChildren:f,...u}=e,g=p.useMemo(()=>f?p.Children.map(a,(m,x)=>n.jsx(de,{children:m},x)):a,[a,f]);return n.jsx(z.div,{ref:s,className:re("chakra-wrap",h),...u,children:n.jsx(z.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:d,flexDirection:l,listStyleType:"none",gap:o,columnGap:i,rowGap:r,padding:"0"},children:g})})});ze.displayName="Wrap";var de=V(function(e,s){const{className:o,...i}=e;return n.jsx(z.li,{ref:s,__css:{display:"flex",alignItems:"flex-start"},className:re("chakra-wrap__listitem",o),...i})});de.displayName="WrapItem";function we(t){return rt(t,e=>e==="auto"?"auto":`span ${e}/span ${e}`)}var Be=V(function(e,s){const{area:o,colSpan:i,colStart:r,colEnd:a,rowEnd:c,rowSpan:l,rowStart:d,...h}=e,f=it({gridArea:o,gridColumn:we(i),gridRow:we(l),gridColumnStart:r,gridColumnEnd:a,gridRowStart:d,gridRowEnd:c});return n.jsx(z.div,{ref:s,__css:f,...h})});Be.displayName="GridItem";var te=(t,e)=>e?`${t}.${e}, ${e}`:void 0;function Re(t){var e;const{bg:s,bgColor:o,backgroundColor:i,shadow:r,boxShadow:a,shadowColor:c}=t,{getArrowProps:l,getArrowInnerProps:d}=at(),h=lt(),f=(e=s??o)!=null?e:i,u=r??a;return n.jsx(z.div,{...l(),className:"chakra-popover__arrow-positioner",children:n.jsx(z.div,{className:re("chakra-popover__arrow",t.className),...d(t),__css:{"--popper-arrow-shadow-color":te("colors",c),"--popper-arrow-bg":te("colors",f),"--popper-arrow-shadow":te("shadows",u),...h.arrow}})})}Re.displayName="PopoverArrow";function St(t,e,s){return(t-e)*100/(s-e)}J({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}});J({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});var bt=J({"0%":{left:"-40%"},"100%":{left:"100%"}}),Ct=J({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function kt(t){const{value:e=0,min:s,max:o,valueText:i,getValueText:r,isIndeterminate:a,role:c="progressbar"}=t,l=St(e,s,o);return{bind:{"data-indeterminate":a?"":void 0,"aria-valuemax":o,"aria-valuemin":s,"aria-valuenow":a?void 0:e,"aria-valuetext":(()=>{if(e!=null)return typeof r=="function"?r(e,l):i})(),role:c},percent:l,value:e}}var[It,Lt]=Ve({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),Et=V((t,e)=>{const{min:s,max:o,value:i,isIndeterminate:r,role:a,...c}=t,l=kt({value:i,min:s,max:o,isIndeterminate:r,role:a}),h={height:"100%",...Lt().filledTrack};return n.jsx(z.div,{ref:e,style:{width:`${l.percent}%`,...c.style},...l.bind,...c,__css:h})}),We=V((t,e)=>{var s;const{value:o,min:i=0,max:r=100,hasStripe:a,isAnimated:c,children:l,borderRadius:d,isIndeterminate:h,"aria-label":f,"aria-labelledby":u,"aria-valuetext":g,title:m,role:x,...j}=qe(t),M=Qe("Progress",t),C=d??((s=M.track)==null?void 0:s.borderRadius),k={animation:`${Ct} 1s linear infinite`},D={...!h&&a&&c&&k,...h&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${bt} 1s ease infinite normal none running`}},b={overflow:"hidden",position:"relative",...M.track};return n.jsx(z.div,{ref:e,borderRadius:C,__css:b,...j,children:n.jsxs(It,{value:M,children:[n.jsx(Et,{"aria-label":f,"aria-labelledby":u,"aria-valuetext":g,min:i,max:r,value:o,isIndeterminate:h,css:D,borderRadius:C,title:m,role:x}),l]})})});We.displayName="Progress";function G(t){return Array.isArray?Array.isArray(t):Ge(t)==="[object Array]"}const At=1/0;function Tt(t){return t==null?"":function(e){if(typeof e=="string")return e;let s=e+"";return s=="0"&&1/e==-At?"-0":s}(t)}function F(t){return typeof t=="string"}function $e(t){return typeof t=="number"}function Nt(t){return t===!0||t===!1||function(e){return function(s){return typeof s=="object"}(e)&&e!==null}(t)&&Ge(t)=="[object Boolean]"}function T(t){return t!=null}function se(t){return!t.trim().length}function Ge(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Dt=t=>`Missing ${t} property in key`,Ft=t=>`Property 'weight' in key '${t}' must be a positive integer`,ve=Object.prototype.hasOwnProperty;class Pt{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(o=>{let i=Ke(o);this._keys.push(i),this._keyMap[i.id]=i,s+=i.weight}),this._keys.forEach(o=>{o.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ke(t){let e=null,s=null,o=null,i=1,r=null;if(F(t)||G(t))o=t,e=je(t),s=Me(t);else{if(!ve.call(t,"name"))throw new Error(Dt("name"));const a=t.name;if(o=a,ve.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Ft(a));e=je(a),s=Me(a),r=t.getFn}return{path:e,id:s,weight:i,src:o,getFn:r}}function je(t){return G(t)?t:t.split(".")}function Me(t){return G(t)?t.join("."):t}var v={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(t,e){let s=[],o=!1;const i=(r,a,c)=>{if(T(r))if(a[c]){const l=r[a[c]];if(!T(l))return;if(c===a.length-1&&(F(l)||$e(l)||Nt(l)))s.push(Tt(l));else if(G(l)){o=!0;for(let d=0,h=l.length;d<h;d+=1)i(l[d],a,c+1)}else a.length&&i(l,a,c+1)}else s.push(r)};return i(t,F(e)?e.split("."):e,0),o?s:s[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const Ot=/[^ ]+/g;class he{constructor({getFn:e=v.getFn,fieldNormWeight:s=v.fieldNormWeight}={}){this.norm=function(o=1,i=3){const r=new Map,a=Math.pow(10,i);return{get(c){const l=c.match(Ot).length;if(r.has(l))return r.get(l);const d=1/Math.pow(l,.5*o),h=parseFloat(Math.round(d*a)/a);return r.set(l,h),h},clear(){r.clear()}}}(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,F(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();F(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!T(e)||se(e))return;let o={v:e,i:s,n:this.norm.get(e)};this.records.push(o)}_addObject(e,s){let o={i:s,$:{}};this.keys.forEach((i,r)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(T(a)){if(G(a)){let c=[];const l=[{nestedArrIndex:-1,value:a}];for(;l.length;){const{nestedArrIndex:d,value:h}=l.pop();if(T(h))if(F(h)&&!se(h)){let f={v:h,i:d,n:this.norm.get(h)};c.push(f)}else G(h)&&h.forEach((f,u)=>{l.push({nestedArrIndex:u,value:f})})}o.$[r]=c}else if(F(a)&&!se(a)){let c={v:a,n:this.norm.get(a)};o.$[r]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Ue(t,e,{getFn:s=v.getFn,fieldNormWeight:o=v.fieldNormWeight}={}){const i=new he({getFn:s,fieldNormWeight:o});return i.setKeys(t.map(Ke)),i.setSources(e),i.create(),i}function Y(t,{errors:e=0,currentLocation:s=0,expectedLocation:o=0,distance:i=v.distance,ignoreLocation:r=v.ignoreLocation}={}){const a=e/t.length;if(r)return a;const c=Math.abs(o-s);return i?a+c/i:c?1:a}const B=32;function zt(t,e,s,{location:o=v.location,distance:i=v.distance,threshold:r=v.threshold,findAllMatches:a=v.findAllMatches,minMatchCharLength:c=v.minMatchCharLength,includeMatches:l=v.includeMatches,ignoreLocation:d=v.ignoreLocation}={}){if(e.length>B)throw new Error(`Pattern length exceeds max of ${B}.`);const h=e.length,f=t.length,u=Math.max(0,Math.min(o,f));let g=r,m=u;const x=c>1||l,j=x?Array(f):[];let M;for(;(M=t.indexOf(e,m))>-1;){let b=Y(e,{currentLocation:M,expectedLocation:u,distance:i,ignoreLocation:d});if(g=Math.min(b,g),m=M+h,x){let I=0;for(;I<h;)j[M+I]=1,I+=1}}m=-1;let C=[],k=1,P=h+f;const Q=1<<h-1;for(let b=0;b<h;b+=1){let I=0,L=P;for(;I<L;)Y(e,{errors:b,currentLocation:u+L,expectedLocation:u,distance:i,ignoreLocation:d})<=g?I=L:P=L,L=Math.floor((P-I)/2+I);P=L;let O=Math.max(1,u-L+1),E=a?f:Math.min(u+L,f)+h,y=Array(E+2);y[E+1]=(1<<b)-1;for(let w=E;w>=O;w-=1){let _=w-1,S=s[t.charAt(_)];if(x&&(j[_]=+!!S),y[w]=(y[w+1]<<1|1)&S,b&&(y[w]|=(C[w+1]|C[w])<<1|1|C[w+1]),y[w]&Q&&(k=Y(e,{errors:b,currentLocation:_,expectedLocation:u,distance:i,ignoreLocation:d}),k<=g)){if(g=k,m=_,m<=u)break;O=Math.max(1,2*u-m)}}if(Y(e,{errors:b+1,currentLocation:u,expectedLocation:u,distance:i,ignoreLocation:d})>g)break;C=y}const D={isMatch:m>=0,score:Math.max(.001,k)};if(x){const b=function(I=[],L=v.minMatchCharLength){let O=[],E=-1,y=-1,w=0;for(let _=I.length;w<_;w+=1){let S=I[w];S&&E===-1?E=w:S||E===-1||(y=w-1,y-E+1>=L&&O.push([E,y]),E=-1)}return I[w-1]&&w-E>=L&&O.push([E,w-1]),O}(j,c);b.length?l&&(D.indices=b):D.isMatch=!1}return D}function Bt(t){let e={};for(let s=0,o=t.length;s<o;s+=1){const i=t.charAt(s);e[i]=(e[i]||0)|1<<o-s-1}return e}class Rt{constructor(e,{location:s=v.location,threshold:o=v.threshold,distance:i=v.distance,includeMatches:r=v.includeMatches,findAllMatches:a=v.findAllMatches,minMatchCharLength:c=v.minMatchCharLength,isCaseSensitive:l=v.isCaseSensitive,ignoreLocation:d=v.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:i,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:l,ignoreLocation:d},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(u,g)=>{this.chunks.push({pattern:u,alphabet:Bt(u),startIndex:g})},f=this.pattern.length;if(f>B){let u=0;const g=f%B,m=f-g;for(;u<m;)h(this.pattern.substr(u,B),u),u+=B;if(g){const x=f-B;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,e.length-1]]),m}const{location:i,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:l,ignoreLocation:d}=this.options;let h=[],f=0,u=!1;this.chunks.forEach(({pattern:m,alphabet:x,startIndex:j})=>{const{isMatch:M,score:C,indices:k}=zt(e,m,x,{location:i+j,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:l,includeMatches:o,ignoreLocation:d});M&&(u=!0),f+=C,M&&k&&(h=[...h,...k])});let g={isMatch:u,score:u?f/this.chunks.length:1};return u&&o&&(g.indices=h),g}}const _e=[];function Se(t,e){for(let s=0,o=_e.length;s<o;s+=1){let i=_e[s];if(i.condition(t,e))return new i(t,e)}return new Rt(t,e)}function Wt(t,e){const s=t.matches;e.matches=[],T(s)&&s.forEach(o=>{if(!T(o.indices)||!o.indices.length)return;const{indices:i,value:r}=o;let a={indices:i,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),e.matches.push(a)})}function $t(t,e){e.score=t.score}class K{constructor(e,s={},o){if(this.options={...v,...s},this.options.useExtendedSearch)throw new Error("Extended search is not available");this._keyStore=new Pt(this.options.keys),this.setCollection(e,o)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof he))throw new Error("Incorrect 'index' type");this._myIndex=s||Ue(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){T(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let o=0,i=this._docs.length;o<i;o+=1){const r=this._docs[o];e(r,o)&&(this.removeAt(o),o-=1,i-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:r,sortFn:a,ignoreFieldNorm:c}=this.options;let l=F(e)?F(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(d,{ignoreFieldNorm:h=v.ignoreFieldNorm}){d.forEach(f=>{let u=1;f.matches.forEach(({key:g,norm:m,score:x})=>{const j=g?g.weight:null;u*=Math.pow(x===0&&j?Number.EPSILON:x,(j||1)*(h?1:m))}),f.score=u})}(l,{ignoreFieldNorm:c}),r&&l.sort(a),$e(s)&&s>-1&&(l=l.slice(0,s)),function(d,h,{includeMatches:f=v.includeMatches,includeScore:u=v.includeScore}={}){const g=[];return f&&g.push(Wt),u&&g.push($t),d.map(m=>{const{idx:x}=m,j={item:h[x],refIndex:x};return g.length&&g.forEach(M=>{M(m,j)}),j})}(l,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(e){const s=Se(e,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:r,i:a,n:c})=>{if(!T(r))return;const{isMatch:l,score:d,indices:h}=s.searchIn(r);l&&i.push({item:r,idx:a,matches:[{score:d,value:r,norm:c,indices:h}]})}),i}_searchLogical(e){throw new Error("Logical search is not available")}_searchObjectList(e){const s=Se(e,this.options),{keys:o,records:i}=this._myIndex,r=[];return i.forEach(({$:a,i:c})=>{if(!T(a))return;let l=[];o.forEach((d,h)=>{l.push(...this._findMatches({key:d,value:a[h],searcher:s}))}),l.length&&r.push({idx:c,item:a,matches:l})}),r}_findMatches({key:e,value:s,searcher:o}){if(!T(s))return[];let i=[];if(G(s))s.forEach(({v:r,i:a,n:c})=>{if(!T(r))return;const{isMatch:l,score:d,indices:h}=o.searchIn(r);l&&i.push({score:d,key:e,value:r,idx:a,norm:c,indices:h})});else{const{v:r,n:a}=s,{isMatch:c,score:l,indices:d}=o.searchIn(r);c&&i.push({score:l,key:e,value:r,norm:a,indices:d})}return i}}K.version="7.0.0",K.createIndex=Ue,K.parseIndex=function(t,{getFn:e=v.getFn,fieldNormWeight:s=v.fieldNormWeight}={}){const{keys:o,records:i}=t,r=new he({getFn:e,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(i),r},K.config=v;function Gt({selectedModel:t,setSelectedModel:e,modelTypeList:s}){const o=i=>{e(i)};return n.jsx(ze,{children:s.map(i=>n.jsx(de,{children:n.jsx(A,{colorScheme:"blue",variant:t===i?"solid":"outline",onClick:()=>o(i),size:"sm",children:i})},i))})}const Kt={checkpoints:"CheckpointLoaderSimple",vae:"VAELoader",loras:"LoraLoader",controlnet:"ControlNetLoader",upscale_models:"UpscaleModelLoader"};function Ut({data:t}){const[e,s]=p.useState("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg"),[o,i]=p.useState(!t.file_hash),[r,a]=p.useState();p.useEffect(()=>{i(!t.file_hash),c()},[t.file_hash]);const c=async()=>{var h;const d=await $.models.get(t.model_name+"@"+t.model_type);if(d!=null&&(a(d),(h=d.imageUrl)!=null&&h.length&&s(d.imageUrl)),!(d!=null&&d.imageUrl)&&t.file_hash!=null)try{const f=await le(t.file_hash),u=f.imageUrl;u&&s(u);const g={id:t.model_name+"@"+t.model_type,fileHash:t.file_hash,fileFolder:t.model_type,fileName:t.model_name+t.model_extension,modelName:f.modelName??null,civitModelID:f.civitModelID,civitModelVersionID:f.civitModelVersionID,imageUrl:u??null};a(g)}catch{}t.preview&&s(t.preview)},l=d=>{const h=Kt[t.model_type];h&&(d.dataTransfer.setData("eventName","WorkspaceManagerAddNode"),d.dataTransfer.setData("modelRelativePath",t.model_name+t.model_extension),d.dataTransfer.setData("nodeType",h))};return n.jsxs(oe,{children:[n.jsxs(oe,{position:"relative",borderRadius:4,draggable:!0,onDragStart:l,children:[o?n.jsx(R,{bg:"rgba(0, 0, 0, 0.5)",height:178,justifyContent:"center",alignItems:"center",children:n.jsx(ae,{})}):n.jsx(Ee,{src:e,draggable:!1,boxSize:"100%",height:150,objectFit:"cover",borderRadius:4,cursor:(r==null?void 0:r.civitModelID)!=null?"pointer":"auto",onClick:()=>{(r==null?void 0:r.civitModelID)==null||(r==null?void 0:r.civitModelVersionID)==null||window.open(`https://civitai.com/models/${r==null?void 0:r.civitModelID}?modelVersionId=${r==null?void 0:r.civitModelVersionID}`)}}),n.jsx(N,{position:"absolute",bottom:"0",left:"0",right:"0",color:"white",fontSize:14})]}),n.jsx(ie,{label:n.jsxs("span",{children:[t.model_name+t.model_extension,n.jsx("br",{}),t.date.toLocaleDateString()]}),children:n.jsx(N,{textAlign:"center",p:"1",fontSize:14,noOfLines:2,children:t.model_name+t.model_extension})})]})}function Ht({list:t}){return n.jsx(Mt,{templateColumns:"repeat(3, minmax(0, 1fr))",gap:1,marginTop:2,children:t.map(e=>n.jsx(Be,{children:n.jsx(Ut,{data:e})},e.model_name+e.date.getTime()))})}function Vt(){const{setRoute:t}=p.useContext(Ae);return n.jsx(n.Fragment,{children:n.jsx(A,{size:"sm",colorScheme:"teal",onClick:()=>t("installModels"),children:"Install Models"})})}const qt=()=>{const[t,e]=p.useState(["checkpoints"]),[s,o]=p.useState([]),[i,r]=p.useState(!0);p.useEffect(()=>{a(),ce.addEventListener("model_list",async l=>{c(l.detail)})},[]);const a=async()=>{const l=await ct();c(l)},c=async l=>{if(!l)return;r(!1);const d=Array.from(new Set(l.map(f=>f.model_type))),h=d.indexOf("checkpoints");h>=0&&d.splice(h,1),d.unshift("checkpoints"),e(d),o(l.map(f=>({...f,date:new Date(f.date*1e3)})))};return{modelTypeList:t,modelsList:s,loading:i}};function Qt(){const[t,e]=p.useState(!1),s=()=>{var a;(a=H)==null||a.getSetting("showNsfwModelThumbnail").then(c=>{e(c??!1)})};p.useEffect(()=>{s()},[]);const o=a=>{var l;const c=a.target.checked;(l=H)==null||l.upsert({showNsfwModelThumbnail:c}).then(()=>{s(),i(),window.dispatchEvent(new Event("showNsfwModelThumbnail"))})},i=async()=>{const a=await $.models.toArray();for(let c=0;c<a.length;c+=5){const l=a.slice(c,c+5);await Promise.all(l.map(r))}},r=async a=>{try{if(a.fileHash==null)return;const l=(await le(a.fileHash)).imageUrl;$.models.update(a.id,{imageUrl:l??null})}catch{}};return n.jsx(_t,{isChecked:t,onChange:o,children:"Show NSFW"})}function Yt(){const t=async e=>{if(e.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const o=e.dataTransfer.getData("modelRelativePath"),i=e.dataTransfer.getData("nodeType"),r=LiteGraph.createNode(i);r.pos=[e.canvasX,e.canvasY],r.configure({widgets_values:[o]}),U.graph.add(r)};return p.useEffect(()=>(U.canvasEl.addEventListener("drop",t),()=>{U.canvasEl.removeEventListener("drop",t)}),[]),null}function Jt({onClose:t}){const[e,s]=p.useState("checkpoints"),[o,i]=p.useState(""),[r,a]=p.useState("name"),{loading:c,modelTypeList:l,modelsList:d}=qt(),[h,f]=p.useState([]),[u,g]=p.useState([]);p.useEffect(()=>{x();async function x(){const j=await $.models.toArray();f(d.map(M=>({...M,db:j.find(C=>C.id===M.model_name+"@"+M.model_type)})))}},[d]),p.useEffect(()=>{let x=[];o.length?x=new K(h,{keys:["model_name","db.modelName"]}).search(o).map(C=>C.item):x=d.filter(j=>j.model_type===e).sort((j,M)=>r==="name"?j.model_name.localeCompare(M.model_name):M.date.getTime()-j.date.getTime()),g(x)},[e,d,o,r,h]),p.useEffect(()=>(U.canvasEl.addEventListener("click",t),()=>{U.canvasEl.removeEventListener("click",t)}),[t]);const m=440;return n.jsx(Ye,{children:n.jsxs(oe,{style:{width:m},children:[n.jsxs(Te,{width:m,height:"100vh",p:4,gap:2,position:"fixed",top:0,left:0,shadow:"xl",zIndex:dt,overflowY:"auto",children:[n.jsxs(R,{justifyContent:"space-between",alignContent:"center",py:3,children:[n.jsx(Ne,{size:"md",mr:2,children:"Models"}),n.jsx(Vt,{})]}),n.jsx(R,{gap:4,justifyContent:"center",alignItems:"center",mb:1,children:n.jsx(X,{size:"sm",placeholder:"Search",value:o,onChange:x=>i(x.target.value)})}),n.jsxs(R,{gap:4,justifyContent:"space-between",alignItems:"center",mb:1,children:[!o.length&&n.jsxs(W,{children:[n.jsx("span",{children:"Sort By"}),n.jsxs(Z,{value:r,size:"sm",width:"120px",onChange:x=>a(x.target.value),children:[n.jsx("option",{value:"name",children:"Name"}),n.jsx("option",{value:"date",children:"Date"})]})]}),n.jsx(Qt,{})]}),!o.length&&n.jsx(Gt,{modelTypeList:l,setSelectedModel:s,selectedModel:e}),n.jsx(Ht,{list:u}),c&&n.jsx(R,{justifyContent:"center",alignItems:"center",height:"100%",children:n.jsx(ae,{})})]}),n.jsx(Yt,{})]})})}const Xt=async t=>{try{const s=await(await ce.fetchApi("/model_manager/install_model",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).text();window.dispatchEvent(new CustomEvent("model_install_message",{detail:s}))}catch(e){console.error("Failed to connect to the server:",e)}};function be(t,e=1){const i=t/1024;return i>=1024?(i/1024).toFixed(e)+" GB":i.toFixed(e)+" MB"}function Ce(t,e){if(!t||t.length===0)return;let s=t.find(o=>o.nsfw==="None"||o.nsfwLevel===1);return e&&(s=s??t[0]),s}function Zt(t,e=280,s){var o,i,r,a;if(t){if(t.images)return`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${(o=Ce(t.images,s))==null?void 0:o.url}/width=${e}/`;if(De(t))return(a=Ce((r=(i=t.modelVersions)==null?void 0:i.at(0))==null?void 0:r.images,s))==null?void 0:a.url}}const ne=280;function es({model:t,onClickInstallModel:e,installing:s}){var u,g;const[o,i]=p.useState();p.useEffect(()=>{m();async function m(){var j;const x=await((j=H)==null?void 0:j.getSetting("showNsfwModelThumbnail"));i(Zt(t,ne,x))}},[t]);const r=De(t)?t.modelVersions:t.versions,[a,c]=p.useState(((u=r==null?void 0:r[0])==null?void 0:u.name)??""),l=r==null?void 0:r.find(m=>(m==null?void 0:m.name)===a),d=()=>{window.open(`https://civitai.com/models/${t.id}`)},h=p.useCallback(()=>{if(l==null){console.error("no file is find by name",a);return}e(xe(l,t.name),t)},[a]),f=(g=xe(l))==null?void 0:g.sizeKB;return n.jsxs(Te,{width:ne,justifyContent:"space-between",mb:2,gap:1,children:[n.jsx(Ee,{borderRadius:3,boxSize:ne+"px",objectFit:"cover",src:o,alt:"model cover image",cursor:"pointer",onClick:()=>d()}),n.jsxs(q,{p:1,children:[n.jsx(ie,{label:t.name,children:n.jsx(N,{fontWeight:500,noOfLines:1,children:t.name})}),n.jsxs(R,{justifyContent:"space-between",alignItems:"center",children:[n.jsx(A,{borderRadius:14,noOfLines:1,size:"xs",colorScheme:"teal",maxWidth:"40%",flexShrink:1,variant:"outline",px:1,cursor:"text",children:n.jsx(N,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:t.type})}),n.jsx(A,{leftIcon:n.jsx(ht,{size:18}),iconSpacing:1,borderRadius:10,size:"sm",py:1,colorScheme:"teal",type:"submit",onClick:()=>h(),isDisabled:!!(a&&s.includes(a)),children:"Install"})]}),n.jsxs(W,{children:[n.jsx(Z,{size:"md",style:{paddingLeft:4},onChange:m=>{c(m.target.value)},children:r==null?void 0:r.map(m=>{const x=m==null?void 0:m.name;return x?n.jsx("option",{value:x,style:{padding:0},children:x},m.id):null})}),f&&n.jsx(ie,{label:be(f),children:n.jsx(N,{flexShrink:1,noOfLines:1,width:"40%",children:be(f)})})]})]})]})}function ts({searchQuery:t,setSearchQuery:e,onSearch:s}){return n.jsxs(R,{gap:1,alignItems:"center",grow:1,children:[n.jsx(X,{placeholder:"Search models in CivitAI",width:"60%",value:t,onChange:o=>e(o.target.value),onKeyUp:o=>{o.code==="Enter"&&s()}}),n.jsx(A,{size:"sm",onClick:()=>s(),colorScheme:"teal",children:"Search"})]})}function ss({isOpen:t,fileSelected:e,onClose:s,selectFolder:o}){const[i,r]=p.useState(""),[a,c]=p.useState([]),[l,d]=p.useState(""),h=p.useRef(null);p.useEffect(()=>{f()},[]);const f=async()=>{const u=await Fe();u&&(["custom_nodes","config","saved_prompts"].forEach(g=>{delete u[g]}),c(Object.values(u).flatMap(g=>g)))};return n.jsx(Je,{isOpen:t,leastDestructiveRef:h,onClose:s,children:n.jsx(ke,{children:n.jsxs(Xe,{children:[n.jsx(Ie,{fontSize:"lg",fontWeight:"bold",children:"Choose Folder"}),n.jsx(Le,{children:n.jsxs(q,{spacing:4,children:[!e&&n.jsxs(n.Fragment,{children:[n.jsx(N,{children:"Model download url"}),n.jsx(X,{placeholder:"https://civitai.com/api/download/models/311399",onChange:u=>d(u.target.value),value:l})]}),n.jsx(N,{children:"Choose model install folder"}),n.jsx(Z,{placeholder:"Select option",value:i,onChange:u=>r(u.target.value),children:a.map(u=>n.jsx("option",{value:u,children:u},u))})]})}),n.jsxs(Ze,{children:[n.jsx(A,{ref:h,onClick:s,children:"Cancel"}),n.jsx(A,{onClick:()=>o(i,l),ml:3,isDisabled:l.length===0,children:"Confirm"})]})]})})})}function ns(){const{colorMode:t}=et(),e=Pe(),[s,o]=p.useState([]);return p.useEffect(()=>{ye.addEventListener("download_progress",i=>{o(i.detail)}),ye.addEventListener("download_error",i=>{e({title:"Download Error",description:i.detail,status:"error",duration:4e3,isClosable:!0})})},[]),n.jsx(q,{spacing:5,pos:"absolute",bottom:"0",left:"0",width:"50%",zIndex:80,backgroundColor:t==="light"?"white":"#242424",paddingX:5,pt:2,children:s.map(({save_path:i,progress:r})=>n.jsxs(W,{children:[n.jsx(N,{fontSize:16,width:"40%",children:i.replace(/^.*[\\/]/,"")}),n.jsx(We,{isIndeterminate:!r,hasStripe:!0,width:"50%",value:r}),n.jsxs(N,{fontSize:16,width:"10%",children:[r.toFixed(1),"%"]}),n.jsx(A,{variant:"outline",size:"sm",colorScheme:"red",onClick:()=>ut(i),children:"Cancel"})]},i))})}function os(){const[t,e]=p.useState(""),{onOpen:s,onClose:o,isOpen:i}=Oe(),r=()=>{xt(t),o()};return n.jsxs(ft,{isOpen:i,onOpen:s,onClose:o,placement:"right",closeOnBlur:!1,children:[n.jsx(pt,{children:n.jsx(A,{size:"sm",py:1,mr:8,children:"Set Civitai API Key"})}),n.jsxs(mt,{p:5,children:[n.jsx(Re,{}),n.jsx(gt,{}),n.jsxs(q,{spacing:4,children:[n.jsx(N,{fontSize:14,children:"Some Civitai.com models require user login to download, you will nedd a Civitai API key to download in that case"}),n.jsx(X,{value:t,onChange:a=>e(a.target.value),placeholder:"API Key"}),n.jsx(A,{size:"sm",py:1,mr:8,onClick:r,children:"Save"})]})]})]})}async function is(t,e){var a,c;const s={queries:[{q:t,indexUid:"models_v9",facets:["category.name","checkpointType","fileFormats","lastVersionAtUnix","tags.name","type","user.username","version.baseModel"],attributesToHighlight:["*"],highlightPreTag:"__ais-highlight__",highlightPostTag:"__/ais-highlight__",limit:80,offset:0}]};return e&&(s.queries[0].filter=[[`"type"="${e}"`]]),((c=(a=await(await fetch("https://meilisearch-v1-6.civitai.com/multi-search",{headers:{"Content-Type":"application/json",Authorization:"Bearer 102312c2b83ea0ef9ac32e7858f742721bbfd7319a957272e746f84fd1e974af"},method:"POST",body:JSON.stringify(s)})).json())==null?void 0:a.results)==null?void 0:c.at(0)).hits??[]}function rs({onclose:t,searchQuery:e="",modelType:s}){const[o,i]=p.useState([]),[r,a]=p.useState(!1),[c,l]=p.useState(s),d=Pe(),[h,f]=p.useState([]),[u,g]=p.useState(e),{isOpen:m,onOpen:x,onClose:j}=Oe(),[M,C,k]=yt(),[P,Q]=p.useState({}),[D,b]=p.useState(ee),I=p.useCallback(async()=>{var S;a(!0);const y=await is(u,c);i(y);const w=await Fe();w&&Q(w);const _=await((S=H)==null?void 0:S.getSetting("defaultFolders"));_&&b(_),a(!1)},[u,c]),L=(y,w)=>{var fe,pe,me,ge;if(!((fe=k.current)!=null&&fe.id)&&!w){console.error("no url to download");return}let _=w??`https://civitai.com/api/download/models/${(pe=k.current)==null?void 0:pe.id}`,S=(me=k.current)==null?void 0:me.name;if(!S&&(S=_.split("/").pop(),!S)){console.error("downloadUrl is malformed");return}d({title:"Installing...",description:S,status:"info",duration:4e3,isClosable:!0}),S!=null&&f(He=>[...He,S??""]);const ue=vt();ue&&(_+=`?token=${ue}`),Xt({file_hash:(ge=k.current)==null?void 0:ge.SHA256,filename:S,save_path:y,url:_}),C(void 0),j()},O=async(y,w)=>{const _=D[w.type];C(y),_==null?x():L(_)},E=async(y,w)=>{var S;const _={...D,[y]:w};await((S=H)==null?void 0:S.upsert({defaultFolders:_})),b(_)};return p.useEffect(()=>{I()},[c]),n.jsxs(n.Fragment,{children:[n.jsxs(tt,{isOpen:!0,onClose:t,blockScrollOnMount:!0,children:[n.jsx(ke,{}),n.jsxs(st,{width:"90%",maxWidth:"90vw",height:"90vh",children:[n.jsxs(Ie,{pb:1,children:[n.jsxs(W,{gap:2,mb:2,alignItems:"center",children:[n.jsx(Ne,{size:"md",mr:2,children:"Models"}),n.jsx(ts,{searchQuery:u,setSearchQuery:g,onSearch:I}),n.jsx(A,{size:"sm",py:1,mr:8,onClick:x,children:"Custom URL Install"}),n.jsx(os,{})]}),n.jsxs(W,{gap:2,wrap:"wrap",children:[n.jsx(A,{size:"sm",py:1,onClick:()=>{l(void 0)},isActive:c==null,children:"All"}),wt.map(y=>n.jsx(A,{size:"sm",py:1,isActive:c===y,onClick:()=>{l(y)},children:y},y)),c&&P[ee[c]]&&n.jsxs(W,{ml:"auto",children:[n.jsx(N,{fontSize:17,whiteSpace:"nowrap",children:"Default Download Folder:"}),n.jsx(Z,{value:D[c],onChange:y=>E(c,y.target.value),children:P[ee[c]].map(y=>n.jsx("option",{value:y,children:y},y))})]})]}),r&&n.jsx(ae,{thickness:"4px",emptyColor:"gray.200",color:"pink.500",size:"lg"})]}),n.jsx(nt,{}),n.jsxs(Le,{overflowY:"auto",children:[n.jsx(W,{wrap:"wrap",children:o==null?void 0:o.map(y=>n.jsx(es,{model:y,onClickInstallModel:O,installing:h},y.id))}),n.jsx(ns,{})]})]})]}),n.jsx(ss,{fileSelected:!!M,isOpen:m,onClose:j,selectFolder:(y,w)=>{L(y,k.current?void 0:w)}})]})}const as=p.lazy(()=>ot(()=>import("./InstallMissingModelsButton-s0RcQvMb.js"),__vite__mapDeps([0,1,2,3,4,5,6])));function ls(){const{setRoute:t,route:e}=p.useContext(Ae);return p.useEffect(()=>{ce.addEventListener("model_list",async s=>{var r;const o=(r=s.detail)==null?void 0:r.map(async a=>{const c=await $.models.get(a.model_name+"@"+a.model_type);if(c!=null&&c.fileHash)return c;let l={id:a.model_name+"@"+a.model_type,modelName:null,fileHash:a.file_hash??null,fileFolder:a.model_type,fileName:a.model_name+a.model_extension};if(!a.file_hash)return l;const d=await le(a.file_hash);return l={...l,modelName:d.modelName??null,civitModelID:d.civitModelID,civitModelVersionID:d.civitModelVersionID,imageUrl:d.imageUrl??null},l}),i=(await Promise.all(o)).filter(a=>a!=null);await $.models.clear(),await $.models.bulkPut(i.filter(a=>a!=null)),window.dispatchEvent(new CustomEvent("model_list_updated"))})},[]),n.jsxs(q,{style:{position:"relative"},children:[n.jsx(A,{size:"sm",backgroundColor:"#434554",color:"white",colorScheme:"blue","aria-label":"My models",onClick:()=>t("modelList"),px:1,height:jt+"px",children:"Models"}),n.jsx("div",{style:{position:"absolute",top:"38px",left:"0px"},children:n.jsx(p.Suspense,{children:n.jsx(as,{})})}),e==="modelList"&&n.jsx(Jt,{onClose:()=>t("root")}),e==="installModels"&&n.jsx(rs,{modelType:"Checkpoint",onclose:()=>t("root")})]})}const ps=Object.freeze(Object.defineProperty({__proto__:null,default:ls},Symbol.toStringTag,{value:"Module"}));export{Be as G,ps as M,Xt as i};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["workspace_web/InstallMissingModelsButton-s0RcQvMb.js","workspace_web/input.js","workspace_web/App-eQybp91e.js","workspace_web/assets/App-JXePnJiV.css","workspace_web/chunk-JARCRF6W-OjDz07lE.js","workspace_web/chunk-7D6N5TE5-lFR77IBa.js","workspace_web/chunk-3RSXBRAN-LXNJ9qB5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}