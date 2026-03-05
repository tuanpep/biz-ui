import { ThemeWrapper } from "./ThemeWrapper";
import { Button } from "biz-ui";

export default function ButtonPreview() {
  return (
    <ThemeWrapper>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button loading>Loading</Button>
      </div>
    </ThemeWrapper>
  );
}
