import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-ZH-6pyQh.js";import{a as v}from"./cn-BEhiKRD9.js";import{c as ce}from"./index-B1xZ04RU.js";import{X as le}from"./x-BjIR8eL8.js";import{C as de}from"./circle-x-DPjzU04L.js";import{C as pe}from"./circle-alert-BFa_7VeP.js";import{c as U}from"./createLucideIcon-3f6GN8JZ.js";import{I as N}from"./info-BJcGUmJa.js";import{B as j}from"./Button-BfxvocXd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./loader-circle--bTMh9uh.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=U("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=U("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),fe=ce("relative w-full border p-4 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",{variants:{variant:{default:"bg-background text-foreground border-border",info:"bg-info-muted text-info border-info/30 [&>svg]:text-info",success:"bg-success-muted text-success border-success/30 [&>svg]:text-success",warning:"bg-warning-muted text-warning border-warning/30 [&>svg]:text-warning",destructive:"bg-destructive-muted text-destructive border-destructive/30 [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),ge={default:N,info:N,success:ue,warning:pe,destructive:de},t=f.forwardRef(({className:r,variant:s,title:a,description:b,icon:w,showIcon:Z=!0,closable:ee,onClose:g,actions:y,children:te,...re},se)=>{const[ae,ie]=f.useState(!0),ne=()=>{ie(!1),g==null||g()};if(!ae)return null;const A=ge[s||"default"],oe=w!==void 0?w:Z&&A?e.jsx(A,{className:"h-5 w-5"}):null;return e.jsxs("div",{ref:se,role:s==="destructive"?"alert":"status",className:v(fe({variant:s}),r),...re,children:[oe,e.jsxs("div",{className:"flex-1 pr-8",children:[a&&e.jsx(h,{children:a}),b&&e.jsx(x,{children:b}),te,y&&e.jsx("div",{className:"mt-3 flex gap-2",children:y})]}),ee&&e.jsxs("button",{type:"button",onClick:ne,className:"absolute right-2 top-2 p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",children:[e.jsx(le,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})});t.displayName="Alert";const h=f.forwardRef(({className:r,...s},a)=>e.jsx("h5",{ref:a,className:v("mb-1 font-semibold leading-none tracking-tight",r),...s}));h.displayName="AlertTitle";const x=f.forwardRef(({className:r,...s},a)=>e.jsx("div",{ref:a,className:v("text-sm [&_p]:leading-relaxed",r),...s}));x.displayName="AlertDescription";t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"string"},description:"Title of the alert"},description:{required:!1,tsType:{name:"string"},description:"Description text"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display (defaults to variant-specific icon)"},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the icon",defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be closed"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when alert is closed"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Actions to display in the alert"}},composes:["VariantProps"]};h.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const Se={title:"Components/Feedback/Alert",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","info","success","warning","destructive"],description:"Alert variant style"},title:{control:"text",description:"Alert title"},description:{control:"text",description:"Alert description"},closable:{control:"boolean",description:"Whether the alert can be closed"},showIcon:{control:"boolean",description:"Whether to show the icon"}},args:{title:"Alert Title",description:"This is an alert description with helpful information.",showIcon:!0},decorators:[r=>e.jsx("div",{className:"w-[450px]",children:e.jsx(r,{})})]},i={args:{variant:"default",title:"New update available",description:"A new software version is ready for installation."}},n={args:{variant:"info",title:"Note",description:"This action cannot be undone once confirmed."}},o={args:{variant:"success",title:"Success",description:"Your document has been uploaded successfully."}},c={args:{variant:"warning",title:"Low disk space",description:"You have less than 10% of disk space remaining."}},l={args:{variant:"destructive",title:"Connection failed",description:"Could not connect to the server. Please try again."}},d={args:{variant:"info",title:"Dismissible Alert",description:"Click the close button on the right to remove this alert.",closable:!0}},p={args:{variant:"default",title:"Terminal",description:"npm install @repo/ui",icon:e.jsx(me,{className:"h-5 w-5"})}},u={args:{variant:"warning",title:"Action Required",description:"Your subscription is about to expire. Renew now to avoid interruption.",actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{size:"sm",variant:"outline",children:"Later"}),e.jsx(j,{size:"sm",children:"Renew Now"})]})}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{variant:"default",title:"Default Alert",description:"General information alert."}),e.jsx(t,{variant:"info",title:"Info Alert",description:"Informational alert for neutral messages."}),e.jsx(t,{variant:"success",title:"Success Alert",description:"Positive feedback alert."}),e.jsx(t,{variant:"warning",title:"Warning Alert",description:"Cautionary alert for potential issues."}),e.jsx(t,{variant:"destructive",title:"Error Alert",description:"Critical error or failure alert."})]})};var C,I,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "New update available",
    description: "A new software version is ready for installation."
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var k,R,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Note",
    description: "This action cannot be undone once confirmed."
  }
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var q,D,W;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    description: "Your document has been uploaded successfully."
  }
}`,...(W=(D=o.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,V,B;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Low disk space",
    description: "You have less than 10% of disk space remaining."
  }
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var Y,z,E;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    title: "Connection failed",
    description: "Could not connect to the server. Please try again."
  }
}`,...(E=(z=l.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var L,P,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Dismissible Alert",
    description: "Click the close button on the right to remove this alert.",
    closable: true
  }
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var G,X,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "Terminal",
    description: "npm install @repo/ui",
    icon: <Terminal className="h-5 w-5" />
  }
}`,...(M=(X=p.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var O,$,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Action Required",
    description: "Your subscription is about to expire. Renew now to avoid interruption.",
    actions: <>
        <Button size="sm" variant="outline">
          Later
        </Button>
        <Button size="sm">Renew Now</Button>
      </>
  }
}`,...(H=($=u.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert variant="default" title="Default Alert" description="General information alert." />
      <Alert variant="info" title="Info Alert" description="Informational alert for neutral messages." />
      <Alert variant="success" title="Success Alert" description="Positive feedback alert." />
      <Alert variant="warning" title="Warning Alert" description="Cautionary alert for potential issues." />
      <Alert variant="destructive" title="Error Alert" description="Critical error or failure alert." />
    </div>
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const qe=["Default","Info","Success","Warning","Destructive","Closable","CustomIcon","WithActions","AllVariants"];export{m as AllVariants,d as Closable,p as CustomIcon,i as Default,l as Destructive,n as Info,o as Success,c as Warning,u as WithActions,qe as __namedExportsOrder,Se as default};
