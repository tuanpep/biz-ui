import type { PropRow } from "../components/PropsTable";

export interface ComponentMeta {
  id: string;
  name: string;
  description: string;
  category: string;
  props?: PropRow[];
}

const LAYOUT: ComponentMeta[] = [
  {
    id: "card",
    name: "Card",
    description: "Container with header, content and footer",
    category: "Layout",
  },
  {
    id: "flex",
    name: "Flex",
    description: "Flexbox layout container",
    category: "Layout",
  },
  {
    id: "grid",
    name: "Grid",
    description: "Grid layout with rows and columns",
    category: "Layout",
  },
  {
    id: "scroll-area",
    name: "ScrollArea",
    description: "Custom scrollable area",
    category: "Layout",
  },
  {
    id: "separator",
    name: "Separator",
    description: "Visual divider",
    category: "Layout",
  },
  {
    id: "stack",
    name: "Stack",
    description: "Vertical stack layout",
    category: "Layout",
  },
  {
    id: "aspect-ratio",
    name: "AspectRatio",
    description: "Maintain aspect ratio",
    category: "Layout",
  },
  {
    id: "center",
    name: "Center",
    description: "Center content",
    category: "Layout",
  },
  {
    id: "container",
    name: "Container",
    description: "Max-width container",
    category: "Layout",
  },
  {
    id: "divider",
    name: "Divider",
    description: "Horizontal divider",
    category: "Layout",
  },
  {
    id: "portal",
    name: "Portal",
    description: "Render children in a portal",
    category: "Layout",
  },
  {
    id: "simple-grid",
    name: "SimpleGrid",
    description: "Simple grid layout",
    category: "Layout",
  },
  {
    id: "visually-hidden",
    name: "VisuallyHidden",
    description: "Hide content visually",
    category: "Layout",
  },
];

const FORMS: ComponentMeta[] = [
  {
    id: "button",
    name: "Button",
    description: "Button with variants and sizes",
    category: "Forms",
    props: [
      {
        name: "variant",
        type: '"primary" | "secondary" | "tertiary" | "ghost" | "danger"',
        default: '"primary"',
        description: "Visual style",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "icon"',
        default: '"md"',
        description: "Button size",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the button",
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Render as child element",
      },
    ],
  },
  {
    id: "button-group",
    name: "ButtonGroup",
    description: "Group of buttons",
    category: "Forms",
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Checkbox input",
    category: "Forms",
  },
  {
    id: "combo-box",
    name: "ComboBox",
    description: "Combobox input",
    category: "Forms",
  },
  {
    id: "date-picker",
    name: "DatePicker",
    description: "Date picker input",
    category: "Forms",
  },
  {
    id: "file-uploader",
    name: "FileUploader",
    description: "File upload input",
    category: "Forms",
  },
  {
    id: "form-field",
    name: "FormField",
    description: "Form field wrapper",
    category: "Forms",
  },
  {
    id: "icon-button",
    name: "IconButton",
    description: "Icon-only button",
    category: "Forms",
  },
  {
    id: "input",
    name: "Input",
    description: "Text input",
    category: "Forms",
    props: [
      { name: "placeholder", type: "string", description: "Placeholder text" },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Input size",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the input",
      },
    ],
  },
  {
    id: "input-group",
    name: "InputGroup",
    description: "Input with addons",
    category: "Forms",
  },
  { id: "label", name: "Label", description: "Form label", category: "Forms" },
  {
    id: "multi-select",
    name: "MultiSelect",
    description: "Multi-select dropdown",
    category: "Forms",
  },
  {
    id: "number-input",
    name: "NumberInput",
    description: "Numeric input",
    category: "Forms",
  },
  {
    id: "pin-input",
    name: "PinInput",
    description: "PIN code input",
    category: "Forms",
  },
  {
    id: "radio-group",
    name: "RadioGroup",
    description: "Radio button group",
    category: "Forms",
  },
  {
    id: "search",
    name: "Search",
    description: "Search input",
    category: "Forms",
  },
  {
    id: "select",
    name: "Select",
    description: "Select dropdown",
    category: "Forms",
  },
  {
    id: "slider",
    name: "Slider",
    description: "Range slider",
    category: "Forms",
  },
  {
    id: "switch",
    name: "Switch",
    description: "Toggle switch",
    category: "Forms",
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "Multi-line text input",
    category: "Forms",
  },
  {
    id: "time-picker",
    name: "TimePicker",
    description: "Time picker input",
    category: "Forms",
  },
];

