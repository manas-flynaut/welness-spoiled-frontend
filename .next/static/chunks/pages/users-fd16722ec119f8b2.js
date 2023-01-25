(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{6242:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var o=t(7462),n=t(3366),i=t(7294),a=t(6010),s=t(7192),l=t(1496),c=t(1657),d=t(5113),u=t(8979);function p(e){return(0,u.Z)("MuiCard",e)}(0,t(6087).Z)("MuiCard",["root"]);var h=t(5893);const f=["className","raised"],m=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"})));var Z=i.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiCard"}),{className:i,raised:l=!1}=t,d=(0,n.Z)(t,f),u=(0,o.Z)({},t,{raised:l}),Z=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"]},p,r)})(u);return(0,h.jsx)(m,(0,o.Z)({className:(0,a.Z)(Z.root,i),elevation:l?8:void 0,ref:r,ownerState:u},d))}))},4964:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(7543)}])},7543:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return he}});var o=t(7568),n=t(6042);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=t(414),l=t(5893),c=t(7294),d=t(6242),u=t(7918),p=t(7906),h=t(3816),f=t(3184),m=t(295),Z=t(8102),x=t(2882),g=t(519),v=t(3321),b=t(7850),S=t(2224),y=t(3366),w=t(7462),j=t(6010),C=t(7192),k=t(7579),M=t(8216),W=t(6983),P=t(6628),D=t(5113),N=t(1657),R=t(1496),A=t(8979),T=t(6087);function I(e){return(0,A.Z)("MuiDialog",e)}var _=(0,T.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var B=(0,c.createContext)({}),E=t(7227),$=t(2734);const O=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],z=(0,R.ZP)(E.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),F=(0,R.ZP)(W.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),J=(0,R.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.container,r[`scroll${(0,M.Z)(t.scroll)}`]]}})((({ownerState:e})=>(0,w.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),X=(0,R.ZP)(D.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.paper,r[`scrollPaper${(0,M.Z)(t.scroll)}`],r[`paperWidth${(0,M.Z)(String(t.maxWidth))}`],t.fullWidth&&r.paperFullWidth,t.fullScreen&&r.paperFullScreen]}})((({theme:e,ownerState:r})=>(0,w.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${_.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${_.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${_.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})));var Y=c.forwardRef((function(e,r){const t=(0,N.Z)({props:e,name:"MuiDialog"}),o=(0,$.Z)(),n={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":a,BackdropComponent:s,BackdropProps:d,children:u,className:p,disableEscapeKeyDown:h=!1,fullScreen:f=!1,fullWidth:m=!1,maxWidth:Z="sm",onBackdropClick:x,onClose:g,open:v,PaperComponent:b=D.Z,PaperProps:S={},scroll:W="paper",TransitionComponent:R=P.Z,transitionDuration:A=n,TransitionProps:T}=t,_=(0,y.Z)(t,O),E=(0,w.Z)({},t,{disableEscapeKeyDown:h,fullScreen:f,fullWidth:m,maxWidth:Z,scroll:W}),Y=(e=>{const{classes:r,scroll:t,maxWidth:o,fullWidth:n,fullScreen:i}=e,a={root:["root"],container:["container",`scroll${(0,M.Z)(t)}`],paper:["paper",`paperScroll${(0,M.Z)(t)}`,`paperWidth${(0,M.Z)(String(o))}`,n&&"paperFullWidth",i&&"paperFullScreen"]};return(0,C.Z)(a,I,r)})(E),L=c.useRef(),K=(0,k.Z)(a),Q=c.useMemo((()=>({titleId:K})),[K]);return(0,l.jsx)(F,(0,w.Z)({className:(0,j.Z)(Y.root,p),BackdropProps:(0,w.Z)({transitionDuration:A,as:s},d),closeAfterTransition:!0,BackdropComponent:z,disableEscapeKeyDown:h,onClose:g,open:v,ref:r,onClick:e=>{L.current&&(L.current=null,x&&x(e),g&&g(e,"backdropClick"))},ownerState:E},_,{children:(0,l.jsx)(R,(0,w.Z)({appear:!0,in:v,timeout:A,role:"presentation"},T,{children:(0,l.jsx)(J,{className:(0,j.Z)(Y.container),onMouseDown:e=>{L.current=e.target===e.currentTarget},ownerState:E,children:(0,l.jsx)(X,(0,w.Z)({as:b,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":K},S,{className:(0,j.Z)(Y.paper,S.className),ownerState:E,children:(0,l.jsx)(B.Provider,{value:Q,children:u})}))})}))}))}));function L(e){return(0,A.Z)("MuiDialogActions",e)}(0,T.Z)("MuiDialogActions",["root","spacing"]);const K=["className","disableSpacing"],Q=(0,R.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,!t.disableSpacing&&r.spacing]}})((({ownerState:e})=>(0,w.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var H=c.forwardRef((function(e,r){const t=(0,N.Z)({props:e,name:"MuiDialogActions"}),{className:o,disableSpacing:n=!1}=t,i=(0,y.Z)(t,K),a=(0,w.Z)({},t,{disableSpacing:n}),s=(e=>{const{classes:r,disableSpacing:t}=e,o={root:["root",!t&&"spacing"]};return(0,C.Z)(o,L,r)})(a);return(0,l.jsx)(Q,(0,w.Z)({className:(0,j.Z)(s.root,o),ownerState:a,ref:r},i))}));function U(e){return(0,A.Z)("MuiDialogContent",e)}(0,T.Z)("MuiDialogContent",["root","dividers"]);function G(e){return(0,A.Z)("MuiDialogTitle",e)}var V=(0,T.Z)("MuiDialogTitle",["root"]);const q=["className","dividers"],ee=(0,R.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.dividers&&r.dividers]}})((({theme:e,ownerState:r})=>(0,w.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${V.root} + &`]:{paddingTop:0}})));var re=c.forwardRef((function(e,r){const t=(0,N.Z)({props:e,name:"MuiDialogContent"}),{className:o,dividers:n=!1}=t,i=(0,y.Z)(t,q),a=(0,w.Z)({},t,{dividers:n}),s=(e=>{const{classes:r,dividers:t}=e,o={root:["root",t&&"dividers"]};return(0,C.Z)(o,U,r)})(a);return(0,l.jsx)(ee,(0,w.Z)({className:(0,j.Z)(s.root,o),ownerState:a,ref:r},i))})),te=t(5861);function oe(e){return(0,A.Z)("MuiDialogContentText",e)}(0,T.Z)("MuiDialogContentText",["root"]);const ne=["children"],ie=(0,R.ZP)(te.Z,{shouldForwardProp:e=>(0,R.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,r)=>r.root})({});var ae=c.forwardRef((function(e,r){const t=(0,N.Z)({props:e,name:"MuiDialogContentText"}),o=(0,y.Z)(t,ne),n=(e=>{const{classes:r}=e,t=(0,C.Z)({root:["root"]},oe,r);return(0,w.Z)({},r,t)})(o);return(0,l.jsx)(ie,(0,w.Z)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:o},t,{classes:n}))}));const se=["className","id"],le=(0,R.ZP)(te.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:"16px 24px",flex:"0 0 auto"});var ce=c.forwardRef((function(e,r){const t=(0,N.Z)({props:e,name:"MuiDialogTitle"}),{className:o,id:n}=t,i=(0,y.Z)(t,se),a=t,s=(e=>{const{classes:r}=e;return(0,C.Z)({root:["root"]},G,r)})(a),{titleId:d=n}=c.useContext(B);return(0,l.jsx)(le,(0,w.Z)({component:"h2",className:(0,j.Z)(s.root,o),ownerState:a,ref:r,variant:"h6",id:d},i))})),de=t(4776),ue=(t(1163),t(8945)),pe=c.forwardRef((function(e,r){return(0,l.jsx)(de.Z,(0,n.Z)({direction:"up",ref:r},e))})),he=function(){var e=(0,c.useState)(0),r=e[0],t=e[1],n=(0,c.useState)(null),i=n[0],y=n[1],w=(0,c.useState)(5),j=w[0],C=w[1],k=(0,c.useState)([]),M=k[0],W=k[1],P=(0,c.useState)(!1),D=P[0],N=P[1],R=(0,c.useState)(void 0),A=(R[0],R[1],a(c.useState(null),2)),T=A[0],I=A[1],_=(0,c.useState)(!1),B=_[0],E=_[1],$=Boolean(T);(0,c.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]);var O=function(){I(null)},z=function(){var e=(0,o.Z)((function(){return(0,s.__generator)(this,(function(e){return console.log(i),I(null),E(!0),[2]}))}));return function(){return e.apply(this,arguments)}}();function F(){return(F=(0,o.Z)((function(){var e,r;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return e={Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NlYjZmYTJhNjg3NmYwYjZiNDI0MDUiLCJleHAiOjE2OTAxMzA2MzEuMzg0LCJpYXQiOjE2NzQ0OTIyMzF9.my7w-04sADjlvbX0QrED7imXfa4BCLzgxxlJObobfeE"},[4,ue.Z.get("http://159.89.165.89:8002/api/v1/user/get-all",{headers:e})];case 1:return(r=t.sent())&&(console.log("datalength",r.data.data),W(r.data.data)),[2]}}))}))).apply(this,arguments)}var J=function(){var e=(0,o.Z)((function(){var e,r,t;return(0,s.__generator)(this,(function(o){switch(o.label){case 0:return console.log(i),e=localStorage.getItem("userInfo"),r=JSON.parse(e),t={Authorization:"Bearer ".concat(r.token)},[4,ue.Z.get("http://127.0.0.1:8000/api/update_status?channel_id=".concat(i),{headers:t})];case 1:return o.sent(),E(!1),N(!D),[2]}}))}));return function(){return e.apply(this,arguments)}}(),X={true:{color:"error"},false:{color:"success"}};return(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(x.Z,{children:(0,l.jsxs)(p.Z,{sx:{minWidth:800},"aria-label":"table in dashboard",children:[(0,l.jsx)(f.Z,{children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(Z.Z,{children:"Image"}),(0,l.jsx)(Z.Z,{children:"Full Name"}),(0,l.jsx)(Z.Z,{children:"Phone Number"}),(0,l.jsx)(Z.Z,{children:"Email"}),(0,l.jsx)(Z.Z,{children:"Status"}),(0,l.jsx)(Z.Z,{children:"Action"})]})}),(0,l.jsx)(m.Z,{children:M.slice(r*j,r*j+j).map((function(e){return(0,l.jsxs)(h.Z,{hover:!0,sx:{"&:last-of-type td, &:last-of-type th":{border:0}},children:[(0,l.jsx)(Z.Z,{children:(0,l.jsx)("img",{src:"https://picsum.photos/id/870/200/300?grayscale&blur=2",width:40,alt:"Player",style:{borderWidth:1,borderColor:"rgba(0,0,0,0.2)",alignItems:"center",justifyContent:"center",width:60,height:60,backgroundColor:"#fff",borderRadius:50}})}),(0,l.jsx)(Z.Z,{children:e.name}),(0,l.jsx)(Z.Z,{children:e.phone}),(0,l.jsx)(Z.Z,{children:e.email}),(0,l.jsx)(Z.Z,{children:(0,l.jsx)(u.Z,{label:1==e.blocked?"Suspended":"Active",color:X[e.blocked].color,sx:{height:24,fontSize:"0.75rem",textTransform:"capitalize","& .MuiChip-label":{fontWeight:500}}})}),(0,l.jsxs)(Z.Z,{children:[(0,l.jsx)(v.Z,{id:"basic-button","aria-controls":$?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":$?"true":void 0,onClick:function(r){return t=r,y(e.id),void I(t.currentTarget);var t},children:"Choose"}),(0,l.jsxs)(b.Z,{id:"basic-menu",anchorEl:T,open:$,onClose:O,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(S.Z,{onClick:function(){return z()},children:1==e.blocked?"Resume":"Suspend"}),(0,l.jsx)(S.Z,{onClick:O,children:"Edit"}),(0,l.jsx)(S.Z,{onClick:z,children:"Delete"})]})]})]},e.id)}))})]})}),(0,l.jsx)(g.Z,{rowsPerPageOptions:[5,10,25,100],component:"div",count:M.length,rowsPerPage:j,page:r,onPageChange:function(e,r){t(r)},onRowsPerPageChange:function(e){C(+e.target.value),t(0)}}),(0,l.jsxs)(Y,{open:B,TransitionComponent:pe,keepMounted:!0,onClose:O,"aria-describedby":"alert-dialog-slide-description",children:[(0,l.jsx)(ce,{children:"Are you Sure?"}),(0,l.jsx)(re,{children:(0,l.jsx)(ae,{id:"alert-dialog-slide-description",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})}),(0,l.jsxs)(H,{children:[(0,l.jsx)(v.Z,{onClick:function(){return E(!1)},children:"Close"}),(0,l.jsx)(v.Z,{onClick:J,children:"Agree"})]})]})]})}}},function(e){e.O(0,[540,795,519,774,888,179],(function(){return r=4964,e(e.s=r);var r}));var r=e.O();_N_E=r}]);