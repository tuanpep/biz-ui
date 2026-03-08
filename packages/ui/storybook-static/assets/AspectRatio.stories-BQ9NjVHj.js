import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-ZH-6pyQh.js";import{a as y}from"./cn-BEhiKRD9.js";import"./_commonjsHelpers-CqkleIqs.js";const t=j.forwardRef(({className:s,ratio:x=1,style:g,children:h,...v},w)=>e.jsx("div",{ref:w,className:y("relative w-full",s),style:{paddingBottom:`${1/x*100}%`,...g},...v,children:e.jsx("div",{className:"absolute inset-0",children:h})}));t.displayName="AspectRatio";t.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:`The desired aspect ratio expressed as width/height.
@example 16/9, 4/3, 1
@default 1`,defaultValue:{value:"1",computed:!1}}}};const q={title:"Layout/AspectRatio",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Displays content within a desired aspect ratio. Useful for responsive images, videos, and maps."}}},argTypes:{ratio:{control:{type:"number",min:.1,max:4,step:.1}}}},a={args:{ratio:16/9},render:s=>e.jsx("div",{className:"w-[450px]",children:e.jsx(t,{...s,children:e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm",children:"16:9 Aspect Ratio"})})})},r={args:{ratio:1},render:s=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{...s,children:e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-primary-muted text-primary text-sm font-medium",children:"1:1 Square"})})})},i={args:{ratio:16/9},render:s=>e.jsx("div",{className:"w-[450px] overflow-hidden",children:e.jsx(t,{...s,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Abstract gradient",className:"h-full w-full object-cover"})})})};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm">
          16:9 Aspect Ratio
        </div>
      </AspectRatio>
    </div>
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ratio: 1
  },
  render: args => <div className="w-[200px]">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center bg-primary-muted text-primary text-sm font-medium">
          1:1 Square
        </div>
      </AspectRatio>
    </div>
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <div className="w-[450px] overflow-hidden">
      <AspectRatio {...args}>
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Abstract gradient" className="h-full w-full object-cover" />
      </AspectRatio>
    </div>
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const S=["Default","Square","WithImage"];export{a as Default,r as Square,i as WithImage,S as __namedExportsOrder,q as default};
