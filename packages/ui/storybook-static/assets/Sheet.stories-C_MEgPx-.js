import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-ZH-6pyQh.js";import{R as I,T as P,C as _,P as F,a as D,b as w,D as O,O as H}from"./index-_4q7CL6t.js";import{c as L}from"./index-B1xZ04RU.js";import{a as o}from"./cn-BEhiKRD9.js";import{X as V}from"./x-BjIR8eL8.js";import{B as n}from"./Button-BfxvocXd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BdafQ8h7.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";import"./index-CBQcSsvu.js";import"./index-B2_tsCGI.js";import"./index-rGWUK6NW.js";import"./index-BRulG1aA.js";import"./index-BzHRfv9E.js";import"./Combination-DvCWtk9P.js";import"./index-BlNWsJ36.js";import"./createLucideIcon-3f6GN8JZ.js";import"./index-ZW2Bszwo.js";import"./loader-circle--bTMh9uh.js";const p=I,u=P,E=_,z=F,x=m.forwardRef(({className:t,...s},a)=>e.jsx(H,{className:o("fixed inset-0 z-50 bg-[var(--overlay)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s,ref:a}));x.displayName=H.displayName;const U=L("fixed z-50 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),r=m.forwardRef(({side:t="right",className:s,children:a,...R},k)=>e.jsxs(z,{children:[e.jsx(x,{}),e.jsxs(D,{ref:k,className:o(U({side:t}),s),...R,children:[a,e.jsxs(_,{className:"absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none",children:[e.jsx(V,{className:"h-4 w-4","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));r.displayName=D.displayName;const i=({className:t,...s})=>e.jsx("div",{className:o("flex flex-col space-y-2 p-6 pb-0",t),...s});i.displayName="SheetHeader";const S=({className:t,...s})=>e.jsx("div",{className:o("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0",t),...s});S.displayName="SheetFooter";const d=m.forwardRef(({className:t,...s},a)=>e.jsx(w,{ref:a,className:o("text-lg font-semibold text-foreground",t),...s}));d.displayName=w.displayName;const f=m.forwardRef(({className:t,...s},a)=>e.jsx(O,{ref:a,className:o("text-sm text-muted-foreground",t),...s}));f.displayName=O.displayName;x.__docgenInfo={description:"",methods:[]};r.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}},composes:["VariantProps"]};i.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};S.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};d.__docgenInfo={description:"",methods:[]};f.__docgenInfo={description:"",methods:[]};const ce={title:"Overlays/Sheet",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"Slide-in panel from any edge of the screen. Built on Radix Dialog for full accessibility."}}}},l={render:()=>e.jsxs(p,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"secondary",children:"Open Sheet"})}),e.jsxs(r,{children:[e.jsxs(i,{children:[e.jsx(d,{children:"Sheet Title"}),e.jsx(f,{children:"This is a slide-in panel from the right edge."})]}),e.jsx("div",{className:"p-6",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Sheet content goes here. Use this for settings, filters, navigation, or any auxiliary content."})}),e.jsxs(S,{children:[e.jsx(E,{asChild:!0,children:e.jsx(n,{variant:"secondary",children:"Cancel"})}),e.jsx(n,{children:"Save Changes"})]})]})]})},c={render:()=>e.jsxs(p,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"secondary",children:"Open Left"})}),e.jsxs(r,{side:"left",children:[e.jsx(i,{children:e.jsx(d,{children:"Navigation"})}),e.jsx("nav",{className:"p-6",children:e.jsx("ul",{className:"space-y-2",children:["Dashboard","Projects","Tasks","Settings"].map(t=>e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-3 py-2 text-sm hover:bg-muted transition-colors",children:t})},t))})})]})]})},h={render:()=>e.jsxs(p,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"secondary",children:"Open Bottom"})}),e.jsx(r,{side:"bottom",className:"h-[300px]",children:e.jsxs(i,{children:[e.jsx(d,{children:"Bottom Sheet"}),e.jsx(f,{children:"Commonly used on mobile for actions and menus."})]})})]})};var g,j,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a slide-in panel from the right edge.
          </SheetDescription>
        </SheetHeader>
        <div className="p-6">
          <p className="text-sm text-muted-foreground">
            Sheet content goes here. Use this for settings, filters, navigation,
            or any auxiliary content.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var v,N,b;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="p-6">
          <ul className="space-y-2">
            {["Dashboard", "Projects", "Tasks", "Settings"].map(item => <li key={item}>
                <a href="#" className="block px-3 py-2 text-sm hover:bg-muted transition-colors">
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
}`,...(b=(N=c.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var C,T,B;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[300px]">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>
            Commonly used on mobile for actions and menus.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...(B=(T=h.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const he=["Default","LeftSide","Bottom"];export{h as Bottom,l as Default,c as LeftSide,he as __namedExportsOrder,ce as default};
