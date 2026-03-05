import { ThemeWrapper } from "./ThemeWrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "biz-ui";

export default function CardPreview() {
  return (
    <ThemeWrapper>
      <div className="max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Optional short description for the card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is the card content area. You can put any content here.
            </p>
          </CardContent>
        </Card>
      </div>
    </ThemeWrapper>
  );
}
