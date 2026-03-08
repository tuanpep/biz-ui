import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-ZH-6pyQh.js";import{c as B}from"./index-B1xZ04RU.js";import{a as D}from"./cn-BEhiKRD9.js";import{X as I}from"./x-BjIR8eL8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-3f6GN8JZ.js";const U=B("relative flex items-center w-full px-4 py-3 text-sm",{variants:{variant:{info:"bg-info-muted text-foreground border-b border-info",success:"bg-success-muted text-foreground border-b border-success",warning:"bg-warning-muted text-foreground border-b border-warning",error:"bg-destructive-muted text-foreground border-b border-destructive"}},defaultVariants:{variant:"info"}}),o=P.forwardRef(({className:S,variant:k,dismissible:j=!1,onDismiss:C,icon:i,children:R,...T},E)=>e.jsxs("div",{ref:E,role:"alert",className:D(U({variant:k}),S),...T,children:[i&&e.jsx("span",{className:"mr-2 flex-shrink-0",children:i}),e.jsx("div",{className:"flex-1",children:R}),j&&e.jsx("button",{onClick:C,className:"ml-2 flex-shrink-0 p-1 hover:opacity-70 transition-opacity","aria-label":"Dismiss banner",type:"button",children:e.jsx(I,{className:"h-3.5 w-3.5","aria-hidden":"true"})})]}));o.displayName="Banner";o.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the banner can be dismissed",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the content"}},composes:["VariantProps"]};const M={title:"Feedback/Banner",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Full-width notification banner for page-level messages, announcements, and system notices."}}},argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},r={args:{variant:"info",children:"System maintenance scheduled for Sunday at 2:00 AM UTC."}},a={args:{variant:"success",children:"Your changes have been saved successfully."}},s={args:{variant:"warning",children:"Your trial expires in 3 days. Upgrade now to keep your data."}},n={args:{variant:"error",children:"Payment failed. Please update your billing information."}},t={args:{variant:"info",dismissible:!0,children:"New features available! Check out the latest release notes."}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "System maintenance scheduled for Sunday at 2:00 AM UTC."
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Your changes have been saved successfully."
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Your trial expires in 3 days. Upgrade now to keep your data."
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "error",
    children: "Payment failed. Please update your billing information."
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,w,N;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "info",
    dismissible: true,
    children: "New features available! Check out the latest release notes."
  }
}`,...(N=(w=t.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const O=["Info","Success","Warning","Error","Dismissible"];export{t as Dismissible,n as Error,r as Info,a as Success,s as Warning,O as __namedExportsOrder,M as default};
