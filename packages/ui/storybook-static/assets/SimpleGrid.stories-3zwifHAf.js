import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-ZH-6pyQh.js";import{a as N}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const o=v.forwardRef(({className:t,columns:i,minChildWidth:d,gap:C="1rem",style:B,...j},b)=>{const I={display:"grid",gap:C,...d?{gridTemplateColumns:`repeat(auto-fit, minmax(${d}, 1fr))`}:i?{gridTemplateColumns:`repeat(${i}, 1fr)`}:{gridTemplateColumns:"repeat(1, 1fr)"},...B};return e.jsx("div",{ref:b,className:N(t),style:I,...j})});o.displayName="SimpleGrid";o.__docgenInfo={description:"",methods:[],displayName:"SimpleGrid",props:{columns:{required:!1,tsType:{name:"number"},description:"Number of columns. If provided, creates a fixed column grid."},minChildWidth:{required:!1,tsType:{name:"string"},description:`Minimum width of each child element. When set, creates an auto-fit
responsive grid that wraps children based on available space.
@example "200px", "15rem"`},gap:{required:!1,tsType:{name:"string"},description:`Gap between grid items.
@default "1rem"`,defaultValue:{value:'"1rem"',computed:!1}}}};const T={title:"Layout/SimpleGrid",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"An equal-width column grid. Supports fixed column count or auto-responsive layout based on minChildWidth."}}}},r=({children:t})=>e.jsx("div",{className:"bg-muted p-4 text-center text-sm font-medium",children:t}),n={render:()=>e.jsxs(o,{columns:3,gap:"1rem",children:[e.jsx(r,{children:"Column 1"}),e.jsx(r,{children:"Column 2"}),e.jsx(r,{children:"Column 3"}),e.jsx(r,{children:"Column 4"}),e.jsx(r,{children:"Column 5"}),e.jsx(r,{children:"Column 6"})]})},s={name:"Responsive (Auto-fit)",render:()=>e.jsxs(o,{minChildWidth:"200px",gap:"1rem",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"}),e.jsx(r,{children:"Item 4"}),e.jsx(r,{children:"Item 5"}),e.jsx(r,{children:"Item 6"}),e.jsx(r,{children:"Item 7"}),e.jsx(r,{children:"Item 8"})]})},m={render:()=>e.jsxs(o,{columns:2,gap:"1.5rem",children:[e.jsxs("div",{className:"border border-border p-4",children:[e.jsx("h3",{className:"font-medium mb-1",children:"Left Column"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content goes here"})]}),e.jsxs("div",{className:"border border-border p-4",children:[e.jsx("h3",{className:"font-medium mb-1",children:"Right Column"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content goes here"})]})]})};var a,l,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3} gap="1rem">
      <Box>Column 1</Box>
      <Box>Column 2</Box>
      <Box>Column 3</Box>
      <Box>Column 4</Box>
      <Box>Column 5</Box>
      <Box>Column 6</Box>
    </SimpleGrid>
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Responsive (Auto-fit)",
  render: () => <SimpleGrid minChildWidth="200px" gap="1rem">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
      <Box>Item 6</Box>
      <Box>Item 7</Box>
      <Box>Item 8</Box>
    </SimpleGrid>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,f,g;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2} gap="1.5rem">
      <div className="border border-border p-4">
        <h3 className="font-medium mb-1">Left Column</h3>
        <p className="text-sm text-muted-foreground">Content goes here</p>
      </div>
      <div className="border border-border p-4">
        <h3 className="font-medium mb-1">Right Column</h3>
        <p className="text-sm text-muted-foreground">Content goes here</p>
      </div>
    </SimpleGrid>
}`,...(g=(f=m.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const w=["FixedColumns","ResponsiveAutoFit","TwoColumns"];export{n as FixedColumns,s as ResponsiveAutoFit,m as TwoColumns,w as __namedExportsOrder,T as default};
