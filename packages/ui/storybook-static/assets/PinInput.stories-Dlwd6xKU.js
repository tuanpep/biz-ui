import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-ZH-6pyQh.js";import{a as T}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const ee={sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg"},u=y.forwardRef(({className:W,length:n=4,mask:B=!1,onComplete:o,onChange:i,placeholder:G="○",autoFocus:H=!1,disabled:x=!1,error:J=!1,size:Q="md",type:d="text",...U},X)=>{const[m,j]=y.useState(Array(n).fill("")),w=y.useRef([]),c=s=>{var e;s>=0&&s<n&&((e=w.current[s])==null||e.focus())},P=(s,e)=>{if(d==="number"&&e&&!/^\d$/.test(e))return;const t=[...m];t[s]=e,j(t);const a=t.join("");i==null||i(a),e&&s<n-1&&c(s+1),t.every(l=>l!=="")&&(o==null||o(a))},Y=(s,e)=>{e.key==="Backspace"?m[s]===""?c(s-1):P(s,""):e.key==="ArrowLeft"?c(s-1):e.key==="ArrowRight"&&c(s+1)},Z=s=>{s.preventDefault();const t=s.clipboardData.getData("text").slice(0,n).split(""),a=[...m];t.forEach((l,C)=>{d==="number"&&!/^\d$/.test(l)||(a[C]=l)}),j(a),i==null||i(a.join("")),c(Math.min(t.length,n-1)),a.every(l=>l!=="")&&(o==null||o(a.join("")))};return r.jsx("div",{ref:X,className:T("inline-flex gap-2",W),...U,children:Array.from({length:n}).map((s,e)=>r.jsx("input",{ref:t=>{w.current[e]=t},type:B?"password":d==="number"?"tel":"text",inputMode:d==="number"?"numeric":"text",pattern:d==="number"?"[0-9]*":void 0,maxLength:1,value:m[e],placeholder:G,disabled:x,autoFocus:H&&e===0,className:T("text-center border border-border bg-background transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent",J&&"border-destructive focus-visible:ring-destructive",x&&"disabled:opacity-50 disabled:cursor-not-allowed",ee[Q]),onChange:t=>P(e,t.target.value.slice(-1)),onKeyDown:t=>Y(e,t),onPaste:Z,"aria-label":`Pin input ${e+1} of ${n}`},e))})});u.displayName="PinInput";u.__docgenInfo={description:"",methods:[],displayName:"PinInput",props:{length:{required:!1,tsType:{name:"number"},description:"Number of input fields",defaultValue:{value:"4",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:"Mask input values (for passwords/PINs)",defaultValue:{value:"false",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when all inputs are filled"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called on each value change"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder character for each input",defaultValue:{value:'"○"',computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus first input on mount",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size variant",defaultValue:{value:'"md"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "number"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'}]},description:"Input type",defaultValue:{value:'"text"',computed:!1}}},composes:["Omit"]};const ne={title:"Forms/PinInput",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Individual inputs for OTP, PIN, or verification codes. Supports auto-advance, paste, and masking."}}},argTypes:{length:{control:{type:"number",min:2,max:8}},size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","number"]}}},p={args:{length:4,autoFocus:!0}},f={name:"6-Digit OTP",args:{length:6,type:"number",placeholder:"·"}},g={args:{length:4,mask:!0,type:"number"}},v={args:{length:4,error:!0}},b={render:()=>r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Small"}),r.jsx(u,{size:"sm",length:4})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Medium (default)"}),r.jsx(u,{size:"md",length:4})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Large"}),r.jsx(u,{size:"lg",length:4})]})]})},h={args:{length:4,disabled:!0}};var N,S,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    length: 4,
    autoFocus: true
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,k,z;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "6-Digit OTP",
  args: {
    length: 6,
    type: "number",
    placeholder: "·"
  }
}`,...(z=(k=f.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var V,q,E;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    length: 4,
    mask: true,
    type: "number"
  }
}`,...(E=(q=g.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var M,O,A;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    length: 4,
    error: true
  }
}`,...(A=(O=v.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var F,R,_;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Small</p>
        <PinInput size="sm" length={4} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Medium (default)</p>
        <PinInput size="md" length={4} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Large</p>
        <PinInput size="lg" length={4} />
      </div>
    </div>
}`,...(_=(R=b.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var L,$,K;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true
  }
}`,...(K=($=h.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const oe=["Default","SixDigitOTP","Masked","WithError","Sizes","Disabled"];export{p as Default,h as Disabled,g as Masked,f as SixDigitOTP,b as Sizes,v as WithError,oe as __namedExportsOrder,ne as default};
