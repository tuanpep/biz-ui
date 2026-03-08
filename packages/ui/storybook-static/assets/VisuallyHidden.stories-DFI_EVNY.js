import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-ZH-6pyQh.js";import{a as v}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const n=y.forwardRef(({className:h,focusable:f=!1,...x},b)=>e.jsx("span",{ref:b,className:v(f?"sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2":"sr-only",h),...x}));n.displayName="VisuallyHidden";n.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden",props:{focusable:{required:!1,tsType:{name:"boolean"},description:`When true, content becomes visible (useful for focus-visible scenarios).
@default false`,defaultValue:{value:"false",computed:!1}}}};const H={title:"Layout/VisuallyHidden",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Hides content visually while keeping it accessible to screen readers. Essential for icons-only buttons, skip links, and other accessibility patterns."}}}},s={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"The following text is visually hidden but readable by screen readers:"}),e.jsx(n,{children:"This text is only for screen readers"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Inspect the DOM to see the hidden content."})]})},t={name:"Icon Button Pattern",render:()=>e.jsxs("button",{className:"inline-flex items-center justify-center h-10 w-10 border border-border hover:bg-muted",type:"button",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]}),e.jsx(n,{children:"Download file"})]})},o={name:"Focusable Skip Link",render:()=>e.jsxs("div",{children:[e.jsx(n,{focusable:!0,children:e.jsx("a",{href:"#main-content",children:"Skip to main content"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Tab into this area to reveal the skip link."})]})};var r,i,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div>
      <p>
        The following text is visually hidden but readable by screen readers:
      </p>
      <VisuallyHidden>This text is only for screen readers</VisuallyHidden>
      <p className="text-sm text-muted-foreground mt-2">
        Inspect the DOM to see the hidden content.
      </p>
    </div>
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Icon Button Pattern",
  render: () => <button className="inline-flex items-center justify-center h-10 w-10 border border-border hover:bg-muted" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
      <VisuallyHidden>Download file</VisuallyHidden>
    </button>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Focusable Skip Link",
  render: () => <div>
      <VisuallyHidden focusable>
        <a href="#main-content">Skip to main content</a>
      </VisuallyHidden>
      <p className="text-sm text-muted-foreground">
        Tab into this area to reveal the skip link.
      </p>
    </div>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Default","WithIconButton","FocusableSkipLink"];export{s as Default,o as FocusableSkipLink,t as WithIconButton,V as __namedExportsOrder,H as default};
