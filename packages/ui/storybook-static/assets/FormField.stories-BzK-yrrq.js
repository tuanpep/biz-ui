import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-ZH-6pyQh.js";import{a as m}from"./cn-BEhiKRD9.js";import{I as l}from"./Input-CxxgBqug.js";import{S as pe,a as ue,b as Fe,c as he,d as w}from"./Select-DIA2g85K.js";import{B as xe}from"./Button-BfxvocXd.js";import{C as q}from"./Checkbox-C8879jar.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B1xZ04RU.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-BdQq_4o_.js";import"./index-BdafQ8h7.js";import"./index-Bo-loign.js";import"./index-DSV0aXck.js";import"./index-BH6b-3aW.js";import"./index-BRulG1aA.js";import"./index-BzHRfv9E.js";import"./Combination-DvCWtk9P.js";import"./index-CBQcSsvu.js";import"./index-B2_tsCGI.js";import"./index-CCrO8FJV.js";import"./index-DFrgnYfK.js";import"./index-rGWUK6NW.js";import"./index-CYU-ZmrK.js";import"./index-DovHYRjs.js";import"./chevron-down-C-fNpRN8.js";import"./createLucideIcon-3f6GN8JZ.js";import"./chevron-up-DaHtbp8y.js";import"./check-BYLaSd5q.js";import"./index-ZW2Bszwo.js";import"./loader-circle--bTMh9uh.js";import"./index-BlNWsJ36.js";const r=y.forwardRef(({className:d,label:a,htmlFor:s,description:i,error:t,required:N,orientation:v="vertical",size:I="md",disabled:oe,children:de,...me},ne)=>{const ce=!!t;return e.jsxs("div",{ref:ne,className:m("grid gap-1.5",v==="horizontal"&&"flex items-center gap-4 grid-cols-none",I==="sm"&&"gap-1",I==="lg"&&"gap-2",oe&&"opacity-50 pointer-events-none",d),...me,children:[a&&e.jsxs("label",{htmlFor:s,className:m("text-sm font-medium leading-none",v==="horizontal"&&"shrink-0 w-24",ce&&"text-destructive","peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),children:[a,N&&e.jsx("span",{className:"text-destructive ml-1",children:"*"})]}),e.jsxs("div",{className:m("grid gap-1.5",v==="horizontal"&&"flex-1"),children:[de,i&&!t&&e.jsx("p",{className:"text-sm text-muted-foreground",children:i}),t&&e.jsx("p",{className:"text-xs text-destructive font-medium",role:"alert",children:t})]})]})});r.displayName="FormField";const S=y.forwardRef(({className:d,legend:a,description:s,children:i,...t},N)=>e.jsxs("fieldset",{ref:N,className:m("space-y-4",d),...t,children:[(a||s)&&e.jsxs("div",{className:"space-y-1",children:[a&&e.jsx("legend",{className:"text-sm font-semibold",children:a}),s&&e.jsx("p",{className:"text-sm text-muted-foreground",children:s})]}),i]}));S.displayName="FormGroup";const o=y.forwardRef(({className:d,variant:a="default",...s},i)=>e.jsx("form",{ref:i,className:m("space-y-6",a==="compact"&&"space-y-4",a==="spacious"&&"space-y-8",d),...s}));o.displayName="Form";o.__docgenInfo={description:"A form wrapper with consistent styling.",methods:[],displayName:"Form",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "compact" | "spacious"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"compact"'},{name:"literal",value:'"spacious"'}]},description:"Form layout variant",defaultValue:{value:'"default"',computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"string"},description:"Label text"},htmlFor:{required:!1,tsType:{name:"string"},description:"HTML for attribute (links label to input)"},description:{required:!1,tsType:{name:"string"},description:"Description text"},error:{required:!1,tsType:{name:"string"},description:"Error message"},required:{required:!1,tsType:{name:"boolean"},description:"Required field indicator"},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Orientation of label and input",defaultValue:{value:'"vertical"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size variant",defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"}}};S.__docgenInfo={description:"Groups multiple form fields with a common legend.",methods:[],displayName:"FormGroup",props:{legend:{required:!1,tsType:{name:"string"},description:"Legend text for the group"},description:{required:!1,tsType:{name:"string"},description:"Description for the group"}}};const Xe={title:"Components/Forms/FormField",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>e.jsx(r,{label:"Email",htmlFor:"email",children:e.jsx(l,{id:"email",type:"email",placeholder:"Enter your email"})})},c={render:()=>e.jsx(r,{label:"Username",htmlFor:"username",description:"This will be your public display name.",children:e.jsx(l,{id:"username",placeholder:"Enter username"})})},p={render:()=>e.jsx(r,{label:"Password",htmlFor:"password",error:"Password must be at least 8 characters.",children:e.jsx(l,{id:"password",type:"password",placeholder:"Enter password"})})},u={render:()=>e.jsx(r,{label:"Email",htmlFor:"required-email",required:!0,children:e.jsx(l,{id:"required-email",type:"email",placeholder:"Required field"})})},F={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"First Name",htmlFor:"firstName",orientation:"horizontal",children:e.jsx(l,{id:"firstName",placeholder:"John"})}),e.jsx(r,{label:"Last Name",htmlFor:"lastName",orientation:"horizontal",children:e.jsx(l,{id:"lastName",placeholder:"Doe"})})]})},h={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{label:"Small",htmlFor:"small",size:"sm",children:e.jsx(l,{id:"small",placeholder:"Small size"})}),e.jsx(r,{label:"Medium (default)",htmlFor:"medium",size:"md",children:e.jsx(l,{id:"medium",placeholder:"Medium size"})}),e.jsx(r,{label:"Large",htmlFor:"large",size:"lg",children:e.jsx(l,{id:"large",placeholder:"Large size"})})]})},x={render:()=>e.jsxs(o,{className:"w-[350px]",children:[e.jsx(r,{label:"Full Name",htmlFor:"fullName",required:!0,children:e.jsx(l,{id:"fullName",placeholder:"John Doe"})}),e.jsx(r,{label:"Email",htmlFor:"form-email",description:"We'll never share your email.",required:!0,children:e.jsx(l,{id:"form-email",type:"email",placeholder:"john@example.com"})}),e.jsx(r,{label:"Password",htmlFor:"form-password",required:!0,children:e.jsx(l,{id:"form-password",type:"password",placeholder:"••••••••"})}),e.jsx(r,{label:"Role",htmlFor:"role",children:e.jsxs(pe,{children:[e.jsx(ue,{children:e.jsx(Fe,{placeholder:"Select a role"})}),e.jsxs(he,{children:[e.jsx(w,{value:"developer",children:"Developer"}),e.jsx(w,{value:"designer",children:"Designer"}),e.jsx(w,{value:"manager",children:"Manager"})]})]})}),e.jsx(xe,{type:"submit",className:"w-full",children:"Create Account"})]})},b={render:()=>e.jsxs(S,{legend:"Personal Information",description:"Please provide your personal details.",className:"w-[350px] border rounded-lg p-4",children:[e.jsx(r,{label:"First Name",htmlFor:"group-firstName",children:e.jsx(l,{id:"group-firstName"})}),e.jsx(r,{label:"Last Name",htmlFor:"group-lastName",children:e.jsx(l,{id:"group-lastName"})}),e.jsx(r,{label:"Date of Birth",htmlFor:"dob",children:e.jsx(l,{id:"dob",type:"date"})})]})},f={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Default Spacing"}),e.jsxs(o,{variant:"default",className:"w-[300px]",children:[e.jsx(r,{label:"Field 1",children:e.jsx(l,{})}),e.jsx(r,{label:"Field 2",children:e.jsx(l,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Compact Spacing"}),e.jsxs(o,{variant:"compact",className:"w-[300px]",children:[e.jsx(r,{label:"Field 1",children:e.jsx(l,{})}),e.jsx(r,{label:"Field 2",children:e.jsx(l,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Spacious"}),e.jsxs(o,{variant:"spacious",className:"w-[300px]",children:[e.jsx(r,{label:"Field 1",children:e.jsx(l,{})}),e.jsx(r,{label:"Field 2",children:e.jsx(l,{})})]})]})]})},j={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"Terms and Conditions",htmlFor:"terms",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(q,{id:"terms"}),e.jsx("label",{htmlFor:"terms",className:"text-sm text-muted-foreground",children:"I agree to the terms and conditions"})]})}),e.jsx(r,{label:"Newsletter",htmlFor:"newsletter",description:"Receive updates about new features",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(q,{id:"newsletter"}),e.jsx("label",{htmlFor:"newsletter",className:"text-sm text-muted-foreground",children:"Subscribe to newsletter"})]})})]})},g={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsx(r,{label:"Valid Field",htmlFor:"valid",children:e.jsx(l,{id:"valid",defaultValue:"correct@email.com",className:"border-green-500"})}),e.jsx(r,{label:"Invalid Field",htmlFor:"invalid",error:"This field is required",children:e.jsx(l,{id:"invalid",className:"border-destructive"})}),e.jsx(r,{label:"Warning Field",htmlFor:"warning",description:"Please double-check this value",children:e.jsx(l,{id:"warning",defaultValue:"Maybe incorrect",className:"border-yellow-500"})})]})};var z,E,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <FormField label="Email" htmlFor="email">
      <Input id="email" type="email" placeholder="Enter your email" />
    </FormField>
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var D,C,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <FormField label="Username" htmlFor="username" description="This will be your public display name.">
      <Input id="username" placeholder="Enter username" />
    </FormField>
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var R,P,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <FormField label="Password" htmlFor="password" error="Password must be at least 8 characters.">
      <Input id="password" type="password" placeholder="Enter password" />
    </FormField>
}`,...(L=(P=p.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var W,k,M;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <FormField label="Email" htmlFor="required-email" required>
      <Input id="required-email" type="email" placeholder="Required field" />
    </FormField>
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var G,_,B;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <FormField label="First Name" htmlFor="firstName" orientation="horizontal">
        <Input id="firstName" placeholder="John" />
      </FormField>
      <FormField label="Last Name" htmlFor="lastName" orientation="horizontal">
        <Input id="lastName" placeholder="Doe" />
      </FormField>
    </div>
}`,...(B=(_=F.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var J,A,H;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <FormField label="Small" htmlFor="small" size="sm">
        <Input id="small" placeholder="Small size" />
      </FormField>
      <FormField label="Medium (default)" htmlFor="medium" size="md">
        <Input id="medium" placeholder="Medium size" />
      </FormField>
      <FormField label="Large" htmlFor="large" size="lg">
        <Input id="large" placeholder="Large size" />
      </FormField>
    </div>
}`,...(H=(A=h.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var O,U,K;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Form className="w-[350px]">
      <FormField label="Full Name" htmlFor="fullName" required>
        <Input id="fullName" placeholder="John Doe" />
      </FormField>
      <FormField label="Email" htmlFor="form-email" description="We'll never share your email." required>
        <Input id="form-email" type="email" placeholder="john@example.com" />
      </FormField>
      <FormField label="Password" htmlFor="form-password" required>
        <Input id="form-password" type="password" placeholder="••••••••" />
      </FormField>
      <FormField label="Role" htmlFor="role">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </Form>
}`,...(K=(U=x.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <FormGroup legend="Personal Information" description="Please provide your personal details." className="w-[350px] border rounded-lg p-4">
      <FormField label="First Name" htmlFor="group-firstName">
        <Input id="group-firstName" />
      </FormField>
      <FormField label="Last Name" htmlFor="group-lastName">
        <Input id="group-lastName" />
      </FormField>
      <FormField label="Date of Birth" htmlFor="dob">
        <Input id="dob" type="date" />
      </FormField>
    </FormGroup>
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4">Default Spacing</h4>
        <Form variant="default" className="w-[300px]">
          <FormField label="Field 1">
            <Input />
          </FormField>
          <FormField label="Field 2">
            <Input />
          </FormField>
        </Form>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Compact Spacing</h4>
        <Form variant="compact" className="w-[300px]">
          <FormField label="Field 1">
            <Input />
          </FormField>
          <FormField label="Field 2">
            <Input />
          </FormField>
        </Form>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Spacious</h4>
        <Form variant="spacious" className="w-[300px]">
          <FormField label="Field 1">
            <Input />
          </FormField>
          <FormField label="Field 2">
            <Input />
          </FormField>
        </Form>
      </div>
    </div>
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,le,ae;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <FormField label="Terms and Conditions" htmlFor="terms">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the terms and conditions
          </label>
        </div>
      </FormField>
      <FormField label="Newsletter" htmlFor="newsletter" description="Receive updates about new features">
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <label htmlFor="newsletter" className="text-sm text-muted-foreground">
            Subscribe to newsletter
          </label>
        </div>
      </FormField>
    </div>
}`,...(ae=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,ie,te;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">
      <FormField label="Valid Field" htmlFor="valid">
        <Input id="valid" defaultValue="correct@email.com" className="border-green-500" />
      </FormField>
      <FormField label="Invalid Field" htmlFor="invalid" error="This field is required">
        <Input id="invalid" className="border-destructive" />
      </FormField>
      <FormField label="Warning Field" htmlFor="warning" description="Please double-check this value">
        <Input id="warning" defaultValue="Maybe incorrect" className="border-yellow-500" />
      </FormField>
    </div>
}`,...(te=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};const Ye=["Default","WithDescription","WithError","Required","Horizontal","Sizes","CompleteForm","FormGroupExample","FormVariants","WithCheckbox","ValidationStates"];export{x as CompleteForm,n as Default,b as FormGroupExample,f as FormVariants,F as Horizontal,u as Required,h as Sizes,g as ValidationStates,j as WithCheckbox,c as WithDescription,p as WithError,Ye as __namedExportsOrder,Xe as default};
