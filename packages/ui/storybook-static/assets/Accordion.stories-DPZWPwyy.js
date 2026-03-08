import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as p,r as F}from"./index-ZH-6pyQh.js";import{P as re,c as Ce,a as je}from"./index-BdafQ8h7.js";import{c as ye}from"./index-DSV0aXck.js";import{u as be}from"./index-Bo-loign.js";import{u as ce}from"./index-rGWUK6NW.js";import{R as we,T as Te,b as _e,c as te}from"./index-C7qfArSE.js";import{u as Ne}from"./index-CBQcSsvu.js";import{u as Re}from"./index-BH6b-3aW.js";import{a as V}from"./cn-BEhiKRD9.js";import{C as Pe}from"./chevron-down-C-fNpRN8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-B2_tsCGI.js";import"./index-BlNWsJ36.js";import"./createLucideIcon-3f6GN8JZ.js";var u="Accordion",Se=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[H,Ee,ke]=ye(u),[_]=je(u,[ke,te]),Y=te(),ie=p.forwardRef((o,t)=>{const{type:n,...c}=o,i=c,r=c;return e.jsx(H.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e.jsx(Fe,{...r,ref:t}):e.jsx(Oe,{...i,ref:t})})});ie.displayName=u;var[ae,De]=_(u),[se,Me]=_(u,{collapsible:!1}),Oe=p.forwardRef((o,t)=>{const{value:n,defaultValue:c,onValueChange:i=()=>{},collapsible:r=!1,...m}=o,[a,A]=ce({prop:n,defaultProp:c??"",onChange:i,caller:u});return e.jsx(ae,{scope:o.__scopeAccordion,value:p.useMemo(()=>a?[a]:[],[a]),onItemOpen:A,onItemClose:p.useCallback(()=>r&&A(""),[r,A]),children:e.jsx(se,{scope:o.__scopeAccordion,collapsible:r,children:e.jsx(de,{...m,ref:t})})})}),Fe=p.forwardRef((o,t)=>{const{value:n,defaultValue:c,onValueChange:i=()=>{},...r}=o,[m,a]=ce({prop:n,defaultProp:c??[],onChange:i,caller:u}),A=p.useCallback(f=>a((h=[])=>[...h,f]),[a]),x=p.useCallback(f=>a((h=[])=>h.filter(R=>R!==f)),[a]);return e.jsx(ae,{scope:o.__scopeAccordion,value:m,onItemOpen:A,onItemClose:x,children:e.jsx(se,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(de,{...r,ref:t})})})}),[Ve,N]=_(u),de=p.forwardRef((o,t)=>{const{__scopeAccordion:n,disabled:c,dir:i,orientation:r="vertical",...m}=o,a=p.useRef(null),A=be(a,t),x=Ee(n),h=Re(i)==="ltr",R=Ce(o.onKeyDown,v=>{var K;if(!Se.includes(v.key))return;const Ie=v.target,P=x().filter(M=>{var $;return!(($=M.ref.current)!=null&&$.disabled)}),C=P.findIndex(M=>M.ref.current===Ie),W=P.length;if(C===-1)return;v.preventDefault();let g=C;const S=0,E=W-1,k=()=>{g=C+1,g>E&&(g=S)},D=()=>{g=C-1,g<S&&(g=E)};switch(v.key){case"Home":g=S;break;case"End":g=E;break;case"ArrowRight":r==="horizontal"&&(h?k():D());break;case"ArrowDown":r==="vertical"&&k();break;case"ArrowLeft":r==="horizontal"&&(h?D():k());break;case"ArrowUp":r==="vertical"&&D();break}const ve=g%W;(K=P[ve].ref.current)==null||K.focus()});return e.jsx(Ve,{scope:n,disabled:c,direction:i,orientation:r,children:e.jsx(H.Slot,{scope:n,children:e.jsx(re.div,{...m,"data-orientation":r,ref:A,onKeyDown:c?void 0:R})})})}),T="AccordionItem",[He,q]=_(T),le=p.forwardRef((o,t)=>{const{__scopeAccordion:n,value:c,...i}=o,r=N(T,n),m=De(T,n),a=Y(n),A=Ne(),x=c&&m.value.includes(c)||!1,f=r.disabled||o.disabled;return e.jsx(He,{scope:n,open:x,disabled:f,triggerId:A,children:e.jsx(we,{"data-orientation":r.orientation,"data-state":he(x),...a,...i,ref:t,disabled:f,open:x,onOpenChange:h=>{h?m.onItemOpen(c):m.onItemClose(c)}})})});le.displayName=T;var me="AccordionHeader",pe=p.forwardRef((o,t)=>{const{__scopeAccordion:n,...c}=o,i=N(u,n),r=q(me,n);return e.jsx(re.h3,{"data-orientation":i.orientation,"data-state":he(r.open),"data-disabled":r.disabled?"":void 0,...c,ref:t})});pe.displayName=me;var O="AccordionTrigger",ue=p.forwardRef((o,t)=>{const{__scopeAccordion:n,...c}=o,i=N(u,n),r=q(O,n),m=Me(O,n),a=Y(n);return e.jsx(H.ItemSlot,{scope:n,children:e.jsx(Te,{"aria-disabled":r.open&&!m.collapsible||void 0,"data-orientation":i.orientation,id:r.triggerId,...a,...c,ref:t})})});ue.displayName=O;var Ae="AccordionContent",ge=p.forwardRef((o,t)=>{const{__scopeAccordion:n,...c}=o,i=N(u,n),r=q(Ae,n),m=Y(n);return e.jsx(_e,{role:"region","aria-labelledby":r.triggerId,"data-orientation":i.orientation,...m,...c,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});ge.displayName=Ae;function he(o){return o?"open":"closed"}var Ye=ie,qe=le,We=pe,xe=ue,fe=ge;const I=Ye,s=F.forwardRef(({className:o,...t},n)=>e.jsx(qe,{ref:n,className:V("border-b",o),...t}));s.displayName="AccordionItem";const d=F.forwardRef(({className:o,children:t,...n},c)=>e.jsx(We,{className:"flex",children:e.jsxs(xe,{ref:c,className:V("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",o),...n,children:[t,e.jsx(Pe,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));d.displayName=xe.displayName;const l=F.forwardRef(({className:o,children:t,...n},c)=>e.jsx(fe,{ref:c,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:e.jsx("div",{className:V("pb-4 pt-0",o),children:t})}));l.displayName=fe.displayName;s.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};d.__docgenInfo={description:"",methods:[]};l.__docgenInfo={description:"",methods:[]};const io={title:"Components/Data Display/Accordion",component:I,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>e.jsx("div",{className:"w-[400px]",children:e.jsx(o,{})})]},j={render:()=>e.jsxs(I,{type:"single",collapsible:!0,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{children:"Is it accessible?"}),e.jsx(l,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{children:"Is it styled?"}),e.jsx(l,{children:"Yes. It comes with default styles that matches the other components'' aesthetic."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{children:"Is it animated?"}),e.jsx(l,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},y={render:()=>e.jsxs(I,{type:"single",collapsible:!0,defaultValue:"item-1",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{children:"Section 1"}),e.jsx(l,{children:"This accordion allows only one item to be open at a time."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{children:"Section 2"}),e.jsx(l,{children:"Opening this will close Section 1."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{children:"Section 3"}),e.jsx(l,{children:"Only one section can be expanded."})]})]})},b={render:()=>e.jsxs(I,{type:"multiple",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(d,{children:"Feature 1"}),e.jsx(l,{children:"In multiple mode, you can open several items at once."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(d,{children:"Feature 2"}),e.jsx(l,{children:"This item can be open alongside others."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(d,{children:"Feature 3"}),e.jsx(l,{children:"All items can be expanded simultaneously."})]})]})},w={render:()=>e.jsxs(I,{type:"single",collapsible:!0,className:"w-full",children:[e.jsxs(s,{value:"q1",children:[e.jsx(d,{children:"How do I reset my password?"}),e.jsx(l,{children:'Click on "Forgot Password" on the login page and follow the instructions sent to your email.'})]}),e.jsxs(s,{value:"q2",children:[e.jsx(d,{children:"What payment methods do you accept?"}),e.jsx(l,{children:"We accept all major credit cards, PayPal, and bank transfers."})]}),e.jsxs(s,{value:"q3",children:[e.jsx(d,{children:"Can I cancel my subscription?"}),e.jsx(l,{children:"Yes, you can cancel your subscription at any time from your account settings."})]})]})};var L,z,G;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos;&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(G=(z=j.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Q,U,B;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          This accordion allows only one item to be open at a time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Opening this will close Section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>Only one section can be expanded.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(B=(U=y.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var J,X,Z;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Feature 1</AccordionTrigger>
        <AccordionContent>
          In multiple mode, you can open several items at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Feature 2</AccordionTrigger>
        <AccordionContent>
          This item can be open alongside others.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Feature 3</AccordionTrigger>
        <AccordionContent>
          All items can be expanded simultaneously.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,oe,ne;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="q1">
        <AccordionTrigger>How do I reset my password?</AccordionTrigger>
        <AccordionContent>
          Click on &quot;Forgot Password&quot; on the login page and follow the
          instructions sent to your email.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards, PayPal, and bank transfers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger>Can I cancel my subscription?</AccordionTrigger>
        <AccordionContent>
          Yes, you can cancel your subscription at any time from your account
          settings.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const ao=["Default","SingleMode","MultipleMode","FAQ"];export{j as Default,w as FAQ,b as MultipleMode,y as SingleMode,ao as __namedExportsOrder,io as default};
