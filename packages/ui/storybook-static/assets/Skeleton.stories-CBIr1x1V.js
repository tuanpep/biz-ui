import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-ZH-6pyQh.js";import{a as y}from"./cn-BEhiKRD9.js";import{c as Z}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";const $=Z("bg-muted",{variants:{variant:{text:"",circular:"rounded-full",rectangular:"",rounded:""},animate:{true:"animate-pulse",false:""}},defaultVariants:{variant:"text",animate:!0}}),t=v.forwardRef(({className:r,animate:a=!0,width:n,height:s,variant:i="text",style:l,...k},S)=>e.jsx("div",{ref:S,"aria-hidden":"true",className:y($({variant:i,animate:a}),r),style:{width:n,height:s,...l},...k}));t.displayName="Skeleton";const w=v.forwardRef(({className:r,lines:a=3,animate:n=!0,lineHeight:s=16,gap:i=8,lastLineWidth:l="60%",...k},S)=>e.jsx("div",{ref:S,className:y("space-y-2",r),style:{gap:i},...k,children:Array.from({length:a}).map((ee,N)=>e.jsx(t,{animate:n,height:s,width:N===a-1?l:"100%",variant:"text"},N))}));w.displayName="SkeletonText";const o=v.forwardRef(({className:r,size:a=40,animate:n=!0,...s},i)=>e.jsx(t,{ref:i,animate:n,variant:"circular",width:a,height:a,className:r,...s}));o.displayName="SkeletonCircle";const j=v.forwardRef(({className:r,direction:a="column",gap:n=8,children:s,...i},l)=>e.jsx("div",{ref:l,className:y("flex",a==="column"?"flex-col":"flex-row",r),style:{gap:n},...i,children:s}));j.displayName="SkeletonGroup";t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width of the skeleton"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height of the skeleton"},animate:{defaultValue:{value:"true",computed:!1},required:!1},variant:{defaultValue:{value:'"text"',computed:!1},required:!1}},composes:["VariantProps"]};w.__docgenInfo={description:"",methods:[],displayName:"SkeletonText",props:{lines:{required:!1,tsType:{name:"number"},description:"Number of lines to render",defaultValue:{value:"3",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether to animate the skeleton",defaultValue:{value:"true",computed:!1}},lineHeight:{required:!1,tsType:{name:"number"},description:"Line height",defaultValue:{value:"16",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"Gap between lines",defaultValue:{value:"8",computed:!1}},lastLineWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Last line width percentage",defaultValue:{value:'"60%"',computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"SkeletonCircle",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Size (diameter) of the circle",defaultValue:{value:"40",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether to animate the skeleton",defaultValue:{value:"true",computed:!1}}}};j.__docgenInfo={description:"",methods:[],displayName:"SkeletonGroup",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Direction of the group",defaultValue:{value:'"column"',computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Gap between skeletons",defaultValue:{value:"8",computed:!1}}}};const ie={title:"Components/Feedback/Skeleton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"Skeleton shape variant"},animate:{control:"boolean",description:"Whether to animate the skeleton"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"}},args:{variant:"text",animate:!0}},d={args:{width:200,height:20}},c={args:{variant:"circular",width:40,height:40}},m={args:{variant:"rectangular",width:200,height:100}},u={args:{variant:"rounded",width:200,height:20}},p={render:()=>e.jsx(w,{lines:3})},h={render:()=>e.jsx(o,{size:48})},g={render:()=>e.jsxs("div",{className:"p-4 border rounded-lg w-[300px] space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{size:40}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(t,{height:16,width:"60%"}),e.jsx(t,{height:12,width:"40%"})]})]}),e.jsx(t,{height:100,variant:"rounded"}),e.jsx(w,{lines:2})]})},f={render:()=>e.jsxs(j,{direction:"column",gap:12,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{size:36}),e.jsx(t,{height:16,width:200})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{size:36}),e.jsx(t,{height:16,width:180})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{size:36}),e.jsx(t,{height:16,width:220})]})]})},x={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{animate:!1,height:20,width:200}),e.jsx(t,{animate:!1,height:20,width:180}),e.jsx(t,{animate:!1,height:20,width:150})]})};var b,T,V;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 20
  }
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,C,z;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 40,
    height: 40
  }
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var _,R,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 200,
    height: 100
  }
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,A,L;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 200,
    height: 20
  }
}`,...(L=(A=u.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var I,D,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <SkeletonText lines={3} />
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,F,O;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SkeletonCircle size={48} />
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,B,J;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="p-4 border rounded-lg w-[300px] space-y-3">
      <div className="flex items-center gap-3">
        <SkeletonCircle size={40} />
        <div className="flex-1 space-y-2">
          <Skeleton height={16} width="60%" />
          <Skeleton height={12} width="40%" />
        </div>
      </div>
      <Skeleton height={100} variant="rounded" />
      <SkeletonText lines={2} />
    </div>
}`,...(J=(B=g.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,M,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <SkeletonGroup direction="column" gap={12}>
      <div className="flex items-center gap-3">
        <SkeletonCircle size={36} />
        <Skeleton height={16} width={200} />
      </div>
      <div className="flex items-center gap-3">
        <SkeletonCircle size={36} />
        <Skeleton height={16} width={180} />
      </div>
      <div className="flex items-center gap-3">
        <SkeletonCircle size={36} />
        <Skeleton height={16} width={220} />
      </div>
    </SkeletonGroup>
}`,...(Q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Skeleton animate={false} height={20} width={200} />
      <Skeleton animate={false} height={20} width={180} />
      <Skeleton animate={false} height={20} width={150} />
    </div>
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const oe=["Default","Circular","Rectangular","Rounded","Text","Avatar","Card","List","WithoutAnimation"];export{h as Avatar,g as Card,c as Circular,d as Default,f as List,m as Rectangular,u as Rounded,p as Text,x as WithoutAnimation,oe as __namedExportsOrder,ie as default};
