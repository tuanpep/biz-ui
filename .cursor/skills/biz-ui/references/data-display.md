# Data Display Components

Data display components for presenting information.

## Typography

```tsx
import { Heading, Body, TypographyLabel, HelperText, Code } from 'biz-ui';

// Heading variants
<Heading variant="heading-01">Heading 01</Heading>
<Heading variant="heading-02">Heading 02</Heading>
<Heading variant="heading-03">Heading 03</Heading>
<Heading variant="heading-04">Heading 04</Heading>
<Heading variant="heading-05">Heading 05</Heading>
<Heading variant="heading-06">Heading 06</Heading>
<Heading variant="heading-07">Heading 07</Heading>

// Body variants
<Body variant="body-01">Body 01</Body>
<Body variant="body-02">Body 02</Body>
<Body variant="body-03">Body 03</Body>

// Label
<TypographyLabel variant="label-01">Label 01</TypographyLabel>
<TypographyLabel variant="label-02">Label 02</TypographyLabel>

// Helper text
<HelperText>Helper text</HelperText>
<HelperText disabled>Disabled</HelperText>
<HelperText error>Error text</HelperText>

// Code
<Code variant="code-01">const x = 1;</Code>
<Code variant="code-02">const y = 2;</Code>
```

## Avatar

```tsx
import { Avatar, AvatarGroup, AvatarImage, AvatarFallback } from 'biz-ui';

<Avatar>
  <AvatarImage src="https://..." alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Grouped
<AvatarGroup max={4}>
  <Avatar><AvatarImage src="..." /></Avatar>
  <Avatar><AvatarImage src="..." /></Avatar>
</AvatarGroup>
```

## Badge

```tsx
import { Badge } from 'biz-ui';

<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

## Tag

```tsx
import { Tag } from 'biz-ui';

<Tag>Tag</Tag>
<Tag variant="primary">Primary</Tag>
<Tag variant="success">Success</Tag>
<Tag variant="warning">Warning</Tag>
<Tag variant="error">Error</Tag>
<Tag onClose={() => {}}>Removable</Tag>
```

## Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from 'biz-ui';

<Table>
  <TableCaption>Table caption</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Header 1</TableHead>
      <TableHead>Header 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'biz-ui';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is this?</AccordionTrigger>
    <AccordionContent>Answer here</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Icon

```tsx
import { Icon } from 'biz-ui';

<Icon name="search" size={16} />
<Icon name="search" size={20} />
<Icon name="search" size={24} />
```

## Calendar

```tsx
import { Calendar } from 'biz-ui';

<Calendar />
<Calendar mode="range" selected={dateRange} onSelect={setDateRange} />
<Calendar disabled={[new Date()]} />
```

## Kbd

```tsx
import { Kbd } from 'biz-ui';

<Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
<Kbd variant="mod">Cmd</Kbd>
```

## List

```tsx
import { List, ListItem } from 'biz-ui';

<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>

// Unordered
<List ordered={false}>
  <ListItem>Bullet 1</ListItem>
</List>

// Ordered
<List ordered>
  <ListItem>Number 1</ListItem>
</List>
```
