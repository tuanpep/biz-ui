import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-ZH-6pyQh.js";import{c as S}from"./index-B1xZ04RU.js";import{a as C}from"./cn-BEhiKRD9.js";import{B as a}from"./Button-BfxvocXd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./loader-circle--bTMh9uh.js";import"./createLucideIcon-3f6GN8JZ.js";const M=S("inline-flex",{variants:{variant:{spaced:"gap-2",attached:"[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child)]:-ml-px"},orientation:{horizontal:"flex-row",vertical:"flex-col"}},compoundVariants:[{variant:"attached",orientation:"vertical",className:"[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:ml-0"}],defaultVariants:{variant:"spaced",orientation:"horizontal"}}),r=N.forwardRef(({className:y,variant:j,orientation:g,role:G="group",...w},V)=>t.jsx("div",{ref:V,role:G,className:C(M({variant:j,orientation:g}),y),...w}));r.displayName="ButtonGroup";r.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{role:{defaultValue:{value:'"group"',computed:!1},required:!1}},composes:["VariantProps"]};const F={title:"Forms/ButtonGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Groups related buttons together with consistent spacing or attached styling."}}},argTypes:{variant:{control:"select",options:["spaced","attached"]},orientation:{control:"select",options:["horizontal","vertical"]}}},n={render:()=>t.jsxs(r,{variant:"spaced",children:[t.jsx(a,{variant:"secondary",children:"Left"}),t.jsx(a,{variant:"secondary",children:"Center"}),t.jsx(a,{variant:"secondary",children:"Right"})]})},e={render:()=>t.jsxs(r,{variant:"attached",children:[t.jsx(a,{variant:"secondary",children:"Left"}),t.jsx(a,{variant:"secondary",children:"Center"}),t.jsx(a,{variant:"secondary",children:"Right"})]})},o={render:()=>t.jsxs(r,{orientation:"vertical",variant:"spaced",children:[t.jsx(a,{variant:"secondary",className:"w-full",children:"Top"}),t.jsx(a,{variant:"secondary",className:"w-full",children:"Middle"}),t.jsx(a,{variant:"secondary",className:"w-full",children:"Bottom"})]})},s={name:"Mixed Button Variants",render:()=>t.jsxs(r,{variant:"spaced",children:[t.jsx(a,{variant:"primary",children:"Save"}),t.jsx(a,{variant:"secondary",children:"Preview"}),t.jsx(a,{variant:"tertiary",children:"Cancel"})]})};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="spaced">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Center</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="attached">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Center</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,v,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical" variant="spaced">
      <Button variant="secondary" className="w-full">
        Top
      </Button>
      <Button variant="secondary" className="w-full">
        Middle
      </Button>
      <Button variant="secondary" className="w-full">
        Bottom
      </Button>
    </ButtonGroup>
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,f,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Mixed Button Variants",
  render: () => <ButtonGroup variant="spaced">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Preview</Button>
      <Button variant="tertiary">Cancel</Button>
    </ButtonGroup>
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const I=["Spaced","Attached","Vertical","MixedVariants"];export{e as Attached,s as MixedVariants,n as Spaced,o as Vertical,I as __namedExportsOrder,F as default};
