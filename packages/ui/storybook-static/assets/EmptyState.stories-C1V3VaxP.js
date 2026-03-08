import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-ZH-6pyQh.js";import{a as s}from"./cn-BEhiKRD9.js";import{B as b}from"./Button-BfxvocXd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-B1xZ04RU.js";import"./loader-circle--bTMh9uh.js";import"./createLucideIcon-3f6GN8JZ.js";const E={sm:{wrapper:"py-8 px-4",icon:"mb-2",title:"text-sm",desc:"text-xs"},md:{wrapper:"py-12 px-6",icon:"mb-3",title:"text-base",desc:"text-sm"},lg:{wrapper:"py-16 px-8",icon:"mb-4",title:"text-lg",desc:"text-sm"}},n=k.forwardRef(({className:z,icon:c,title:I,description:l,action:m,size:R="md",...T},B)=>{const t=E[R];return e.jsxs("div",{ref:B,className:s("flex flex-col items-center justify-center text-center",t.wrapper,z),...T,children:[c&&e.jsx("div",{className:s("text-muted-foreground [&>svg]:h-10 [&>svg]:w-10",t.icon),children:c}),e.jsx("h3",{className:s("font-medium text-foreground",t.title),children:I}),l&&e.jsx("p",{className:s("text-muted-foreground mt-1 max-w-sm",t.desc),children:l}),m&&e.jsx("div",{className:"mt-4",children:m})]})});n.displayName="EmptyState";n.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display"},title:{required:!0,tsType:{name:"string"},description:"Title text"},description:{required:!1,tsType:{name:"string"},description:"Description text"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Call-to-action element (e.g., a Button)"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size variant",defaultValue:{value:'"md"',computed:!1}}}};const A={title:"Feedback/EmptyState",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Placeholder for empty content areas with optional icon, description, and call-to-action."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},S=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),r={args:{icon:e.jsx(S,{}),title:"No messages yet",description:"Your inbox is empty. Messages you receive will appear here.",action:e.jsx(b,{size:"sm",children:"Compose Message"})}},o={args:{title:"No results found",description:"Try adjusting your search or filter to find what you're looking for."}},a={args:{title:"No items",size:"sm"}},i={args:{icon:e.jsx(S,{}),title:"Welcome to your dashboard",description:"Get started by creating your first project. We'll guide you through the setup process.",action:e.jsx(b,{children:"Create Project"}),size:"lg"}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: <InboxIcon />,
    title: "No messages yet",
    description: "Your inbox is empty. Messages you receive will appear here.",
    action: <Button size="sm">Compose Message</Button>
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "No results found",
    description: "Try adjusting your search or filter to find what you're looking for."
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,h,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "No items",
    size: "sm"
  }
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,N,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: <InboxIcon />,
    title: "Welcome to your dashboard",
    description: "Get started by creating your first project. We'll guide you through the setup process.",
    action: <Button>Create Project</Button>,
    size: "lg"
  }
}`,...(v=(N=i.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const F=["Default","NoIcon","Small","Large"];export{r as Default,i as Large,o as NoIcon,a as Small,F as __namedExportsOrder,A as default};
