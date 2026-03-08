"use client";

import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartDataPoint } from "@examples/types";

interface AreaChartProps {
  data: ChartDataPoint[];
  dataKey?: string;
  height?: number;
  showGrid?: boolean;
  showPrevious?: boolean;
}

export function AreaChart({
  data,
  dataKey = "value",
  height = 300,
  showGrid = true,
  showPrevious = false,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        {showGrid && (
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
        )}
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          className="text-xs fill-muted-foreground"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          className="text-xs fill-muted-foreground"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
          }}
        />
        {showPrevious && (
          <Area
            type="monotone"
            dataKey="previous"
            stroke="var(--biz-gray-5)"
            fill="var(--biz-gray-1)"
            strokeWidth={2}
          />
        )}
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="var(--primary)"
          fill="var(--primary-muted)"
          strokeWidth={2}
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
