import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-ZH-6pyQh.js";import{a as p}from"./cn-BEhiKRD9.js";import{c as Ve}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";const De=Ve("flex w-full border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",{variants:{variant:{default:"border-input",filled:"border-transparent bg-muted",unstyled:"border-none bg-transparent shadow-none focus-visible:ring-0"},resize:{none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},size:{sm:"min-h-[60px] text-xs",md:"min-h-[80px] text-sm",lg:"min-h-[100px] text-base"}},defaultVariants:{variant:"default",resize:"vertical",size:"md"}}),a=s.forwardRef(({className:T,variant:de,resize:ce,size:pe,label:z,description:l,error:w,warn:j,required:ue=!1,hideLabel:me=!1,showCount:D,maxLength:i,autoResize:q,value:N,defaultValue:xe,onChange:S,wrapperClassName:he,"data-testid":be,id:fe,disabled:ge,readOnly:d,...ye},ve)=>{const Te=s.useId(),n=fe||Te,R=`${n}-description`,E=`${n}-error`,C=`${n}-warn`,c=!d&&ge,r=!d&&!c&&!!w,o=!d&&!r&&!c&&!!j,[ze,we]=s.useState(xe||""),V=N!==void 0?N:ze,I=String(V).length,je=L=>{N===void 0&&we(L.target.value),S==null||S(L)},t=s.useRef(null);s.useImperativeHandle(ve,()=>t.current),s.useEffect(()=>{q&&t.current&&(t.current.style.height="auto",t.current.style.height=`${t.current.scrollHeight}px`)},[V,q]);const Ne=[l&&!r&&!o?R:null,r?E:null,o?C:null].filter(Boolean).join(" ")||void 0,Se={"border-destructive focus-visible:ring-destructive":r,"border-warning focus-visible:ring-warning":o},W=e.jsx("textarea",{ref:t,id:n,value:V,onChange:je,maxLength:i,"aria-invalid":r,"aria-describedby":Ne,"data-testid":be,disabled:c,readOnly:d,className:p(De({variant:de,resize:ce,size:pe}),Se,T),...ye});return!z&&!l&&!w&&!j&&!D?W:e.jsxs("div",{className:p("grid w-full gap-1.5",he),children:[z&&e.jsxs("label",{htmlFor:n,className:p("text-sm font-medium leading-none",me&&"sr-only",c&&"opacity-50"),children:[z,ue&&e.jsx("span",{className:"text-destructive ml-1","aria-hidden":"true",children:"*"})]}),W,e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[l&&!r&&!o&&e.jsx("p",{id:R,className:"text-sm text-muted-foreground",children:l}),r&&e.jsx("p",{id:E,role:"alert",className:"text-xs text-destructive",children:w}),o&&!r&&e.jsx("p",{id:C,role:"alert",className:"text-xs text-warning",children:j})]}),D&&e.jsxs("p",{className:p("text-xs ml-auto",i&&I>=i?"text-destructive font-medium":"text-muted-foreground"),children:[I,i&&` / ${i}`]})]})]})});a.displayName="Textarea";a.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{variant:{required:!1,tsType:{name:"VariantProps['variant']",raw:"VariantProps<typeof import('./Textarea.variants').textareaVariants>['variant']"},description:"Textarea variant style"},resize:{required:!1,tsType:{name:"VariantProps['resize']",raw:"VariantProps<typeof import('./Textarea.variants').textareaVariants>['resize']"},description:"Textarea resize behavior"},size:{required:!1,tsType:{name:"VariantProps['size']",raw:"VariantProps<typeof import('./Textarea.variants').textareaVariants>['size']"},description:"Textarea size"},label:{required:!1,tsType:{name:"string"},description:"Label text for the textarea"},description:{required:!1,tsType:{name:"string"},description:"Description text shown below the textarea"},error:{required:!1,tsType:{name:"string"},description:"Error message to display (sets invalid state)"},warn:{required:!1,tsType:{name:"string"},description:"Warning message to display (warning state, not invalid)"},required:{required:!1,tsType:{name:"boolean"},description:"Show required indicator on label",defaultValue:{value:"false",computed:!1}},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Hide label visually but keep for accessibility",defaultValue:{value:"false",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"Show character count"},maxLength:{required:!1,tsType:{name:"number"},description:"Maximum character count"},autoResize:{required:!1,tsType:{name:"boolean"},description:"Enable auto-resize based on content"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional wrapper className when label/description is present"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test id for testing"}}};const We={title:"Components/Forms/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","unstyled"],description:"Textarea variant style"},size:{control:"select",options:["sm","md","lg"],description:"Textarea size"},resize:{control:"select",options:["none","vertical","horizontal","both"],description:"Resize behavior"},label:{control:"text",description:"Optional label text"},description:{control:"text",description:"Optional description text"},error:{control:"text",description:"Optional error text"},showCount:{control:"boolean",description:"Show character count"},autoResize:{control:"boolean",description:"Enable auto-resize based on content"}},decorators:[T=>e.jsx("div",{className:"w-[400px]",children:e.jsx(T,{})})]},u={args:{placeholder:"Type your message here..."}},m={args:{label:"Message",placeholder:"Type your message here..."}},x={args:{disabled:!0,placeholder:"Disabled textarea"}},h={args:{label:"Bio",error:"Bio must be at least 10 characters.",placeholder:"Tell us about yourself"}},b={args:{label:"Description",showCount:!0,maxLength:200,placeholder:"Describe your idea..."}},f={args:{readOnly:!0,value:"This is read-only content that cannot be edited."}},g={args:{label:"Auto-resizing Textarea",description:"This textarea will automatically resize based on content.",autoResize:!0,placeholder:"Type and watch it grow...",className:"min-h-[60px]"}},y={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{size:"sm",label:"Small",placeholder:"Small textarea"}),e.jsx(a,{size:"md",label:"Medium (default)",placeholder:"Medium textarea"}),e.jsx(a,{size:"lg",label:"Large",placeholder:"Large textarea"})]})},v={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"default",label:"Default",placeholder:"Default variant"}),e.jsx(a,{variant:"filled",label:"Filled",placeholder:"Filled variant"}),e.jsx(a,{variant:"unstyled",label:"Unstyled",placeholder:"Unstyled variant"})]})};var M,B,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  }
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var P,A,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Type your message here...'
  }
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var $,U,_;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled textarea'
  }
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var H,k,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    error: 'Bio must be at least 10 characters.',
    placeholder: 'Tell us about yourself'
  }
}`,...(G=(k=h.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    showCount: true,
    maxLength: 200,
    placeholder: 'Describe your idea...'
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be edited.'
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Auto-resizing Textarea',
    description: 'This textarea will automatically resize based on content.',
    autoResize: true,
    placeholder: 'Type and watch it grow...',
    className: 'min-h-[60px]'
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,ie;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Textarea size="sm" label="Small" placeholder="Small textarea" />
      <Textarea size="md" label="Medium (default)" placeholder="Medium textarea" />
      <Textarea size="lg" label="Large" placeholder="Large textarea" />
    </div>
}`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,oe,le;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Textarea variant="default" label="Default" placeholder="Default variant" />
      <Textarea variant="filled" label="Filled" placeholder="Filled variant" />
      <Textarea variant="unstyled" label="Unstyled" placeholder="Unstyled variant" />
    </div>
}`,...(le=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const Le=["Default","WithLabel","Disabled","WithError","WithCharacterCount","ReadOnly","AutoResize","Sizes","Variants"];export{g as AutoResize,u as Default,x as Disabled,f as ReadOnly,y as Sizes,v as Variants,b as WithCharacterCount,h as WithError,m as WithLabel,Le as __namedExportsOrder,We as default};
