import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-ZH-6pyQh.js";import{S as p}from"./index-ZW2Bszwo.js";import{a as c}from"./cn-BEhiKRD9.js";import{c as x}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";const C=x("",{variants:{variant:{"heading-01":"text-xs font-semibold tracking-wide text-foreground","heading-02":"text-sm font-semibold tracking-wide text-foreground","heading-03":"text-base font-semibold text-foreground","heading-04":"text-lg font-semibold text-foreground","heading-05":"text-xl font-semibold text-foreground","heading-06":"text-2xl font-semibold text-foreground","heading-07":"text-3xl font-semibold text-foreground"}},defaultVariants:{variant:"heading-03"}}),k=x("",{variants:{variant:{"body-01":"text-sm font-normal leading-5 text-foreground","body-02":"text-base font-normal leading-6 text-foreground","body-compact-01":"text-sm font-normal leading-4 text-foreground","body-compact-02":"text-base font-normal leading-5 text-foreground"}},defaultVariants:{variant:"body-01"}}),L=x("",{variants:{variant:{"label-01":"text-xs font-normal tracking-wide text-muted-foreground","label-02":"text-sm font-normal tracking-wide text-muted-foreground"}},defaultVariants:{variant:"label-01"}}),q=x("",{variants:{variant:{"helper-text-01":"text-xs font-normal text-muted-foreground"}},defaultVariants:{variant:"helper-text-01"}}),U=x("font-mono bg-muted px-1 py-0.5 rounded-none text-foreground",{variants:{variant:{"code-01":"text-xs","code-02":"text-sm"}},defaultVariants:{variant:"code-01"}}),_={"heading-01":"h6","heading-02":"h5","heading-03":"h4","heading-04":"h3","heading-05":"h2","heading-06":"h1","heading-07":"h1"},a=l.forwardRef(({className:t,variant:n="heading-03",as:r,asChild:i,...d},s)=>{const I=i?p:r??_[n];return e.jsx(I,{ref:s,className:c(C({variant:n}),t),...d})});a.displayName="Heading";const o=l.forwardRef(({className:t,variant:n="body-01",asChild:r,...i},d)=>{const s=r?p:"p";return e.jsx(s,{ref:d,className:c(k({variant:n}),t),...i})});o.displayName="Body";const y=l.forwardRef(({className:t,variant:n="label-01",asChild:r,...i},d)=>{const s=r?p:"span";return e.jsx(s,{ref:d,className:c(L({variant:n}),t),...i})});y.displayName="TypographyLabel";const v=l.forwardRef(({className:t,variant:n="helper-text-01",asChild:r,...i},d)=>{const s=r?p:"p";return e.jsx(s,{ref:d,className:c(q({variant:n}),t),...i})});v.displayName="HelperText";const f=l.forwardRef(({className:t,variant:n="code-01",asChild:r,...i},d)=>{const s=r?p:"code";return e.jsx(s,{ref:d,className:c(U({variant:n}),t),...i})});f.displayName="Code";a.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{variant:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:`VariantProps<
  typeof import("./Typography.variants").headingVariants
>["variant"]`}],raw:`NonNullable<
  VariantProps<
    typeof import("./Typography.variants").headingVariants
  >["variant"]
>`},description:"Typography variant",defaultValue:{value:'"heading-03"',computed:!1}},as:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:"HTML element to render (defaults based on variant)"},asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}}};o.__docgenInfo={description:"",methods:[],displayName:"Body",props:{variant:{required:!1,tsType:{name:'VariantProps["variant"]',raw:`VariantProps<
  typeof import("./Typography.variants").bodyVariants
>["variant"]`},description:"Typography variant",defaultValue:{value:'"body-01"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}}};y.__docgenInfo={description:"",methods:[],displayName:"TypographyLabel",props:{variant:{required:!1,tsType:{name:'VariantProps["variant"]',raw:`VariantProps<
  typeof import("./Typography.variants").typographyLabelVariants
>["variant"]`},description:"Typography variant",defaultValue:{value:'"label-01"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}}};v.__docgenInfo={description:"",methods:[],displayName:"HelperText",props:{variant:{required:!1,tsType:{name:'VariantProps["variant"]',raw:`VariantProps<
  typeof import("./Typography.variants").helperTextVariants
>["variant"]`},description:"Typography variant",defaultValue:{value:'"helper-text-01"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}}};f.__docgenInfo={description:"",methods:[],displayName:"Code",props:{variant:{required:!1,tsType:{name:'VariantProps["variant"]',raw:`VariantProps<
  typeof import("./Typography.variants").codeVariants
>["variant"]`},description:"Typography variant",defaultValue:{value:'"code-01"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}}};const D={title:"Components/Data Display/Typography",parameters:{layout:"centered"},tags:["autodocs"]},h={render:()=>e.jsxs("div",{className:"space-y-10 w-[600px]",children:[e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold border-b pb-2",children:"Headings"}),e.jsx(a,{variant:"heading-07",children:"Heading 07"}),e.jsx(a,{variant:"heading-06",children:"Heading 06"}),e.jsx(a,{variant:"heading-05",children:"Heading 05"}),e.jsx(a,{variant:"heading-04",children:"Heading 04"}),e.jsx(a,{variant:"heading-03",children:"Heading 03"}),e.jsx(a,{variant:"heading-02",children:"Heading 02"}),e.jsx(a,{variant:"heading-01",children:"Heading 01"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold border-b pb-2",children:"Body"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-muted-foreground",children:"Body 01 (14px/20px)"}),e.jsx(o,{variant:"body-01",children:"The quick brown fox jumps over the lazy dog. Biz UI is a powerful component library for building modern web applications."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-muted-foreground",children:"Body 02 (16px/24px)"}),e.jsx(o,{variant:"body-02",children:"The quick brown fox jumps over the lazy dog. Biz UI is a powerful component library for building modern web applications."})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold border-b pb-2",children:"Labels & Helper Text"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(y,{variant:"label-01",children:"Label 01 (12px)"}),e.jsx(y,{variant:"label-02",children:"Label 02 (14px)"}),e.jsx(v,{variant:"helper-text-01",children:"Helper text 01 (12px)"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold border-b pb-2",children:"Code"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:e.jsx(f,{variant:"code-01",children:"const x = 1; // code-01 (12px)"})}),e.jsx("div",{children:e.jsx(f,{variant:"code-02",children:"const y = 2; // code-02 (14px)"})})]})]})]})},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"heading-07",children:"Heading 07 (30px)"}),e.jsx(a,{variant:"heading-06",children:"Heading 06 (24px)"}),e.jsx(a,{variant:"heading-05",children:"Heading 05 (20px)"}),e.jsx(a,{variant:"heading-04",children:"Heading 04 (18px)"}),e.jsx(a,{variant:"heading-03",as:"h1",children:"Heading 03 (16px - Used as H1)"}),e.jsx(a,{variant:"heading-02",children:"Heading 02 (14px)"}),e.jsx(a,{variant:"heading-01",children:"Heading 01 (12px)"})]})},g={render:()=>e.jsxs("div",{className:"space-y-8 max-w-prose",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Body 01"}),e.jsx(o,{variant:"body-01",children:"This is body-01 text. It's meant for smaller body copy and standard UI elements. It follows Biz UI type scale for optimal readability."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Body 02"}),e.jsx(o,{variant:"body-02",children:"This is body-02 text. It's larger and often used for longer content blocks where better readability and more white space are desired."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Body Compact 01"}),e.jsx(o,{variant:"body-compact-01",children:"This is body-compact-01 text. It has reduced line height (14px/16px) for tight UI areas like tables or sidebars."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted-foreground",children:"Body Compact 02"}),e.jsx(o,{variant:"body-compact-02",children:"This is body-compact-02 text. It has reduced line height (16px/20px) for tight UI areas where a larger font is needed."})]})]})};var b,u,H;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 w-[600px]">
      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Headings</h3>
        <Heading variant="heading-07">Heading 07</Heading>
        <Heading variant="heading-06">Heading 06</Heading>
        <Heading variant="heading-05">Heading 05</Heading>
        <Heading variant="heading-04">Heading 04</Heading>
        <Heading variant="heading-03">Heading 03</Heading>
        <Heading variant="heading-02">Heading 02</Heading>
        <Heading variant="heading-01">Heading 01</Heading>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Body</h3>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">
            Body 01 (14px/20px)
          </p>
          <Body variant="body-01">
            The quick brown fox jumps over the lazy dog. Biz UI is a powerful
            component library for building modern web applications.
          </Body>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">
            Body 02 (16px/24px)
          </p>
          <Body variant="body-02">
            The quick brown fox jumps over the lazy dog. Biz UI is a powerful
            component library for building modern web applications.
          </Body>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">
          Labels & Helper Text
        </h3>
        <div className="flex flex-col gap-2">
          <TypographyLabel variant="label-01">Label 01 (12px)</TypographyLabel>
          <TypographyLabel variant="label-02">Label 02 (14px)</TypographyLabel>
          <HelperText variant="helper-text-01">
            Helper text 01 (12px)
          </HelperText>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Code</h3>
        <div className="space-y-2">
          <div>
            <Code variant="code-01">const x = 1; // code-01 (12px)</Code>
          </div>
          <div>
            <Code variant="code-02">const y = 2; // code-02 (14px)</Code>
          </div>
        </div>
      </section>
    </div>
}`,...(H=(u=h.parameters)==null?void 0:u.docs)==null?void 0:H.source}}};var N,j,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Heading variant="heading-07">Heading 07 (30px)</Heading>
      <Heading variant="heading-06">Heading 06 (24px)</Heading>
      <Heading variant="heading-05">Heading 05 (20px)</Heading>
      <Heading variant="heading-04">Heading 04 (18px)</Heading>
      <Heading variant="heading-03" as="h1">
        Heading 03 (16px - Used as H1)
      </Heading>
      <Heading variant="heading-02">Heading 02 (14px)</Heading>
      <Heading variant="heading-01">Heading 01 (12px)</Heading>
    </div>
}`,...(T=(j=m.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var w,B,V;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 max-w-prose">
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body 01
        </h4>
        <Body variant="body-01">
          This is body-01 text. It&apos;s meant for smaller body copy and
          standard UI elements. It follows Biz UI type scale for optimal
          readability.
        </Body>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body 02
        </h4>
        <Body variant="body-02">
          This is body-02 text. It&apos;s larger and often used for longer
          content blocks where better readability and more white space are
          desired.
        </Body>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body Compact 01
        </h4>
        <Body variant="body-compact-01">
          This is body-compact-01 text. It has reduced line height (14px/16px)
          for tight UI areas like tables or sidebars.
        </Body>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body Compact 02
        </h4>
        <Body variant="body-compact-02">
          This is body-compact-02 text. It has reduced line height (16px/20px)
          for tight UI areas where a larger font is needed.
        </Body>
      </div>
    </div>
}`,...(V=(B=g.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const O=["AllTypes","HeadingsList","BodyVariants"];export{h as AllTypes,g as BodyVariants,m as HeadingsList,O as __namedExportsOrder,D as default};
