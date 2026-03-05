# Overlays Components

Overlay components for modals, dialogs, and floating content.

## Dialog

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "biz-ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>Dialog description goes here.</DialogDescription>
    <DialogClose />
  </DialogContent>
</Dialog>;
```

## Sheet

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
} from "biz-ui";

<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>Title</SheetHeader>
    <SheetBody>Content</SheetBody>
    <SheetFooter>Actions</SheetFooter>
  </SheetContent>
</Sheet>;
```

**Side values:** `"top"` | `"bottom"` | `"left"` | `"right"`

## Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent } from "biz-ui";

<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>Popover content</PopoverContent>
</Popover>;
```

## Tooltip

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "biz-ui";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>;
```

## AlertDialog

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "biz-ui";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Open</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone.
    </AlertDialogDescription>
    <AlertDialogCancel>Cancel</AlertDialogCancel>
    <AlertDialogAction>Continue</AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>;
```

## HoverCard

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "biz-ui";

<HoverCard>
  <HoverCardTrigger asChild>
    <Link>@username</Link>
  </HoverCardTrigger>
  <HoverCardContent>User profile info</HoverCardContent>
</HoverCard>;
```

## Collapsible

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "biz-ui";

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>;
```

## ComposedModal

```tsx
import { ComposedModal, ModalHeader, ModalBody, ModalFooter } from "biz-ui";

<ComposedModal open={open} onClose={() => setOpen(false)}>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
  <ModalFooter>Actions</ModalFooter>
</ComposedModal>;
```
