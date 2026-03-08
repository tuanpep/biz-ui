import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-ZH-6pyQh.js";import{c as w}from"./index-B1xZ04RU.js";import{a as g}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const S=w("inline-flex items-center justify-center font-mono border border-border bg-muted text-muted-foreground",{variants:{size:{sm:"h-5 min-w-[1.25rem] px-1 text-[10px]",md:"h-6 min-w-[1.5rem] px-1.5 text-xs",lg:"h-7 min-w-[1.75rem] px-2 text-sm"}},defaultVariants:{size:"md"}}),s=y.forwardRef(({className:f,size:K,...v},N)=>e.jsx("kbd",{ref:N,className:g(S({size:K}),f),...v}));s.displayName="Kbd";s.__docgenInfo={description:"",methods:[],displayName:"Kbd",composes:["VariantProps"]};const _={title:"Data Display/Kbd",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Keyboard shortcut indicator. Displays keys in a visually distinct style."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},n={args:{children:"⌘"}},r={render:()=>e.jsxs("p",{className:"text-sm",children:["Press ",e.jsx(s,{children:"⌘"})," + ",e.jsx(s,{children:"K"})," to open the command palette"]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"text-sm",children:e.jsx(s,{size:"sm",children:"Ctrl"})}),e.jsx("div",{className:"text-sm",children:e.jsx(s,{size:"md",children:"Ctrl"})}),e.jsx("div",{className:"text-sm",children:e.jsx(s,{size:"lg",children:"Ctrl"})})]})},a={render:()=>e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center justify-between w-64",children:[e.jsx("span",{children:"Copy"}),e.jsxs("span",{children:[e.jsx(s,{children:"⌘"})," + ",e.jsx(s,{children:"C"})]})]}),e.jsxs("div",{className:"flex items-center justify-between w-64",children:[e.jsx("span",{children:"Paste"}),e.jsxs("span",{children:[e.jsx(s,{children:"⌘"})," + ",e.jsx(s,{children:"V"})]})]}),e.jsxs("div",{className:"flex items-center justify-between w-64",children:[e.jsx("span",{children:"Undo"}),e.jsxs("span",{children:[e.jsx(s,{children:"⌘"})," + ",e.jsx(s,{children:"Z"})]})]}),e.jsxs("div",{className:"flex items-center justify-between w-64",children:[e.jsx("span",{children:"Save"}),e.jsxs("span",{children:[e.jsx(s,{children:"⌘"})," + ",e.jsx(s,{children:"S"})]})]})]})};var d,i,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "⌘"
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,o,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <p className="text-sm">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette
    </p>
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,x,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="text-sm">
        <Kbd size="sm">Ctrl</Kbd>
      </div>
      <div className="text-sm">
        <Kbd size="md">Ctrl</Kbd>
      </div>
      <div className="text-sm">
        <Kbd size="lg">Ctrl</Kbd>
      </div>
    </div>
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,j,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 text-sm">
      <div className="flex items-center justify-between w-64">
        <span>Copy</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>C</Kbd>
        </span>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Paste</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>V</Kbd>
        </span>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Undo</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>Z</Kbd>
        </span>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Save</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>S</Kbd>
        </span>
      </div>
    </div>
}`,...(u=(j=a.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};const k=["Default","Shortcut","Sizes","CommonShortcuts"];export{a as CommonShortcuts,n as Default,r as Shortcut,t as Sizes,k as __namedExportsOrder,_ as default};
