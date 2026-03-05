import { ThemeWrapper } from "../preview/ThemeWrapper";
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Label, Alert } from "biz-ui";

export default function PlaygroundDemo() {
  return (
    <ThemeWrapper>
      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Input</h2>
          <div className="max-w-xs space-y-2">
            <Label htmlFor="playground-input">Label</Label>
            <Input id="playground-input" placeholder="Type here..." />
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Card</h2>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Playground card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card is rendered with Biz UI in the playground.
              </p>
            </CardContent>
          </Card>
        </section>
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Alerts</h2>
          <div className="flex flex-col gap-2 max-w-xl">
            <Alert variant="info" title="Info">
              You can customize the theme via OceanThemeProvider.
            </Alert>
            <Alert variant="success" title="Success">
              Components are ready to use in your app.
            </Alert>
          </div>
        </section>
      </div>
    </ThemeWrapper>
  );
}
