import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-ZH-6pyQh.js";import{c as C}from"./index-B1xZ04RU.js";import{a as j}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const v=C("flex items-center justify-center",{variants:{fullHeight:{true:"h-full",false:""},inline:{true:"inline-flex",false:""}},defaultVariants:{fullHeight:!1,inline:!1}}),r=b.forwardRef(({className:x,fullHeight:f,inline:h,...g},N)=>e.jsx("div",{ref:N,className:j(v({fullHeight:f,inline:h}),x),...g}));r.displayName="Center";r.__docgenInfo={description:"",methods:[],displayName:"Center",composes:["VariantProps"]};const _={title:"Layout/Center",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Centers content horizontally and vertically. A convenience layout primitive that reduces flex boilerplate."}}}},t={render:()=>e.jsx(r,{className:"h-40 border border-border",children:e.jsx("span",{className:"text-sm",children:"Centered content"})})},n={render:()=>e.jsx("div",{className:"h-64 border border-border",children:e.jsx(r,{fullHeight:!0,children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"font-medium",children:"Full Height Center"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Takes full height of parent container"})]})})})},s={render:()=>e.jsxs("p",{className:"text-sm",children:["Some text with an"," ",e.jsx(r,{inline:!0,className:"h-6 w-6 bg-primary text-primary-foreground text-xs",children:"3"})," ","inline centered element."]})};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Center className="h-40 border border-border">
      <span className="text-sm">Centered content</span>
    </Center>
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="h-64 border border-border">
      <Center fullHeight>
        <div className="text-center">
          <p className="font-medium">Full Height Center</p>
          <p className="text-sm text-muted-foreground">
            Takes full height of parent container
          </p>
        </div>
      </Center>
    </div>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <p className="text-sm">
      Some text with an{" "}
      <Center inline className="h-6 w-6 bg-primary text-primary-foreground text-xs">
        3
      </Center>{" "}
      inline centered element.
    </p>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const E=["Default","FullHeight","Inline"];export{t as Default,n as FullHeight,s as Inline,E as __namedExportsOrder,_ as default};
