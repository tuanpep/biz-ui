import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-ZH-6pyQh.js";import{S as l,a as r,b as n,c,d as t,e as x}from"./Select-DIA2g85K.js";import{L as q}from"./Label-MzlZTkPR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-BdQq_4o_.js";import"./index-BdafQ8h7.js";import"./index-Bo-loign.js";import"./index-DSV0aXck.js";import"./index-BH6b-3aW.js";import"./index-BRulG1aA.js";import"./index-BzHRfv9E.js";import"./Combination-DvCWtk9P.js";import"./index-CBQcSsvu.js";import"./index-B2_tsCGI.js";import"./index-CCrO8FJV.js";import"./index-DFrgnYfK.js";import"./index-rGWUK6NW.js";import"./index-CYU-ZmrK.js";import"./index-DovHYRjs.js";import"./cn-BEhiKRD9.js";import"./index-B1xZ04RU.js";import"./chevron-down-C-fNpRN8.js";import"./createLucideIcon-3f6GN8JZ.js";import"./chevron-up-DaHtbp8y.js";import"./check-BYLaSd5q.js";const je={title:"Components/Forms/Select",component:l,parameters:{layout:"centered"},tags:["autodocs"],decorators:[u=>e.jsx("div",{className:"w-[300px]",children:e.jsx(u,{})})]},a={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(n,{placeholder:"Select an option"})}),e.jsxs(c,{children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"})]})]})},o={render:()=>e.jsxs(l,{children:[e.jsx(r,{error:!0,children:e.jsx(n,{placeholder:"Select an option"})}),e.jsx(c,{children:e.jsx(t,{value:"option1",children:"Option 1"})})]})},s={render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsxs(l,{children:[e.jsx(r,{size:"sm",children:e.jsx(n,{placeholder:"Small Select"})}),e.jsxs(c,{children:[e.jsx(t,{size:"sm",value:"option1",children:"Option 1"}),e.jsx(t,{size:"sm",value:"option2",children:"Option 2"})]})]}),e.jsxs(l,{children:[e.jsx(r,{size:"md",children:e.jsx(n,{placeholder:"Medium Select"})}),e.jsxs(c,{children:[e.jsx(t,{size:"md",value:"option1",children:"Option 1"}),e.jsx(t,{size:"md",value:"option2",children:"Option 2"})]})]}),e.jsxs(l,{children:[e.jsx(r,{size:"lg",children:e.jsx(n,{placeholder:"Large Select"})}),e.jsxs(c,{children:[e.jsx(t,{size:"lg",value:"option1",children:"Option 1"}),e.jsx(t,{size:"lg",value:"option2",children:"Option 2"})]})]})]})},i={render:()=>e.jsxs("div",{className:"grid gap-2",children:[e.jsx(q,{htmlFor:"framework",children:"Framework"}),e.jsxs(l,{children:[e.jsx(r,{id:"framework",children:e.jsx(n,{placeholder:"Select a framework"})}),e.jsxs(c,{children:[e.jsx(t,{value:"react",children:"React"}),e.jsx(t,{value:"vue",children:"Vue"}),e.jsx(t,{value:"angular",children:"Angular"}),e.jsx(t,{value:"svelte",children:"Svelte"})]})]})]})},d={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsxs(c,{children:[e.jsxs(x,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"})]}),e.jsxs(x,{children:[e.jsx(t,{value:"strawberry",children:"Strawberry"}),e.jsx(t,{value:"blueberry",children:"Blueberry"})]})]})]})},p={render:()=>e.jsxs(l,{disabled:!0,children:[e.jsx(r,{children:e.jsx(n,{placeholder:"Disabled select"})}),e.jsx(c,{children:e.jsx(t,{value:"option1",children:"Option 1"})})]})},S={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(n,{placeholder:"Select an option"})}),e.jsxs(c,{children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",disabled:!0,children:"Option 2 (disabled)"}),e.jsx(t,{value:"option3",children:"Option 3"})]})]})},m={render:function(){const[h,M]=_.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(l,{value:h,onValueChange:M,children:[e.jsx(r,{children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsxs(c,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"})]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",h||"None"]})]})}};var g,j,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var I,O,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger error>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
      </SelectContent>
    </Select>
}`,...(b=(O=o.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var C,f,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem size="sm" value="option1">Option 1</SelectItem>
          <SelectItem size="sm" value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="md">
          <SelectValue placeholder="Medium Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem size="md" value="option1">Option 1</SelectItem>
          <SelectItem size="md" value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg">
          <SelectValue placeholder="Large Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem size="lg" value="option1">Option 1</SelectItem>
          <SelectItem size="lg" value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var z,V,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="grid gap-2">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...(w=(V=i.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var y,N,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectItem value="strawberry">Strawberry</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var D,L,G;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
      </SelectContent>
    </Select>
}`,...(G=(L=p.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var A,B,W;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2" disabled>
          Option 2 (disabled)
        </SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
}`,...(W=(B=S.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var E,F,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function ControlledSelect() {
    const [value, setValue] = useState('');
    return <div className="space-y-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Selected: {value || 'None'}
        </p>
      </div>;
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const ve=["Default","WithError","Sizes","WithLabel","WithGroups","Disabled","DisabledItem","Controlled"];export{m as Controlled,a as Default,p as Disabled,S as DisabledItem,s as Sizes,o as WithError,d as WithGroups,i as WithLabel,ve as __namedExportsOrder,je as default};
