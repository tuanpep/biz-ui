import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-ZH-6pyQh.js";import{S as y}from"./index-ZW2Bszwo.js";import{a as b}from"./cn-BEhiKRD9.js";import{c as q}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";const A=q("flex",{variants:{direction:{row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},wrap:{nowrap:"flex-nowrap",wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse"},justify:{start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},align:{start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},gap:{none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-10","3xl":"gap-12"},inline:{true:"inline-flex",false:"flex"}},defaultVariants:{direction:"row",wrap:"nowrap",justify:"start",align:"stretch",gap:"none",inline:!1}}),D=q("",{variants:{flex:{auto:"flex-auto",initial:"flex-initial",none:"flex-none",1:"flex-1"},grow:{true:"grow",false:"grow-0"},shrink:{true:"shrink",false:"shrink-0"},alignSelf:{auto:"self-auto",start:"self-start",end:"self-end",center:"self-center",baseline:"self-baseline",stretch:"self-stretch"},order:{first:"order-first",last:"order-last",none:"order-none",1:"order-1",2:"order-2",3:"order-3",4:"order-4",5:"order-5"}},defaultVariants:{flex:void 0,grow:!1,shrink:!0,alignSelf:"auto",order:"none"}}),a=w.forwardRef(({className:s,direction:o,wrap:n,justify:l,align:d,gap:f,inline:u,asChild:g,...h},j)=>{const M=g?y:"div";return e.jsx(M,{ref:j,className:b(A({direction:o,wrap:n,justify:l,align:d,gap:f,inline:u}),s),...h})});a.displayName="Flex";const t=w.forwardRef(({className:s,flex:o,grow:n,shrink:l,alignSelf:d,order:f,asChild:u,...g},h)=>{const j=u?y:"div";return e.jsx(j,{ref:h,className:b(D({flex:o,grow:n,shrink:l,alignSelf:d,order:f}),s),...g})});t.displayName="FlexItem";const F=w.forwardRef(({className:s,asChild:o,...n},l)=>{const d=o?y:"div";return e.jsx(d,{ref:l,className:b("flex-1",s),...n})});F.displayName="Spacer";a.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}},composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"FlexItem",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}},composes:["VariantProps"]};F.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}}};const Q={title:"Layout/Flex",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","col","col-reverse"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},justify:{control:"select",options:["start","end","center","between","around","evenly"]},align:{control:"select",options:["start","end","center","baseline","stretch"]},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl","3xl"]}}},r=({children:s,className:o=""})=>e.jsx("div",{className:`p-4 bg-secondary text-secondary-foreground font-medium rounded border shadow-sm flex items-center justify-center ${o}`,children:s}),i={render:s=>e.jsxs(a,{...s,className:"w-[500px] border p-4 rounded-md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]}),args:{gap:"md",justify:"start"}},c={render:s=>e.jsxs(a,{...s,className:"w-[500px] border p-4 rounded-md",children:[e.jsx(r,{children:"Left"}),e.jsx(r,{children:"Center"}),e.jsx(r,{children:"Right"})]}),args:{justify:"between",gap:"md"}},x={render:()=>e.jsxs(a,{className:"w-[500px] border p-4 rounded-md",align:"center",children:[e.jsx(r,{children:"Logo"}),e.jsx(F,{}),e.jsx(r,{children:"Nav Item 1"}),e.jsx(r,{className:"ml-2",children:"Nav Item 2"}),e.jsx(r,{className:"ml-2",children:"Profile"})]})},m={render:()=>e.jsxs(a,{gap:"md",className:"w-[600px] border p-4 rounded-md h-[150px]",children:[e.jsx(t,{flex:"1",className:"bg-primary/10 border-dashed border p-4 flex items-center justify-center rounded",children:"Flex 1 (Grows)"}),e.jsx(t,{flex:"none",className:"bg-secondary/10 border-dashed border p-4 flex items-center justify-center rounded w-[100px]",children:"Flex None (Fixed)"}),e.jsx(t,{flex:"1",className:"bg-primary/10 border-dashed border p-4 flex items-center justify-center rounded",children:"Flex 1 (Grows)"})]})},p={render:()=>e.jsxs(a,{gap:"md",className:"w-[600px] border p-4 rounded-md h-[150px]",align:"center",children:[e.jsx(r,{children:"Center"}),e.jsx(t,{alignSelf:"start",children:e.jsx(r,{children:"Start"})}),e.jsx(r,{children:"Center"}),e.jsx(t,{alignSelf:"end",children:e.jsx(r,{children:"End"})})]})};var N,B,I;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Flex {...args} className="w-[500px] border p-4 rounded-md">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
        </Flex>,
  args: {
    gap: 'md',
    justify: 'start'
  }
}`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var v,S,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Flex {...args} className="w-[500px] border p-4 rounded-md">
            <Box>Left</Box>
            <Box>Center</Box>
            <Box>Right</Box>
        </Flex>,
  args: {
    justify: 'between',
    gap: 'md'
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var _,P,R;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex className="w-[500px] border p-4 rounded-md" align="center">
            <Box>Logo</Box>
            <Spacer />
            <Box>Nav Item 1</Box>
            <Box className="ml-2">Nav Item 2</Box>
            <Box className="ml-2">Profile</Box>
        </Flex>
}`,...(R=(P=x.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,E,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Flex gap="md" className="w-[600px] border p-4 rounded-md h-[150px]">
            <FlexItem flex="1" className="bg-primary/10 border-dashed border p-4 flex items-center justify-center rounded">
                Flex 1 (Grows)
            </FlexItem>
            <FlexItem flex="none" className="bg-secondary/10 border-dashed border p-4 flex items-center justify-center rounded w-[100px]">
                Flex None (Fixed)
            </FlexItem>
            <FlexItem flex="1" className="bg-primary/10 border-dashed border p-4 flex items-center justify-center rounded">
                Flex 1 (Grows)
            </FlexItem>
        </Flex>
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var k,G,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex gap="md" className="w-[600px] border p-4 rounded-md h-[150px]" align="center">
            <Box>Center</Box>
            <FlexItem alignSelf="start">
                <Box>Start</Box>
            </FlexItem>
            <Box>Center</Box>
            <FlexItem alignSelf="end">
                <Box>End</Box>
            </FlexItem>
        </Flex>
}`,...(T=(G=p.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};const U=["Default","JustifyBetween","WithSpacer","FlexItemProps","AlignSelf"];export{p as AlignSelf,i as Default,m as FlexItemProps,c as JustifyBetween,x as WithSpacer,U as __namedExportsOrder,Q as default};
