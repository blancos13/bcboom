import{b as n,a as r,C as l,s as i,j as o,F as s,H as c}from"./app-62d2fc14.js";import{a as p,p as C,n as h,P as g}from"./PageTemplate-0af280d5.js";import{G as u,g as F}from"./GamesCarouseCard-974a8add.js";import"./howler-5aa7ec92.js";const f="/build/assets/raceheader-35cc5469.png",y="/build/assets/raceheadermobile-a6528eed.png",x=({cardItems:e})=>{const t=e[0],{isMobile:d}=n();return r(p,{item:t,index:0,children:r("div",{style:{marginTop:"60px",zIndex:500,position:"relative"},children:r(l,{autoplay:!1,rowPerCount:d?1:4,paging:!1,prevArrow:r("img",{src:C,alt:"prev"}),nextArrow:r("img",{src:h,alt:"next"}),children:t.cards.map((m,a)=>r("div",{className:"testimoni--wrapper",children:r(u,{card:m,index:a},a)}))})})})},A=i("div")(()=>({marginLeft:"auto",marginRight:"auto",paddingTop:"2.125rem",width:"100%",height:"100%"})),w=i("div")(({isMobile:e})=>({background:`url(${e?y:f})`,borderRadius:"10px",backgroundSize:"cover",backgroundRepeat:"no-repeat, no-repeat",padding:e?"1.25rem":"4.125rem",paddingLeft:e?"1.25rem":"4.125rem",margin:"0 25px","& p":{color:"#fff",lineHeight:"2.25rem",fontWeight:"900","&:nth-child(1)":{fontSize:e?"1.4rem":"2.25rem",paddingBottom:e?".5rem":"1.5rem"},"&:nth-child(2)":{fontSize:e?"1.4rem":"3.5rem",paddingBottom:e?".5rem":"2rem",color:"#5AA2FF"},"&:nth-child(3)":{fontSize:e?".7rem":".9rem",lineHeight:"1.2rem",fontWeight:"medium",color:"#9BA6D4",width:e?"70%":"30%","& span":{color:"#FFEF61"}}}})),k=()=>{const e=[{title:"Active Races",icon:F,imageWidth:"534px",imageHeight:"175px",perColumn:3,margin:"10px",cards:[{title:"weekly card",cardColors:["#32CCEE","#3586FF"]},{title:"weekly tournament",cardColors:["#F9AD3C","#F93C56"]},{title:"tournament of the month",cardColors:["#3CF97C","#16B5D8"]},{title:"tournament of the day",cardColors:["#A63CF9","#6D3CF9"]},{title:"weekly card",cardColors:["#32CCEE","#3586FF"]},{title:"weekly tournament",cardColors:["#F9AD3C","#F93C56"]},{title:"tournament of the month",cardColors:["#3CF97C","#16B5D8"]},{title:"tournament of the day",cardColors:["#A63CF9","#6D3CF9"]},{title:"weekly card",cardColors:["#32CCEE","#3586FF"]},{title:"weekly tournament",cardColors:["#F9AD3C","#F93C56"]},{title:"tournament of the month",cardColors:["#3CF97C","#16B5D8"]},{title:"tournament of the day",cardColors:["#A63CF9","#6D3CF9"]}]}],{isMobile:t}=n();return o(s,{children:[r(c,{title:"Promotions"}),o(g,{innerHeader:!0,children:[r(A,{children:o(w,{isMobile:t,children:[r("p",{children:"WEEKLY"}),r("p",{children:"TOURNAMENTS"}),o("p",{children:["Participate in numerous tournaments and complete againts other players for a hefty"," ",r("span",{children:"Prize Pool"})]})]})}),r(x,{cardItems:e})]})]})};export{k as default};
