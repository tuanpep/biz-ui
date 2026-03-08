import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-ZH-6pyQh.js";import{S as _}from"./index-ZW2Bszwo.js";import{a as R}from"./cn-BEhiKRD9.js";import{c as C}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";const L=C("flex",{variants:{gap:{none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-10","3xl":"gap-12"},align:{start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},justify:{start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},direction:{vertical:"flex-col",horizontal:"flex-row"},wrap:{true:"flex-wrap",false:"flex-nowrap"}},defaultVariants:{gap:"md",direction:"vertical",align:"stretch",justify:"start",wrap:!1}}),t=x.forwardRef(({className:a,gap:n,align:o,justify:H,direction:p,wrap:w,reverse:I,asChild:E,...z},A)=>{const V=E?_:"div";return e.jsx(V,{ref:A,className:R(L({gap:n,align:o,justify:H,direction:p,wrap:w}),I&&(p==="horizontal"?"flex-row-reverse":"flex-col-reverse"),a),...z})});t.displayName="Stack";const r=x.forwardRef(({className:a,...n},o)=>e.jsx(t,{ref:o,direction:"horizontal",className:a,...n}));r.displayName="HStack";const S=x.forwardRef(({className:a,...n},o)=>e.jsx(t,{ref:o,direction:"vertical",className:a,...n}));S.displayName="VStack";t.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Map to child element"},reverse:{required:!1,tsType:{name:"boolean"},description:"Reverse the order of items"}},composes:["VariantProps"]};r.__docgenInfo={description:"",methods:[],displayName:"HStack"};S.__docgenInfo={description:"",methods:[],displayName:"VStack"};const D={title:"Layout/Stack",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl","3xl"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},direction:{control:"select",options:["vertical","horizontal"]},reverse:{control:"boolean"}}},s=({children:a,className:n=""})=>e.jsx("div",{className:`p-4 bg-primary text-primary-foreground font-medium rounded border shadow-sm flex items-center justify-center min-w-[60px] ${n}`,children:a}),c={render:a=>e.jsxs(t,{...a,className:"w-[300px]",children:[e.jsx(s,{children:"Item 1"}),e.jsx(s,{children:"Item 2"}),e.jsx(s,{children:"Item 3"})]}),args:{direction:"vertical",gap:"md"}},d={render:a=>e.jsxs(t,{...a,children:[e.jsx(s,{children:"Item 1"}),e.jsx(s,{children:"Item 2"}),e.jsx(s,{children:"Item 3"})]}),args:{direction:"horizontal",gap:"md"}},i={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Extra Small (xs - 4px)"}),e.jsxs(r,{gap:"xs",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Medium (md - 16px)"}),e.jsxs(r,{gap:"md",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Extra Large (xl - 32px)"}),e.jsxs(r,{gap:"xl",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})]})]})},l={render:()=>e.jsxs("div",{className:"space-y-8 bg-muted/30 p-4 border rounded",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Align: Start"}),e.jsxs(r,{align:"start",className:"h-[100px] bg-background border border-dashed rounded p-2",children:[e.jsx(s,{className:"h-8",children:"H-8"}),e.jsx(s,{className:"h-16",children:"H-16"}),e.jsx(s,{className:"h-12",children:"H-12"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Align: Center"}),e.jsxs(r,{align:"center",className:"h-[100px] bg-background border border-dashed rounded p-2",children:[e.jsx(s,{className:"h-8",children:"H-8"}),e.jsx(s,{className:"h-16",children:"H-16"}),e.jsx(s,{className:"h-12",children:"H-12"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Align: End"}),e.jsxs(r,{align:"end",className:"h-[100px] bg-background border border-dashed rounded p-2",children:[e.jsx(s,{className:"h-8",children:"H-8"}),e.jsx(s,{className:"h-16",children:"H-16"}),e.jsx(s,{className:"h-12",children:"H-12"})]})]})]})};var m,g,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Stack {...args} className="w-[300px]">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>,
  args: {
    direction: "vertical",
    gap: "md"
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Stack {...args}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>,
  args: {
    direction: "horizontal",
    gap: "md"
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var N,b,B;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Extra Small (xs - 4px)
        </p>
        <HStack gap="xs">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Medium (md - 16px)
        </p>
        <HStack gap="md">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Extra Large (xl - 32px)
        </p>
        <HStack gap="xl">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </div>
    </div>
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var k,v,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 bg-muted/30 p-4 border rounded">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Align: Start
        </p>
        <HStack align="start" className="h-[100px] bg-background border border-dashed rounded p-2">
          <Box className="h-8">H-8</Box>
          <Box className="h-16">H-16</Box>
          <Box className="h-12">H-12</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Align: Center
        </p>
        <HStack align="center" className="h-[100px] bg-background border border-dashed rounded p-2">
          <Box className="h-8">H-8</Box>
          <Box className="h-16">H-16</Box>
          <Box className="h-12">H-12</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Align: End
        </p>
        <HStack align="end" className="h-[100px] bg-background border border-dashed rounded p-2">
          <Box className="h-8">H-8</Box>
          <Box className="h-16">H-16</Box>
          <Box className="h-12">H-12</Box>
        </HStack>
      </div>
    </div>
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const F=["Vertical","Horizontal","Gaps","Alignment"];export{l as Alignment,i as Gaps,d as Horizontal,c as Vertical,F as __namedExportsOrder,D as default};
