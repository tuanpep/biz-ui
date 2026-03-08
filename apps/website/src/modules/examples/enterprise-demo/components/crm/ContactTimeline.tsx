"use client";

import { Phone, Mail, Calendar, FileText, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "biz-ui";
import { Badge } from "biz-ui";
import { cn, formatDate } from "@examples/lib/utils";
import { getInteractionsByContact } from "@examples/data";
import type { Interaction } from "@examples/types";

interface ContactTimelineProps {
  contactId: string;
}

function getInteractionIcon(type: Interaction["type"]) {
  const iconClass = "h-4 w-4";
  switch (type) {
    case "call":
      return <Phone className={iconClass} />;
    case "email":
      return <Mail className={iconClass} />;
    case "meeting":
      return <Calendar className={iconClass} />;
    case "note":
      return <FileText className={iconClass} />;
  }
}

function getInteractionColor(type: Interaction["type"]) {
  switch (type) {
    case "call":
      return "bg-blue-500";
    case "email":
      return "bg-green-500";
    case "meeting":
      return "bg-purple-500";
    case "note":
      return "bg-gray-500";
  }
}

export function ContactTimeline({ contactId }: ContactTimelineProps) {
  const interactions = getInteractionsByContact(contactId);

  if (interactions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Interaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-8 text-center text-muted-foreground">
            No interactions recorded yet
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Interaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          {/* Timeline items */}
          <div className="space-y-4">
            {interactions.map((interaction) => (
              <div key={interaction.id} className="relative flex gap-4">
                {/* Icon */}
                <div
                  className={cn(
                    "relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-white",
                    getInteractionColor(interaction.type),
                  )}
                >
                  {getInteractionIcon(interaction.type)}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-medium">
                        {interaction.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className="mt-1 text-xs capitalize"
                      >
                        {interaction.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {formatDate(interaction.date)}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {interaction.description}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    by {interaction.createdBy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
