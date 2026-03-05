# Feedback Components

Feedback components for communicating status and loading states.

## Alert

```tsx
import { Alert } from 'biz-ui';

<Alert>Default alert</Alert>
<Alert variant="info">Info alert</Alert>
<Alert variant="success">Success alert</Alert>
<Alert variant="warning">Warning alert</Alert>
<Alert variant="destructive">Destructive alert</Alert>

// With title
<Alert variant="success" title="Success">
  Your action was successful.
</Alert>
```

## Toast

```tsx
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastAction, ToastClose, useToast } from 'biz-ui';

// Provider (wrap your app)
<ToastProvider>
  <App />
  <ToastViewport />
</ToastProvider>

// Toast component
<Toast variant="default">
  <ToastTitle>Title</ToastTitle>
  <ToastDescription>Description</ToastDescription>
  <ToastAction altText="Undo">Undo</ToastAction>
  <ToastClose />
</Toast>

// Using hook
function Component() {
  const { toast } = useToast();

  toast({
    title: 'Scheduled',
    description: 'Be there at 2pm',
    variant: 'success',
  });
}
```

## Banner

```tsx
import { Banner } from 'biz-ui';

<Banner>Banner content</Banner>
<Banner variant="info">Info banner</Banner>
<Banner variant="warning">Warning banner</Banner>
```

## EmptyState

```tsx
import {
  EmptyState,
  EmptyStateHeading,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateAction,
} from "biz-ui";

<EmptyState>
  <EmptyStateIcon icon={<SearchIcon />} />
  <EmptyStateHeading>No results found</EmptyStateHeading>
  <EmptyStateDescription>Try adjusting your search</EmptyStateDescription>
  <EmptyStateAction>
    <Button>Clear search</Button>
  </EmptyStateAction>
</EmptyState>;
```

## Loading

```tsx
import { Loading } from 'biz-ui';

<Loading />
<Loading size="sm" />
<Loading size="md" />
<Loading size="lg" />
<Loading withLabel label="Loading..." />
```

## Progress

```tsx
import { Progress } from 'biz-ui';

<Progress value={50} />
<Progress value={75} max={100} />
<Progress indeterminate />
```

## ProgressIndicator

```tsx
import { ProgressIndicator } from "biz-ui";

<ProgressIndicator currentIndex={2}>
  <ProgressIndicatorStep title="Step 1" />
  <ProgressIndicatorStep title="Step 2" />
  <ProgressIndicatorStep title="Step 3" />
</ProgressIndicator>;
```

## Skeleton

```tsx
import { Skeleton } from 'biz-ui';

<Skeleton />
<Skeleton variant="text" width="100%" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width="100%" height={100} />

// Card skeleton
<Skeleton variant="card" />
```
