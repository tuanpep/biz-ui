"use client";

import { Plus, Calendar, Users, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "biz-ui";
import { Badge } from "biz-ui";
import { Button } from "biz-ui";
import { Progress } from "biz-ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "biz-ui";
import { cn, formatDate, formatCurrency } from "@examples/lib/utils";
import { projects } from "@examples/data";
import type { Project } from "@examples/types";

const statusColors: Record<Project["status"], string> = {
  planning: "bg-blue-100 text-blue-700",
  active: "bg-green-100 text-green-700",
  "on-hold": "bg-yellow-100 text-yellow-700",
  completed: "bg-gray-100 text-gray-700",
  cancelled: "bg-red-100 text-red-700",
};

const priorityColors: Record<Project["priority"], string> = {
  low: "border-l-gray-500",
  medium: "border-l-blue-500",
  high: "border-l-orange-500",
  critical: "border-l-red-500",
};

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "border-l-4 cursor-pointer hover:shadow-md transition-shadow",
        priorityColors[project.priority],
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">{project.name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {project.description}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit Project</DropdownMenuItem>
              <DropdownMenuItem>View Tasks</DropdownMenuItem>
              <DropdownMenuItem>Archive Project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <Badge className={statusColors[project.status]}>
            {project.status}
          </Badge>
          <span className="text-xs text-muted-foreground capitalize">
            {project.priority} priority
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{project.team.length} members</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(project.dueDate)}</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Budget</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{formatCurrency(project.spent)}</span>
            <span className="text-muted-foreground">
              / {formatCurrency(project.budget)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Manage and track your team's projects
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
