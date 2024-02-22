import{G as U,I as C}from"./chunk-JARCRF6W-1wZ_35Xk.js";import{f as x,D as b,j as p,aa as v,r as h}from"./input.js";import{ac as y,h as S,a9 as k}from"./App-09wdM9e8.js";var E=x(function(r,s){const{columns:l,spacingX:a,spacingY:n,spacing:i,minChildWidth:e,...c}=r,o=b(),f=e?A(e,o):M(l);return p.jsx(U,{ref:s,gap:i,columnGap:a,rowGap:n,templateColumns:f,...c})});E.displayName="SimpleGrid";function V(t){return typeof t=="number"?`${t}px`:t}function A(t,r){return y(t,s=>{const l=v("sizes",s,V(s))(r);return s===null?null:`repeat(auto-fit, minmax(${l}, 1fr))`})}function M(t){return y(t,r=>r===null?null:`repeat(${r}, minmax(0, 1fr))`)}var R=S("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]);function O(t){return new Promise((r,s)=>{const l=new FileReader;l.onload=a=>{const n=new Uint8Array(a.target.result),i=new DataView(n.buffer);i.getUint32(0)!==2303741511&&(console.error("Not a valid PNG file"),s());let e=8;const c={};for(;e<n.length;){const o=i.getUint32(e),f=String.fromCharCode(...n.slice(e+4,e+8));if(f==="tEXt"||f=="comf"){let u=e+8;for(;n[u]!==0;)u++;const g=String.fromCharCode(...n.slice(e+8,u)),d=n.slice(u+1,e+8+o),m=Array.from(d).map(w=>String.fromCharCode(w)).join("");c[g]=m}e+=12+o}r(c)},l.readAsArrayBuffer(t)})}function _(t){const r=new Uint16Array(t.slice(0,2))[0]===18761;function s(i,e,c){const o=t.slice(i,i+c);if(c===2)return new DataView(o.buffer,o.byteOffset,o.byteLength).getUint16(0,e);if(c===4)return new DataView(o.buffer,o.byteOffset,o.byteLength).getUint32(0,e)}const l=s(4,r,4);function a(i){const e=s(i,r,2),c={};for(let o=0;o<e;o++){const f=i+2+o*12,u=s(f,r,2),g=s(f+2,r,2),d=s(f+4,r,4),m=s(f+8,r,4);let w;g===2&&(w=String.fromCharCode(...t.slice(m,m+d-1))),c[u]=w}return c}return a(l)}function G(t){return new Promise(r=>{const s=new FileReader;s.onload=l=>{var c;const a=new Uint8Array((c=l==null?void 0:l.target)==null?void 0:c.result),n=new DataView(a.buffer);if(n.getUint32(0)!==1380533830||n.getUint32(8)!==1464156752){console.error("Not a valid WEBP file"),r();return}let i=12;const e={};for(;i<a.length;){const o=n.getUint32(i+4,!0);if(String.fromCharCode(...a.slice(i,i+4))==="EXIF"){String.fromCharCode(...a.slice(i+8,i+8+6))=="Exif\0\0"&&(i+=6);const u=_(a.slice(i+8,i+8+o));for(const g in u){const d=u[g],m=d.indexOf(":");e[d.slice(0,m)]=d.slice(m+1)}}i+=8+o}r(e)},s.readAsArrayBuffer(t)})}function N(t){return!!(t!=null&&t.endsWith(".webm")||t!=null&&t.endsWith(".mp4"))}function $(t){return new Promise(r=>{const s=new FileReader;s.onload=l=>{const a=new Uint8Array(l.target.result),n=new DataView(a.buffer),i=new TextDecoder;if(n.getUint32(0)==440786851){let e=12;for(;e<a.length-16;){if(n.getUint16(e)==17543&&String.fromCharCode(...a.slice(e-7,e))==="COMMENT"){const o=n.getUint32(e+2),f=Math.clz32(o)+1;if(f<4){const u=o>>8*(4-f)&~(1<<7*f),g=i.decode(a.slice(e+2+f,e+2+f+u)),d=JSON.parse(g);r(d);return}}e+=1}}else if(n.getUint32(4)==1718909296&&n.getUint32(8)==1769172845){let e=a.length-4;for(;e>16;){if(n.getUint32(e)==1684108385&&n.getUint32(e-8)==2841865588){n.getUint32(e+4),n.getUint32(e+8);const c=n.getUint32(e-4)-4*4,o=i.decode(a.slice(e+12,e+12+c)),f=JSON.parse(o);r(f);return}e-=1}}else{console.error("Unknown magic: "+n.getUint32(0)),r();return}},s.readAsArrayBuffer(t)})}function F({mediaLocalPath:t,size:r,isPreview:s,autoPlay:l,hideBrokenImage:a,onBrokenLink:n}){const[i,e]=h.useState(!0);return h.useEffect(()=>{a&&(async()=>{try{if(!(await fetch(s?`/workspace/preview_media?filename=${t}`:`/workspace/view_media?filename=${t}`)).ok)throw new Error("Media not found");e(!0)}catch{e(!1),n==null||n()}})()},[]),i?k(t)?p.jsx(C,{borderRadius:3,boxSize:`${r}px`,objectFit:"cover",src:`/workspace/view_media?filename=${t}`,alt:"workflow image renamed or moved from output folder"}):p.jsx("video",{width:r,height:r,src:`/workspace/view_media?filename=${t}`,loop:!0,autoPlay:l??!1,muted:!0,children:p.jsx("track",{kind:"captions"})}):null}export{R as I,F as M,E as S,$ as a,G as b,O as g,N as i};
