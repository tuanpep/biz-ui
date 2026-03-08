import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-ZH-6pyQh.js";import"./index-BP-xEy0R.js";import{c as me}from"./index-ZW2Bszwo.js";import{a as E}from"./cn-BEhiKRD9.js";import{c as te}from"./index-B1xZ04RU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";function pe(s,a=[]){let o=[];function n(d,l){const t=u.createContext(l);t.displayName=d+"Context";const i=o.length;o=[...o,l];const p=v=>{var D;const{scope:m,children:C,...x}=v,f=((D=m==null?void 0:m[s])==null?void 0:D[i])||t,ue=u.useMemo(()=>x,Object.values(x));return e.jsx(f.Provider,{value:ue,children:C})};p.displayName=d+"Provider";function _(v,m){var f;const C=((f=m==null?void 0:m[s])==null?void 0:f[i])||t,x=u.useContext(C);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${v}\` must be used within \`${d}\``)}return[p,_]}const r=()=>{const d=o.map(l=>u.createContext(l));return function(t){const i=(t==null?void 0:t[s])||d;return u.useMemo(()=>({[`__scope${s}`]:{...t,[s]:i}}),[t,i])}};return r.scopeName=s,[n,ve(r,...a)]}function ve(...s){const a=s[0];if(s.length===1)return a;const o=()=>{const n=s.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(d){const l=n.reduce((t,{useScope:i,scopeName:p})=>{const v=i(d)[`__scope${p}`];return{...t,...v}},{});return u.useMemo(()=>({[`__scope${a.scopeName}`]:l}),[l])}};return o.scopeName=a.scopeName,o}var xe=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ne=xe.reduce((s,a)=>{const o=me(`Primitive.${a}`),n=u.forwardRef((r,d)=>{const{asChild:l,...t}=r,i=l?o:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(i,{...t,ref:d})});return n.displayName=`Primitive.${a}`,{...s,[a]:n}},{}),$="Progress",I=100,[fe]=pe($),[ge,Ne]=fe($),oe=u.forwardRef((s,a)=>{const{__scopeProgress:o,value:n=null,max:r,getValueLabel:d=je,...l}=s;(r||r===0)&&!M(r)&&console.error(he(`${r}`,"Progress"));const t=M(r)?r:I;n!==null&&!z(n,t)&&console.error(Pe(`${n}`,"Progress"));const i=z(n,t)?n:null,p=S(i)?d(i,t):void 0;return e.jsx(ge,{scope:o,value:i,max:t,children:e.jsx(ne.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":S(i)?i:void 0,"aria-valuetext":p,role:"progressbar","data-state":le(i,t),"data-value":i??void 0,"data-max":t,...l,ref:a})})});oe.displayName=$;var ie="ProgressIndicator",ce=u.forwardRef((s,a)=>{const{__scopeProgress:o,...n}=s,r=Ne(ie,o);return e.jsx(ne.div,{"data-state":le(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...n,ref:a})});ce.displayName=ie;function je(s,a){return`${Math.round(s/a*100)}%`}function le(s,a){return s==null?"indeterminate":s===a?"complete":"loading"}function S(s){return typeof s=="number"}function M(s){return S(s)&&!isNaN(s)&&s>0}function z(s,a){return S(s)&&!isNaN(s)&&s<=a&&s>=0}function he(s,a){return`Invalid prop \`max\` of value \`${s}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${I}\`.`}function Pe(s,a){return`Invalid prop \`value\` of value \`${s}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${I} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var de=oe,ye=ce;const be=te("relative w-full overflow-hidden rounded-full bg-muted",{variants:{size:{sm:"h-1.5",md:"h-2.5",lg:"h-4"},variant:{default:"",success:"bg-success-muted",warning:"bg-warning-muted",destructive:"bg-destructive-muted"}},defaultVariants:{size:"md",variant:"default"}}),we=te("h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out",{variants:{variant:{default:"bg-primary",success:"bg-success",warning:"bg-warning",destructive:"bg-destructive"}},defaultVariants:{variant:"default"}}),c=u.forwardRef(({className:s,value:a,size:o,variant:n,...r},d)=>e.jsx(de,{ref:d,className:E(be({size:o,variant:n}),s),...r,children:e.jsx(ye,{className:E(we({variant:n})),style:{transform:`translateX(-${100-(a||0)}%)`}})}));c.displayName=de.displayName;c.__docgenInfo={description:"",methods:[]};const Ve={title:"Components/Feedback/Progress",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","destructive"],description:"Progress color variant"},size:{control:"select",options:["sm","md","lg"],description:"Progress size (height)"},value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value"}},decorators:[s=>e.jsx("div",{className:"w-[300px]",children:e.jsx(s,{})})]},g={args:{value:60}},N={args:{value:0}},j={args:{value:100}},h={args:{}},P={render:function(){const[a,o]=u.useState(0);return u.useEffect(()=>{const n=setInterval(()=>{o(r=>r>=100?0:r+10)},500);return()=>clearInterval(n)},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{value:a}),e.jsxs("p",{className:"text-sm text-muted-foreground text-center",children:[a,"%"]})]})}},y={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Upload Progress"}),e.jsx("span",{children:"25%"})]}),e.jsx(c,{value:25})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Download Progress"}),e.jsx("span",{children:"50%"})]}),e.jsx(c,{value:50})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Processing"}),e.jsx("span",{children:"75%"})]}),e.jsx(c,{value:75})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Complete"}),e.jsx("span",{children:"100%"})]}),e.jsx(c,{value:100})]})]})},b={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Default"}),e.jsx(c,{value:60,variant:"default"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Success"}),e.jsx(c,{value:60,variant:"success"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Warning"}),e.jsx(c,{value:60,variant:"warning"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Destructive"}),e.jsx(c,{value:60,variant:"destructive"})]})]})},w={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Small"}),e.jsx(c,{value:60,size:"sm"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Medium (default)"}),e.jsx(c,{value:60,size:"md"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Large"}),e.jsx(c,{value:60,size:"lg"})]})]})};var V,A,R;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...(R=(A=g.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var L,O,T;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(T=(O=N.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,k,F;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(F=(k=j.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var G,W,X;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {}
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,B,H;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: function AnimatedProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => prev >= 100 ? 0 : prev + 10);
      }, 500);
      return () => clearInterval(timer);
    }, []);
    return <div className="space-y-4">
        <Progress value={progress} />
        <p className="text-sm text-muted-foreground text-center">{progress}%</p>
      </div>;
  }
}`,...(H=(B=P.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var q,J,K;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Upload Progress</span>
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Download Progress</span>
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Processing</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Complete</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <Progress value={60} variant="default" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Success</p>
        <Progress value={60} variant="success" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Warning</p>
        <Progress value={60} variant="warning" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Destructive</p>
        <Progress value={60} variant="destructive" />
      </div>
    </div>
}`,...(ee=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var se,ae,re;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Small</p>
        <Progress value={60} size="sm" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Medium (default)</p>
        <Progress value={60} size="md" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Large</p>
        <Progress value={60} size="lg" />
      </div>
    </div>
}`,...(re=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Ae=["Default","Zero","Complete","Indeterminate","Animated","Multiple","Variants","Sizes"];export{P as Animated,j as Complete,g as Default,h as Indeterminate,y as Multiple,w as Sizes,b as Variants,N as Zero,Ae as __namedExportsOrder,Ve as default};