const NAVIGATION: ComponentMeta[] = [
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "Breadcrumb navigation",
    category: "Navigation",
  },
  {
    id: "dropdown-menu",
    name: "DropdownMenu",
    description: "Dropdown menu",
    category: "Navigation",
  },
  {
    id: "link",
    name: "Link",
    description: "Navigation link",
    category: "Navigation",
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Pagination controls",
    category: "Navigation",
  },
  {
    id: "stepper",
    name: "Stepper",
    description: "Step indicator",
    category: "Navigation",
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Tabbed interface",
    category: "Navigation",
  },
  {
    id: "tree-view",
    name: "TreeView",
    description: "Tree navigation",
    category: "Navigation",
  },
];

const FEEDBACK: ComponentMeta[] = [
  {
    id: "alert",
    name: "Alert",
    description: "Alert message",
    category: "Feedback",
  },
  {
    id: "banner",
    name: "Banner",
    description: "Banner notification",
    category: "Feedback",
  },
  {
    id: "empty-state",
    name: "EmptyState",
    description: "Empty state placeholder",
    category: "Feedback",
  },
  {
    id: "loading",
    name: "Loading",
    description: "Loading indicator",
    category: "Feedback",
  },
  {
    id: "progress",
    name: "Progress",
    description: "Progress bar",
    category: "Feedback",
  },
  {
    id: "progress-indicator",
    name: "ProgressIndicator",
    description: "Progress indicator",
    category: "Feedback",
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "Skeleton loader",
    category: "Feedback",
  },
  {
    id: "toast",
    name: "Toast",
    description: "Toast notification",
    category: "Feedback",
  },
];

const DATA_DISPLAY: ComponentMeta[] = [
  {
    id: "accordion",
    name: "Accordion",
    description: "Collapsible accordion",
    category: "Data Display",
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "User avatar",
    category: "Data Display",
  },
  {
    id: "badge",
    name: "Badge",
    description: "Badge or tag",
    category: "Data Display",
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Calendar component",
    category: "Data Display",
  },
  {
    id: "icon",
    name: "Icon",
    description: "Icon wrapper",
    category: "Data Display",
  },
  {
    id: "kbd",
    name: "Kbd",
    description: "Keyboard key display",
    category: "Data Display",
  },
  {
    id: "list",
    name: "List",
    description: "List component",
    category: "Data Display",
  },
  {
    id: "table",
    name: "Table",
    description: "Data table",
    category: "Data Display",
  },
  {
    id: "tag",
    name: "Tag",
    description: "Tag or chip",
    category: "Data Display",
  },
  {
    id: "typography",
    name: "Typography",
    description: "Text typography",
    category: "Data Display",
  },
];

const OVERLAYS: ComponentMeta[] = [
  {
    id: "alert-dialog",
    name: "AlertDialog",
    description: "Alert dialog",
    category: "Overlays",
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "Collapsible content",
    category: "Overlays",
  },
  {
    id: "composed-modal",
    name: "ComposedModal",
    description: "Composed modal",
    category: "Overlays",
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "Modal dialog",
    category: "Overlays",
  },
  {
    id: "hover-card",
    name: "HoverCard",
    description: "Hover card popover",
    category: "Overlays",
  },
  {
    id: "popover",
    name: "Popover",
    description: "Popover overlay",
    category: "Overlays",
  },
  {
    id: "sheet",
    name: "Sheet",
    description: "Slide-out sheet",
    category: "Overlays",
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Tooltip",
    category: "Overlays",
  },
];

export const COMPONENT_CATEGORIES = [
  { name: "Layout", components: LAYOUT },
  { name: "Forms", components: FORMS },
  { name: "Navigation", components: NAVIGATION },
  { name: "Feedback", components: FEEDBACK },
  { name: "Data Display", components: DATA_DISPLAY },
  { name: "Overlays", components: OVERLAYS },
];

const ALL_COMPONENTS: ComponentMeta[] = COMPONENT_CATEGORIES.flatMap(
  (cat) => cat.components,
);

export function getComponentById(id: string): ComponentMeta | null {
  return ALL_COMPONENTS.find((c) => c.id === id) ?? null;
}
