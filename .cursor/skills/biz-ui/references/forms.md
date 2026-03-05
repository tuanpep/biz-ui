# Forms Components

Form components for collecting user input.

## Button

```tsx
import { Button, ButtonSet, ButtonSkeleton, buttonVariants } from 'biz-ui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// With icon
<Button leftIcon={<Icon />}>With Icon</Button>
<Button rightIcon={<Icon />}>With Icon</Button>

// Loading state
<Button loading>Loading</Button>

// Disabled
<Button disabled>Disabled</Button>

// As child (renders as child element)
<Button asChild>
  <Link to="/page">Link styled as button</Link>
</Button>

// Button set (group buttons)
<ButtonSet>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonSet>

// Skeleton
<ButtonSkeleton />
```

**Button Types:**

- `ButtonProps`: `variant`, `size`, `loading`, `disabled`, `leftIcon`, `rightIcon`, `asChild`, `type`
- `ButtonSize`: `"sm"` | `"md"` | `"lg"` | `"icon"`
- `ButtonVariant`: `"primary"` | `"secondary"` | `"tertiary"` | `"ghost"` | `"danger"`

## Input

```tsx
import { Input, InputSkeleton, inputVariants } from 'biz-ui';

// Variants
<Input variant="default" placeholder="Default" />
<Input variant="filled" placeholder="Filled" />
<Input variant="underline" placeholder="Underline" />

// Sizes
<Input size="sm" />
<Input size="md" />
<Input size="lg" />

// States
<Input disabled placeholder="Disabled" />
<Input readOnly value="Read only" />
<Input error="Error message" />
<Input helperText="Helper text" />

// With addon
<Input leftAddon="$" rightAddon=".00" />

// With icon
<Input leftIcon={<SearchIcon />} rightIcon={<ClearIcon />} />

// Skeleton
<InputSkeleton />
```

## Select

```tsx
import { Select } from 'biz-ui';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

**Sub-components:**

- `Select` - Root component
- `SelectTrigger` - Clickable trigger
- `SelectValue` - Displays selected value
- `SelectContent` - Dropdown content
- `SelectGroup` - Groups items
- `SelectLabel` - Group label
- `SelectItem` - Individual option
- `SelectItemText` - Item text
- `SelectSeparator` - Separator

## Checkbox

```tsx
import { Checkbox } from 'biz-ui';

<Checkbox>Label text</Checkbox>
<Checkbox defaultChecked>Checked</Checkbox>
<Checkbox disabled>Disabled</Checkbox>
<Checkbox indeterminate>Indeterminate</Checkbox>
<Checkbox size="sm" />
<Checkbox size="md" />
<Checkbox size="lg" />
```

## RadioGroup

```tsx
import { RadioGroup, RadioGroupItem } from 'biz-ui';

<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1">Option 1</RadioGroupItem>
  <RadioGroupItem value="option2">Option 2</RadioGroupItem>
</RadioGroup>
```

## Switch

```tsx
import { Switch } from 'biz-ui';

<Switch>Label</Switch>
<Switch defaultChecked />
<Switch disabled />
<Switch size="sm" />
<Switch size="md" />
```

## Textarea

```tsx
import { Textarea } from 'biz-ui';

<Textarea placeholder="Enter description" />
<Textarea rows={4} />
<Textarea disabled />
<Textarea error="Error message" />
<Textarea helperText="Helper text" />
```

## Slider

```tsx
import { Slider } from 'biz-ui';

<Slider defaultValue={[50]} />
<Slider defaultValue={[20, 80]} min={0} max={100} step={1} />
<Slider disabled />
```

## DatePicker

```tsx
import { DatePicker } from 'biz-ui';

<DatePicker />
<DatePicker mode="range" />
<DatePicker disabled />
```

## TimePicker

```tsx
import { TimePicker } from 'biz-ui';

<TimePicker />
<TimePicker hour12 />
```

## FileUploader

```tsx
import { FileUploader, FileUploaderItem } from 'biz-ui';

<FileUploader>
  <FileUploaderItem name="document.pdf" size={1024} />
</FileUploader>
```

## ComboBox

```tsx
import { ComboBox } from 'biz-ui';

const options = [{ value: 'apple' }, { value: 'banana' }];
<ComboBox options={options} placeholder="Select fruit" />
```

## MultiSelect

```tsx
import { MultiSelect } from 'biz-ui';

const options = [{ value: 'apple' }, { value: 'banana' }];
<MultiSelect options={options} placeholder="Select fruits" />
```

## NumberInput

```tsx
import { NumberInput } from 'biz-ui';

<NumberInput />
<NumberInput min={0} max={100} step={1} />
<NumberInput value={50} onChange={(val) => console.log(val)} />
```

## PinInput

```tsx
import { PinInput } from 'biz-ui';

<PinInput length={4} />
<PinInput length={6} type="numeric" />
```

## Search

```tsx
import { Search } from 'biz-ui';

<Search placeholder="Search..." />
<Search value={query} onChange={(e) => setQuery(e.target.value)} />
```

## FormField

```tsx
import { FormField, Label, Input } from 'biz-ui';

<FormField>
  <Label>Email</Label>
  <Input type="email" placeholder="Enter email" />
</FormField>
```

## InputGroup

```tsx
import { InputGroup } from 'biz-ui';

<InputGroup>
  <InputGroup.Addon>@</InputGroup.Addon>
  <Input placeholder="username" />
  <InputGroup.Addon>gmail.com</InputGroup.Addon>
</InputGroup>
```

## Label

```tsx
import { Label } from 'biz-ui';

<Label htmlFor="input-id">Label text</Label>
<Label disabled>Disabled label</Label>
```

## IconButton

```tsx
import { IconButton } from 'biz-ui';

<IconButton icon={<SearchIcon />} aria-label="Search" />
<IconButton icon={<SearchIcon />} variant="primary" size="sm" />
<IconButton icon={<SearchIcon />} loading />
```

## ButtonGroup

```tsx
import { ButtonGroup } from 'biz-ui';

<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```
