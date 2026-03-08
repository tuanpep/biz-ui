import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as E,C as D,a as $}from"./index-C7qfArSE.js";import{r as U}from"./index-ZH-6pyQh.js";import{B as O}from"./Button-BfxvocXd.js";import{C as t}from"./chevron-right-DdLAnV9I.js";import"./index-BdafQ8h7.js";import"./index-BP-xEy0R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./index-Bo-loign.js";import"./index-rGWUK6NW.js";import"./index-B2_tsCGI.js";import"./index-BlNWsJ36.js";import"./index-CBQcSsvu.js";import"./index-ZW2Bszwo.js";import"./cn-BEhiKRD9.js";import"./index-B1xZ04RU.js";import"./loader-circle--bTMh9uh.js";import"./createLucideIcon-3f6GN8JZ.js";const n=E,a=D,i=$,ne={title:"Components/Overlays/Collapsible",component:n,parameters:{layout:"centered"},tags:["autodocs"]},l={render:function(){const[s,p]=U.useState(!1);return e.jsxs(n,{open:s,onOpenChange:p,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(a,{asChild:!0,children:e.jsxs(O,{variant:"ghost",size:"sm",children:[e.jsx(t,{className:`h-4 w-4 transition-transform duration-200 ${s?"rotate-90":""}`}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(i,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm",children:"@stitches/react"})]})]})}},r={render:()=>e.jsxs(n,{className:"w-[350px] space-y-2",children:[e.jsx(a,{asChild:!0,children:e.jsxs(O,{variant:"outline",className:"w-full justify-between",children:[e.jsx("span",{children:"Can I use this in my project?"}),e.jsx(t,{className:"h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90"})]})}),e.jsx(i,{className:"rounded-md border p-4 text-sm text-muted-foreground",children:"Yes. Free to use for personal and commercial projects. No attribution required."})]})},c={render:()=>e.jsx("div",{className:"w-[400px] space-y-2",children:[{question:"What is Biz UI?",answer:"Biz UI is a comprehensive React component library built with Radix UI and Tailwind CSS."},{question:"How do I install Biz UI?",answer:"You can install Biz UI using npm or yarn: npm install @cmc-dx/biz-ui"},{question:"Is Biz UI accessible?",answer:"Yes! Biz UI is built on top of Radix UI, which provides excellent accessibility out of the box."},{question:"Can I customize the theme?",answer:"Absolutely! Biz UI uses CSS variables for theming, making it easy to customize colors, spacing, and more."}].map((o,s)=>e.jsxs(n,{className:"rounded-lg border",children:[e.jsxs(a,{className:"flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50",children:[e.jsx("span",{children:o.question}),e.jsx(t,{className:"h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90"})]}),e.jsx(i,{className:"px-4 pb-4 text-sm text-muted-foreground",children:o.answer})]},s))})},d={render:()=>e.jsxs(n,{className:"w-[400px] space-y-2 rounded-lg border p-4",children:[e.jsxs(a,{className:"flex w-full items-center justify-between font-semibold",children:[e.jsx("span",{children:"Getting Started"}),e.jsx(t,{className:"h-4 w-4 transition-transform duration-200"})]}),e.jsxs(i,{className:"space-y-2 pl-4",children:[e.jsxs(n,{children:[e.jsxs(a,{className:"flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground",children:[e.jsx("span",{children:"Installation"}),e.jsx(t,{className:"h-3 w-3"})]}),e.jsx(i,{className:"pl-4 text-sm text-muted-foreground",children:e.jsx("p",{className:"py-2",children:"npm install @cmc-dx/biz-ui"})})]}),e.jsxs(n,{children:[e.jsxs(a,{className:"flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground",children:[e.jsx("span",{children:"Quick Start"}),e.jsx(t,{className:"h-3 w-3"})]}),e.jsx(i,{className:"pl-4 text-sm text-muted-foreground",children:e.jsx("p",{className:"py-2",children:"Import components and start building!"})})]})]})]})},m={render:function(){const[s,p]=U.useState(["profile"]),u=x=>{p(f=>f.includes(x)?f.filter(q=>q!==x):[...f,x])};return e.jsxs("div",{className:"w-[350px] space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Settings"}),e.jsxs(n,{open:s.includes("profile"),onOpenChange:()=>u("profile"),className:"rounded-lg border",children:[e.jsxs(a,{className:"flex w-full items-center justify-between p-4 hover:bg-muted/50",children:[e.jsx("span",{className:"font-medium",children:"Profile"}),e.jsx(t,{className:`h-4 w-4 transition-transform ${s.includes("profile")?"rotate-90":""}`})]}),e.jsxs(i,{className:"p-4 pt-0 space-y-3",children:[e.jsx("div",{className:"text-sm",children:"Name: John Doe"}),e.jsx("div",{className:"text-sm",children:"Email: john@example.com"}),e.jsx("div",{className:"text-sm",children:"Role: Developer"})]})]}),e.jsxs(n,{open:s.includes("notifications"),onOpenChange:()=>u("notifications"),className:"rounded-lg border",children:[e.jsxs(a,{className:"flex w-full items-center justify-between p-4 hover:bg-muted/50",children:[e.jsx("span",{className:"font-medium",children:"Notifications"}),e.jsx(t,{className:`h-4 w-4 transition-transform ${s.includes("notifications")?"rotate-90":""}`})]}),e.jsxs(i,{className:"p-4 pt-0 space-y-3",children:[e.jsx("div",{className:"text-sm",children:"Email notifications: Enabled"}),e.jsx("div",{className:"text-sm",children:"Push notifications: Disabled"}),e.jsx("div",{className:"text-sm",children:"SMS notifications: Disabled"})]})]}),e.jsxs(n,{open:s.includes("security"),onOpenChange:()=>u("security"),className:"rounded-lg border",children:[e.jsxs(a,{className:"flex w-full items-center justify-between p-4 hover:bg-muted/50",children:[e.jsx("span",{className:"font-medium",children:"Security"}),e.jsx(t,{className:`h-4 w-4 transition-transform ${s.includes("security")?"rotate-90":""}`})]}),e.jsxs(i,{className:"p-4 pt-0 space-y-3",children:[e.jsx("div",{className:"text-sm",children:"2FA: Enabled"}),e.jsx("div",{className:"text-sm",children:"Last login: 2 hours ago"})]})]})]})}};var h,b,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronRight className={\`h-4 w-4 transition-transform duration-200 \${isOpen ? "rotate-90" : ""}\`} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var N,C,j;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>Can I use this in my project?</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-4 text-sm text-muted-foreground">
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
}`,...(j=(C=r.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,w,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-2">
      {[{
      question: "What is Biz UI?",
      answer: "Biz UI is a comprehensive React component library built with Radix UI and Tailwind CSS."
    }, {
      question: "How do I install Biz UI?",
      answer: "You can install Biz UI using npm or yarn: npm install @cmc-dx/biz-ui"
    }, {
      question: "Is Biz UI accessible?",
      answer: "Yes! Biz UI is built on top of Radix UI, which provides excellent accessibility out of the box."
    }, {
      question: "Can I customize the theme?",
      answer: "Absolutely! Biz UI uses CSS variables for theming, making it easy to customize colors, spacing, and more."
    }].map((faq, index) => <Collapsible key={index} className="rounded-lg border">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50">
            <span>{faq.question}</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
            {faq.answer}
          </CollapsibleContent>
        </Collapsible>)}
    </div>
}`,...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,I,R;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[400px] space-y-2 rounded-lg border p-4">
      <CollapsibleTrigger className="flex w-full items-center justify-between font-semibold">
        <span>Getting Started</span>
        <ChevronRight className="h-4 w-4 transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 pl-4">
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <span>Installation</span>
            <ChevronRight className="h-3 w-3" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 text-sm text-muted-foreground">
            <p className="py-2">npm install @cmc-dx/biz-ui</p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <span>Quick Start</span>
            <ChevronRight className="h-3 w-3" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 text-sm text-muted-foreground">
            <p className="py-2">Import components and start building!</p>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var z,T,B;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function Render() {
    const [expandedSections, setExpandedSections] = useState<string[]>(["profile"]);
    const toggleSection = (section: string) => {
      setExpandedSections(prev => prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]);
    };
    return <div className="w-[350px] space-y-2">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>

        <Collapsible open={expandedSections.includes("profile")} onOpenChange={() => toggleSection("profile")} className="rounded-lg border">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
            <span className="font-medium">Profile</span>
            <ChevronRight className={\`h-4 w-4 transition-transform \${expandedSections.includes("profile") ? "rotate-90" : ""}\`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0 space-y-3">
            <div className="text-sm">Name: John Doe</div>
            <div className="text-sm">Email: john@example.com</div>
            <div className="text-sm">Role: Developer</div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={expandedSections.includes("notifications")} onOpenChange={() => toggleSection("notifications")} className="rounded-lg border">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
            <span className="font-medium">Notifications</span>
            <ChevronRight className={\`h-4 w-4 transition-transform \${expandedSections.includes("notifications") ? "rotate-90" : ""}\`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0 space-y-3">
            <div className="text-sm">Email notifications: Enabled</div>
            <div className="text-sm">Push notifications: Disabled</div>
            <div className="text-sm">SMS notifications: Disabled</div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={expandedSections.includes("security")} onOpenChange={() => toggleSection("security")} className="rounded-lg border">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
            <span className="font-medium">Security</span>
            <ChevronRight className={\`h-4 w-4 transition-transform \${expandedSections.includes("security") ? "rotate-90" : ""}\`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0 space-y-3">
            <div className="text-sm">2FA: Enabled</div>
            <div className="text-sm">Last login: 2 hours ago</div>
          </CollapsibleContent>
        </Collapsible>
      </div>;
  }
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const te=["Default","Uncontrolled","FaqList","Nested","SettingsPanel"];export{l as Default,c as FaqList,d as Nested,m as SettingsPanel,r as Uncontrolled,te as __namedExportsOrder,ne as default};
