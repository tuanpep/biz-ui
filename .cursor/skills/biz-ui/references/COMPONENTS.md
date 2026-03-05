# Components Reference

Detailed API reference for Biz UI components. See category-specific docs for complete details.

## Categories

- [Layout](layout.md) - Card, Flex, Grid, ScrollArea, Separator, Stack, AspectRatio, Center, Container, Divider, Portal, SimpleGrid, VisuallyHidden
- [Forms](forms.md) - Button, Input, Select, Checkbox, RadioGroup, Switch, Textarea, Slider, DatePicker, TimePicker, FileUploader, ComboBox, MultiSelect, NumberInput, PinInput, Search, FormField, InputGroup, Label, IconButton, ButtonGroup
- [Navigation](navigation.md) - Tabs, DropdownMenu, Breadcrumb, Pagination, Stepper, TreeView, Link
- [Feedback](feedback.md) - Alert, Toast, Banner, EmptyState, Loading, Progress, ProgressIndicator, Skeleton
- [Data Display](data-display.md) - Typography, Avatar, Badge, Tag, Table, Accordion, Icon, Calendar, Kbd, List
- [Overlays](overlays.md) - Dialog, Sheet, Popover, Tooltip, AlertDialog, HoverCard, Collapsible, ComposedModal

## Quick Import

```tsx
import {
  // Layout
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardSkeleton,
  Flex, Grid, ScrollArea, Separator, Stack, AspectRatio, Center, Container, Divider,
  Portal, SimpleGrid, VisuallyHidden,

  // Forms
  Button, ButtonSet, ButtonSkeleton, buttonVariants,
  ButtonGroup, Checkbox, CheckboxGroup, ComboBox, DatePicker, FileUploader, FileUploaderItem,
  FormField, IconButton, Input, InputSkeleton, inputVariants, InputGroup, Label, MultiSelect,
  NumberInput, PinInput, RadioGroup, Search, Select, Slider, Switch, Textarea, TimePicker,

  // Navigation
  Breadcrumb, DropdownMenu, Link, Pagination, Stepper, Tabs, TabsList, TabsTrigger, TabsContent,
  TreeView,

  // Feedback
  Alert, Banner, EmptyState, Loading, Progress, ProgressIndicator, Skeleton,
  Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastAction, ToastClose, useToast,

  // Data Display
  Accordion, Avatar, AvatarGroup, AvatarImage, AvatarFallback, Badge, Calendar, Icon, Kbd, List,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption,
  Tag, Typography, Heading, Text,

  // Overlays
  AlertDialog, Collapsible, ComposedModal, Dialog, HoverCard, Popover, Sheet, Tooltip, TooltipProvider,

  // Core
  OceanThemeProvider, defaultTheme, useOceanTheme,

  // Providers
  PrefixProvider, FeatureFlagsProvider,

  // Hooks
  usePrefix, useFeatureFlag, useFeatureFlags,
} from 'biz-ui';
```
