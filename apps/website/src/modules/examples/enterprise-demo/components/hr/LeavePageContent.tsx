"use client";

import { Card, CardContent, CardHeader, CardTitle } from "biz-ui";
import { Button } from "biz-ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "biz-ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "biz-ui";
import { LeaveRequestForm, LeaveRequestTable } from "@examples/components/hr";
import type { LeaveRequest } from "@examples/types";
import { leaveBalance, getLeaveRequestsByStatus } from "@examples/data";
import { BASE } from "@examples/constants";
import { Plus, Calendar } from "lucide-react";

const leaveTypes = [
  { type: "annual", label: "Annual Leave", color: "bg-primary" },
  { type: "sick", label: "Sick Leave", color: "bg-destructive" },
  { type: "personal", label: "Personal Leave", color: "bg-warning" },
];

interface LeavePageContentProps {
  allRequests: LeaveRequest[];
}

export function LeavePageContent({ allRequests }: LeavePageContentProps) {
  const pendingRequests = getLeaveRequestsByStatus("pending");
  const approvedRequests = getLeaveRequestsByStatus("approved");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <nav className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
            <a
              href={BASE + "/hr"}
              className="hover:text-foreground transition-colors"
            >
              HR
            </a>
            <span>/</span>
            <span className="text-foreground font-medium">Leave</span>
          </nav>
          <h1 className="text-2xl font-semibold text-foreground">
            Leave Management
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage employee leave requests
          </p>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Request Leave
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Request Leave</DialogTitle>
            </DialogHeader>
            <LeaveRequestForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {leaveTypes.map((type) => {
          const balance = leaveBalance[type.type as keyof typeof leaveBalance];
          const remaining = balance.total - balance.used;
          return (
            <Card key={type.type}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {type.label}
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{remaining} days</div>
                <p className="text-xs text-muted-foreground">
                  {balance.used} of {balance.total} used
                </p>
                <div className="mt-2 h-2 w-full rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${type.color}`}
                    style={{
                      width: `${(balance.used / balance.total) * 100}%`,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">
            Pending ({pendingRequests.length})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved ({approvedRequests.length})
          </TabsTrigger>
          <TabsTrigger value="all">All Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-4">
          <LeaveRequestTable requests={pendingRequests} />
        </TabsContent>
        <TabsContent value="approved" className="mt-4">
          <LeaveRequestTable requests={approvedRequests} />
        </TabsContent>
        <TabsContent value="all" className="mt-4">
          <LeaveRequestTable requests={allRequests} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
