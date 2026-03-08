import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-ZH-6pyQh.js";import{c as v}from"./index-B1xZ04RU.js";import{a as w}from"./cn-BEhiKRD9.js";import{L as y}from"./loader-circle--bTMh9uh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-3f6GN8JZ.js";const N=v("",{variants:{size:{xs:"h-3 w-3",sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8",xl:"h-12 w-12"},color:{default:"text-muted-foreground",primary:"text-primary",white:"text-white",current:"text-current"}},defaultVariants:{size:"md",color:"default"}}),r=j.forwardRef(({className:u,size:f,color:g,label:S="Loading",...z},h)=>e.jsx(y,{ref:h,className:w("animate-spin",N({size:f,color:g}),u),role:"status","aria-label":S,...z}));r.displayName="Spinner";r.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{label:{required:!1,tsType:{name:"string"},description:"Accessible label",defaultValue:{value:'"Loading"',computed:!1}}},composes:["Omit","VariantProps"]};const O={title:"Feedback/Spinner",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Standalone loading spinner with size and color variants."}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},color:{control:"select",options:["default","primary","white","current"]}}},s={},a={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"xs"}),e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{color:"default"}),e.jsx(r,{color:"primary"}),e.jsx("div",{className:"bg-primary p-2",children:e.jsx(r,{color:"white"})})]})};var i,n,t;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(t=(n=s.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner color="default" />
      <Spinner color="primary" />
      <div className="bg-primary p-2">
        <Spinner color="white" />
      </div>
    </div>
}`,...(x=(d=o.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const R=["Default","Sizes","Colors"];export{o as Colors,s as Default,a as Sizes,R as __namedExportsOrder,O as default};
