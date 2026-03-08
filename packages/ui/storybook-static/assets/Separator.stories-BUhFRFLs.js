import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-ZH-6pyQh.js";import"./index-BP-xEy0R.js";import{c as E}from"./index-ZW2Bszwo.js";import{a as c}from"./cn-BEhiKRD9.js";import{L as f}from"./Label-MzlZTkPR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";import"./index-B1xZ04RU.js";var I=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],A=I.reduce((t,r)=>{const i=E(`Primitive.${r}`),s=v.forwardRef((n,o)=>{const{asChild:l,...u}=n,T=l?i:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(T,{...u,ref:o})});return s.displayName=`Primitive.${r}`,{...t,[r]:s}},{}),V="Separator",h="horizontal",k=["horizontal","vertical"],O=v.forwardRef((t,r)=>{const{decorative:i,orientation:s=h,...n}=t,o=_(s)?s:h,u=i?{role:"none"}:{"aria-orientation":o==="vertical"?o:void 0,role:"separator"};return e.jsx(A.div,{"data-orientation":o,...u,...n,ref:r})});O.displayName=V;function _(t){return k.includes(t)}var L=O;const a=v.forwardRef(({className:t,orientation:r="horizontal",decorative:i=!0,label:s,labelAlignment:n="center",...o},l)=>s&&r==="horizontal"?e.jsxs("div",{ref:l,role:"separator","aria-orientation":"horizontal",className:c("flex items-center w-full",t),...o,children:[e.jsx("div",{className:c("h-px bg-border",n==="left"?"w-4 flex-shrink-0":"flex-1")}),e.jsx("span",{className:"px-3 text-xs text-muted-foreground whitespace-nowrap",children:s}),e.jsx("div",{className:c("h-px bg-border",n==="right"?"w-4 flex-shrink-0":"flex-1")})]}):e.jsx(L,{ref:l,decorative:i,orientation:r,className:c("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",t),...o}));a.displayName=L.displayName;a.__docgenInfo={description:"",methods:[],props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional label to display in the center of the separator (horizontal only)"},labelAlignment:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"Label alignment when label is provided",defaultValue:{value:'"center"',computed:!1}},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const Q={title:"Components/Layout/Separator",component:a,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Radix Primitives"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"An open-source UI component library."})]}),e.jsx(a,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]})},m={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsx(f,{children:"Section 1"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for section 1"}),e.jsx(a,{className:"my-4"}),e.jsx(f,{children:"Section 2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for section 2"})]})},p={render:()=>e.jsxs("div",{className:"flex h-[100px] items-center space-x-4 text-sm",children:[e.jsx("span",{children:"Home"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Products"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Contact"})]})},x={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsx("p",{children:"Default separator"}),e.jsx(a,{}),e.jsx("p",{className:"mt-4",children:"Thick separator"}),e.jsx(a,{className:"h-1 bg-primary/20"}),e.jsx("p",{className:"mt-4",children:"Dashed separator"}),e.jsx(a,{className:"border-dashed"})]})};var N,j,g;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
}`,...(g=(j=d.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,b,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <Label>Section 1</Label>
      <p className="text-sm text-muted-foreground">Content for section 1</p>
      <Separator className="my-4" />
      <Label>Section 2</Label>
      <p className="text-sm text-muted-foreground">Content for section 2</p>
    </div>
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,R,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex h-[100px] items-center space-x-4 text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>Products</span>
      <Separator orientation="vertical" />
      <span>Contact</span>
    </div>
}`,...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var P,z,D;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <p>Default separator</p>
      <Separator />
      <p className="mt-4">Thick separator</p>
      <Separator className="h-1 bg-primary/20" />
      <p className="mt-4">Dashed separator</p>
      <Separator className="border-dashed" />
    </div>
}`,...(D=(z=x.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const W=["Default","Horizontal","Vertical","Custom"];export{x as Custom,d as Default,m as Horizontal,p as Vertical,W as __namedExportsOrder,Q as default};
