import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as a}from"./Label-MzlZTkPR.js";import{I as s}from"./Input-CxxgBqug.js";import{C as Q}from"./Checkbox-C8879jar.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BEhiKRD9.js";import"./index-B1xZ04RU.js";import"./index-Bo-loign.js";import"./index-BdafQ8h7.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-rGWUK6NW.js";import"./index-B2_tsCGI.js";import"./index-CYU-ZmrK.js";import"./index-DFrgnYfK.js";import"./index-BlNWsJ36.js";import"./createLucideIcon-3f6GN8JZ.js";import"./check-BYLaSd5q.js";const ue={title:"Components/Forms/Label",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsx(a,{children:"Email"})},l={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(s,{type:"email",id:"email",placeholder:"Enter your email"})]})},t={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsxs(a,{htmlFor:"required",children:["Username ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(s,{id:"required",placeholder:"Required field"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(Q,{id:"terms"}),e.jsx(a,{htmlFor:"terms",children:"Accept terms and conditions"})]})},n={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx(s,{type:"password",id:"password"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Must be at least 8 characters long"})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{className:"text-xs",children:"Extra Small Label"}),e.jsx(s,{placeholder:"Small input",className:"h-8"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{children:"Default Label"}),e.jsx(s,{placeholder:"Default input"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{className:"text-lg",children:"Large Label"}),e.jsx(s,{placeholder:"Large input",className:"h-12"})]})]})},d={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{htmlFor:"firstName",children:"First Name"}),e.jsx(s,{id:"firstName",placeholder:"John"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{htmlFor:"lastName",children:"Last Name"}),e.jsx(s,{id:"lastName",placeholder:"Doe"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(s,{id:"email",type:"email",placeholder:"john@example.com"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(a,{htmlFor:"phone",children:"Phone Number"}),e.jsx(s,{id:"phone",type:"tel",placeholder:"+1 (555) 000-0000"})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(a,{children:"Enabled Label"}),e.jsx(s,{placeholder:"Enabled input"})]}),e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5 opacity-50",children:[e.jsx(a,{className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Disabled Label"}),e.jsx(s,{placeholder:"Disabled input",disabled:!0,className:"peer"})]})]})},m={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(a,{htmlFor:"error-input",className:"text-destructive",children:"Email Address"}),e.jsx(s,{id:"error-input",type:"email",placeholder:"invalid-email",className:"border-destructive"}),e.jsx("p",{className:"text-xs text-destructive",children:"Please enter a valid email address"})]})},p={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{className:"text-base font-semibold mb-3 block",children:"Select your preferred contact method"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",id:"email-contact",name:"contact",value:"email"}),e.jsx(a,{htmlFor:"email-contact",className:"font-normal cursor-pointer",children:"Email"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",id:"phone-contact",name:"contact",value:"phone"}),e.jsx(a,{htmlFor:"phone-contact",className:"font-normal cursor-pointer",children:"Phone"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",id:"sms-contact",name:"contact",value:"sms"}),e.jsx(a,{htmlFor:"sms-contact",className:"font-normal cursor-pointer",children:"SMS"})]})]})]})},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{className:"text-primary font-bold",children:"Primary Colored Label"}),e.jsx("br",{}),e.jsx(a,{className:"text-muted-foreground italic",children:"Muted Italic Label"}),e.jsx("br",{}),e.jsx(a,{className:"text-destructive uppercase tracking-wide",children:"Error Label"})]})};var x,h,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Label>Email</Label>
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var N,v,g;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var j,L,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="required">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input id="required" placeholder="Required field" />
    </div>
}`,...(f=(L=t.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var y,w,F;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var S,E,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" />
      <p className="text-xs text-muted-foreground">
        Must be at least 8 characters long
      </p>
    </div>
}`,...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var D,C,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="grid gap-1.5">
        <Label className="text-xs">Extra Small Label</Label>
        <Input placeholder="Small input" className="h-8" />
      </div>
      <div className="grid gap-1.5">
        <Label>Default Label</Label>
        <Input placeholder="Default input" />
      </div>
      <div className="grid gap-1.5">
        <Label className="text-lg">Large Label</Label>
        <Input placeholder="Large input" className="h-12" />
      </div>
    </div>
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var k,q,W;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" placeholder="John" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" placeholder="Doe" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
    </div>
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var R,M,A;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label>Enabled Label</Label>
        <Input placeholder="Enabled input" />
      </div>
      <div className="grid w-full max-w-sm gap-1.5 opacity-50">
        <Label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled Label
        </Label>
        <Input placeholder="Disabled input" disabled className="peer" />
      </div>
    </div>
}`,...(A=(M=o.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var z,G,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="error-input" className="text-destructive">
        Email Address
      </Label>
      <Input id="error-input" type="email" placeholder="invalid-email" className="border-destructive" />
      <p className="text-xs text-destructive">Please enter a valid email address</p>
    </div>
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var U,_,O;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label className="text-base font-semibold mb-3 block">
        Select your preferred contact method
      </Label>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input type="radio" id="email-contact" name="contact" value="email" />
          <Label htmlFor="email-contact" className="font-normal cursor-pointer">
            Email
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="phone-contact" name="contact" value="phone" />
          <Label htmlFor="phone-contact" className="font-normal cursor-pointer">
            Phone
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="sms-contact" name="contact" value="sms" />
          <Label htmlFor="sms-contact" className="font-normal cursor-pointer">
            SMS
          </Label>
        </div>
      </div>
    </div>
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var B,H,K;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Label className="text-primary font-bold">Primary Colored Label</Label>
      <br />
      <Label className="text-muted-foreground italic">Muted Italic Label</Label>
      <br />
      <Label className="text-destructive uppercase tracking-wide">Error Label</Label>
    </div>
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const xe=["Default","WithInput","Required","WithCheckbox","WithDescription","Sizes","FormLabels","Disabled","WithError","RadioGroup","CustomStyling"];export{u as CustomStyling,r as Default,o as Disabled,d as FormLabels,p as RadioGroup,t as Required,c as Sizes,i as WithCheckbox,n as WithDescription,m as WithError,l as WithInput,xe as __namedExportsOrder,ue as default};
