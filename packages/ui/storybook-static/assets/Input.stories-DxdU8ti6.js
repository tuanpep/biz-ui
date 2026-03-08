import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./Input-CxxgBqug.js";import{c as X}from"./createLucideIcon-3f6GN8JZ.js";import{S as Z}from"./search-C8wSOQXV.js";import{M as $}from"./mail-M1TT_EO5.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BEhiKRD9.js";import"./index-B1xZ04RU.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=X("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=X("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),de={title:"Components/Forms/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","unstyled"],description:"Input variant style"},size:{control:"select",options:["sm","md","lg"],description:"Input size"},label:{control:"text",description:"Optional label text"},description:{control:"text",description:"Optional description text"},error:{control:"text",description:"Optional error text"},warn:{control:"text",description:"Optional warning text"},leftIcon:{control:!1,description:"Icon to show on the left side"},rightIcon:{control:!1,description:"Icon to show on the right side"}},decorators:[Y=>e.jsx("div",{className:"w-[300px]",children:e.jsx(Y,{})})]},r={args:{placeholder:"Enter text..."}},s={args:{label:"Email",type:"email",placeholder:"email@example.com",required:!0}},t={args:{label:"Username",description:"This is your public display name.",placeholder:"shadcn"}},o={args:{disabled:!0,label:"Disabled Input",placeholder:"Cannot type here"}},l={args:{readOnly:!0,label:"Read Only Input",value:"This value is read-only"}},n={args:{label:"Email",type:"email",placeholder:"email@example.com",error:"Please enter a valid email address."}},c={args:{label:"Password",type:"password",placeholder:"Enter password",warn:"Password is weak."}},i={args:{placeholder:"Search...",leftIcon:e.jsx(Z,{className:"h-4 w-4"})}},p={args:{placeholder:"Enter email",type:"email",rightIcon:e.jsx($,{className:"h-4 w-4"})}},d={args:{placeholder:"Password",type:"password",leftIcon:e.jsx(ee,{className:"h-4 w-4"}),rightIcon:e.jsx(ae,{className:"h-4 w-4"})}},m={render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx(a,{label:"Number",type:"number",placeholder:"123"}),e.jsx(a,{label:"Date",type:"date"}),e.jsx(a,{label:"Time",type:"time"}),e.jsx(a,{label:"Datetime",type:"datetime-local"}),e.jsx(a,{label:"Color",type:"color",className:"h-10 w-20"})]})},u={args:{label:"Upload file",type:"file"}};var h,g,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,I,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'email@example.com',
    required: true
  }
}`,...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var x,f,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    description: 'This is your public display name.',
    placeholder: 'shadcn'
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,W,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled Input',
    placeholder: 'Cannot type here'
  }
}`,...(N=(W=o.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var j,E,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    label: 'Read Only Input',
    value: 'This value is read-only'
  }
}`,...(D=(E=l.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var O,k,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'email@example.com',
    error: 'Please enter a valid email address.'
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var L,P,R;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    warn: 'Password is weak.'
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,C,M;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    leftIcon: <Search className="h-4 w-4" />
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var z,F,q;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter email',
    type: 'email',
    rightIcon: <Mail className="h-4 w-4" />
  }
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var B,_,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: 'Password',
    type: 'password',
    leftIcon: <Lock className="h-4 w-4" />,
    rightIcon: <User className="h-4 w-4" />
  }
}`,...(H=(_=d.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var V,A,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      <Input label="Number" type="number" placeholder="123" />
      <Input label="Date" type="date" />
      <Input label="Time" type="time" />
      <Input label="Datetime" type="datetime-local" />
      <Input label="Color" type="color" className="h-10 w-20" />
    </div>
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Upload file',
    type: 'file'
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const me=["Default","WithLabel","WithDescription","Disabled","ReadOnly","WithError","WithWarning","WithLeftIcon","WithRightIcon","WithBothIcons","InputTypes","FileInput"];export{r as Default,o as Disabled,u as FileInput,m as InputTypes,l as ReadOnly,d as WithBothIcons,t as WithDescription,n as WithError,s as WithLabel,i as WithLeftIcon,p as WithRightIcon,c as WithWarning,me as __namedExportsOrder,de as default};
