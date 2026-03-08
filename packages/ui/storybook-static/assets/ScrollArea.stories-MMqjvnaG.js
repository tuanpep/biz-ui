import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-ZH-6pyQh.js";import{P as T,c as j,a as Ee}from"./index-BdafQ8h7.js";import{P as U}from"./index-BlNWsJ36.js";import{u as A}from"./index-Bo-loign.js";import{u as N}from"./index-BzHRfv9E.js";import{u as Te}from"./index-BH6b-3aW.js";import{u as _e}from"./index-B2_tsCGI.js";import{c as De}from"./index-BdQq_4o_.js";import{a as fe}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";function Le(e,r){return l.useReducer((o,s)=>r[o][s]??o,e)}var J="ScrollArea",[xe]=Ee(J),[He,g]=xe(J),be=l.forwardRef((e,r)=>{const{__scopeScrollArea:o,type:s="hover",dir:n,scrollHideDelay:a=600,...c}=e,[i,d]=l.useState(null),[h,m]=l.useState(null),[p,u]=l.useState(null),[f,b]=l.useState(null),[R,G]=l.useState(null),[y,D]=l.useState(0),[q,L]=l.useState(0),[H,E]=l.useState(!1),[W,z]=l.useState(!1),x=A(r,P=>d(P)),v=Te(n);return t.jsx(He,{scope:o,type:s,dir:v,scrollHideDelay:a,scrollArea:i,viewport:h,onViewportChange:m,content:p,onContentChange:u,scrollbarX:f,onScrollbarXChange:b,scrollbarXEnabled:H,onScrollbarXEnabledChange:E,scrollbarY:R,onScrollbarYChange:G,scrollbarYEnabled:W,onScrollbarYEnabledChange:z,onCornerWidthChange:D,onCornerHeightChange:L,children:t.jsx(T.div,{dir:v,...c,ref:x,style:{position:"relative","--radix-scroll-area-corner-width":y+"px","--radix-scroll-area-corner-height":q+"px",...e.style}})})});be.displayName=J;var ge="ScrollAreaViewport",ve=l.forwardRef((e,r)=>{const{__scopeScrollArea:o,children:s,nonce:n,...a}=e,c=g(ge,o),i=l.useRef(null),d=A(r,i,c.onViewportChange);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),t.jsx(T.div,{"data-radix-scroll-area-viewport":"",...a,ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:t.jsx("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:s})})]})});ve.displayName=ge;var S="ScrollAreaScrollbar",$=l.forwardRef((e,r)=>{const{forceMount:o,...s}=e,n=g(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:c}=n,i=e.orientation==="horizontal";return l.useEffect(()=>(i?a(!0):c(!0),()=>{i?a(!1):c(!1)}),[i,a,c]),n.type==="hover"?t.jsx(We,{...s,ref:r,forceMount:o}):n.type==="scroll"?t.jsx(ze,{...s,ref:r,forceMount:o}):n.type==="auto"?t.jsx(Se,{...s,ref:r,forceMount:o}):n.type==="always"?t.jsx(K,{...s,ref:r}):null});$.displayName=S;var We=l.forwardRef((e,r)=>{const{forceMount:o,...s}=e,n=g(S,e.__scopeScrollArea),[a,c]=l.useState(!1);return l.useEffect(()=>{const i=n.scrollArea;let d=0;if(i){const h=()=>{window.clearTimeout(d),c(!0)},m=()=>{d=window.setTimeout(()=>c(!1),n.scrollHideDelay)};return i.addEventListener("pointerenter",h),i.addEventListener("pointerleave",m),()=>{window.clearTimeout(d),i.removeEventListener("pointerenter",h),i.removeEventListener("pointerleave",m)}}},[n.scrollArea,n.scrollHideDelay]),t.jsx(U,{present:o||a,children:t.jsx(Se,{"data-state":a?"visible":"hidden",...s,ref:r})})}),ze=l.forwardRef((e,r)=>{const{forceMount:o,...s}=e,n=g(S,e.__scopeScrollArea),a=e.orientation==="horizontal",c=F(()=>d("SCROLL_END"),100),[i,d]=Le("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return l.useEffect(()=>{if(i==="idle"){const h=window.setTimeout(()=>d("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(h)}},[i,n.scrollHideDelay,d]),l.useEffect(()=>{const h=n.viewport,m=a?"scrollLeft":"scrollTop";if(h){let p=h[m];const u=()=>{const f=h[m];p!==f&&(d("SCROLL"),c()),p=f};return h.addEventListener("scroll",u),()=>h.removeEventListener("scroll",u)}},[n.viewport,a,d,c]),t.jsx(U,{present:o||i!=="hidden",children:t.jsx(K,{"data-state":i==="hidden"?"hidden":"visible",...s,ref:r,onPointerEnter:j(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:j(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),Se=l.forwardRef((e,r)=>{const o=g(S,e.__scopeScrollArea),{forceMount:s,...n}=e,[a,c]=l.useState(!1),i=e.orientation==="horizontal",d=F(()=>{if(o.viewport){const h=o.viewport.offsetWidth<o.viewport.scrollWidth,m=o.viewport.offsetHeight<o.viewport.scrollHeight;c(i?h:m)}},10);return C(o.viewport,d),C(o.content,d),t.jsx(U,{present:s||a,children:t.jsx(K,{"data-state":a?"visible":"hidden",...n,ref:r})})}),K=l.forwardRef((e,r)=>{const{orientation:o="vertical",...s}=e,n=g(S,e.__scopeScrollArea),a=l.useRef(null),c=l.useRef(0),[i,d]=l.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=Pe(i.viewport,i.content),m={...s,sizes:i,onSizesChange:d,hasThumb:h>0&&h<1,onThumbChange:u=>a.current=u,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:u=>c.current=u};function p(u,f){return Xe(u,c.current,i,f)}return o==="horizontal"?t.jsx(Ie,{...m,ref:r,onThumbPositionChange:()=>{if(n.viewport&&a.current){const u=n.viewport.scrollLeft,f=Z(u,i,n.dir);a.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollLeft=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollLeft=p(u,n.dir))}}):o==="vertical"?t.jsx(ke,{...m,ref:r,onThumbPositionChange:()=>{if(n.viewport&&a.current){const u=n.viewport.scrollTop,f=Z(u,i);a.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollTop=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollTop=p(u))}}):null}),Ie=l.forwardRef((e,r)=>{const{sizes:o,onSizesChange:s,...n}=e,a=g(S,e.__scopeScrollArea),[c,i]=l.useState(),d=l.useRef(null),h=A(r,d,a.onScrollbarXChange);return l.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),t.jsx(ye,{"data-orientation":"horizontal",...n,ref:h,sizes:o,style:{bottom:0,left:a.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:a.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":V(o)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.x),onDragScroll:m=>e.onDragScroll(m.x),onWheelScroll:(m,p)=>{if(a.viewport){const u=a.viewport.scrollLeft+m.deltaX;e.onWheelScroll(u),Ae(u,p)&&m.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&s({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:Y(c.paddingLeft),paddingEnd:Y(c.paddingRight)}})}})}),ke=l.forwardRef((e,r)=>{const{sizes:o,onSizesChange:s,...n}=e,a=g(S,e.__scopeScrollArea),[c,i]=l.useState(),d=l.useRef(null),h=A(r,d,a.onScrollbarYChange);return l.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),t.jsx(ye,{"data-orientation":"vertical",...n,ref:h,sizes:o,style:{top:0,right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":V(o)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.y),onDragScroll:m=>e.onDragScroll(m.y),onWheelScroll:(m,p)=>{if(a.viewport){const u=a.viewport.scrollTop+m.deltaY;e.onWheelScroll(u),Ae(u,p)&&m.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&s({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:Y(c.paddingTop),paddingEnd:Y(c.paddingBottom)}})}})}),[Oe,we]=xe(S),ye=l.forwardRef((e,r)=>{const{__scopeScrollArea:o,sizes:s,hasThumb:n,onThumbChange:a,onThumbPointerUp:c,onThumbPointerDown:i,onThumbPositionChange:d,onDragScroll:h,onWheelScroll:m,onResize:p,...u}=e,f=g(S,o),[b,R]=l.useState(null),G=A(r,x=>R(x)),y=l.useRef(null),D=l.useRef(""),q=f.viewport,L=s.content-s.viewport,H=N(m),E=N(d),W=F(p,10);function z(x){if(y.current){const v=x.clientX-y.current.left,P=x.clientY-y.current.top;h({x:v,y:P})}}return l.useEffect(()=>{const x=v=>{const P=v.target;(b==null?void 0:b.contains(P))&&H(v,L)};return document.addEventListener("wheel",x,{passive:!1}),()=>document.removeEventListener("wheel",x,{passive:!1})},[q,b,L,H]),l.useEffect(E,[s,E]),C(b,W),C(f.content,W),t.jsx(Oe,{scope:o,scrollbar:b,hasThumb:n,onThumbChange:N(a),onThumbPointerUp:N(c),onThumbPositionChange:E,onThumbPointerDown:N(i),children:t.jsx(T.div,{...u,ref:G,style:{position:"absolute",...u.style},onPointerDown:j(e.onPointerDown,x=>{x.button===0&&(x.target.setPointerCapture(x.pointerId),y.current=b.getBoundingClientRect(),D.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),z(x))}),onPointerMove:j(e.onPointerMove,z),onPointerUp:j(e.onPointerUp,x=>{const v=x.target;v.hasPointerCapture(x.pointerId)&&v.releasePointerCapture(x.pointerId),document.body.style.webkitUserSelect=D.current,f.viewport&&(f.viewport.style.scrollBehavior=""),y.current=null})})})}),X="ScrollAreaThumb",Ne=l.forwardRef((e,r)=>{const{forceMount:o,...s}=e,n=we(X,e.__scopeScrollArea);return t.jsx(U,{present:o||n.hasThumb,children:t.jsx(Be,{ref:r,...s})})}),Be=l.forwardRef((e,r)=>{const{__scopeScrollArea:o,style:s,...n}=e,a=g(X,o),c=we(X,o),{onThumbPositionChange:i}=c,d=A(r,p=>c.onThumbChange(p)),h=l.useRef(void 0),m=F(()=>{h.current&&(h.current(),h.current=void 0)},100);return l.useEffect(()=>{const p=a.viewport;if(p){const u=()=>{if(m(),!h.current){const f=Ye(p,i);h.current=f,i()}};return i(),p.addEventListener("scroll",u),()=>p.removeEventListener("scroll",u)}},[a.viewport,m,i]),t.jsx(T.div,{"data-state":c.hasThumb?"visible":"hidden",...n,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...s},onPointerDownCapture:j(e.onPointerDownCapture,p=>{const f=p.target.getBoundingClientRect(),b=p.clientX-f.left,R=p.clientY-f.top;c.onThumbPointerDown({x:b,y:R})}),onPointerUp:j(e.onPointerUp,c.onThumbPointerUp)})});Ne.displayName=X;var Q="ScrollAreaCorner",je=l.forwardRef((e,r)=>{const o=g(Q,e.__scopeScrollArea),s=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&s?t.jsx(Me,{...e,ref:r}):null});je.displayName=Q;var Me=l.forwardRef((e,r)=>{const{__scopeScrollArea:o,...s}=e,n=g(Q,o),[a,c]=l.useState(0),[i,d]=l.useState(0),h=!!(a&&i);return C(n.scrollbarX,()=>{var p;const m=((p=n.scrollbarX)==null?void 0:p.offsetHeight)||0;n.onCornerHeightChange(m),d(m)}),C(n.scrollbarY,()=>{var p;const m=((p=n.scrollbarY)==null?void 0:p.offsetWidth)||0;n.onCornerWidthChange(m),c(m)}),h?t.jsx(T.div,{...s,ref:r,style:{width:a,height:i,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Y(e){return e?parseInt(e,10):0}function Pe(e,r){const o=e/r;return isNaN(o)?0:o}function V(e){const r=Pe(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,s=(e.scrollbar.size-o)*r;return Math.max(s,18)}function Xe(e,r,o,s="ltr"){const n=V(o),a=n/2,c=r||a,i=n-c,d=o.scrollbar.paddingStart+c,h=o.scrollbar.size-o.scrollbar.paddingEnd-i,m=o.content-o.viewport,p=s==="ltr"?[0,m]:[m*-1,0];return Ce([d,h],p)(e)}function Z(e,r,o="ltr"){const s=V(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,a=r.scrollbar.size-n,c=r.content-r.viewport,i=a-s,d=o==="ltr"?[0,c]:[c*-1,0],h=De(e,d);return Ce([0,c],[0,i])(h)}function Ce(e,r){return o=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const s=(r[1]-r[0])/(e[1]-e[0]);return r[0]+s*(o-e[0])}}function Ae(e,r){return e>0&&e<r}var Ye=(e,r=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},s=0;return(function n(){const a={left:e.scrollLeft,top:e.scrollTop},c=o.left!==a.left,i=o.top!==a.top;(c||i)&&r(),o=a,s=window.requestAnimationFrame(n)})(),()=>window.cancelAnimationFrame(s)};function F(e,r){const o=N(e),s=l.useRef(0);return l.useEffect(()=>()=>window.clearTimeout(s.current),[]),l.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(o,r)},[o,r])}function C(e,r){const o=N(r);_e(()=>{let s=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(s),s=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(s),n.unobserve(e)}}},[e,o])}var Re=be,Ue=ve,Ve=je;const w=l.forwardRef(({className:e,children:r,...o},s)=>t.jsxs(Re,{ref:s,className:fe("relative overflow-hidden",e),...o,children:[t.jsx(Ue,{className:"h-full w-full rounded-[inherit]",children:r}),t.jsx(_,{}),t.jsx(Ve,{})]}));w.displayName=Re.displayName;const _=l.forwardRef(({className:e,orientation:r="vertical",...o},s)=>t.jsx($,{ref:s,orientation:r,className:fe("flex touch-none select-none transition-colors",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...o,children:t.jsx(Ne,{className:"relative flex-1 rounded-full bg-border"})}));_.displayName=$.displayName;w.__docgenInfo={description:"",methods:[]};_.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};const ar={title:"Components/Layout/ScrollArea",component:w,parameters:{layout:"centered"},tags:["autodocs"]},I={render:()=>t.jsx(w,{className:"h-72 w-48 rounded-md border",children:t.jsxs("div",{className:"p-4",children:[t.jsx("h4",{className:"mb-4 text-sm font-medium leading-none",children:"Tags"}),Array.from({length:20}).map((e,r)=>t.jsxs("div",{className:"text-sm",children:["v1.2.0-beta.",r+1,t.jsx("span",{className:"ml-2 text-muted-foreground",children:new Date(2024,0,r+1).toLocaleDateString()})]},r))]})})},k={render:()=>t.jsxs(w,{className:"w-96 whitespace-nowrap rounded-md border",children:[t.jsxs("div",{className:"flex w-max space-x-4 p-4",children:[t.jsx("div",{className:"h-[250px] w-[200px] rounded-md bg-muted"}),t.jsx("div",{className:"h-[250px] w-[200px] rounded-md bg-muted"}),t.jsx("div",{className:"h-[250px] w-[200px] rounded-md bg-muted"}),t.jsx("div",{className:"h-[250px] w-[200px] rounded-md bg-muted"})]}),t.jsx(_,{orientation:"horizontal"})]})},O={render:()=>t.jsxs(w,{className:"h-72 w-96 rounded-md border",children:[t.jsx("div",{className:"w-max p-4",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b",children:[t.jsx("th",{className:"px-4 py-2 text-left",children:"ID"}),t.jsx("th",{className:"px-4 py-2 text-left",children:"Name"}),t.jsx("th",{className:"px-4 py-2 text-left",children:"Email"}),t.jsx("th",{className:"px-4 py-2 text-left",children:"Role"}),t.jsx("th",{className:"px-4 py-2 text-left",children:"Status"})]})}),t.jsx("tbody",{children:Array.from({length:15}).map((e,r)=>t.jsxs("tr",{className:"border-b",children:[t.jsx("td",{className:"px-4 py-2",children:r+1}),t.jsxs("td",{className:"px-4 py-2",children:["User ",r+1]}),t.jsxs("td",{className:"px-4 py-2",children:["user",r+1,"@example.com"]}),t.jsx("td",{className:"px-4 py-2",children:"Member"}),t.jsx("td",{className:"px-4 py-2",children:"Active"})]},r))})]})}),t.jsx(_,{orientation:"horizontal"})]})},B={render:()=>t.jsx(w,{className:"h-[300px] w-[350px] rounded-md border",children:t.jsx("div",{className:"p-4 space-y-4",children:[{name:"Alice Johnson",message:"Hey, how are you?",time:"2m ago"},{name:"Bob Smith",message:"The meeting is at 3pm",time:"15m ago"},{name:"Carol White",message:"Can you review my PR?",time:"1h ago"},{name:"David Brown",message:"Thanks for the help!",time:"2h ago"},{name:"Eve Davis",message:"Did you see the latest update?",time:"3h ago"},{name:"Frank Miller",message:"Let me check and get back to you",time:"4h ago"},{name:"Grace Wilson",message:"Great work on the project!",time:"5h ago"},{name:"Henry Taylor",message:"I will send the files tomorrow",time:"6h ago"},{name:"Ivy Anderson",message:"Sounds good to me",time:"7h ago"},{name:"Jack Thomas",message:"See you at the standup",time:"8h ago"}].map((e,r)=>t.jsxs("div",{className:"flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium",children:e.name.split(" ").map(o=>o[0]).join("")}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-sm font-medium",children:e.name}),t.jsx("span",{className:"text-xs text-muted-foreground",children:e.time})]}),t.jsx("p",{className:"text-sm text-muted-foreground truncate",children:e.message})]})]},r))})})},M={render:()=>t.jsx(w,{className:"h-80 w-[500px] rounded-md border",children:t.jsxs("div",{className:"p-4 space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium",children:"Photo Gallery"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:Array.from({length:12}).map((e,r)=>t.jsx("div",{className:"aspect-square rounded-md bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center",children:t.jsx("span",{className:"text-xs text-muted-foreground",children:r+1})},r))})]})})};var ee,re,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className="text-sm">
            v1.2.0-beta.{i + 1}
            <span className="ml-2 text-muted-foreground">
              {new Date(2024, 0, i + 1).toLocaleDateString()}
            </span>
          </div>)}
      </div>
    </ScrollArea>
}`,...(te=(re=I.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,se;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,le,ce;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-72 w-96 rounded-md border">
      <div className="w-max p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({
            length: 15
          }).map((_, i) => <tr key={i} className="border-b">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">User {i + 1}</td>
                <td className="px-4 py-2">user{i + 1}@example.com</td>
                <td className="px-4 py-2">Member</td>
                <td className="px-4 py-2">Active</td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...(ce=(le=O.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,me;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[300px] w-[350px] rounded-md border">
      <div className="p-4 space-y-4">
        {[{
        name: 'Alice Johnson',
        message: 'Hey, how are you?',
        time: '2m ago'
      }, {
        name: 'Bob Smith',
        message: 'The meeting is at 3pm',
        time: '15m ago'
      }, {
        name: 'Carol White',
        message: 'Can you review my PR?',
        time: '1h ago'
      }, {
        name: 'David Brown',
        message: 'Thanks for the help!',
        time: '2h ago'
      }, {
        name: 'Eve Davis',
        message: 'Did you see the latest update?',
        time: '3h ago'
      }, {
        name: 'Frank Miller',
        message: 'Let me check and get back to you',
        time: '4h ago'
      }, {
        name: 'Grace Wilson',
        message: 'Great work on the project!',
        time: '5h ago'
      }, {
        name: 'Henry Taylor',
        message: 'I will send the files tomorrow',
        time: '6h ago'
      }, {
        name: 'Ivy Anderson',
        message: 'Sounds good to me',
        time: '7h ago'
      }, {
        name: 'Jack Thomas',
        message: 'See you at the standup',
        time: '8h ago'
      }].map((chat, i) => <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
              {chat.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{chat.name}</span>
                <span className="text-xs text-muted-foreground">{chat.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
            </div>
          </div>)}
      </div>
    </ScrollArea>
}`,...(me=(de=B.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,he,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-80 w-[500px] rounded-md border">
      <div className="p-4 space-y-4">
        <h4 className="text-sm font-medium">Photo Gallery</h4>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({
          length: 12
        }).map((_, i) => <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <span className="text-xs text-muted-foreground">{i + 1}</span>
            </div>)}
        </div>
      </div>
    </ScrollArea>
}`,...(pe=(he=M.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};const lr=["Default","Horizontal","BothDirections","ChatList","ImageGallery"];export{O as BothDirections,B as ChatList,I as Default,k as Horizontal,M as ImageGallery,lr as __namedExportsOrder,ar as default};
