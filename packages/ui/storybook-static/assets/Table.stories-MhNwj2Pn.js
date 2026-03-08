import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-ZH-6pyQh.js";import{a as o}from"./cn-BEhiKRD9.js";import{c as A}from"./index-B1xZ04RU.js";import{B as I}from"./Badge-DwVfZzAG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";const F=A("w-full caption-bottom text-sm",{variants:{stickyHeader:{true:"[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-10 [&_thead_th]:bg-card",false:""},useZebraStyles:{true:"[&_tbody_tr:nth-child(odd)]:bg-transparent [&_tbody_tr:nth-child(even)]:bg-muted/30",false:""},size:{sm:"[&_th]:h-10 [&_th]:px-4 [&_td]:px-4 [&_td]:py-2 text-xs",md:"[&_th]:h-12 [&_th]:px-6 [&_td]:px-6 [&_td]:py-4 text-sm",lg:"[&_th]:h-14 [&_th]:px-8 [&_td]:px-8 [&_td]:py-5 text-base"}},defaultVariants:{stickyHeader:!1,useZebraStyles:!1,size:"md"}}),p=t.forwardRef(({className:s,stickyHeader:l,useZebraStyles:n,size:K,...M},U)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:U,className:o(F({stickyHeader:l,useZebraStyles:n,size:K}),s),...M})}));p.displayName="Table";const i=t.memo(p),j=t.forwardRef(({className:s,...l},n)=>e.jsx("thead",{ref:n,className:o("[&_tr]:border-b",s),...l}));j.displayName="TableHeader";const c=t.memo(j),u=t.forwardRef(({className:s,...l},n)=>e.jsx("tbody",{ref:n,className:o("[&_tr:last-child]:border-0",s),...l}));u.displayName="TableBody";const b=t.memo(u),C=t.forwardRef(({className:s,...l},n)=>e.jsx("tfoot",{ref:n,className:o("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...l}));C.displayName="TableFooter";t.memo(C);const g=t.forwardRef(({className:s,...l},n)=>e.jsx("tr",{ref:n,className:o("border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-primary/10",s),...l}));g.displayName="TableRow";const r=t.memo(g),N=t.forwardRef(({className:s,...l},n)=>e.jsx("th",{ref:n,className:o("text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...l}));N.displayName="TableHead";const d=t.memo(N),w=t.forwardRef(({className:s,...l},n)=>e.jsx("td",{ref:n,className:o("align-middle [&:has([role=checkbox])]:pr-0",s),...l}));w.displayName="TableCell";const a=t.memo(w),y=t.forwardRef(({className:s,...l},n)=>e.jsx("caption",{ref:n,className:o("mt-4 text-sm text-muted-foreground",s),...l}));y.displayName="TableCaption";const J=t.memo(y);p.__docgenInfo={description:"",methods:[],displayName:"Table"};j.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};u.__docgenInfo={description:"",methods:[],displayName:"TableBody"};C.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};g.__docgenInfo={description:"",methods:[],displayName:"TableRow"};N.__docgenInfo={description:"",methods:[],displayName:"TableHead"};w.__docgenInfo={description:"",methods:[],displayName:"TableCell"};y.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const Q={title:"Components/Data Display/Table",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Table size/spacing"},stickyHeader:{control:"boolean",description:"Whether header is sticky when scrolling"},useZebraStyles:{control:"boolean",description:"Enable zebra striping (alternate row colors)"}}},P=[{id:1,name:"John Doe",email:"john@example.com",status:"active",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"inactive",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"active",role:"Editor"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"pending",role:"User"}],m={render:s=>e.jsx("div",{className:"w-[800px]",children:e.jsxs(i,{...s,children:[e.jsx(J,{children:"A list of recent workspace members."}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(d,{children:"No."}),e.jsx(d,{children:"Name"}),e.jsx(d,{children:"Email"}),e.jsx(d,{children:"Status"}),e.jsx(d,{className:"text-right",children:"Role"})]})}),e.jsx(b,{children:P.map(l=>e.jsxs(r,{children:[e.jsx(a,{className:"font-medium text-muted-foreground w-12",children:l.id}),e.jsx(a,{className:"font-medium",children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:e.jsx(I,{variant:l.status==="active"?"success":l.status==="pending"?"warning":"secondary",children:l.status})}),e.jsx(a,{className:"text-right",children:l.role})]},l.id))})]})})},T={args:{useZebraStyles:!0},render:s=>e.jsx("div",{className:"w-[800px]",children:e.jsxs(i,{...s,children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(d,{children:"Product"}),e.jsx(d,{children:"SKU"}),e.jsx(d,{className:"text-right",children:"Price"})]})}),e.jsxs(b,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"Smart Watch X1"}),e.jsx(a,{children:"SW-001"}),e.jsx(a,{className:"text-right",children:"$299.00"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"Wireless Buds Pro"}),e.jsx(a,{children:"WB-PRO"}),e.jsx(a,{className:"text-right",children:"$149.00"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"Smart Watch X2"}),e.jsx(a,{children:"SW-002"}),e.jsx(a,{className:"text-right",children:"$399.00"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"USB-C Hub"}),e.jsx(a,{children:"HUB-USB"}),e.jsx(a,{className:"text-right",children:"$59.00"})]})]})]})})},h={render:()=>e.jsxs("div",{className:"space-y-12 w-[800px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Small (sm)"}),e.jsxs(i,{size:"sm",children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(d,{children:"File Name"}),e.jsx(d,{children:"Size"}),e.jsx(d,{children:"Modified"})]})}),e.jsxs(b,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"package.json"}),e.jsx(a,{children:"2.4 KB"}),e.jsx(a,{children:"Just now"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"README.md"}),e.jsx(a,{children:"1.1 KB"}),e.jsx(a,{children:"2 days ago"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Medium (md - default)"}),e.jsxs(i,{size:"md",children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(d,{children:"File Name"}),e.jsx(d,{children:"Size"}),e.jsx(d,{children:"Modified"})]})}),e.jsxs(b,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"package.json"}),e.jsx(a,{children:"2.4 KB"}),e.jsx(a,{children:"Just now"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"README.md"}),e.jsx(a,{children:"1.1 KB"}),e.jsx(a,{children:"2 days ago"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Large (lg)"}),e.jsxs(i,{size:"lg",children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(d,{children:"File Name"}),e.jsx(d,{children:"Size"}),e.jsx(d,{children:"Modified"})]})}),e.jsxs(b,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"package.json"}),e.jsx(a,{children:"2.4 KB"}),e.jsx(a,{children:"Just now"})]}),e.jsxs(r,{children:[e.jsx(a,{children:"README.md"}),e.jsx(a,{children:"1.1 KB"}),e.jsx(a,{children:"2 days ago"})]})]})]})]})]})},x={args:{stickyHeader:!0},render:s=>e.jsx("div",{className:"h-[300px] overflow-auto border rounded-md",children:e.jsxs(i,{...s,children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(d,{className:"w-[100px]",children:"ID"}),e.jsx(d,{children:"Name"}),e.jsx(d,{children:"Email"}),e.jsx(d,{children:"Department"})]})}),e.jsx(b,{children:Array.from({length:40}).map((l,n)=>e.jsxs(r,{children:[e.jsxs(a,{className:"font-medium",children:["USR-",1e3+n]}),e.jsxs(a,{children:["User ",n+1]}),e.jsxs(a,{children:["user",n+1,"@example.com"]}),e.jsxs(a,{children:["Department ",n%5+1]})]},n))})]})})};var f,H,R;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="w-[800px]">
      <Table {...args}>
        <TableCaption>A list of recent workspace members.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => <TableRow key={user.id}>
              <TableCell className="font-medium text-muted-foreground w-12">{user.id}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.status === 'active' ? 'success' : user.status === 'pending' ? 'warning' : 'secondary'}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{user.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,_,S;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    useZebraStyles: true
  },
  render: args => <div className="w-[800px]">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Smart Watch X1</TableCell>
            <TableCell>SW-001</TableCell>
            <TableCell className="text-right">$299.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wireless Buds Pro</TableCell>
            <TableCell>WB-PRO</TableCell>
            <TableCell className="text-right">$149.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Smart Watch X2</TableCell>
            <TableCell>SW-002</TableCell>
            <TableCell className="text-right">$399.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>USB-C Hub</TableCell>
            <TableCell>HUB-USB</TableCell>
            <TableCell className="text-right">$59.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
}`,...(S=(_=T.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var v,k,E;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-12 w-[800px]">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Small (sm)</h4>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>package.json</TableCell>
              <TableCell>2.4 KB</TableCell>
              <TableCell>Just now</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>README.md</TableCell>
              <TableCell>1.1 KB</TableCell>
              <TableCell>2 days ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Medium (md - default)</h4>
        <Table size="md">
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>package.json</TableCell>
              <TableCell>2.4 KB</TableCell>
              <TableCell>Just now</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>README.md</TableCell>
              <TableCell>1.1 KB</TableCell>
              <TableCell>2 days ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Large (lg)</h4>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>package.json</TableCell>
              <TableCell>2.4 KB</TableCell>
              <TableCell>Just now</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>README.md</TableCell>
              <TableCell>1.1 KB</TableCell>
              <TableCell>2 days ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
}`,...(E=(k=h.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,D,W;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    stickyHeader: true
  },
  render: args => <div className="h-[300px] overflow-auto border rounded-md">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({
          length: 40
        }).map((_, i) => <TableRow key={i}>
              <TableCell className="font-medium">USR-{1000 + i}</TableCell>
              <TableCell>User {i + 1}</TableCell>
              <TableCell>user{i + 1}@example.com</TableCell>
              <TableCell>Department {i % 5 + 1}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...(W=(D=x.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Y=["Default","Zebra","Sizes","WithStickyHeader"];export{m as Default,h as Sizes,x as WithStickyHeader,T as Zebra,Y as __namedExportsOrder,Q as default};
