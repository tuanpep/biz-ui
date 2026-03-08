import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-ZH-6pyQh.js";import{c as ue,a as pe}from"./index-BdafQ8h7.js";import{u as z}from"./index-Bo-loign.js";import{R as me,T as Ae,c as Y,P as De,W as he,a as ve,b as fe,D as xe,C as G,O as ye}from"./index-_4q7CL6t.js";import{a as s}from"./cn-BEhiKRD9.js";import{b as k,B as N}from"./Button-BfxvocXd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-CBQcSsvu.js";import"./index-B2_tsCGI.js";import"./index-rGWUK6NW.js";import"./index-BRulG1aA.js";import"./index-BzHRfv9E.js";import"./Combination-DvCWtk9P.js";import"./index-BlNWsJ36.js";import"./index-ZW2Bszwo.js";import"./index-B1xZ04RU.js";import"./loader-circle--bTMh9uh.js";import"./createLucideIcon-3f6GN8JZ.js";var je=Symbol("radix.slottable");function Ce(r){const o=({children:t})=>e.jsx(e.Fragment,{children:t});return o.displayName=`${r}.Slottable`,o.__radixId=je,o}var V="AlertDialog",[Ne]=pe(V,[Y]),i=Y(),q=r=>{const{__scopeAlertDialog:o,...t}=r,a=i(o);return e.jsx(me,{...a,...t,modal:!0})};q.displayName=V;var Te="AlertDialogTrigger",J=l.forwardRef((r,o)=>{const{__scopeAlertDialog:t,...a}=r,n=i(t);return e.jsx(Ae,{...n,...a,ref:o})});J.displayName=Te;var _e="AlertDialogPortal",K=r=>{const{__scopeAlertDialog:o,...t}=r,a=i(o);return e.jsx(De,{...a,...t})};K.displayName=_e;var be="AlertDialogOverlay",Q=l.forwardRef((r,o)=>{const{__scopeAlertDialog:t,...a}=r,n=i(t);return e.jsx(ye,{...n,...a,ref:o})});Q.displayName=be;var c="AlertDialogContent",[we,Se]=Ne(c),Re=Ce("AlertDialogContent"),U=l.forwardRef((r,o)=>{const{__scopeAlertDialog:t,children:a,...n}=r,_=i(t),f=l.useRef(null),ge=z(o,f),w=l.useRef(null);return e.jsx(he,{contentName:c,titleName:X,docsSlug:"alert-dialog",children:e.jsx(we,{scope:t,cancelRef:w,children:e.jsxs(ve,{role:"alertdialog",..._,...n,ref:ge,onOpenAutoFocus:ue(n.onOpenAutoFocus,h=>{var S;h.preventDefault(),(S=w.current)==null||S.focus({preventScroll:!0})}),onPointerDownOutside:h=>h.preventDefault(),onInteractOutside:h=>h.preventDefault(),children:[e.jsx(Re,{children:a}),e.jsx(Pe,{contentRef:f})]})})})});U.displayName=c;var X="AlertDialogTitle",Z=l.forwardRef((r,o)=>{const{__scopeAlertDialog:t,...a}=r,n=i(t);return e.jsx(fe,{...n,...a,ref:o})});Z.displayName=X;var ee="AlertDialogDescription",oe=l.forwardRef((r,o)=>{const{__scopeAlertDialog:t,...a}=r,n=i(t);return e.jsx(xe,{...n,...a,ref:o})});oe.displayName=ee;var Ee="AlertDialogAction",re=l.forwardRef((r,o)=>{const{__scopeAlertDialog:t,...a}=r,n=i(t);return e.jsx(G,{...n,...a,ref:o})});re.displayName=Ee;var te="AlertDialogCancel",ae=l.forwardRef((r,o)=>{const{__scopeAlertDialog:t,...a}=r,{cancelRef:n}=Se(te,t),_=i(t),f=z(o,n);return e.jsx(G,{..._,...a,ref:f})});ae.displayName=te;var Pe=({contentRef:r})=>{const o=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${ee}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var a;document.getElementById((a=r.current)==null?void 0:a.getAttribute("aria-describedby"))||console.warn(o)},[o,r]),null},Ie=q,Oe=J,Fe=K,le=Q,ne=U,ie=re,se=ae,ce=Z,de=oe;const v=Ie,T=Oe,Be=Fe,b=l.forwardRef(({className:r,...o},t)=>e.jsx(le,{className:s("fixed inset-0 z-50 bg-[var(--overlay)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...o,ref:t}));b.displayName=le.displayName;const d=l.forwardRef(({className:r,...o},t)=>e.jsx(Be,{children:e.jsxs("div",{className:"biz-ui fixed inset-0 z-50 pointer-events-none [&>*]:pointer-events-auto",children:[e.jsx(b,{}),e.jsx(ne,{ref:t,className:s("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-popover p-6 text-popover-foreground shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",r),...o})]})}));d.displayName=ne.displayName;const g=({className:r,...o})=>e.jsx("div",{className:s("flex flex-col space-y-2 text-center sm:text-left",r),...o});g.displayName="AlertDialogHeader";const u=({className:r,...o})=>e.jsx("div",{className:s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...o});u.displayName="AlertDialogFooter";const p=l.forwardRef(({className:r,...o},t)=>e.jsx(ce,{ref:t,className:s("text-lg font-semibold",r),...o}));p.displayName=ce.displayName;const m=l.forwardRef(({className:r,...o},t)=>e.jsx(de,{ref:t,className:s("text-sm text-muted-foreground",r),...o}));m.displayName=de.displayName;const A=l.forwardRef(({className:r,...o},t)=>e.jsx(ie,{ref:t,className:s(k(),r),...o}));A.displayName=ie.displayName;const D=l.forwardRef(({className:r,...o},t)=>e.jsx(se,{ref:t,className:s(k({variant:"outline"}),"mt-2 sm:mt-0",r),...o}));D.displayName=se.displayName;b.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};p.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};A.__docgenInfo={description:"",methods:[]};D.__docgenInfo={description:"",methods:[]};const ao={title:"Components/Overlays/AlertDialog",component:v,parameters:{layout:"centered"},tags:["autodocs"]},x={render:()=>e.jsxs(v,{children:[e.jsx(T,{asChild:!0,children:e.jsx(N,{variant:"outline",children:"Show Dialog"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(p,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(u,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{children:"Continue"})]})]})]})},y={render:()=>e.jsxs(v,{children:[e.jsx(T,{asChild:!0,children:e.jsx(N,{variant:"destructive",children:"Delete Account"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(p,{children:"Delete Account"}),e.jsx(m,{children:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."})]}),e.jsxs(u,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})]})]})]})},j={render:()=>e.jsxs(v,{children:[e.jsx(T,{asChild:!0,children:e.jsx(N,{children:"Logout"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(p,{children:"Logout"}),e.jsx(m,{children:"Are you sure you want to logout?"})]}),e.jsxs(u,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{children:"Logout"})]})]})]})},C={render:()=>e.jsxs(v,{children:[e.jsx(T,{asChild:!0,children:e.jsx(N,{variant:"outline",children:"Show Terms"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(p,{children:"Terms and Conditions"}),e.jsxs(m,{className:"max-h-[200px] overflow-auto",children:["By clicking continue, you agree to our Terms of Service and Privacy Policy. We collect and process your personal data as described in our privacy policy. This includes your name, email address, usage data, and device information. We use this data to provide and improve our services, communicate with you, and ensure the security of your account.",e.jsx("br",{}),e.jsx("br",{}),"You have the right to access, correct, or delete your personal data at any time. For more information, please contact our support team."]})]}),e.jsxs(u,{children:[e.jsx(D,{children:"Decline"}),e.jsx(A,{children:"Accept"})]})]})]})};var R,E,P;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(P=(E=x.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var I,O,F;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? All of your data will be
            permanently removed. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(F=(O=y.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var B,L,$;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Logout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to logout?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...($=(L=j.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var H,M,W;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Terms</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          <AlertDialogDescription className="max-h-[200px] overflow-auto">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy. We collect and process your personal data as described in our
            privacy policy. This includes your name, email address, usage data, and
            device information. We use this data to provide and improve our services,
            communicate with you, and ensure the security of your account.
            <br /><br />
            You have the right to access, correct, or delete your personal data at
            any time. For more information, please contact our support team.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(W=(M=C.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const lo=["Default","Destructive","Simple","LongDescription"];export{x as Default,y as Destructive,C as LongDescription,j as Simple,lo as __namedExportsOrder,ao as default};
