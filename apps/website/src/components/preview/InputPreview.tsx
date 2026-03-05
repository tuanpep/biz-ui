import { ThemeWrapper } from "./ThemeWrapper";
import { Input, Label } from "biz-ui";

export default function InputPreview() {
  return (
    <ThemeWrapper>
      <div className="flex flex-col gap-4 max-w-xs">
        <div>
          <Label htmlFor="demo-email">Email</Label>
          <Input id="demo-email" type="email" placeholder="you@example.com" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="demo-password">Password</Label>
          <Input id="demo-password" type="password" placeholder="••••••••" className="mt-2" />
        </div>
      </div>
    </ThemeWrapper>
  );
}
