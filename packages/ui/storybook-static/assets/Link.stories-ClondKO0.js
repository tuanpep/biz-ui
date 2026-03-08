import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ne}from"./index-ZH-6pyQh.js";import{a as p}from"./cn-BEhiKRD9.js";import{c as ae}from"./index-B1xZ04RU.js";import{c as se}from"./createLucideIcon-3f6GN8JZ.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),ie=ae("inline-flex items-center gap-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",{variants:{variant:{default:"text-primary underline-offset-4 hover:underline",primary:"text-primary underline-offset-4 hover:underline",secondary:"text-text-secondary underline-offset-4 hover:underline",visited:"text-purple-600 underline-offset-4 hover:underline",muted:"text-muted-foreground underline-offset-4 hover:underline hover:text-foreground"},underline:{none:"no-underline hover:no-underline",hover:"underline-offset-4 hover:underline",always:"underline"},size:{sm:"text-xs",md:"text-sm",lg:"text-base"}},defaultVariants:{variant:"default",underline:"hover",size:"md"}}),r=ne.forwardRef(({className:J,variant:K,underline:Q,size:X,external:Y=!1,disabled:n=!1,asSpan:Z=!1,children:f,href:$,target:h,rel:ee,...x},v)=>{const m=Y||h==="_blank",re=m?{target:h||"_blank",rel:ee||"noopener noreferrer"}:{},g=p(ie({variant:K,underline:Q,size:X}),n&&"disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed");return Z||n?e.jsxs("span",{className:p(g,n&&"pointer-events-none"),"aria-disabled":n,ref:v,...x,children:[f,m&&e.jsx(k,{className:"h-3 w-3 flex-shrink-0","aria-hidden":"true"})]}):e.jsxs("a",{className:p(g,J),ref:v,href:$,...re,...x,children:[f,m&&e.jsx(k,{className:"h-3 w-3 flex-shrink-0","aria-hidden":"true"})]})});r.displayName="Link";r.__docgenInfo={description:"",methods:[],displayName:"Link",props:{external:{required:!1,tsType:{name:"boolean"},description:"Show external link icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},asSpan:{required:!1,tsType:{name:"boolean"},description:"Render as a span instead of anchor (for non-interactive links)",defaultValue:{value:"false",computed:!1}}},composes:["Omit","VariantProps"]};const me={title:"Components/Navigation/Link",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary","visited","muted"],description:"Link variant style"},underline:{control:"select",options:["none","hover","always"],description:"Underline behavior"},size:{control:"select",options:["sm","md","lg"],description:"Link font size"},external:{control:"boolean",description:"Whether it is an external link"},disabled:{control:"boolean",description:"Whether the link is disabled"},asSpan:{control:"boolean",description:"Render as a span instead of an anchor"}},args:{children:"Link text",href:"#"}},a={args:{variant:"default"}},s={args:{variant:"primary"}},i={args:{variant:"secondary"}},t={args:{variant:"muted"}},o={args:{external:!0,children:"External link",href:"https://example.com"}},l={args:{underline:"always",children:"Always underlined"}},d={args:{underline:"none",children:"No underline"}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{href:"#",children:"Default Link"}),e.jsx(r,{href:"#",variant:"visited",children:"Visited Link"}),e.jsx(r,{href:"#",disabled:!0,children:"Disabled Link"})]})},u={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{href:"#",size:"sm",children:"Small"}),e.jsx(r,{href:"#",size:"md",children:"Medium"}),e.jsx(r,{href:"#",size:"lg",children:"Large"})]})};var y,L,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var S,N,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(j=(N=s.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,z,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var V,D,M;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'muted'
  }
}`,...(M=(D=t.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var q,_,U;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    external: true,
    children: 'External link',
    href: 'https://example.com'
  }
}`,...(U=(_=o.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var A,P,R;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    underline: 'always',
    children: 'Always underlined'
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,C,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    underline: 'none',
    children: 'No underline'
  }
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var O,W,H;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Link href="#">Default Link</Link>
            <Link href="#" variant="visited">Visited Link</Link>
            <Link href="#" disabled>Disabled Link</Link>
        </div>
}`,...(H=(W=c.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var B,F,G;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            <Link href="#" size="sm">Small</Link>
            <Link href="#" size="md">Medium</Link>
            <Link href="#" size="lg">Large</Link>
        </div>
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const pe=["Default","Primary","Secondary","Muted","External","UnderlineAlways","UnderlineNone","States","Sizes"];export{a as Default,o as External,t as Muted,s as Primary,i as Secondary,u as Sizes,c as States,l as UnderlineAlways,d as UnderlineNone,pe as __namedExportsOrder,me as default};
