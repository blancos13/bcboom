import{r as P,j as $,a,H as Je}from"./app-9fcf97ec.js";import{g as Ge,c as Qe,f as K,x as Ze,a6 as et,A as Oe,D as tt,k as Ve,l as Me,z as ae,K as je,h as rt,M as me,X as ot,Y as nt,t as Be,V as Ye,e as at,j as lt,B as m,T as ve,G as st}from"./GuestLayout-595252ba.js";import{B as it}from"./Button-d9266ab3.js";import{_ as s,a as Xe,n as E,o as Ee}from"./dropdown-95653cd9.js";import{s as Re}from"./DataGrid-d84e161b.js";import{a as ct}from"./GameLayout-eecb59bf.js";import{P as ut}from"./PageTemplate-a54fa130.js";import"./Tooltip-a8f128fa.js";const dt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},pt=dt;function we(e){return Qe("MuiSlider",e)}const mt=Ge("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]),Ae=mt,ht=e=>{const{open:t}=e;return{offset:K(t&&Ae.valueLabelOpen),circle:Ae.valueLabelCircle,label:Ae.valueLabelLabel}};function qe(e){const{children:t,className:o,value:l}=e,h=ht(e);return P.exports.cloneElement(t,{className:K(t.props.className)},$(P.exports.Fragment,{children:[t.props.children,a("span",{className:K(h.offset,o),"aria-hidden":!0,children:a("span",{className:h.circle,children:a("span",{className:h.label,children:l})})})]}))}const ft=2;function Ke(e,t){return e-t}function Le(e,t,o){return e==null?t:Math.min(Math.max(t,e),o)}function He(e,t){var o;const{index:l}=(o=e.reduce((h,C,z)=>{const k=Math.abs(t-C);return h===null||k<h.distance||k===h.distance?{distance:k,index:z}:h},null))!=null?o:{};return l}function Te(e,t){if(t.current!==void 0&&e.changedTouches){const o=e;for(let l=0;l<o.changedTouches.length;l+=1){const h=o.changedTouches[l];if(h.identifier===t.current)return{x:h.clientX,y:h.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function _e(e,t,o){return(e-t)*100/(o-t)}function bt(e,t,o){return(o-t)*e+t}function gt(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),l=o[0].split(".")[1];return(l?l.length:0)+parseInt(o[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function vt(e,t,o){const l=Math.round((e-o)/t)*t+o;return Number(l.toFixed(gt(t)))}function We({values:e,newValue:t,index:o}){const l=e.slice();return l[o]=t,l.sort(Ke)}function Ie({sliderRef:e,activeIndex:t,setActive:o}){var l,h;const C=Me(e.current);if(!((l=e.current)!=null&&l.contains(C.activeElement))||Number(C==null||(h=C.activeElement)==null?void 0:h.getAttribute("data-index"))!==t){var z;(z=e.current)==null||z.querySelector(`[type="range"][data-index="${t}"]`).focus()}o&&o(t)}const xt={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},kt=e=>e;let ze;function Ne(){return ze===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?ze=CSS.supports("touch-action","none"):ze=!0),ze}function yt(e){const{"aria-labelledby":t,defaultValue:o,disabled:l=!1,disableSwap:h=!1,isRtl:C=!1,marks:z=!1,max:k=100,min:S=0,name:J,onChange:se,onChangeCommitted:U,orientation:Q="horizontal",ref:he,scale:Z=kt,step:V=1,tabIndex:fe,value:ie}=e,j=P.exports.useRef(),[ee,O]=P.exports.useState(-1),[G,_]=P.exports.useState(-1),[ce,B]=P.exports.useState(!1),Y=P.exports.useRef(0),[F,H]=Ze({controlled:ie,default:o??S,name:"Slider"}),R=se&&((r,n,c)=>{const d=r.nativeEvent||r,M=new d.constructor(d.type,d);Object.defineProperty(M,"target",{writable:!0,value:{value:n,name:J}}),se(M,n,c)}),X=Array.isArray(F);let u=X?F.slice().sort(Ke):[F];u=u.map(r=>Le(r,S,k));const f=z===!0&&V!==null?[...Array(Math.floor((k-S)/V)+1)].map((r,n)=>({value:S+V*n})):z||[],T=f.map(r=>r.value),{isFocusVisibleRef:v,onBlur:b,onFocus:x,ref:xe}=et(),[be,te]=P.exports.useState(-1),L=P.exports.useRef(),re=Oe(xe,L),ue=Oe(he,re),oe=r=>n=>{var c;const d=Number(n.currentTarget.getAttribute("data-index"));x(n),v.current===!0&&te(d),_(d),r==null||(c=r.onFocus)==null||c.call(r,n)},ge=r=>n=>{var c;b(n),v.current===!1&&te(-1),_(-1),r==null||(c=r.onBlur)==null||c.call(r,n)};tt(()=>{if(l&&L.current.contains(document.activeElement)){var r;(r=document.activeElement)==null||r.blur()}},[l]),l&&ee!==-1&&O(-1),l&&be!==-1&&te(-1);const de=r=>n=>{var c;(c=r.onChange)==null||c.call(r,n);const d=Number(n.currentTarget.getAttribute("data-index")),M=u[d],p=T.indexOf(M);let i=n.target.valueAsNumber;if(f&&V==null&&(i=i<M?T[p-1]:T[p+1]),i=Le(i,S,k),f&&V==null){const A=T.indexOf(u[d]);i=i<u[d]?T[A-1]:T[A+1]}if(X){h&&(i=Le(i,u[d-1]||-1/0,u[d+1]||1/0));const A=i;i=We({values:u,newValue:i,index:d});let g=d;h||(g=i.indexOf(A)),Ie({sliderRef:L,activeIndex:g})}H(i),te(d),R&&R(n,i,d),U&&U(n,i)},I=P.exports.useRef();let ne=Q;C&&Q==="horizontal"&&(ne+="-reverse");const W=({finger:r,move:n=!1})=>{const{current:c}=L,{width:d,height:M,bottom:p,left:i}=c.getBoundingClientRect();let A;ne.indexOf("vertical")===0?A=(p-r.y)/M:A=(r.x-i)/d,ne.indexOf("-reverse")!==-1&&(A=1-A);let g;if(g=bt(A,S,k),V)g=vt(g,V,S);else{const De=He(T,g);g=T[De]}g=Le(g,S,k);let w=0;if(X){n?w=I.current:w=He(u,g),h&&(g=Le(g,u[w-1]||-1/0,u[w+1]||1/0));const De=g;g=We({values:u,newValue:g,index:w}),h&&n||(w=g.indexOf(De),I.current=w)}return{newValue:g,activeIndex:w}},y=Ve(r=>{const n=Te(r,j);if(!n)return;if(Y.current+=1,r.type==="mousemove"&&r.buttons===0){D(r);return}const{newValue:c,activeIndex:d}=W({finger:n,move:!0});Ie({sliderRef:L,activeIndex:d,setActive:O}),H(c),!ce&&Y.current>ft&&B(!0),R&&c!==F&&R(r,c,d)}),D=Ve(r=>{const n=Te(r,j);if(B(!1),!n)return;const{newValue:c}=W({finger:n,move:!0});O(-1),r.type==="touchend"&&_(-1),U&&U(r,c),j.current=void 0,N()}),q=Ve(r=>{if(l)return;Ne()||r.preventDefault();const n=r.changedTouches[0];n!=null&&(j.current=n.identifier);const c=Te(r,j);if(c!==!1){const{newValue:M,activeIndex:p}=W({finger:c});Ie({sliderRef:L,activeIndex:p,setActive:O}),H(M),R&&R(r,M,p)}Y.current=0;const d=Me(L.current);d.addEventListener("touchmove",y),d.addEventListener("touchend",D)}),N=P.exports.useCallback(()=>{const r=Me(L.current);r.removeEventListener("mousemove",y),r.removeEventListener("mouseup",D),r.removeEventListener("touchmove",y),r.removeEventListener("touchend",D)},[D,y]);P.exports.useEffect(()=>{const{current:r}=L;return r.addEventListener("touchstart",q,{passive:Ne()}),()=>{r.removeEventListener("touchstart",q,{passive:Ne()}),N()}},[N,q]),P.exports.useEffect(()=>{l&&N()},[l,N]);const ke=r=>n=>{var c;if((c=r.onMouseDown)==null||c.call(r,n),l||n.defaultPrevented||n.button!==0)return;n.preventDefault();const d=Te(n,j);if(d!==!1){const{newValue:p,activeIndex:i}=W({finger:d});Ie({sliderRef:L,activeIndex:i,setActive:O}),H(p),R&&R(n,p,i)}Y.current=0;const M=Me(L.current);M.addEventListener("mousemove",y),M.addEventListener("mouseup",D)},pe=_e(X?u[0]:S,S,k),ye=_e(u[u.length-1],S,k)-pe,Ce=(r={})=>{const n={onMouseDown:ke(r||{})},c=s({},r,n);return s({ref:ue},c)},Se=r=>n=>{var c;(c=r.onMouseOver)==null||c.call(r,n);const d=Number(n.currentTarget.getAttribute("data-index"));_(d)},Pe=r=>n=>{var c;(c=r.onMouseLeave)==null||c.call(r,n),_(-1)};return{active:ee,axis:ne,axisProps:xt,dragging:ce,focusedThumbIndex:be,getHiddenInputProps:(r={})=>{var n;const c={onChange:de(r||{}),onFocus:oe(r||{}),onBlur:ge(r||{})},d=s({},r,c);return s({tabIndex:fe,"aria-labelledby":t,"aria-orientation":Q,"aria-valuemax":Z(k),"aria-valuemin":Z(S),name:J,type:"range",min:e.min,max:e.max,step:(n=e.step)!=null?n:void 0,disabled:l},d,{style:s({},pt,{direction:C?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Ce,getThumbProps:(r={})=>{const n={onMouseOver:Se(r||{}),onMouseLeave:Pe(r||{})};return s({},r,n)},marks:f,open:G,range:X,trackLeap:ye,trackOffset:pe,values:u}}const St=["aria-label","aria-valuetext","aria-labelledby","className","component","classes","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","slotProps","slots"],Ue=e=>e,Lt=e=>{const{disabled:t,dragging:o,marked:l,orientation:h,track:C,classes:z}=e;return rt({root:["root",t&&"disabled",o&&"dragging",l&&"marked",h==="vertical"&&"vertical",C==="inverted"&&"trackInverted",C===!1&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]},we,z)},wt=({children:e})=>e,Ct=P.exports.forwardRef(function(t,o){var l,h,C,z,k,S,J;const{"aria-label":se,"aria-valuetext":U,"aria-labelledby":Q,className:he,component:Z,classes:V,disableSwap:fe=!1,disabled:ie=!1,getAriaLabel:j,getAriaValueText:ee,marks:O=!1,max:G=100,min:_=0,orientation:ce="horizontal",scale:B=Ue,step:Y=1,track:F="normal",valueLabelDisplay:H="off",valueLabelFormat:R=Ue,isRtl:X=!1,slotProps:u={},slots:f={}}=t,T=Xe(t,St),v=s({},t,{marks:O,classes:V,disabled:ie,isRtl:X,max:G,min:_,orientation:ce,scale:B,step:Y,track:F,valueLabelDisplay:H,valueLabelFormat:R}),{axisProps:b,getRootProps:x,getHiddenInputProps:xe,getThumbProps:be,open:te,active:L,axis:re,range:ue,focusedThumbIndex:oe,dragging:ge,marks:de,values:I,trackOffset:ne,trackLeap:W}=yt(s({},v,{ref:o}));v.marked=de.length>0&&de.some(p=>p.label),v.dragging=ge,v.focusedThumbIndex=oe;const y=Lt(v),D=(l=Z??f.root)!=null?l:"span",q=ae({elementType:D,getSlotProps:x,externalSlotProps:u.root,externalForwardedProps:T,ownerState:v,className:[y.root,he]}),N=(h=f.rail)!=null?h:"span",ke=ae({elementType:N,externalSlotProps:u.rail,ownerState:v,className:y.rail}),pe=(C=f.track)!=null?C:"span",ye=ae({elementType:pe,externalSlotProps:u.track,additionalProps:{style:s({},b[re].offset(ne),b[re].leap(W))},ownerState:v,className:y.track}),Ce=(z=f.thumb)!=null?z:"span",Se=ae({elementType:Ce,getSlotProps:be,externalSlotProps:u.thumb,ownerState:v}),Pe=(k=f.valueLabel)!=null?k:qe,Fe=ae({elementType:Pe,externalSlotProps:u.valueLabel,ownerState:v}),$e=(S=f.mark)!=null?S:"span",r=ae({elementType:$e,externalSlotProps:u.mark,ownerState:v,className:y.mark}),n=(J=f.markLabel)!=null?J:"span",c=ae({elementType:n,externalSlotProps:u.markLabel,ownerState:v}),d=f.input||"input",M=ae({elementType:d,getSlotProps:xe,externalSlotProps:u.input,ownerState:v});return $(D,s({},q,{children:[a(N,s({},ke)),a(pe,s({},ye)),de.filter(p=>p.value>=_&&p.value<=G).map((p,i)=>{const A=_e(p.value,_,G),g=b[re].offset(A);let w;return F===!1?w=I.indexOf(p.value)!==-1:w=F==="normal"&&(ue?p.value>=I[0]&&p.value<=I[I.length-1]:p.value<=I[0])||F==="inverted"&&(ue?p.value<=I[0]||p.value>=I[I.length-1]:p.value>=I[0]),$(P.exports.Fragment,{children:[a($e,s({"data-index":i},r,!je($e)&&{markActive:w},{style:s({},g,r.style),className:K(r.className,w&&y.markActive)})),p.label!=null?a(n,s({"aria-hidden":!0,"data-index":i},c,!je(n)&&{markLabelActive:w},{style:s({},g,c.style),className:K(y.markLabel,c.className,w&&y.markLabelActive),children:p.label})):null]},i)}),I.map((p,i)=>{const A=_e(p,_,G),g=b[re].offset(A),w=H==="off"?wt:Pe;return a(P.exports.Fragment,{children:a(w,s({},!je(w)&&{valueLabelFormat:R,valueLabelDisplay:H,value:typeof R=="function"?R(B(p),i):R,index:i,open:te===i||L===i||H==="on",disabled:ie},Fe,{className:K(y.valueLabel,Fe.className),children:a(Ce,s({"data-index":i,"data-focusvisible":oe===i},Se,{className:K(y.thumb,Se.className,L===i&&y.active,oe===i&&y.focusVisible),style:s({},g,{pointerEvents:fe&&L!==i?"none":void 0},Se.style),children:a(d,s({"data-index":i,"aria-label":j?j(i):se,"aria-valuenow":B(p),"aria-labelledby":Q,"aria-valuetext":ee?ee(B(p),i):U,value:I[i]},M))}))}))},i)})]}))}),Pt=Ct,$t=["component","components","componentsProps","color","size","slotProps","slots"],le=s({},Ae,Ge("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),Rt=me("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`color${E(o.color)}`],o.size!=="medium"&&t[`size${E(o.size)}`],o.marked&&t.marked,o.orientation==="vertical"&&t.vertical,o.track==="inverted"&&t.trackInverted,o.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>s({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&s({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&s({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${le.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${le.dragging}`]:{[`& .${le.thumb}, & .${le.track}`]:{transition:"none"}}})),Tt=me("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>s({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),It=me("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?ot(e.palette[t.color].main,.62):nt(e.palette[t.color].main,.5);return s({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:o,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:o})}),zt=me("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.thumb,t[`thumbColor${E(o.color)}`],o.size!=="medium"&&t[`thumbSize${E(o.size)}`]]}})(({theme:e,ownerState:t})=>s({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":s({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${le.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:Be(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${le.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:Be(e.palette[t.color].main,.16)}`},[`&.${le.disabled}`]:{"&:hover":{boxShadow:"none"}}})),Mt=me(qe,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>s({[`&.${le.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:"30px",top:"24px",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"25%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),At=me("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Ye(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:o}=e;return[t.mark,o&&t.markActive]}})(({theme:e,ownerState:t,markActive:o})=>s({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},o&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),_t=me("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Ye(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:o})=>s({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},o&&{color:(e.vars||e).palette.text.primary})),Ft=e=>{const{color:t,size:o,classes:l={}}=e;return s({},l,{root:K(l.root,we(`color${E(t)}`),l[`color${E(t)}`],o&&[we(`size${E(o)}`),l[`size${E(o)}`]]),thumb:K(l.thumb,we(`thumbColor${E(t)}`),l[`thumbColor${E(t)}`],o&&[we(`thumbSize${E(o)}`),l[`thumbSize${E(o)}`]])})},Dt=P.exports.forwardRef(function(t,o){var l,h,C,z,k,S,J,se,U,Q,he,Z,V,fe,ie,j,ee,O,G,_,ce,B,Y;const F=at({props:t,name:"MuiSlider"}),R=lt().direction==="rtl",{component:X="span",components:u={},componentsProps:f={},color:T="primary",size:v="medium",slotProps:b,slots:x}=F,xe=Xe(F,$t),be=s({},F,{color:T,size:v}),te=Ft(be),L=(l=(h=x==null?void 0:x.root)!=null?h:u.Root)!=null?l:Rt,re=(C=(z=x==null?void 0:x.rail)!=null?z:u.Rail)!=null?C:Tt,ue=(k=(S=x==null?void 0:x.track)!=null?S:u.Track)!=null?k:It,oe=(J=(se=x==null?void 0:x.thumb)!=null?se:u.Thumb)!=null?J:zt,ge=(U=(Q=x==null?void 0:x.valueLabel)!=null?Q:u.ValueLabel)!=null?U:Mt,de=(he=(Z=x==null?void 0:x.mark)!=null?Z:u.Mark)!=null?he:At,I=(V=(fe=x==null?void 0:x.markLabel)!=null?fe:u.MarkLabel)!=null?V:_t,ne=(ie=x==null?void 0:x.input)!=null?ie:u.Input,W=(j=b==null?void 0:b.root)!=null?j:f.root,y=(ee=b==null?void 0:b.rail)!=null?ee:f.rail,D=(O=b==null?void 0:b.track)!=null?O:f.track,q=(G=b==null?void 0:b.thumb)!=null?G:f.thumb,N=(_=b==null?void 0:b.valueLabel)!=null?_:f.valueLabel,ke=(ce=b==null?void 0:b.mark)!=null?ce:f.mark,pe=(B=b==null?void 0:b.markLabel)!=null?B:f.markLabel,ye=(Y=b==null?void 0:b.input)!=null?Y:f.input;return a(Pt,s({},xe,{isRtl:R,slots:{root:L,rail:re,track:ue,thumb:oe,valueLabel:ge,mark:de,markLabel:I,input:ne},slotProps:s({},f,{root:s({},W,Re(L)&&{as:X,ownerState:s({},W==null?void 0:W.ownerState,{color:T,size:v})}),rail:y,thumb:s({},q,Re(oe)&&{ownerState:s({},q==null?void 0:q.ownerState,{color:T,size:v})}),track:s({},D,Re(ue)&&{ownerState:s({},D==null?void 0:D.ownerState,{color:T,size:v})}),valueLabel:s({},N,Re(ge)&&{ownerState:s({},N==null?void 0:N.ownerState,{color:T,size:v})}),mark:ke,markLabel:pe,input:ye}),classes:te,ref:o}))}),Vt=Dt,jt=()=>$(m,{sx:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.375rem"},children:[a(m,{sx:{width:{xs:"59%",md:"49%"},height:"4rem",borderRadius:"0.625rem",background:"#333965",padding:".4125rem"},children:$(m,{sx:{height:"100%",width:"100%",display:"flex",justifyContent:"space-between",alignContent:"center"},children:[$(m,{sx:{width:"15%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a(m,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"Min"}),a(m,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"Max"})]}),a(m,{sx:{width:"65%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:a(m,{sx:{fontSize:"1rem",fontWeight:800,textAlign:"center"},children:"R$ 0.0000000"})}),$(m,{sx:{width:"15%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a(m,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"1/2"}),a(m,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"2x"})]})]})}),a(it,{sx:{width:{xs:"39%",md:"49%"},height:"4rem",borderRadius:"0.625rem",background:"#333965",fontSize:"1.375rem",fontWeight:800,backgroundColor:"#3585ff",color:"#FFFFFF"},children:"BET"})]}),Nt="/build/assets/dice-ee367221.svg",Et="/build/assets/cross-d0610289.svg",Ot="/build/assets/arrow-8e10d92f.svg",Bt=[0,25,50,75,100],Ht=Ee("img")(()=>({width:"4.1875rem",height:"4.1875rem"})),Wt=Ee(Vt)({color:"red",height:8,"& .MuiSlider-track":{border:"none",color:"#3586FF"},"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#3586FF",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&:before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),Ut=()=>$(m,{sx:{width:"98%",mt:".625rem"},children:[a(m,{sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:a(Ht,{src:Nt})}),a(m,{sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",mt:"1.5625rem"},children:a(m,{sx:{background:"#131839",borderRadius:"1.875rem",display:"flex",justifyContent:"center",alignItems:"center",height:"3rem",width:"100%",paddingLeft:"2.6875rem",paddingRight:"2.6875rem"},children:a(Wt,{valueLabelDisplay:"auto","aria-label":"pretto slider",defaultValue:50})})}),a(m,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"1.375rem",paddingTop:"1rem"},children:Bt.map((e,t)=>a(m,{sx:{width:"20%",display:"flex",fontSize:"1.125rem",fontWeight:700,color:"white",alignItems:"center",justifyContent:`${t===0?"":"center"}`,pl:`${t===0?"2.5rem":0}`},children:e}))}),$(m,{sx:{height:"6rem",width:"100%",mt:"3.125rem",pl:"1.4375rem",pr:"1.4375rem",display:"flex",justifyContent:"space-between",borderRadius:".625rem",background:"#272C4B",px:"1.0625rem",alignItems:"center"},children:[$(m,{sx:{width:"28%",height:"88%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a(ve,{sx:{color:"white",fontSize:"0.875rem",fontWeight:700},children:"Payout"}),a(m,{sx:{height:"3.5rem",borderRadius:".625rem",background:"#333965",display:"flex",justifyContent:"center",alignItems:"center",padding:".625rem"},children:$(m,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[a(ve,{sx:{fontWeight:700,fontSize:".875rem"},children:"1.98x"}),a("img",{src:Et})]})})]}),$(m,{sx:{width:"28%",height:"88%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a(ve,{sx:{color:"white",fontSize:"0.875rem",fontWeight:700},children:"Roll Under"}),a(m,{sx:{height:"3.5rem",borderRadius:".625rem",background:"#333965",display:"flex",justifyContent:"center",alignItems:"center",padding:".625rem"},children:$(m,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[a(ve,{sx:{fontWeight:700,fontSize:".875rem"},children:"51.00"}),a("img",{src:Ot})]})})]}),$(m,{sx:{width:"38%",height:"88%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a(ve,{sx:{color:"white",fontSize:"0.875rem",fontWeight:700},children:"Win Chance"}),a(m,{sx:{height:"3.5rem",borderRadius:".625rem",background:"#333965",display:"flex",justifyContent:"center",alignItems:"center",padding:".625rem"},children:$(m,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[$(ve,{sx:{fontWeight:700,fontSize:".875rem"},children:["51",a(m,{component:"span",sx:{color:"#3586FF"},children:"%"})]}),a(m,{sx:{height:"1.625rem",width:"9.4375rem",background:"#535D9D",borderRadius:"0.8125rem",display:"flex",justifyContent:"center"},children:a(m,{sx:{height:"100%",width:"95%",display:"flex"},children:["Min","-5","+5","Max"].map((e,t)=>a(m,{sx:{width:"25%",cursor:"pointer",color:"#A6B0DA",fontWeight:700,fontSize:".75rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",borderRight:`${t!==3?"2px solid #2E3365":""}`},children:e}))})})]})})]})]})]}),Gt=Ee("div")(()=>({background:"#1D2036",width:"98%",marginLeft:"auto",marginRight:"auto",marginTop:"2rem",paddingTop:"2.125rem",paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"2.125rem",height:"80%",position:"relative"})),tr=()=>$("div",{children:[a(Je,{title:"Games Dinosaur"}),a(st,{children:a(ut,{innerHeader:!0,children:a(Gt,{children:a(ct,{GameFrameText:"Dice",GameFrame:Ut,ButtonGrid:jt,customFrameHeader:!0,innerHeader:!0,customFrameBoxStyles:{height:"23.25rem"}})})})})]});export{tr as default};
