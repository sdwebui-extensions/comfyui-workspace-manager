import{b as y,f as n,i as m,o as p,j as s,g as r,I as i}from"./input.js";var[u,c]=y({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),T=n((e,a)=>{const t=m("Tag",e),l=p(e),o={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...t.container};return s.jsx(u,{value:t,children:s.jsx(r.span,{ref:a,...l,__css:o})})});T.displayName="Tag";var x=n((e,a)=>{const t=c();return s.jsx(r.span,{ref:a,noOfLines:1,...e,__css:t.label})});x.displayName="TagLabel";var f=n((e,a)=>s.jsx(i,{ref:a,verticalAlign:"top",marginEnd:"0.5rem",...e}));f.displayName="TagLeftIcon";var v=n((e,a)=>s.jsx(i,{ref:a,verticalAlign:"top",marginStart:"0.5rem",...e}));v.displayName="TagRightIcon";var g=e=>s.jsx(i,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:s.jsx("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});g.displayName="TagCloseIcon";var h=n((e,a)=>{const{isDisabled:t,children:l,...o}=e,d={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...c().closeButton};return s.jsx(r.button,{ref:a,"aria-label":"close",...o,type:"button",disabled:t,__css:d,children:l||s.jsx(g,{})})});h.displayName="TagCloseButton";export{T};
