"use client";

import { useState } from "react";
import { DollarSign, MoreHorizontal, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "biz-ui";
import { Badge } from "biz-ui";
import { Button } from "biz-ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "biz-ui";
import { cn, formatCurrency } from "@examples/lib/utils";
import { deals, pipelineStages } from "@examples/data";
import type { Deal } from "@examples/types";

interface DealCardProps {
  deal: Deal;
}

function DealCard({ deal }: DealCardProps) {
  const stage = pipelineStages.find((s) => s.id === deal.stage);

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm truncate">{deal.title}</h4>
            <p className="text-xs text-muted-foreground truncate">
              {deal.company}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit Deal</DropdownMenuItem>
              <DropdownMenuItem>Move to...</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <DollarSign className="h-3 w-3" />
            {formatCurrency(deal.value)}
          </div>
          <Badge variant="outline" className="text-xs">
            {deal.probability}%
          </Badge>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {deal.assignedTo}
          </div>
          <span>
            {deal.expectedCloseDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

interface PipelineColumnProps {
  stage: (typeof pipelineStages)[0];
  deals: Deal[];
}

function PipelineColumn({ stage, deals }: PipelineColumnProps) {
  const totalValue = deals.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex-1 min-w-[280px] max-w-[320px]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn("w-3 h-3 rounded-full", stage.color)} />
          <span className="font-medium text-sm">{stage.label}</span>
          <Badge variant="secondary" className="text-xs">
            {deals.length}
          </Badge>
        </div>
        <span className="text-xs text-muted-foreground">
          {formatCurrency(totalValue)}
        </span>
      </div>
      <div className="space-y-3">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
        {deals.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="p-4 text-center text-sm text-muted-foreground">
              No deals
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export function DealPipeline() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const activeStages = pipelineStages.filter(
    (stage) => stage.id !== "closed-won" && stage.id !== "closed-lost",
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Deal Pipeline</h3>
          <p className="text-sm text-muted-foreground">
            Track and manage your sales opportunities
          </p>
        </div>
        <Button>Add Deal</Button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {activeStages.map((stage) => (
          <PipelineColumn
            key={stage.id}
            stage={stage}
            deals={deals.filter((d) => d.stage === stage.id)}
          />
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pipeline Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(deals.reduce((sum, d) => sum + d.value, 0))}
            </div>
            <p className="text-xs text-muted-foreground">
              {deals.length} total deals
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Won This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {formatCurrency(
                deals
                  .filter((d) => d.stage === "closed-won")
                  .reduce((sum, d) => sum + d.value, 0),
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {deals.filter((d) => d.stage === "closed-won").length} deals
              closed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Weighted Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                deals
                  .filter(
                    (d) =>
                      d.stage !== "closed-won" && d.stage !== "closed-lost",
                  )
                  .reduce((sum, d) => sum + d.value * (d.probability / 100), 0),
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Based on probability
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
