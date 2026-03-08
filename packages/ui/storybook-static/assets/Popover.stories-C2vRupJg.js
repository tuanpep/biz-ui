import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-ZH-6pyQh.js";import{R as y,T,P as B,C as N}from"./index-CBMjHALH.js";import{a as F}from"./cn-BEhiKRD9.js";import{B as o}from"./Button-BfxvocXd.js";import{L as i}from"./Label-MzlZTkPR.js";import{I as n}from"./Input-CxxgBqug.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BdafQ8h7.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";import"./index-BRulG1aA.js";import"./index-BzHRfv9E.js";import"./Combination-DvCWtk9P.js";import"./index-CBQcSsvu.js";import"./index-B2_tsCGI.js";import"./index-CCrO8FJV.js";import"./index-DFrgnYfK.js";import"./index-BlNWsJ36.js";import"./index-rGWUK6NW.js";import"./index-ZW2Bszwo.js";import"./index-B1xZ04RU.js";import"./loader-circle--bTMh9uh.js";import"./createLucideIcon-3f6GN8JZ.js";const d=y,l=T,a=I.forwardRef(({className:j,align:P="center",sideOffset:w=4,...b},C)=>e.jsx(B,{children:e.jsx("div",{className:"biz-ui",children:e.jsx(N,{ref:C,align:P,sideOffset:w,className:F("z-50 w-72 border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",j),...b})})}));a.displayName=N.displayName;a.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const ae={title:"Components/Overlays/Popover",component:d,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{children:"Open Popover"})}),e.jsx(a,{children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"width",children:"Width"}),e.jsx(n,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"maxWidth",children:"Max. Width"}),e.jsx(n,{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8"})]})]})]})})]})},t={render:()=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Show Info"})}),e.jsx(a,{className:"w-80",children:e.jsx("p",{className:"text-sm",children:"This is a simple popover with just text content. Popovers are great for displaying additional information without cluttering the main interface."})})]})},r={render:()=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{children:"Quick Add"})}),e.jsx(a,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Add Item"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter the details below."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(i,{htmlFor:"name",children:"Name"}),e.jsx(n,{id:"name",placeholder:"Item name"})]}),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(i,{htmlFor:"email",children:"Email"}),e.jsx(n,{id:"email",type:"email",placeholder:"Email address"})]})]}),e.jsx(o,{className:"w-full",children:"Add Item"})]})})]})};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. Width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var h,u,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Show Info</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p className="text-sm">
          This is a simple popover with just text content. Popovers are great
          for displaying additional information without cluttering the main
          interface.
        </p>
      </PopoverContent>
    </Popover>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,x,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>Quick Add</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Item</h4>
            <p className="text-sm text-muted-foreground">
              Enter the details below.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Item name" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email address" />
            </div>
          </div>
          <Button className="w-full">Add Item</Button>
        </div>
      </PopoverContent>
    </Popover>
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const se=["Default","Simple","FormPopover"];export{s as Default,r as FormPopover,t as Simple,se as __namedExportsOrder,ae as default};
