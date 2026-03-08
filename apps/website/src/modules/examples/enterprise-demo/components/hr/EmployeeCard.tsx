"use client";

import { Avatar, AvatarFallback } from "biz-ui";
import { Badge } from "biz-ui";
import { Card, CardContent } from "biz-ui";
import { Mail } from "lucide-react";
import { formatDate, getInitials, getStatusColor } from "@examples/lib/utils";
import type { Employee } from "@examples/types";

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <a href={`/hr/employees/${employee.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback>
                {getInitials(employee.firstName, employee.lastName)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium truncate">
                  {employee.firstName} {employee.lastName}
                </h3>
                <Badge
                  variant={
                    getStatusColor(employee.status) as
                      | "default"
                      | "secondary"
                      | "destructive"
                      | "outline"
                  }
                >
                  {employee.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {employee.position}
              </p>
              <p className="text-sm text-muted-foreground">
                {employee.department}
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  {employee.email}
                </span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Joined {formatDate(employee.joinDate)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

interface EmployeeGridProps {
  employees: Employee[];
}

export function EmployeeGrid({ employees }: EmployeeGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}
