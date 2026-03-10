/**
 * Central export for all component variants.
 *
 * This allows consumers to use Biz UI styles without importing full components.
 * Useful for creating custom components that match Biz UI's design system.
 *
 * @example
 * ```tsx
 * import { buttonVariants, inputVariants, cn } from 'biz-ui/variants';
 *
 * function MyCustomButton({ variant, size, className, ...props }) {
 *   return (
 *     <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
 *   );
 * }
 * ```
 */

// Re-export cn utility for class composition
export { cn } from "../utils/cn";

// ============================================================================
// Form Components
// ============================================================================

// Button
export {
  buttonVariants,
  buttonSkeletonVariants,
} from "../components/forms/Button/Button.variants";

// IconButton
export { iconButtonVariants } from "../components/forms/IconButton/IconButton.variants";

// Input
export {
  inputVariants,
  inputSkeletonVariants,
} from "../components/forms/Input/Input.variants";

// Select
export {
  selectTriggerVariants,
  selectItemVariants,
  selectSkeletonVariants,
} from "../components/forms/Select/Select.variants";

// Textarea
export {
  textareaVariants,
  textareaSkeletonVariants,
} from "../components/forms/Textarea/Textarea.variants";

// Checkbox
export {
  checkboxVariants,
  checkboxSkeletonVariants,
} from "../components/forms/Checkbox/Checkbox.variants";

// Switch
export {
  switchVariants,
  switchThumbVariants,
  switchSkeletonVariants,
} from "../components/forms/Switch/Switch.variants";

// Label
export { labelVariants } from "../components/forms/Label/Label.variants";

// Slider
export {
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
  sliderSkeletonVariants,
} from "../components/forms/Slider/Slider.variants";

// Radio Group
export {
  radioGroupItemVariants,
  radioIndicatorVariants,
  radioGroupSkeletonVariants,
} from "../components/forms/RadioGroup/RadioGroup.variants";

// ComboBox
export {
  comboBoxVariants,
  comboBoxInputVariants,
  comboBoxMenuVariants,
  comboBoxItemVariants,
  comboBoxSkeletonVariants,
} from "../components/forms/ComboBox/ComboBox.variants";

// MultiSelect
export {
  multiSelectVariants,
  multiSelectTriggerVariants,
  multiSelectMenuVariants,
  multiSelectItemVariants,
  multiSelectTagVariants,
  multiSelectSkeletonVariants,
} from "../components/forms/MultiSelect/MultiSelect.variants";

// Search
export {
  searchVariants,
  searchInputVariants,
  searchIconVariants,
  clearButtonVariants,
  searchSkeletonVariants,
} from "../components/forms/Search/Search.variants";

// NumberInput
export {
  numberInputVariants,
  numberInputInputVariants,
  numberInputStepperVariants,
  numberInputStepperButtonVariants,
  numberInputSkeletonVariants,
} from "../components/forms/NumberInput/NumberInput.variants";

// FileUploader
export {
  fileUploaderVariants,
  fileUploaderButtonVariants,
  fileUploaderDropContainerVariants,
  fileUploaderItemVariants,
  fileUploaderSkeletonVariants,
} from "../components/forms/FileUploader/FileUploader.variants";

// TimePicker
export {
  timePickerVariants,
  timePickerSkeletonVariants,
} from "../components/forms/TimePicker/TimePicker.variants";

// DatePicker
export {
  datePickerVariants,
  datePickerInputVariants,
  datePickerSkeletonVariants,
} from "../components/forms/DatePicker/DatePicker.variants";

// ============================================================================
// Layout Components
// ============================================================================

// Card
export { cardVariants } from "../components/layout/Card/Card.variants";

// Flex
export {
  flexVariants,
  flexItemVariants,
} from "../components/layout/Flex/Flex.variants";

// Stack
export { stackVariants } from "../components/layout/Stack/Stack.variants";

// Grid
export {
  gridVariants,
  rowVariants,
} from "../components/layout/Grid/Grid.variants";

// ============================================================================
// Data Display Components
// ============================================================================

// Avatar
export {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
} from "../components/data-display/Avatar/Avatar.variants";

// Badge
export { badgeVariants } from "../components/data-display/Badge/Badge.variants";

// Tag
export {
  tagVariants,
  tagCloseVariants,
} from "../components/data-display/Tag/Tag.variants";

// Table
export { tableVariants } from "../components/data-display/Table/Table.variants";

// Typography
export {
  headingVariants,
  bodyVariants,
  typographyLabelVariants,
  helperTextVariants,
  codeVariants,
} from "../components/data-display/Typography/Typography.variants";

// Icon
export { iconVariants } from "../components/data-display/Icon/Icon.variants";

// ============================================================================
// Feedback Components
// ============================================================================

// Alert
export { alertVariants } from "../components/feedback/Alert/Alert.variants";

// Progress
export {
  progressVariants,
  progressIndicatorVariants,
} from "../components/feedback/Progress/Progress.variants";

// ProgressIndicator
export {
  stepProgressVariants,
  progressStepVariants,
} from "../components/feedback/ProgressIndicator/ProgressIndicator.variants";

// Loading
export {
  spinnerVariants,
  loadingOverlayVariants,
  inlineLoadingVariants,
} from "../components/feedback/Loading/Loading.variants";

// Skeleton
export { skeletonVariants } from "../components/feedback/Skeleton/Skeleton.variants";

// Toast
export { toastVariants } from "../components/feedback/Toast/Toast.variants";

// ============================================================================
// Navigation Components
// ============================================================================

// Tabs
export {
  tabsListVariants,
  tabsTriggerVariants,
} from "../components/navigation/Tabs/Tabs.variants";

// Link
export { linkVariants } from "../components/navigation/Link/Link.variants";

// Pagination
export {
  paginationVariants,
  paginationButtonVariants,
} from "../components/navigation/Pagination/Pagination.variants";

// TreeView
export {
  treeViewVariants,
  treeItemVariants,
} from "../components/navigation/TreeView/TreeView.variants";

// ============================================================================
// Overlay Components
// ============================================================================

// ComposedModal
export { modalVariants } from "../components/overlays/ComposedModal/ComposedModal.variants";
