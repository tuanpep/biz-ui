import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "biz-ui";
import { cn, formatPercentage } from "@examples/lib/utils";
import type { DashboardMetric } from "@examples/types";

const iconMap: Record<string, React.ReactNode> = {
  dollar: <DollarSign className="h-4 w-4" />,
  users: <Users className="h-4 w-4" />,
  "shopping-cart": <ShoppingCart className="h-4 w-4" />,
  "trending-up": <TrendingUp className="h-4 w-4" />,
};

interface MetricCardProps {
  metric: DashboardMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const isPositive = metric.changeType === "increase";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {metric.title}
        </CardTitle>
        <div className="text-muted-foreground">{iconMap[metric.icon]}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{metric.value}</div>
        <p
          className={cn(
            "text-xs",
            isPositive ? "text-success" : "text-destructive",
          )}
        >
          {formatPercentage(metric.change)} from last month
        </p>
      </CardContent>
    </Card>
  );
}

interface MetricCardsProps {
  metrics: DashboardMetric[];
}

export function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} metric={metric} />
      ))}
    </div>
  );
}
