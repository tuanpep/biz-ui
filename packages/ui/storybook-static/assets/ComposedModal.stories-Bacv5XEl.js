import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-ZH-6pyQh.js";import{R as Y,T as X,P as $,a as G,C as O,b as K,D as Q,O as Z}from"./index-_4q7CL6t.js";import{a as i}from"./cn-BEhiKRD9.js";import{c as ee}from"./index-B1xZ04RU.js";import{X as U}from"./x-BjIR8eL8.js";import{B as n}from"./Button-BfxvocXd.js";import{I as oe}from"./info-BJcGUmJa.js";import{L as B}from"./Label-MzlZTkPR.js";import{I as T}from"./Input-CxxgBqug.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BdafQ8h7.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";import"./index-CBQcSsvu.js";import"./index-B2_tsCGI.js";import"./index-rGWUK6NW.js";import"./index-BRulG1aA.js";import"./index-BzHRfv9E.js";import"./Combination-DvCWtk9P.js";import"./index-BlNWsJ36.js";import"./createLucideIcon-3f6GN8JZ.js";import"./index-ZW2Bszwo.js";import"./loader-circle--bTMh9uh.js";const J=ee("fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] border border-border bg-popover text-popover-foreground shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",{variants:{size:{sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]"}},defaultVariants:{size:"md"}}),W=l.createContext({size:"md",closeButtonLabel:"Close"});function ae(){return l.useContext(W)}const x=Y,C=X,N=l.forwardRef(({className:t,...o},a)=>e.jsx(Z,{ref:a,className:i("fixed inset-0 z-50 bg-[var(--overlay)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...o}));N.displayName="ModalOverlay";const c=l.forwardRef(({className:t,children:o,size:a="md",closeButtonLabel:s="Close",hideCloseButton:r=!1,...d},f)=>{const h=l.useMemo(()=>({size:a,closeButtonLabel:s}),[a,s]);return e.jsx($,{children:e.jsxs("div",{className:"biz-ui fixed inset-0 z-50 pointer-events-none [&>*]:pointer-events-auto",children:[e.jsx(N,{}),e.jsxs(G,{ref:f,className:i(J({size:a}),t),...d,children:[e.jsx(W.Provider,{value:h,children:o}),!r&&e.jsxs(O,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(U,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:s})]})]})]})})});c.displayName="ComposedModalContent";const m=l.forwardRef(({className:t,title:o,description:a,showCloseButton:s=!1,icon:r,children:d,...f},h)=>{const{closeButtonLabel:g}=ae();return e.jsxs("div",{ref:h,className:i("flex flex-col space-y-1.5 border-b border-border px-6 py-4 text-left",t),...f,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[r&&e.jsx("div",{className:"flex-shrink-0 text-muted-foreground",children:r}),e.jsx("div",{className:"flex-1",children:o&&e.jsx(K,{className:"text-lg font-semibold tracking-tight",children:o})})]}),s&&e.jsxs(O,{className:"rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",children:[e.jsx(U,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:g})]})]}),a&&e.jsx(Q,{className:"text-sm text-muted-foreground",children:a}),d]})});m.displayName="ModalHeader";const p=l.forwardRef(({className:t,scrollable:o=!1,children:a,...s},r)=>e.jsx("div",{ref:r,className:i("px-6 py-4",o&&"max-h-[60vh] overflow-y-auto",t),...s,children:a}));p.displayName="ModalBody";const u=l.forwardRef(({className:t,align:o="right",children:a,...s},r)=>{const d={left:"justify-start",center:"justify-center",right:"justify-end",between:"justify-between"};return e.jsx("div",{ref:r,className:i("flex flex-col-reverse sm:flex-row sm:gap-2 border-t border-border px-6 py-4",d[o],t),...s,children:a})});u.displayName="ModalFooter";const w=l.forwardRef(({className:t,size:o="md",hasHeader:a=!0,hasFooter:s=!0,bodyLines:r=3,...d},f)=>e.jsxs("div",{ref:f,className:i(J({size:o}),"animate-pulse pointer-events-none",t),...d,children:[a&&e.jsxs("div",{className:"border-b border-border px-6 py-4 space-y-3",children:[e.jsx("div",{className:"h-5 w-40 bg-muted rounded"}),e.jsx("div",{className:"h-4 w-60 bg-muted rounded"})]}),e.jsx("div",{className:"px-6 py-4 space-y-2",children:Array.from({length:r}).map((h,g)=>e.jsx("div",{className:"h-4 bg-muted rounded",style:{width:`${100-g*15}%`}},g))}),s&&e.jsxs("div",{className:"border-t border-border px-6 py-4 flex justify-end gap-2",children:[e.jsx("div",{className:"h-9 w-20 bg-muted rounded-md"}),e.jsx("div",{className:"h-9 w-24 bg-muted rounded-md"})]})]}));w.displayName="ModalSkeleton";c.__docgenInfo={description:"",methods:[],displayName:"ComposedModalContent",props:{closeButtonLabel:{required:!1,tsType:{name:"string"},description:"Label for the close button (for accessibility)",defaultValue:{value:'"Close"',computed:!1}},hideCloseButton:{required:!1,tsType:{name:"boolean"},description:"Hide the close button",defaultValue:{value:"false",computed:!1}},size:{defaultValue:{value:'"md"',computed:!1},required:!1}},composes:["VariantProps"]};N.__docgenInfo={description:"",methods:[],displayName:"ModalOverlay"};m.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Modal title"},description:{required:!1,tsType:{name:"string"},description:"Modal description/subtitle"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show close button in header (alternative to top-right close)",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display next to title"}}};p.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{scrollable:{required:!1,tsType:{name:"boolean"},description:"Enable scrolling for long content",defaultValue:{value:"false",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "between"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"between"'}]},description:"Align footer content",defaultValue:{value:'"right"',computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"ModalSkeleton",props:{size:{required:!1,tsType:{name:'VariantProps["size"]',raw:`VariantProps<
  typeof import("./ComposedModal.variants").modalVariants
>["size"]`},description:"Skeleton size to match modal",defaultValue:{value:'"md"',computed:!1}},hasHeader:{required:!1,tsType:{name:"boolean"},description:"Show header skeleton",defaultValue:{value:"true",computed:!1}},hasFooter:{required:!1,tsType:{name:"boolean"},description:"Show footer skeleton",defaultValue:{value:"true",computed:!1}},bodyLines:{required:!1,tsType:{name:"number"},description:"Number of body lines",defaultValue:{value:"3",computed:!1}}}};const Se={title:"Components/Overlays/ComposedModal",component:x,parameters:{layout:"centered"},tags:["autodocs"]},v={render:()=>e.jsxs(x,{children:[e.jsx(C,{asChild:!0,children:e.jsx(n,{children:"Open Composed Modal"})}),e.jsxs(c,{children:[e.jsx(m,{title:"Modal Title",description:"Provide a brief description of the modal's purpose."}),e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"This is the modal body content. You can place any components or text here. The ComposedModal allows for flexible layout by combining header, body, and footer."})}),e.jsxs(u,{children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{variant:"primary",children:"Confirm Action"})]})]})]})},y={render:()=>e.jsxs(x,{children:[e.jsx(C,{asChild:!0,children:e.jsx(n,{children:"Edit User Profile"})}),e.jsxs(c,{size:"md",children:[e.jsx(m,{title:"Edit Profile",description:"Update your account information."}),e.jsxs(p,{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(B,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(T,{id:"name",defaultValue:"John Doe",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(B,{htmlFor:"email",className:"text-right",children:"Email"}),e.jsx(T,{id:"email",defaultValue:"john@example.com",className:"col-span-3"})]})]}),e.jsx(u,{children:e.jsx(n,{variant:"primary",children:"Save Changes"})})]})]})},b={render:()=>e.jsxs(x,{children:[e.jsx(C,{asChild:!0,children:e.jsx(n,{children:"View Terms of Service"})}),e.jsxs(c,{size:"lg",children:[e.jsx(m,{title:"Terms of Service"}),e.jsx(p,{scrollable:!0,children:e.jsx("div",{className:"space-y-4",children:Array.from({length:10}).map((t,o)=>e.jsxs("p",{children:["Section ",o+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]},o))})}),e.jsx(u,{children:e.jsx(n,{variant:"primary",children:"I Accept"})})]})]})},j={render:()=>e.jsxs(x,{children:[e.jsx(C,{asChild:!0,children:e.jsx(n,{variant:"destructive",children:"Delete Account"})}),e.jsxs(c,{size:"sm",children:[e.jsx(m,{title:"Delete Account",description:"Are you absolutely sure you want to delete your account?",icon:e.jsx(oe,{className:"h-5 w-5 text-destructive"})}),e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"This action is irreversible and will result in the permanent deletion of all your data."})}),e.jsxs(u,{children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{variant:"destructive",children:"Permanently Delete"})]})]})]})},M={render:()=>e.jsx("div",{className:"w-[400px] border rounded-lg overflow-hidden",children:e.jsx(w,{size:"md"})})};var S,V,q;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ComposedModal>
            <ComposedModalTrigger asChild>
                <Button>Open Composed Modal</Button>
            </ComposedModalTrigger>
            <ComposedModalContent>
                <ModalHeader title="Modal Title" description="Provide a brief description of the modal's purpose." />
                <ModalBody>
                    <p className="text-sm">
                        This is the modal body content. You can place any components or text here.
                        The ComposedModal allows for flexible layout by combining header, body, and footer.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="primary">Confirm Action</Button>
                </ModalFooter>
            </ComposedModalContent>
        </ComposedModal>
}`,...(q=(V=v.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,F,_;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ComposedModal>
            <ComposedModalTrigger asChild>
                <Button>Edit User Profile</Button>
            </ComposedModalTrigger>
            <ComposedModalContent size="md">
                <ModalHeader title="Edit Profile" description="Update your account information." />
                <ModalBody className="grid gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" defaultValue="John Doe" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">Email</Label>
                        <Input id="email" defaultValue="john@example.com" className="col-span-3" />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary">Save Changes</Button>
                </ModalFooter>
            </ComposedModalContent>
        </ComposedModal>
}`,...(_=(F=y.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var I,k,A;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ComposedModal>
            <ComposedModalTrigger asChild>
                <Button>View Terms of Service</Button>
            </ComposedModalTrigger>
            <ComposedModalContent size="lg">
                <ModalHeader title="Terms of Service" />
                <ModalBody scrollable>
                    <div className="space-y-4">
                        {Array.from({
            length: 10
          }).map((_, i) => <p key={i}>
                                Section {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>)}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary">I Accept</Button>
                </ModalFooter>
            </ComposedModalContent>
        </ComposedModal>
}`,...(A=(k=b.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,P,L;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ComposedModal>
            <ComposedModalTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
            </ComposedModalTrigger>
            <ComposedModalContent size="sm">
                <ModalHeader title="Delete Account" description="Are you absolutely sure you want to delete your account?" icon={<Info className="h-5 w-5 text-destructive" />} />
                <ModalBody>
                    <p className="text-sm">
                        This action is irreversible and will result in the permanent deletion of all your data.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">Permanently Delete</Button>
                </ModalFooter>
            </ComposedModalContent>
        </ComposedModal>
}`,...(L=(P=j.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var R,E,H;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] border rounded-lg overflow-hidden">
            <ModalSkeleton size="md" />
        </div>
}`,...(H=(E=M.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Ve=["Default","WithForm","LargeScrollable","DangerModal","Skeleton"];export{j as DangerModal,v as Default,b as LargeScrollable,M as Skeleton,y as WithForm,Ve as __namedExportsOrder,Se as default};
