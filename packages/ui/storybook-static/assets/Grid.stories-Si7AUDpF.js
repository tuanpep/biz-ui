import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-ZH-6pyQh.js";import{S as C}from"./index-ZW2Bszwo.js";import{a as w}from"./cn-BEhiKRD9.js";import{c as z}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";const F=z("biz-grid",{variants:{condensed:{true:"biz-grid--condensed",false:""},narrow:{true:"biz-grid--narrow",false:""},fullWidth:{true:"biz-grid--full-width",false:""}},defaultVariants:{condensed:!1,narrow:!1,fullWidth:!1}}),E=z("biz-row",{variants:{condensed:{true:"biz-row--condensed",false:""},narrow:{true:"biz-row--narrow",false:""}},defaultVariants:{condensed:!1,narrow:!1}}),d=b.forwardRef(({className:r,condensed:l,narrow:o,fullWidth:i,asChild:u,...c},p)=>{const a=u?C:"div";return e.jsx(a,{ref:p,className:w(F({condensed:l,narrow:o,fullWidth:i}),r),...c})});d.displayName="Grid";const s=b.forwardRef(({className:r,condensed:l,narrow:o,asChild:i,...u},c)=>{const p=i?C:"div";return e.jsx(p,{ref:c,className:w(E({condensed:l,narrow:o}),r),...u})});s.displayName="Row";const m=b.forwardRef(({className:r,span:l,sm:o,md:i,lg:u,xlg:c,max:p,offset:a,asChild:M,...k},O)=>{const V=M?C:"div",n={sm:o??(l==null?void 0:l.sm),md:i??(l==null?void 0:l.md),lg:u??(l==null?void 0:l.lg),xlg:c??(l==null?void 0:l.xlg),max:p??(l==null?void 0:l.max)},A=w(n.sm&&`sm:col-span-${n.sm}`,n.md&&`md:col-span-${n.md}`,n.lg&&`lg:col-span-${n.lg}`,n.xlg&&`xlg:col-span-${n.xlg}`,n.max&&`max:col-span-${n.max}`,(a==null?void 0:a.sm)&&`sm:col-start-${a.sm+1}`,(a==null?void 0:a.md)&&`md:col-start-${a.md+1}`,(a==null?void 0:a.lg)&&`lg:col-start-${a.lg+1}`,(a==null?void 0:a.xlg)&&`xlg:col-start-${a.xlg+1}`,(a==null?void 0:a.max)&&`max:col-start-${a.max+1}`,r);return e.jsx(V,{ref:O,className:A,...k})});m.displayName="Column";d.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}},composes:["VariantProps"]};s.__docgenInfo={description:"",methods:[],displayName:"Row",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}},composes:["VariantProps"]};m.__docgenInfo={description:"",methods:[],displayName:"Column",props:{span:{required:!1,tsType:{name:"ColumnBreakpoints"},description:"Number of columns at each breakpoint (1-12)"},sm:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Shorthand for span.sm"},md:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Shorthand for span.md"},lg:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Shorthand for span.lg"},xlg:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Shorthand for span.xlg"},max:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Shorthand for span.max"},offset:{required:!1,tsType:{name:"ColumnOffset"},description:"Number of columns to offset at each breakpoint"},asChild:{required:!1,tsType:{name:"boolean"},description:"Map to a child element"}}};const K={title:"Layout/Grid",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{condensed:{control:"boolean"},narrow:{control:"boolean"},fullWidth:{control:"boolean"}}},t=({span:r,children:l})=>e.jsxs("div",{className:"p-4 bg-muted border border-dashed rounded text-center text-sm font-medium",children:["Col ",r,l&&e.jsx("div",{className:"mt-1 font-normal text-muted-foreground",children:l})]}),v={render:r=>e.jsx("div",{className:"w-[800px] border p-4 bg-muted/10 rounded",children:e.jsxs(d,{...r,children:[e.jsx(s,{children:e.jsx(m,{sm:4,md:8,lg:12,children:e.jsx(t,{span:"sm:4, md:8, lg:12",children:"Full width column"})})}),e.jsxs(s,{className:"mt-4",children:[e.jsx(m,{sm:2,md:4,lg:6,children:e.jsx(t,{span:"sm:2, md:4, lg:6",children:"First half"})}),e.jsx(m,{sm:2,md:4,lg:6,children:e.jsx(t,{span:"sm:2, md:4, lg:6",children:"Second half"})})]})]})})},g={render:()=>e.jsx("div",{className:"w-[800px] border p-4 bg-muted/10 rounded",children:e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(m,{sm:4,md:6,lg:8,children:e.jsx(t,{span:"Main Content",children:"sm:4, md:6, lg:8"})}),e.jsx(m,{sm:4,md:2,lg:4,children:e.jsx(t,{span:"Sidebar",children:"sm:4, md:2, lg:4"})})]})})})},x={render:()=>e.jsx("div",{className:"w-[800px] border p-4 bg-muted/10 rounded",children:e.jsx(d,{children:e.jsx(s,{children:e.jsx(m,{lg:4,offset:{lg:4},children:e.jsx(t,{span:"Offset Column",children:"Centered (lg:4 width, lg:4 offset)"})})})})})},h={render:()=>e.jsx("div",{className:"w-[800px] border p-4 bg-muted/10 rounded",children:e.jsxs(d,{children:[e.jsx(s,{children:Array.from({length:12}).map((r,l)=>e.jsx(m,{sm:1,md:1,lg:1,children:e.jsx("div",{className:"h-20 bg-primary/10 border border-primary/20 rounded flex items-center justify-center text-xs",children:l+1})},l))}),e.jsx(s,{className:"mt-4",children:Array.from({length:6}).map((r,l)=>e.jsx(m,{sm:2,md:2,lg:2,children:e.jsx("div",{className:"h-20 bg-secondary/10 border border-secondary/20 rounded flex items-center justify-center text-xs font-semibold",children:"Span 2"})},l))})]})})};var j,y,f;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid {...args}>
                <Row>
                    <Column sm={4} md={8} lg={12}>
                        <ColumnItem span="sm:4, md:8, lg:12">Full width column</ColumnItem>
                    </Column>
                </Row>
                <Row className="mt-4">
                    <Column sm={2} md={4} lg={6}>
                        <ColumnItem span="sm:2, md:4, lg:6">First half</ColumnItem>
                    </Column>
                    <Column sm={2} md={4} lg={6}>
                        <ColumnItem span="sm:2, md:4, lg:6">Second half</ColumnItem>
                    </Column>
                </Row>
            </Grid>
        </div>
}`,...(f=(y=v.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var N,R,S;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid>
                <Row>
                    <Column sm={4} md={6} lg={8}>
                        <ColumnItem span="Main Content">sm:4, md:6, lg:8</ColumnItem>
                    </Column>
                    <Column sm={4} md={2} lg={4}>
                        <ColumnItem span="Sidebar">sm:4, md:2, lg:4</ColumnItem>
                    </Column>
                </Row>
            </Grid>
        </div>
}`,...(S=(R=g.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var I,G,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid>
                <Row>
                    <Column lg={4} offset={{
          lg: 4
        }}>
                        <ColumnItem span="Offset Column">Centered (lg:4 width, lg:4 offset)</ColumnItem>
                    </Column>
                </Row>
            </Grid>
        </div>
}`,...(_=(G=x.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var T,q,$;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid>
                <Row>
                    {Array.from({
          length: 12
        }).map((_, i) => <Column key={i} sm={1} md={1} lg={1}>
                            <div className="h-20 bg-primary/10 border border-primary/20 rounded flex items-center justify-center text-xs">
                                {i + 1}
                            </div>
                        </Column>)}
                </Row>
                <Row className="mt-4">
                    {Array.from({
          length: 6
        }).map((_, i) => <Column key={i} sm={2} md={2} lg={2}>
                            <div className="h-20 bg-secondary/10 border border-secondary/20 rounded flex items-center justify-center text-xs font-semibold">
                                Span 2
                            </div>
                        </Column>)}
                </Row>
            </Grid>
        </div>
}`,...($=(q=h.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};const Q=["Default","Responsive","Offsets","MultipleColumns"];export{v as Default,h as MultipleColumns,x as Offsets,g as Responsive,Q as __namedExportsOrder,K as default};
