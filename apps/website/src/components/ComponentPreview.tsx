import { Card, CardHeader, CardTitle, CardContent } from "biz-ui";

interface ComponentPreviewProps {
  children: React.ReactNode;
  title?: string;
}

export function ComponentPreview({
  children,
  title = "Preview",
}: ComponentPreviewProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 mb-6">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-zinc-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap items-center gap-4 p-4 bg-zinc-950 rounded-lg border border-zinc-800">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
