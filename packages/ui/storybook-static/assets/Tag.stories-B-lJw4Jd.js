import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-ZH-6pyQh.js";import{a as z}from"./cn-BEhiKRD9.js";import{c as le}from"./index-B1xZ04RU.js";import{X as we}from"./x-BjIR8eL8.js";import{c as je}from"./createLucideIcon-3f6GN8JZ.js";import{C as de}from"./check-BYLaSd5q.js";import{C as me}from"./circle-alert-BFa_7VeP.js";import{I as ue}from"./info-BJcGUmJa.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=je("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),Ne=le("inline-flex items-center gap-1.5 font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",{variants:{variant:{default:"bg-primary/10 text-primary border border-primary/20",secondary:"bg-secondary/10 text-secondary border border-secondary/20",success:"bg-success/10 text-success border border-success/20",warning:"bg-warning/10 text-warning border border-warning/20",error:"bg-destructive/10 text-destructive border border-destructive/20",info:"bg-info/10 text-info border border-info/20",outline:"bg-transparent text-foreground border border-border",filled:"bg-primary text-primary-foreground border-0"},size:{sm:"text-xs px-2 py-0.5 rounded-none",md:"text-sm px-2.5 py-1 rounded-none",lg:"text-base px-3 py-1.5 rounded-none"},selected:{true:"",false:""}},defaultVariants:{variant:"default",size:"md",selected:!1}}),Se=le("inline-flex items-center justify-center rounded-none opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer",{variants:{size:{sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5"}},defaultVariants:{size:"md"}}),a=N.forwardRef(({className:t,variant:o,size:n,icon:m,dismissible:pe=!1,onDismiss:S,selectable:r=!1,selected:ge,onSelect:i,children:fe,onClick:D,...ve},be)=>{const[he,k]=N.useState(!1),u=ge??he,xe=s=>{if(r){const c=!u;k(c),i==null||i(c)}D==null||D(s)},Te=s=>{s.stopPropagation(),S==null||S()},ye=s=>{if(r&&(s.key==="Enter"||s.key===" ")){s.preventDefault();const c=!u;k(c),i==null||i(c)}};return e.jsxs("span",{ref:be,className:z(Ne({variant:o,size:n,selected:u}),r&&"cursor-pointer select-none",t),onClick:xe,onKeyDown:r?ye:void 0,tabIndex:r?0:void 0,role:r?"checkbox":void 0,"aria-checked":r?u:void 0,...ve,children:[m&&e.jsx("span",{className:"flex-shrink-0",children:m}),e.jsx("span",{children:fe}),pe&&e.jsx("button",{type:"button",className:z(Se({size:n})),onClick:Te,"aria-label":"Remove",children:e.jsx(we,{className:"h-full w-full"})})]})});a.displayName="Tag";const l=N.forwardRef(({onDismiss:t,...o},n)=>e.jsx(a,{ref:n,dismissible:!0,onDismiss:t,...o}));l.displayName="DismissibleTag";const d=N.forwardRef(({selected:t,onSelect:o,...n},m)=>e.jsx(a,{ref:m,selectable:!0,selected:t,onSelect:o,...n}));d.displayName="SelectableTag";a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{variant:{required:!1,tsType:{name:"VariantProps['variant']",raw:"VariantProps<typeof import('./Tag.variants').tagVariants>['variant']"},description:"Tag color variant"},size:{required:!1,tsType:{name:"VariantProps['size']",raw:"VariantProps<typeof import('./Tag.variants').tagVariants>['size']"},description:"Size variant"},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state (for visual styling)"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the label"},dismissible:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close button is clicked"},selectable:{required:!1,tsType:{name:"boolean"},description:"Make tag selectable (clickable)",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:"Callback when tag is clicked (for selectable tags)"}},composes:["Omit"]};l.__docgenInfo={description:"",methods:[],displayName:"DismissibleTag",props:{onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when tag is dismissed"}},composes:["Omit"]};d.__docgenInfo={description:"",methods:[],displayName:"SelectableTag",props:{selected:{required:!1,tsType:{name:"boolean"},description:"Selected state"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:"Callback when selection changes"}},composes:["Omit"]};const Ae={title:"Components/Data Display/Tag",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","success","warning","error","info","outline","filled"],description:"Tag color variant"},size:{control:"select",options:["sm","md","lg"],description:"Tag size"},dismissible:{control:"boolean"},selectable:{control:"boolean"},selected:{control:"boolean"}},args:{children:"Tag Content",variant:"default",size:"md"}},p={args:{variant:"default"}},g={args:{variant:"success",children:"Success",icon:e.jsx(de,{className:"h-3 w-3"})}},f={args:{variant:"error",children:"Error",icon:e.jsx(me,{className:"h-3 w-3"})}},v={args:{variant:"warning",children:"Warning"}},b={args:{variant:"info",children:"Info",icon:e.jsx(ue,{className:"h-3 w-3"})}},h={args:{variant:"outline",children:"Outline"}},x={args:{variant:"filled",children:"Filled"}},T={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(l,{variant:"default",onDismiss:()=>alert("Dismissed!"),children:"Default"}),e.jsx(l,{variant:"success",onDismiss:()=>alert("Dismissed!"),children:"Success"}),e.jsx(l,{variant:"error",onDismiss:()=>alert("Dismissed!"),children:"Error"})]})},y={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(d,{variant:"default",children:"Option 1"}),e.jsx(d,{variant:"default",children:"Option 2"}),e.jsx(d,{variant:"secondary",children:"Option 3"})]})},w={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",icon:e.jsx(de,{className:"h-3 w-3"}),children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",icon:e.jsx(me,{className:"h-3 w-3"}),children:"Error"}),e.jsx(a,{variant:"info",icon:e.jsx(ue,{className:"h-3 w-3"}),children:"Info"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"filled",children:"Filled"})]})},j={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(a,{size:"sm",icon:e.jsx(I,{className:"h-3 w-3"}),children:"Small Tag"}),e.jsx(a,{size:"md",icon:e.jsx(I,{className:"h-3 w-3"}),children:"Medium Tag"}),e.jsx(a,{size:"lg",icon:e.jsx(I,{className:"h-3 w-3"}),children:"Large Tag"})]})};var O,V,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var q,E,R;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Success",
    icon: <CheckIcon className="h-3 w-3" />
  }
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var A,_,F;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "error",
    children: "Error",
    icon: <AlertIcon className="h-3 w-3" />
  }
}`,...(F=(_=f.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var W,P,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Warning"
  }
}`,...(M=(P=v.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var L,K,$;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "Info",
    icon: <InfoIcon className="h-3 w-3" />
  }
}`,...($=(K=b.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var H,U,X;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var B,G,J;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "filled",
    children: "Filled"
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Y,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <DismissibleTag variant="default" onDismiss={() => alert("Dismissed!")}>
        Default
      </DismissibleTag>
      <DismissibleTag variant="success" onDismiss={() => alert("Dismissed!")}>
        Success
      </DismissibleTag>
      <DismissibleTag variant="error" onDismiss={() => alert("Dismissed!")}>
        Error
      </DismissibleTag>
    </div>
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <SelectableTag variant="default">Option 1</SelectableTag>
      <SelectableTag variant="default">Option 2</SelectableTag>
      <SelectableTag variant="secondary">Option 3</SelectableTag>
    </div>
}`,...(re=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Tag variant="default">Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success" icon={<CheckIcon className="h-3 w-3" />}>
        Success
      </Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error" icon={<AlertIcon className="h-3 w-3" />}>
        Error
      </Tag>
      <Tag variant="info" icon={<InfoIcon className="h-3 w-3" />}>
        Info
      </Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="filled">Filled</Tag>
    </div>
}`,...(ie=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var te,oe,ce;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <Tag size="sm" icon={<TagIcon className="h-3 w-3" />}>
        Small Tag
      </Tag>
      <Tag size="md" icon={<TagIcon className="h-3 w-3" />}>
        Medium Tag
      </Tag>
      <Tag size="lg" icon={<TagIcon className="h-3 w-3" />}>
        Large Tag
      </Tag>
    </div>
}`,...(ce=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const _e=["Default","Success","Error","Warning","Info","Outline","Filled","Dismissible","Selectable","AllVariants","AllSizes"];export{j as AllSizes,w as AllVariants,p as Default,T as Dismissible,f as Error,x as Filled,b as Info,h as Outline,y as Selectable,g as Success,v as Warning,_e as __namedExportsOrder,Ae as default};
