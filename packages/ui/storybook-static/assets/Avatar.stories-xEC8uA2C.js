import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m,a as ia}from"./index-ZH-6pyQh.js";import{u as la}from"./index-BzHRfv9E.js";import{u as C}from"./index-B2_tsCGI.js";import"./index-BP-xEy0R.js";import{c as da}from"./index-ZW2Bszwo.js";import{a as I}from"./cn-BEhiKRD9.js";import{c as _}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";function ua(a,t=[]){let n=[];function o(r,u){const s=m.createContext(u);s.displayName=r+"Context";const i=n.length;n=[...n,u];const h=c=>{var z;const{scope:l,children:g,...A}=c,v=((z=l==null?void 0:l[a])==null?void 0:z[i])||s,S=m.useMemo(()=>A,Object.values(A));return e.jsx(v.Provider,{value:S,children:g})};h.displayName=r+"Provider";function b(c,l){var v;const g=((v=l==null?void 0:l[a])==null?void 0:v[i])||s,A=m.useContext(g);if(A)return A;if(u!==void 0)return u;throw new Error(`\`${c}\` must be used within \`${r}\``)}return[h,b]}const d=()=>{const r=n.map(u=>m.createContext(u));return function(s){const i=(s==null?void 0:s[a])||r;return m.useMemo(()=>({[`__scope${a}`]:{...s,[a]:i}}),[s,i])}};return d.scopeName=a,[o,ma(d,...t)]}function ma(...a){const t=a[0];if(a.length===1)return t;const n=()=>{const o=a.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(r){const u=o.reduce((s,{useScope:i,scopeName:h})=>{const c=i(r)[`__scope${h}`];return{...s,...c}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}var va=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],L=va.reduce((a,t)=>{const n=da(`Primitive.${t}`),o=m.forwardRef((d,r)=>{const{asChild:u,...s}=d,i=u?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(i,{...s,ref:r})});return o.displayName=`Primitive.${t}`,{...a,[t]:o}},{}),E={exports:{}},F={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M;function pa(){if(M)return F;M=1;var a=ia();function t(c,l){return c===l&&(c!==0||1/c===1/l)||c!==c&&l!==l}var n=typeof Object.is=="function"?Object.is:t,o=a.useState,d=a.useEffect,r=a.useLayoutEffect,u=a.useDebugValue;function s(c,l){var g=l(),A=o({inst:{value:g,getSnapshot:l}}),v=A[0].inst,S=A[1];return r(function(){v.value=g,v.getSnapshot=l,i(v)&&S({inst:v})},[c,g,l]),d(function(){return i(v)&&S({inst:v}),c(function(){i(v)&&S({inst:v})})},[c]),u(g),g}function i(c){var l=c.getSnapshot;c=c.value;try{var g=l();return!n(c,g)}catch{return!0}}function h(c,l){return l()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:s;return F.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:b,F}var P;function ha(){return P||(P=1,E.exports=pa()),E.exports}var fa=ha();function ga(){return fa.useSyncExternalStore(xa,()=>!0,()=>!1)}function xa(){return()=>{}}var R="Avatar",[Aa]=ua(R),[ba,Z]=Aa(R),aa=m.forwardRef((a,t)=>{const{__scopeAvatar:n,...o}=a,[d,r]=m.useState("idle");return e.jsx(ba,{scope:n,imageLoadingStatus:d,onImageLoadingStatusChange:r,children:e.jsx(L.span,{...o,ref:t})})});aa.displayName=R;var ea="AvatarImage",ta=m.forwardRef((a,t)=>{const{__scopeAvatar:n,src:o,onLoadingStatusChange:d=()=>{},...r}=a,u=Z(ea,n),s=Sa(o,r),i=la(h=>{d(h),u.onImageLoadingStatusChange(h)});return C(()=>{s!=="idle"&&i(s)},[s,i]),s==="loaded"?e.jsx(L.img,{...r,ref:t,src:o}):null});ta.displayName=ea;var ra="AvatarFallback",na=m.forwardRef((a,t)=>{const{__scopeAvatar:n,delayMs:o,...d}=a,r=Z(ra,n),[u,s]=m.useState(o===void 0);return m.useEffect(()=>{if(o!==void 0){const i=window.setTimeout(()=>s(!0),o);return()=>window.clearTimeout(i)}},[o]),u&&r.imageLoadingStatus!=="loaded"?e.jsx(L.span,{...d,ref:t}):null});na.displayName=ra;function $(a,t){return a?t?(a.src!==t&&(a.src=t),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function Sa(a,{referrerPolicy:t,crossOrigin:n}){const o=ga(),d=m.useRef(null),r=o?(d.current||(d.current=new window.Image),d.current):null,[u,s]=m.useState(()=>$(r,a));return C(()=>{s($(r,a))},[r,a]),C(()=>{const i=c=>()=>{s(c)};if(!r)return;const h=i("loaded"),b=i("error");return r.addEventListener("load",h),r.addEventListener("error",b),t&&(r.referrerPolicy=t),typeof n=="string"&&(r.crossOrigin=n),()=>{r.removeEventListener("load",h),r.removeEventListener("error",b)}},[r,n,t]),u}var sa=aa,oa=ta,ca=na;const ja=_("relative flex shrink-0 overflow-hidden rounded-full",{variants:{size:{xs:"h-6 w-6",sm:"h-8 w-8",md:"h-10 w-10",lg:"h-12 w-12",xl:"h-16 w-16"}},defaultVariants:{size:"md"}}),ka=_("aspect-square h-full w-full object-cover"),ya=_("flex h-full w-full items-center justify-center rounded-full bg-muted font-medium",{variants:{size:{xs:"text-[10px]",sm:"text-xs",md:"text-sm",lg:"text-base",xl:"text-lg"}},defaultVariants:{size:"md"}}),p=m.forwardRef(({className:a,size:t,...n},o)=>e.jsx(sa,{ref:o,className:I(ja({size:t}),a),...n}));p.displayName=sa.displayName;const x=m.forwardRef(({className:a,...t},n)=>e.jsx(oa,{ref:n,className:I(ka(),a),...t}));x.displayName=oa.displayName;const f=m.forwardRef(({className:a,size:t,...n},o)=>e.jsx(ca,{ref:o,className:I(ya({size:t}),a),...n}));f.displayName=ca.displayName;p.__docgenInfo={description:"",methods:[]};x.__docgenInfo={description:"",methods:[]};f.__docgenInfo={description:"",methods:[]};const Pa={title:"Components/Data Display/Avatar",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Avatar size"}}},j={render:()=>e.jsxs(p,{children:[e.jsx(x,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(f,{children:"CN"})]})},k={render:()=>e.jsxs(p,{children:[e.jsx(x,{src:"https://invalid-url.com/image.png",alt:"Invalid"}),e.jsx(f,{children:"JD"})]})},y={render:()=>e.jsx(p,{children:e.jsx(f,{children:"AB"})})},w={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(p,{size:"sm",children:[e.jsx(x,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(f,{children:"SM"})]}),e.jsxs(p,{size:"md",children:[e.jsx(x,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(f,{children:"MD"})]}),e.jsxs(p,{size:"lg",children:[e.jsx(x,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(f,{children:"LG"})]}),e.jsxs(p,{size:"xl",children:[e.jsx(x,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(f,{children:"XL"})]})]})},N={render:()=>e.jsxs("div",{className:"flex -space-x-4",children:[e.jsxs(p,{className:"border-2 border-background",children:[e.jsx(x,{src:"https://github.com/shadcn.png"}),e.jsx(f,{children:"CN"})]}),e.jsxs(p,{className:"border-2 border-background",children:[e.jsx(x,{src:"https://github.com/vercel.png"}),e.jsx(f,{children:"VC"})]}),e.jsx(p,{className:"border-2 border-background",children:e.jsx(f,{children:"+3"})})]})};var D,V,q;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...(q=(V=j.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var G,O,B;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://invalid-url.com/image.png" alt="Invalid" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...(B=(O=k.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var T,H,U;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
}`,...(U=(H=y.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,J,X;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
}`,...(X=(J=w.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var K,Q,Y;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-4">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
}`,...(Y=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const $a=["Default","WithFallback","FallbackOnly","Sizes","AvatarGroup"];export{N as AvatarGroup,j as Default,y as FallbackOnly,w as Sizes,k as WithFallback,$a as __namedExportsOrder,Pa as default};
