import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-ZH-6pyQh.js";import{c as w}from"./index-B1xZ04RU.js";import{a as h}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const z=w("mx-auto w-full px-4",{variants:{size:{sm:"max-w-screen-sm",md:"max-w-screen-md",lg:"max-w-screen-lg",xl:"max-w-screen-xl","2xl":"max-w-screen-2xl",full:"max-w-full"},padding:{none:"px-0",sm:"px-2",md:"px-4",lg:"px-6",xl:"px-8"},centerContent:{true:"flex flex-col items-center",false:""}},defaultVariants:{size:"xl",padding:"md",centerContent:!1}}),a=f.forwardRef(({className:e,size:d,padding:p,centerContent:x,...u},g)=>s.jsx("div",{ref:g,className:h(z({size:d,padding:p,centerContent:x}),e),...u}));a.displayName="Container";a.__docgenInfo={description:"",methods:[],displayName:"Container",composes:["VariantProps"]};const b={title:"Layout/Container",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A max-width responsive container that centers content horizontally. Provides consistent padding and breakpoint-based max-widths."}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl","2xl","full"]},padding:{control:"select",options:["none","sm","md","lg","xl"]}}},n={args:{size:"xl"},render:e=>s.jsx(a,{...e,className:"bg-muted p-8",children:s.jsxs("p",{className:"text-sm",children:["Container with ",s.jsx("code",{children:"max-w-screen-xl"})," (default)"]})})},t={render:()=>s.jsx("div",{className:"space-y-4",children:["sm","md","lg","xl","2xl"].map(e=>s.jsx(a,{size:e,className:"bg-muted p-4",children:s.jsxs("p",{className:"text-sm font-medium",children:['size="',e,'"']})},e))})};var r,o,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: "xl"
  },
  render: args => <Container {...args} className="bg-muted p-8">
      <p className="text-sm">
        Container with <code>max-w-screen-xl</code> (default)
      </p>
    </Container>
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["sm", "md", "lg", "xl", "2xl"] as const).map(size => <Container key={size} size={size} className="bg-muted p-4">
          <p className="text-sm font-medium">size=&quot;{size}&quot;</p>
        </Container>)}
    </div>
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const S=["Default","Sizes"];export{n as Default,t as Sizes,S as __namedExportsOrder,b as default};
