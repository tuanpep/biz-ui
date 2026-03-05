# Layout Components

Layout components for structuring your application.

## Card

Full composition pattern with all sub-components:

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardSkeleton } from 'biz-ui';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Skeleton loading state
<CardSkeleton />
```

**Props:**

- `Card`: HTML div props + `className`, `asChild`
- `CardHeader`, `CardContent`, `CardFooter`: HTML div props
- `CardTitle`: HTML heading props + `asChild`
- `CardDescription`: HTML paragraph props + `asChild`
- `CardSkeleton`: `className`, `variant`

## Flex

```tsx
import { Flex } from 'biz-ui';

<Flex direction="row" align="center" justify="between" gap={4}>
  <Child1 />
  <Child2 />
</Flex>
```

**Props:**

- `direction`: `"row"` | `"column"`
- `align`: `"start"` | `"center"` | `"end"` | `"stretch"` | `"baseline"`
- `justify`: `"start"` | `"center"` | `"end"` | `"between"` | `"around"` | `"evenly"`
- `gap`: `0-6` | `8` | `10` | `12` | `16`
- `wrap`: `"wrap"` | `"nowrap"`

## Grid

```tsx
import { Grid } from 'biz-ui';

<Grid columns={3} gap={4}>
  <Cell />
  <Cell />
  <Cell />
</Grid>
```

**Props:**

- `columns`: `1-6`
- `gap`: spacing values
- `asChild`: boolean

## ScrollArea

```tsx
import { ScrollArea } from 'biz-ui';

<ScrollArea className="h-[200px]">
  <div>Long content...</div>
</ScrollArea>
```

## Separator

```tsx
import { Separator } from 'biz-ui';

<Separator orientation="horizontal" />
<Separator orientation="vertical" className="h-4" />
```

## Stack

```tsx
import { Stack } from 'biz-ui';

<Stack gap={4}>
  <Item />
  <Item />
</Stack>
```

## AspectRatio

```tsx
import { AspectRatio } from 'biz-ui';

<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." />
</AspectRatio>
```

## Center

```tsx
import { Center } from 'biz-ui';

<Center>
  <div>Centered content</div>
</Center>
```

## Container

```tsx
import { Container } from 'biz-ui';

<Container size="sm">Content</Container>
<Container size="md">Content</Container>
<Container size="lg">Content</Container>
<Container size="xl">Content</Container>
```

## Divider

```tsx
import { Divider } from 'biz-ui';

<Divider />
<Divider orientation="vertical" />
```

## Portal

```tsx
import { Portal } from 'biz-ui';

<Portal>
  <div>This renders outside the DOM hierarchy</div>
</Portal>
```

## SimpleGrid

```tsx
import { SimpleGrid } from 'biz-ui';

<SimpleGrid columns={3} spacing={4}>
  <Item />
  <Item />
  <Item />
</SimpleGrid>
```

## VisuallyHidden

```tsx
import { VisuallyHidden } from 'biz-ui';

<VisuallyHidden>Hidden but accessible to screen readers</VisuallyHidden>
```
