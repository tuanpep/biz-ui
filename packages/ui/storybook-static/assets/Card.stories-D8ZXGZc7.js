import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-ZH-6pyQh.js";import{S as m}from"./index-ZW2Bszwo.js";import{a as C}from"./cn-BEhiKRD9.js";import{c as U}from"./index-B1xZ04RU.js";import{B as N}from"./Button-BfxvocXd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";import"./loader-circle--bTMh9uh.js";import"./createLucideIcon-3f6GN8JZ.js";const E=U("border bg-card text-card-foreground transition-all duration-200 rounded-none",{variants:{variant:{default:"border-border shadow-none bg-background",flat:"border-transparent shadow-none bg-background",clickable:"border-border shadow-none hover:border-primary hover:shadow-sm cursor-pointer bg-background",outline:"border-border shadow-none bg-transparent",ghost:"border-transparent shadow-none bg-transparent"},size:{sm:"p-0",md:"p-0",lg:"p-0"}},defaultVariants:{variant:"default",size:"md"}}),o=p.forwardRef(({className:r,variant:a,size:n,asChild:t,...s},v)=>{const G=t?m:"div";return e.jsx(G,{ref:v,className:C(E({variant:a,size:n}),r),...s})});o.displayName="Card";const d=p.forwardRef(({className:r,asChild:a,...n},t)=>{const s=a?m:"div";return e.jsx(s,{ref:t,className:C("flex flex-col space-y-1.5 p-6 pb-4",r),...n})});d.displayName="CardHeader";const i=p.forwardRef(({className:r,children:a,asChild:n,...t},s)=>{const v=n?m:"h3";return e.jsx(v,{ref:s,className:C("text-lg font-semibold tracking-tight text-foreground leading-tight",r),...t,children:a})});i.displayName="CardTitle";const c=p.forwardRef(({className:r,asChild:a,...n},t)=>{const s=a?m:"p";return e.jsx(s,{ref:t,className:C("text-sm text-muted-foreground leading-normal",r),...n})});c.displayName="CardDescription";const l=p.forwardRef(({className:r,asChild:a,...n},t)=>{const s=a?m:"div";return e.jsx(s,{ref:t,className:C("p-6 pt-2",r),...n})});l.displayName="CardContent";const b=p.forwardRef(({className:r,asChild:a,...n},t)=>{const s=a?m:"div";return e.jsx(s,{ref:t,className:C("flex items-center p-6 pt-2",r),...n})});b.displayName="CardFooter";o.__docgenInfo={description:"",methods:[],displayName:"Card",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};d.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CardDescription",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};const ee={title:"Components/Layout/Card",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","flat","clickable","outline","ghost"]},size:{control:"select",options:["sm","md","lg"]}},args:{variant:"default",size:"md"},decorators:[r=>e.jsx("div",{className:"w-[450px]",children:e.jsx(r,{})})]},h={render:r=>e.jsxs(o,{...r,children:[e.jsxs(d,{children:[e.jsx(i,{children:"Card Title"}),e.jsx(c,{children:"Card description goes here providing more context about the item."})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"This is the card content area. It follows the Biz UI principles with sharp corners and purposeful spacing."})}),e.jsxs(b,{children:[e.jsx(N,{variant:"primary",size:"sm",children:"Primary Action"}),e.jsx(N,{variant:"ghost",size:"sm",className:"ml-2",children:"Secondary"})]})]})},u={render:()=>e.jsxs(o,{variant:"clickable",children:[e.jsxs(d,{children:[e.jsx(i,{children:"Clickable Card"}),e.jsx(c,{children:"Hover to see the border interaction"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"This card is designed to be interactive, showing a visual highlight on hover."})})]})},x={render:()=>e.jsxs(o,{variant:"flat",children:[e.jsxs(d,{children:[e.jsx(i,{children:"Flat Card"}),e.jsx(c,{children:"No borders, just layer color"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"Useful for embedding sections within another surface."})})]})},f={render:()=>e.jsxs(o,{variant:"outline",children:[e.jsxs(d,{children:[e.jsx(i,{children:"Outline Card"}),e.jsx(c,{children:"Bordered variant with transparent background"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"A minimal card variant often used for less prominent information."})})]})},g={render:()=>e.jsxs(o,{variant:"ghost",children:[e.jsxs(d,{children:[e.jsx(i,{children:"Ghost Card"}),e.jsx(c,{children:"Completely transparent backdrop"})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm",children:"Renders without any background or border container."})})]})},j={render:()=>e.jsxs("div",{className:"grid gap-6",children:[e.jsxs(o,{variant:"default",children:[e.jsxs(d,{children:[e.jsx(i,{children:"Project Alpha"}),e.jsx(c,{children:"Active development"})]}),e.jsx(b,{className:"justify-end bg-layer-02 pt-4 pb-4",children:e.jsx(N,{variant:"tertiary",size:"sm",children:"View Details"})})]}),e.jsx(o,{variant:"clickable",children:e.jsxs(d,{children:[e.jsx(i,{children:"Settings"}),e.jsx(c,{children:"Manage your preferences"})]})}),e.jsx(o,{variant:"outline",children:e.jsxs(l,{className:"pt-6",children:[e.jsx("p",{className:"text-sm font-medium",children:"Quick stats"}),e.jsx("div",{className:"mt-2 text-2xl font-bold",children:"1,234"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"+12% from last month"})]})})]})};var y,T,w;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description goes here providing more context about the item.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is the card content area. It follows the Biz UI principles with
          sharp corners and purposeful spacing.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">
          Primary Action
        </Button>
        <Button variant="ghost" size="sm" className="ml-2">
          Secondary
        </Button>
      </CardFooter>
    </Card>
}`,...(w=(T=h.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var k,D,H;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Card variant="clickable">
      <CardHeader>
        <CardTitle>Clickable Card</CardTitle>
        <CardDescription>Hover to see the border interaction</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card is designed to be interactive, showing a visual highlight on
          hover.
        </p>
      </CardContent>
    </Card>
}`,...(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var S,_,z;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card variant="flat">
      <CardHeader>
        <CardTitle>Flat Card</CardTitle>
        <CardDescription>No borders, just layer color</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Useful for embedding sections within another surface.
        </p>
      </CardContent>
    </Card>
}`,...(z=(_=x.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var B,F,I;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Card variant="outline">
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>
          Bordered variant with transparent background
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          A minimal card variant often used for less prominent information.
        </p>
      </CardContent>
    </Card>
}`,...(I=(F=f.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var R,A,q;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Card variant="ghost">
      <CardHeader>
        <CardTitle>Ghost Card</CardTitle>
        <CardDescription>Completely transparent backdrop</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Renders without any background or border container.
        </p>
      </CardContent>
    </Card>
}`,...(q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var O,P,V;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="grid gap-6">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Project Alpha</CardTitle>
          <CardDescription>Active development</CardDescription>
        </CardHeader>
        <CardFooter className="justify-end bg-layer-02 pt-4 pb-4">
          <Button variant="tertiary" size="sm">
            View Details
          </Button>
        </CardFooter>
      </Card>

      <Card variant="clickable">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your preferences</CardDescription>
        </CardHeader>
      </Card>

      <Card variant="outline">
        <CardContent className="pt-6">
          <p className="text-sm font-medium">Quick stats</p>
          <div className="mt-2 text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>
    </div>
}`,...(V=(P=j.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const re=["Default","Clickable","Flat","Outline","Ghost","Showcase"];export{u as Clickable,h as Default,x as Flat,g as Ghost,f as Outline,j as Showcase,re as __namedExportsOrder,ee as default};
