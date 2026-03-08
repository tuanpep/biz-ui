import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as r}from"./Checkbox-C8879jar.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";import"./index-BdafQ8h7.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-rGWUK6NW.js";import"./index-B2_tsCGI.js";import"./index-CYU-ZmrK.js";import"./index-DFrgnYfK.js";import"./index-BlNWsJ36.js";import"./cn-BEhiKRD9.js";import"./index-B1xZ04RU.js";import"./createLucideIcon-3f6GN8JZ.js";import"./check-BYLaSd5q.js";const X={title:"Components/Forms/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","success"],description:"Checkbox color variant"},size:{control:"select",options:["sm","md","lg"],description:"Checkbox size"},checked:{control:"select",options:[!0,!1,"indeterminate"],description:"Checked state"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},label:{control:"text",description:"Label text"},description:{control:"text",description:"Description text"},error:{control:"text",description:"Error message"}},args:{label:"Accept terms and conditions"}},a={args:{}},s={args:{checked:!0}},t={args:{checked:"indeterminate",label:"Select all items"}},c={args:{description:"You agree to our Terms of Service and Privacy Policy."}},o={args:{error:"You must accept the terms to continue"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{size:"sm",label:"Small checkbox"}),e.jsx(r,{size:"md",label:"Medium checkbox (default)"}),e.jsx(r,{size:"lg",label:"Large checkbox"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{variant:"default",checked:!0,label:"Default variant"}),e.jsx(r,{variant:"success",checked:!0,label:"Success variant"}),e.jsx(r,{variant:"destructive",checked:!0,label:"Destructive variant"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(r,{disabled:!0,label:"Disabled unchecked"}),e.jsx(r,{disabled:!0,checked:!0,label:"Disabled checked"}),e.jsx(r,{disabled:!0,checked:"indeterminate",label:"Disabled indeterminate"})]})};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,k,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: 'indeterminate',
    label: 'Select all items'
  }
}`,...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var v,f,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    description: 'You agree to our Terms of Service and Privacy Policy.'
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,D,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    error: 'You must accept the terms to continue'
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var z,y,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox (default)" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
}`,...(N=(y=i.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var E,W,P;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <Checkbox variant="default" checked label="Default variant" />
      <Checkbox variant="success" checked label="Success variant" />
      <Checkbox variant="destructive" checked label="Destructive variant" />
    </div>
}`,...(P=(W=n.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var Y,L,T;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <Checkbox disabled label="Disabled unchecked" />
      <Checkbox disabled checked label="Disabled checked" />
      <Checkbox disabled checked="indeterminate" label="Disabled indeterminate" />
    </div>
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const Z=["Default","Checked","Indeterminate","WithDescription","WithError","Sizes","Variants","Disabled"];export{s as Checked,a as Default,l as Disabled,t as Indeterminate,i as Sizes,n as Variants,c as WithDescription,o as WithError,Z as __namedExportsOrder,X as default};
