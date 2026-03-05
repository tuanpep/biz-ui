import { Card, CardHeader, CardTitle, CardContent } from "biz-ui";

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  props: PropRow[];
  title?: string;
}

export function PropsTable({
  props: propRows,
  title = "Props",
}: PropsTableProps) {
  if (propRows.length === 0) return null;

  return (
    <Card className="bg-zinc-900 border-zinc-800 mb-6">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-2 px-3 text-zinc-400 font-medium">
                Prop
              </th>
              <th className="text-left py-2 px-3 text-zinc-400 font-medium">
                Type
              </th>
              <th className="text-left py-2 px-3 text-zinc-400 font-medium">
                Default
              </th>
              <th className="text-left py-2 px-3 text-zinc-400 font-medium">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {propRows.map((row) => (
              <tr key={row.name} className="border-b border-zinc-800">
                <td className="py-2 px-3 text-zinc-300 font-mono">
                  {row.name}
                </td>
                <td className="py-2 px-3 text-zinc-400 font-mono text-xs">
                  {row.type}
                </td>
                <td className="py-2 px-3 text-zinc-500 font-mono text-xs">
                  {row.default ?? "-"}
                </td>
                <td className="py-2 px-3 text-zinc-400">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
