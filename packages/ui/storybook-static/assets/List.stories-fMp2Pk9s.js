import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-ZH-6pyQh.js";import{c as k}from"./index-B1xZ04RU.js";import{a as S}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const R=k("",{variants:{variant:{unordered:"list-none",ordered:"list-decimal list-inside",unstyled:"list-none p-0 m-0"},spacing:{sm:"space-y-1",md:"space-y-2",lg:"space-y-3"}},defaultVariants:{variant:"unordered",spacing:"md"}}),s=y.forwardRef(({className:d,variant:i,spacing:m,ordered:r=!1,...l},w)=>{const v=r?"ol":"ul";return e.jsx(v,{ref:w,className:S(R({variant:r?"ordered":i,spacing:m}),d),...l})});s.displayName="List";const t=y.forwardRef(({className:d,icon:i,children:m,...r},l)=>e.jsxs("li",{ref:l,className:S("flex items-start text-sm",d),...r,children:[i&&e.jsx("span",{className:"mr-2 mt-0.5 flex-shrink-0 text-muted-foreground",children:i}),e.jsx("span",{className:"flex-1",children:m})]}));t.displayName="ListItem";s.__docgenInfo={description:"",methods:[],displayName:"List",props:{ordered:{required:!1,tsType:{name:"boolean"},description:"Render as ordered list",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the content"}}};const D={title:"Data Display/List",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Ordered and unordered lists with optional icons and consistent spacing."}}},argTypes:{spacing:{control:"select",options:["sm","md","lg"]}}},n=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),o={render:()=>e.jsxs(s,{children:[e.jsx(t,{children:"First item in the list"}),e.jsx(t,{children:"Second item in the list"}),e.jsx(t,{children:"Third item in the list"})]})},a={render:()=>e.jsxs(s,{children:[e.jsx(t,{icon:e.jsx(n,{}),children:"React 18+ support"}),e.jsx(t,{icon:e.jsx(n,{}),children:"TypeScript strict mode"}),e.jsx(t,{icon:e.jsx(n,{}),children:"Radix UI primitives"}),e.jsx(t,{icon:e.jsx(n,{}),children:"Tailwind CSS styling"})]})},c={render:()=>e.jsxs(s,{ordered:!0,children:[e.jsx(t,{children:"Install the package"}),e.jsx(t,{children:"Import the CSS styles"}),e.jsx(t,{children:"Wrap your app with providers"}),e.jsx(t,{children:"Start using components"})]})};var p,h,I;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item in the list</ListItem>
      <ListItem>Third item in the list</ListItem>
    </List>
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var u,x,L;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem icon={<CheckIcon />}>React 18+ support</ListItem>
      <ListItem icon={<CheckIcon />}>TypeScript strict mode</ListItem>
      <ListItem icon={<CheckIcon />}>Radix UI primitives</ListItem>
      <ListItem icon={<CheckIcon />}>Tailwind CSS styling</ListItem>
    </List>
}`,...(L=(x=a.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var j,f,g;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <List ordered>
      <ListItem>Install the package</ListItem>
      <ListItem>Import the CSS styles</ListItem>
      <ListItem>Wrap your app with providers</ListItem>
      <ListItem>Start using components</ListItem>
    </List>
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const O=["Default","WithIcons","Ordered"];export{o as Default,c as Ordered,a as WithIcons,O as __namedExportsOrder,D as default};
