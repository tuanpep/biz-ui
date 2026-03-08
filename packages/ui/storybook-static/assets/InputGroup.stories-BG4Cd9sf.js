import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-ZH-6pyQh.js";import{a as i}from"./cn-BEhiKRD9.js";import{I as c}from"./Input-CxxgBqug.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B1xZ04RU.js";const o=m.forwardRef(({className:t,...n},r)=>e.jsx("div",{ref:r,className:i("flex items-center w-full [&>input]:flex-1 [&>input]:min-w-0",t),...n}));o.displayName="InputGroup";const s=m.forwardRef(({className:t,placement:n="left",...r},L)=>e.jsx("div",{ref:L,className:i("flex items-center justify-center px-3 border border-border bg-muted text-muted-foreground text-sm whitespace-nowrap h-10",n==="left"?"border-r-0":"border-l-0",t),...r}));s.displayName="InputAddon";const u=m.forwardRef(({className:t,...n},r)=>e.jsx("div",{ref:r,className:i("absolute left-0 top-0 flex items-center justify-center h-full w-10 text-muted-foreground pointer-events-none",t),...n}));u.displayName="InputLeftElement";const b=m.forwardRef(({className:t,...n},r)=>e.jsx("div",{ref:r,className:i("absolute right-0 top-0 flex items-center justify-center h-full w-10 text-muted-foreground",t),...n}));b.displayName="InputRightElement";o.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size variant matching Input sizes"}}};s.__docgenInfo={description:"",methods:[],displayName:"InputAddon",props:{placement:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Placement of the addon",defaultValue:{value:'"left"',computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"InputLeftElement"};b.__docgenInfo={description:"",methods:[],displayName:"InputRightElement"};const T={title:"Forms/InputGroup",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Wraps an Input with optional left/right add-ons (text, icons, buttons)."}}}},a={name:"With Text Addons",render:()=>e.jsxs(o,{children:[e.jsx(s,{placement:"left",children:"https://"}),e.jsx(c,{placeholder:"example.com"}),e.jsx(s,{placement:"right",children:".com"})]})},l={render:()=>e.jsxs(o,{children:[e.jsx(s,{placement:"left",children:"$"}),e.jsx(c,{placeholder:"0.00",type:"number"})]})},d={name:"With Icon Elements",render:()=>e.jsxs("div",{className:"relative w-full max-w-sm",children:[e.jsx(u,{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]})}),e.jsx(c,{placeholder:"Search...",className:"pl-10"})]})},p={render:()=>e.jsxs(o,{children:[e.jsx(s,{placement:"left",children:"@"}),e.jsx(c,{placeholder:"username"})]})};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With Text Addons",
  render: () => <InputGroup>
      <InputAddon placement="left">https://</InputAddon>
      <Input placeholder="example.com" />
      <InputAddon placement="right">.com</InputAddon>
    </InputGroup>
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var I,g,w;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <InputGroup>
      <InputAddon placement="left">$</InputAddon>
      <Input placeholder="0.00" type="number" />
    </InputGroup>
}`,...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var j,v,y;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "With Icon Elements",
  render: () => <div className="relative w-full max-w-sm">
      <InputLeftElement>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </InputLeftElement>
      <Input placeholder="Search..." className="pl-10" />
    </div>
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,E,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <InputGroup>
      <InputAddon placement="left">@</InputAddon>
      <Input placeholder="username" />
    </InputGroup>
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const z=["WithAddons","LeftAddon","WithElements","EmailInput"];export{p as EmailInput,l as LeftAddon,a as WithAddons,d as WithElements,z as __namedExportsOrder,T as default};
