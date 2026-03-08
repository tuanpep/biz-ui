import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-ZH-6pyQh.js";import{a as r}from"./cn-BEhiKRD9.js";import{C as H}from"./check-BYLaSd5q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-3f6GN8JZ.js";const f=k.forwardRef(({className:V,steps:v,activeStep:g,orientation:t="horizontal",size:u="md",..._},E)=>e.jsx("div",{ref:E,className:r(t==="horizontal"?"flex items-start w-full":"flex flex-col",V),role:"list","aria-label":"Progress steps",..._,children:v.map((o,a)=>{const s=a<g,i=a===g,x=a===v.length-1;return e.jsxs("div",{className:r(t==="horizontal"?"flex items-center flex-1":"flex items-start",x&&t==="horizontal"&&"flex-none"),role:"listitem","aria-current":i?"step":void 0,children:[e.jsxs("div",{className:r("flex flex-col items-center",t==="vertical"&&"mr-3"),children:[e.jsx("div",{className:r("flex items-center justify-center border-2 font-medium transition-colors",u==="sm"?"h-6 w-6 text-xs":"h-8 w-8 text-sm",s&&"border-primary bg-primary text-primary-foreground",i&&"border-primary text-primary",!s&&!i&&"border-border text-muted-foreground"),children:s?e.jsx(H,{className:"h-3.5 w-3.5","aria-hidden":"true"}):a+1}),!x&&t==="vertical"&&e.jsx("div",{className:r("w-0.5 min-h-[2rem] my-1",s?"bg-primary":"bg-border")})]}),e.jsxs("div",{className:r("flex flex-col",t==="horizontal"?"ml-2":"mt-0"),children:[e.jsx("span",{className:r("font-medium leading-tight",u==="sm"?"text-xs":"text-sm",i?"text-foreground":"text-muted-foreground"),children:o.label}),o.description&&e.jsx("span",{className:r("text-muted-foreground mt-0.5",u==="sm"?"text-[10px]":"text-xs"),children:o.description}),o.optional&&e.jsx("span",{className:"text-xs text-muted-foreground italic",children:"Optional"})]}),!x&&t==="horizontal"&&e.jsx("div",{className:r("flex-1 h-0.5 mx-3 mt-4 min-w-[2rem]",s?"bg-primary":"bg-border")})]},a)})}));f.displayName="Stepper";f.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:"Array of step definitions"},activeStep:{required:!0,tsType:{name:"number"},description:"Current active step (0-indexed)"},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Orientation",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"Size variant",defaultValue:{value:'"md"',computed:!1}}}};const F={title:"Navigation/Stepper",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"Multi-step wizard / progress indicator. Shows current step in a workflow sequence."}}},argTypes:{activeStep:{control:{type:"number",min:0,max:4}},orientation:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md"]}}},d=[{label:"Account",description:"Create your account"},{label:"Profile",description:"Set up your profile"},{label:"Review",description:"Review and submit"}],n={args:{steps:d,activeStep:1}},l={args:{steps:d,activeStep:1,orientation:"vertical"}},c={args:{steps:d,activeStep:3}},m={args:{steps:[{label:"Account"},{label:"Profile",optional:!0},{label:"Payment"},{label:"Review"}],activeStep:1}},p={args:{steps:d,activeStep:1,size:"sm"}};var h,S,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 1
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,w,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 1,
    orientation: "vertical"
  }
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var j,N,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 3
  }
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var A,P,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Account"
    }, {
      label: "Profile",
      optional: true
    }, {
      label: "Payment"
    }, {
      label: "Review"
    }],
    activeStep: 1
  }
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var q,O,T;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 1,
    size: "sm"
  }
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const G=["Horizontal","Vertical","Completed","WithOptional","Small"];export{c as Completed,n as Horizontal,p as Small,l as Vertical,m as WithOptional,G as __namedExportsOrder,F as default};
