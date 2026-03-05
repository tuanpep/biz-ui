# Navigation Components

Navigation components for navigating between pages and sections.

## Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "biz-ui";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>;
```

## DropdownMenu

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "biz-ui";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>Label</DropdownMenuLabel>
  </DropdownMenuContent>
</DropdownMenu>;
```

## Breadcrumb

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "biz-ui";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>;
```

## Pagination

```tsx
import { Pagination } from "biz-ui";

<Pagination
  count={100}
  pageSize={10}
  onPageChange={(page) => console.log(page)}
/>;
```

## Stepper

```tsx
import { Stepper, StepperStep } from "biz-ui";

<Stepper currentStep={2}>
  <StepperStep title="Step 1">Content 1</StepperStep>
  <StepperStep title="Step 2">Content 2</StepperStep>
  <StepperStep title="Step 3">Content 3</StepperStep>
</Stepper>;
```

## TreeView

```tsx
import { TreeView } from "biz-ui";

const data = [
  { id: "1", label: "Root", children: [{ id: "2", label: "Child" }] },
];
<TreeView data={data} />;
```

## Link

```tsx
import { Link } from 'biz-ui';

<Link href="/page">Go to page</Link>
<Link href="/page" external>External link</Link>
```
