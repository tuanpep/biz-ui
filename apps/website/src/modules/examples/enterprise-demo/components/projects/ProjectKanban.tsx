"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, Calendar, Users, Clock } from "lucide-react";
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
import { cn, formatDate } from "@examples/lib/utils";
import { projects, tasks } from "@examples/data";
import type { Project, Task } from "@examples/types";

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  const priorityColors = {
    low: "bg-gray-100 text-gray-700",
    medium: "bg-blue-100 text-blue-700",
    high: "bg-orange-100 text-orange-700",
    critical: "bg-red-100 text-red-700",
  };

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm truncate">{task.title}</h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
              {task.description}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit Task</DropdownMenuItem>
              <DropdownMenuItem>Move to...</DropdownMenuItem>
              <DropdownMenuItem>Delete Task</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Badge
            variant="outline"
            className={cn("text-xs", priorityColors[task.priority])}
          >
            {task.priority}
          </Badge>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {task.assignee}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(task.dueDate)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface KanbanColumnProps {
  title: string;
  status: Task["status"];
  tasks: Task[];
  color: string;
}

function KanbanColumn({
  title,
  status,
  tasks: columnTasks,
  color,
}: KanbanColumnProps) {
  return (
    <div className="flex-1 min-w-[280px] max-w-[320px]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn("w-3 h-3 rounded-full", color)} />
          <span className="font-medium text-sm">{title}</span>
          <Badge variant="secondary" className="text-xs">
            {columnTasks.length}
          </Badge>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      <div className="space-y-3">
        {columnTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {columnTasks.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="p-4 text-center text-sm text-muted-foreground">
              No tasks
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export function ProjectKanban() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const projectTasks = tasks.filter((t) => t.projectId === selectedProject.id);

  const todoTasks = projectTasks.filter((t) => t.status === "todo");
  const inProgressTasks = projectTasks.filter(
    (t) => t.status === "in-progress",
  );
  const completedTasks = projectTasks.filter((t) => t.status === "completed");

  return (
    <div className="space-y-6">
      {/* Project Selector */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{selectedProject.name}</h3>
          <p className="text-sm text-muted-foreground">
            {selectedProject.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Progress value={selectedProject.progress} className="w-32" />
            <span className="text-sm font-medium">
              {selectedProject.progress}%
            </span>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Project Tabs */}
      <div className="flex gap-2 border-b">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              selectedProject.id === project.id
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        <KanbanColumn
          title="To Do"
          status="todo"
          tasks={todoTasks}
          color="bg-gray-500"
        />
        <KanbanColumn
          title="In Progress"
          status="in-progress"
          tasks={inProgressTasks}
          color="bg-blue-500"
        />
        <KanbanColumn
          title="Completed"
          status="completed"
          tasks={completedTasks}
          color="bg-green-500"
        />
      </div>
    </div>
  );
}
