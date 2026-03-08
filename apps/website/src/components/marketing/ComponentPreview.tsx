import {
  Button,
  Input,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "biz-ui";

/**
 * Live component preview showing various Biz UI components
 */
export function ComponentPreview() {
  return (
    <div className="biz-ui p-8 rounded-2xl">
      <div className="flex flex-col gap-4">
        {/* Buttons Preview */}
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        {/* Input Preview */}
        <div className="flex gap-3">
          <Input placeholder="Enter your email..." className="max-w-xs" />
        </div>

        {/* Badges Preview */}
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        {/* Avatar Preview */}
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
