import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-ZH-6pyQh.js";import{a as d}from"./cn-BEhiKRD9.js";import{c as L}from"./index-B1xZ04RU.js";import{C as Ue}from"./chevron-up-DaHtbp8y.js";import{C as $e}from"./chevron-down-C-fNpRN8.js";import{c as Pe}from"./createLucideIcon-3f6GN8JZ.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=Pe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),Ge=L("flex flex-col gap-1.5",{variants:{size:{sm:"",md:"",lg:""},disabled:{true:"opacity-50 cursor-not-allowed"}},defaultVariants:{size:"md",disabled:!1}}),Je=L("flex w-full rounded-md border bg-background text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",{variants:{variant:{default:"border-border",inline:"border-0 border-b border-border rounded-none bg-transparent px-0 hover:border-primary focus-visible:ring-0 focus-visible:border-primary","inline-filled":"border-0 border-b border-border rounded-none bg-background px-0 hover:border-primary focus-visible:ring-0 focus-visible:border-primary"},size:{sm:"h-8 px-3 py-1.5 text-xs",md:"h-10 px-3 py-2 text-sm",lg:"h-12 px-4 py-3 text-base"},error:{true:"border-destructive focus-visible:ring-destructive"}},defaultVariants:{variant:"default",size:"md",error:!1}}),Ke=L("flex flex-col border-l border-border",{variants:{size:{sm:"",md:"",lg:""}},defaultVariants:{size:"md"}}),k=b.forwardRef(({className:Ve,wrapperClassName:Ne,size:q="md",value:j,defaultValue:Se,onChange:u,min:n,max:o,step:C=1,hideSteppers:F=!1,formatOptions:D,locale:M,label:T,description:f,error:z,warn:E,required:H=!1,hideLabel:qe=!1,leftIcon:R,disabled:je=!1,readOnly:s=!1,"data-testid":De,id:Te,placeholder:ze="0",...Ee},Le)=>{const ke=b.useId(),c=Te||ke,W=`${c}-description`,B=`${c}-error`,_=`${c}-warn`,t=!s&&je,l=!s&&!t&&!!z,p=!s&&!l&&!t&&!!E,[Ce,A]=b.useState(Se??null),i=j??Ce,U=b.useMemo(()=>D?new Intl.NumberFormat(M||navigator.language,D):null,[D,M]),Fe=e=>{if(!e||e.trim()==="")return null;const r=e.replace(/[^\d.,\-−]/g,"").replace(/,/g,""),Q=parseFloat(r);return isNaN(Q)?null:Q},Me=e=>e==null?"":U?U.format(e):String(e),He=e=>{if(e===null)return null;let r=e;return n!==void 0&&(r=Math.max(n,r)),o!==void 0&&(r=Math.min(o,r)),r},m=e=>{const r=He(e);j||A(r),u==null||u(r)},Re=e=>{const r=Fe(e.target.value);m(r),j||A(r),u==null||u(r)},We=()=>{if(t||s)return;const e=i??0,r=e+C;o===void 0||r<=o?m(r):e<o&&m(o)},Be=()=>{if(t||s)return;const e=i??0,r=e-C;n===void 0||r>=n?m(r):e>n&&m(n)},_e=[f&&!l&&!p?W:null,l?B:null,p?_:null].filter(Boolean).join(" ")||void 0,Ae={"border-destructive focus-visible:ring-destructive":l,"border-warning focus-visible:ring-warning":p},$=!!R,P=a.jsxs("div",{className:"relative flex items-center",children:[$&&a.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10",children:R}),a.jsx("input",{ref:Le,type:"text",inputMode:"decimal",id:c,value:Me(i),onChange:Re,placeholder:ze,disabled:t,readOnly:s,className:d(Je({size:q,error:l}),Ae,$&&"pl-10",!F&&"pr-16",Ve),"aria-invalid":l,"aria-describedby":_e,"aria-required":H,"aria-valuemin":n,"aria-valuemax":o,"aria-valuenow":i??void 0,"data-testid":De,...Ee}),!F&&a.jsxs("div",{className:d(Ke({size:q})),children:[a.jsx("button",{type:"button",tabIndex:-1,className:d("flex items-center justify-center h-1/2 w-full hover:bg-muted transition-colors",(t||s||o!==void 0&&i!==null&&i>=o)&&"opacity-50 cursor-not-allowed"),onClick:We,disabled:t||s,"aria-label":"Increment",children:a.jsx(Ue,{className:"h-3 w-3","aria-hidden":"true"})}),a.jsx("button",{type:"button",tabIndex:-1,className:d("flex items-center justify-center h-1/2 w-full hover:bg-muted transition-colors",(t||s||n!==void 0&&i!==null&&i<=n)&&"opacity-50 cursor-not-allowed"),onClick:Be,disabled:t||s,"aria-label":"Decrement",children:a.jsx($e,{className:"h-3 w-3","aria-hidden":"true"})})]})]});return!T&&!f&&!z&&!E?P:a.jsxs("div",{className:d(Ge({size:q,disabled:t}),Ne),children:[T&&a.jsxs("label",{htmlFor:c,className:d("text-sm font-medium leading-none text-muted-foreground",qe&&"sr-only",t&&"opacity-50"),children:[T,H&&a.jsx("span",{className:"text-destructive ml-1","aria-hidden":"true",children:"*"})]}),P,a.jsxs("div",{children:[f&&!l&&!p&&a.jsx("p",{id:W,className:"text-sm text-muted-foreground",children:f}),l&&a.jsx("p",{id:B,className:"text-xs text-destructive",role:"alert",children:z}),p&&!l&&a.jsx("p",{id:_,className:"text-xs text-warning",role:"alert",children:E})]})]})});k.displayName="NumberInput";k.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{size:{required:!1,tsType:{name:"VariantProps['size']",raw:"VariantProps<typeof import('./NumberInput.variants').numberInputVariants>['size']"},description:"Input size",defaultValue:{value:'"md"',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Current value"},defaultValue:{required:!1,tsType:{name:"number"},description:"Default value for uncontrolled"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | null) => void",signature:{arguments:[{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Callback when value changes"},label:{required:!1,tsType:{name:"string"},description:"Label text for the input"},description:{required:!1,tsType:{name:"string"},description:"Description text shown below the input"},error:{required:!1,tsType:{name:"string"},description:"Error message to display (sets invalid state)"},warn:{required:!1,tsType:{name:"string"},description:"Warning message to display (warning state, not invalid)"},required:{required:!1,tsType:{name:"boolean"},description:"Show required indicator on label",defaultValue:{value:"false",computed:!1}},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Hide label visually but keep for accessibility",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to show before the input"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional wrapper className when label/description is present"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing"},min:{required:!1,tsType:{name:"number"},description:"Minimum value"},max:{required:!1,tsType:{name:"number"},description:"Maximum value"},step:{required:!1,tsType:{name:"number"},description:"Step value for increment/decrement",defaultValue:{value:"1",computed:!1}},hideSteppers:{required:!1,tsType:{name:"boolean"},description:"Hide stepper buttons",defaultValue:{value:"false",computed:!1}},formatOptions:{required:!1,tsType:{name:"Intl.NumberFormatOptions"},description:"Formatting options for display (Intl.NumberFormatOptions)"},locale:{required:!1,tsType:{name:"string"},description:"Locale for formatting (default: browser locale)"},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:'"0"',computed:!1},required:!1}},composes:["Omit"]};const sr={title:"Components/Forms/NumberInput",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Input size"},disabled:{control:"boolean"},readOnly:{control:"boolean"},hideSteppers:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"}},args:{label:"Quantity",placeholder:"0",min:0,max:100,step:1}},g={args:{defaultValue:5}},v={args:{description:"Enter the number of items you wish to order.",defaultValue:1}},y={args:{label:"Budget",leftIcon:a.jsx(Qe,{className:"h-4 w-4"}),formatOptions:{style:"currency",currency:"USD"},defaultValue:1e3}},h={args:{label:"Age",min:18,max:120,step:1,defaultValue:25}},x={args:{error:"Value must be at least 10.",defaultValue:5}},I={args:{warn:"High values may require approval.",defaultValue:95}},w={args:{size:"sm",label:"Small Input"}},V={args:{size:"lg",label:"Large Input"}},N={args:{hideSteppers:!0,label:"No Steppers"}},S={args:{disabled:!0,defaultValue:10,label:"Disabled Input"}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: 5
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var O,X,Y;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    description: 'Enter the number of items you wish to order.',
    defaultValue: 1
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Budget',
    leftIcon: <DollarSign className="h-4 w-4" />,
    formatOptions: {
      style: 'currency',
      currency: 'USD'
    },
    defaultValue: 1000
  }
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    min: 18,
    max: 120,
    step: 1,
    defaultValue: 25
  }
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,le;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    error: 'Value must be at least 10.',
    defaultValue: 5
  }
}`,...(le=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ue,de;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    warn: 'High values may require approval.',
    defaultValue: 95
  }
}`,...(de=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,pe,me;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Input'
  }
}`,...(me=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,be,ge;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Input'
  }
}`,...(ge=(be=V.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ve,ye,he;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    hideSteppers: true,
    label: 'No Steppers'
  }
}`,...(he=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,Ie,we;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 10,
    label: 'Disabled Input'
  }
}`,...(we=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};const nr=["Default","WithDescription","Currency","IntegerOnly","ErrorState","WarningState","Small","Large","NoSteppers","Disabled"];export{y as Currency,g as Default,S as Disabled,x as ErrorState,h as IntegerOnly,V as Large,N as NoSteppers,w as Small,I as WarningState,v as WithDescription,nr as __namedExportsOrder,sr as default};
