import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-ZH-6pyQh.js";import{P as N,c as w,a as X}from"./index-BdafQ8h7.js";import{R as Y,I as Z,c as M}from"./index-b3JPgo0-.js";import{P as ee}from"./index-BlNWsJ36.js";import{u as ae}from"./index-BH6b-3aW.js";import{u as ne}from"./index-rGWUK6NW.js";import{u as se}from"./index-CBQcSsvu.js";import{a as C}from"./cn-BEhiKRD9.js";import{c as P}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";import"./index-DSV0aXck.js";import"./index-BzHRfv9E.js";import"./index-B2_tsCGI.js";var y="Tabs",[te]=X(y,[M]),E=M(),[re,z]=te(y),F=b.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,onValueChange:i,defaultValue:c,orientation:o="horizontal",dir:g,activationMode:f="automatic",...p}=a,l=ae(g),[d,m]=ne({prop:s,onChange:i,defaultProp:c??"",caller:y});return e.jsx(re,{scope:r,baseId:se(),value:d,onValueChange:m,orientation:o,dir:l,activationMode:f,children:e.jsx(N.div,{dir:l,"data-orientation":o,...p,ref:t})})});F.displayName=y;var $="TabsList",G=b.forwardRef((a,t)=>{const{__scopeTabs:r,loop:s=!0,...i}=a,c=z($,r),o=E(r);return e.jsx(Y,{asChild:!0,...o,orientation:c.orientation,dir:c.dir,loop:s,children:e.jsx(N.div,{role:"tablist","aria-orientation":c.orientation,...i,ref:t})})});G.displayName=$;var O="TabsTrigger",K=b.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,disabled:i=!1,...c}=a,o=z(O,r),g=E(r),f=H(o.baseId,s),p=J(o.baseId,s),l=s===o.value;return e.jsx(Z,{asChild:!0,...g,focusable:!i,active:l,children:e.jsx(N.button,{type:"button",role:"tab","aria-selected":l,"aria-controls":p,"data-state":l?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:f,...c,ref:t,onMouseDown:w(a.onMouseDown,d=>{!i&&d.button===0&&d.ctrlKey===!1?o.onValueChange(s):d.preventDefault()}),onKeyDown:w(a.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&o.onValueChange(s)}),onFocus:w(a.onFocus,()=>{const d=o.activationMode!=="manual";!l&&!i&&d&&o.onValueChange(s)})})})});K.displayName=O;var B="TabsContent",q=b.forwardRef((a,t)=>{const{__scopeTabs:r,value:s,forceMount:i,children:c,...o}=a,g=z(B,r),f=H(g.baseId,s),p=J(g.baseId,s),l=s===g.value,d=b.useRef(l);return b.useEffect(()=>{const m=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(ee,{present:i||l,children:({present:m})=>e.jsx(N.div,{"data-state":l?"active":"inactive","data-orientation":g.orientation,role:"tabpanel","aria-labelledby":f,hidden:!m,id:p,tabIndex:0,...o,ref:t,style:{...a.style,animationDuration:d.current?"0s":void 0},children:m&&c})})});q.displayName=B;function H(a,t){return`${a}-trigger-${t}`}function J(a,t){return`${a}-content-${t}`}var ie=F,Q=G,U=K,W=q;const oe=P("inline-flex items-center text-muted-foreground w-full border-b border-border p-0",{variants:{variant:{line:"border-b border-border bg-transparent h-10",contained:"border-none bg-muted h-10"},size:{sm:"h-8 text-xs",md:"h-10 text-sm",lg:"h-12 text-base"}},defaultVariants:{variant:"line",size:"md"}}),de=P("inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative rounded-none",{variants:{variant:{line:"px-4 h-full border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground hover:text-foreground hover:bg-accent/10",contained:"px-6 h-full border-r border-border bg-muted data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:border-t-2 data-[state=active]:border-t-primary hover:bg-accent/20"},size:{sm:"text-xs px-3",md:"text-sm px-4",lg:"text-base px-6"}},defaultVariants:{variant:"line",size:"md"}}),v=ie,u=b.forwardRef(({className:a,variant:t,size:r,...s},i)=>e.jsx(Q,{ref:i,className:C(oe({variant:t,size:r}),a),...s}));u.displayName=Q.displayName;const n=b.forwardRef(({className:a,variant:t,size:r,...s},i)=>e.jsx(U,{ref:i,className:C(de({variant:t,size:r}),a),...s}));n.displayName=U.displayName;const T=b.forwardRef(({className:a,...t},r)=>e.jsx(W,{ref:r,className:C("mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...t}));T.displayName=W.displayName;u.__docgenInfo={description:"",methods:[]};n.__docgenInfo={description:"",methods:[]};T.__docgenInfo={description:"",methods:[]};const ze={title:"Components/Navigation/Tabs",component:v,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e.jsx("div",{className:"w-[450px]",children:e.jsx(a,{})})]},x={render:()=>e.jsxs(v,{defaultValue:"account",children:[e.jsxs(u,{variant:"line",children:[e.jsx(n,{value:"account",variant:"line",children:"Account"}),e.jsx(n,{value:"password",variant:"line",children:"Password"})]}),e.jsx(T,{value:"account",children:e.jsx("p",{className:"p-4 text-sm text-muted-foreground",children:"Make changes to your account here. Click save when you're done."})}),e.jsx(T,{value:"password",children:e.jsx("p",{className:"p-4 text-sm text-muted-foreground",children:"Change your password here. After saving, you'll be logged out."})})]})},h={render:()=>e.jsxs(v,{defaultValue:"tab-1",children:[e.jsxs(u,{variant:"contained",children:[e.jsx(n,{value:"tab-1",variant:"contained",children:"Details"}),e.jsx(n,{value:"tab-2",variant:"contained",children:"Configuration"}),e.jsx(n,{value:"tab-3",variant:"contained",children:"Security"})]}),e.jsx(T,{value:"tab-1",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Details"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"This is a contained tab style, often used for secondary navigation within pages."})]})}),e.jsx(T,{value:"tab-2",children:e.jsx("div",{className:"p-4",children:"Content for configuration"})})]})},j={render:()=>e.jsxs("div",{className:"space-y-12 w-full",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold uppercase tracking-wider text-muted-foreground",children:"Line Tabs (Standard)"}),e.jsx(v,{defaultValue:"1",children:e.jsxs(u,{variant:"line",children:[e.jsx(n,{value:"1",variant:"line",children:"Overview"}),e.jsx(n,{value:"2",variant:"line",children:"Resources"}),e.jsx(n,{value:"3",variant:"line",children:"Settings"})]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold uppercase tracking-wider text-muted-foreground",children:"Contained Tabs"}),e.jsx(v,{defaultValue:"1",children:e.jsxs(u,{variant:"contained",children:[e.jsx(n,{value:"1",variant:"contained",children:"Dashboard"}),e.jsx(n,{value:"2",variant:"contained",children:"Analytics"}),e.jsx(n,{value:"3",variant:"contained",children:"Logs"})]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold uppercase tracking-wider text-muted-foreground",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(v,{defaultValue:"1",children:e.jsxs(u,{size:"sm",children:[e.jsx(n,{value:"1",size:"sm",children:"Small Tab"}),e.jsx(n,{value:"2",size:"sm",children:"Active"})]})}),e.jsx(v,{defaultValue:"1",children:e.jsxs(u,{size:"md",children:[e.jsx(n,{value:"1",size:"md",children:"Medium Tab"}),e.jsx(n,{value:"2",size:"md",children:"Default"})]})}),e.jsx(v,{defaultValue:"1",children:e.jsxs(u,{size:"lg",children:[e.jsx(n,{value:"1",size:"lg",children:"Large Tab"}),e.jsx(n,{value:"2",size:"lg",children:"Size"})]})})]})]})]})};var S,L,V;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account">
      <TabsList variant="line">
        <TabsTrigger value="account" variant="line">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" variant="line">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="p-4 text-sm text-muted-foreground">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="p-4 text-sm text-muted-foreground">
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
}`,...(V=(L=x.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,A,I;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab-1">
      <TabsList variant="contained">
        <TabsTrigger value="tab-1" variant="contained">
          Details
        </TabsTrigger>
        <TabsTrigger value="tab-2" variant="contained">
          Configuration
        </TabsTrigger>
        <TabsTrigger value="tab-3" variant="contained">
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">Details</h3>
          <p className="text-sm text-muted-foreground mt-1">
            This is a contained tab style, often used for secondary navigation
            within pages.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab-2">
        <div className="p-4">Content for configuration</div>
      </TabsContent>
    </Tabs>
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var R,D,k;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Line Tabs (Standard)
        </h4>
        <Tabs defaultValue="1">
          <TabsList variant="line">
            <TabsTrigger value="1" variant="line">
              Overview
            </TabsTrigger>
            <TabsTrigger value="2" variant="line">
              Resources
            </TabsTrigger>
            <TabsTrigger value="3" variant="line">
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Contained Tabs
        </h4>
        <Tabs defaultValue="1">
          <TabsList variant="contained">
            <TabsTrigger value="1" variant="contained">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="2" variant="contained">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="3" variant="contained">
              Logs
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Sizes
        </h4>
        <div className="flex flex-col gap-6">
          <Tabs defaultValue="1">
            <TabsList size="sm">
              <TabsTrigger value="1" size="sm">
                Small Tab
              </TabsTrigger>
              <TabsTrigger value="2" size="sm">
                Active
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="1">
            <TabsList size="md">
              <TabsTrigger value="1" size="md">
                Medium Tab
              </TabsTrigger>
              <TabsTrigger value="2" size="md">
                Default
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="1">
            <TabsList size="lg">
              <TabsTrigger value="1" size="lg">
                Large Tab
              </TabsTrigger>
              <TabsTrigger value="2" size="lg">
                Size
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
}`,...(k=(D=j.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const Se=["Default","Contained","Showcase"];export{h as Contained,x as Default,j as Showcase,Se as __namedExportsOrder,ze as default};
