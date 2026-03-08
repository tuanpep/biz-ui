"use client";

import { Button } from "biz-ui";
import { Badge } from "biz-ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "biz-ui";
import { Card, CardContent } from "biz-ui";
import type { LeaveRequest } from "@examples/types";
import { formatDate, getStatusColor } from "@examples/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

interface LeaveRequestTableProps {
  requests: LeaveRequest[];
}

export function LeaveRequestTable({ requests }: LeaveRequestTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date Range</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">
                  {request.employeeName}
                </TableCell>
                <TableCell className="capitalize">{request.type}</TableCell>
                <TableCell>
                  {formatDate(request.startDate)} -{" "}
                  {formatDate(request.endDate)}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {request.reason}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      getStatusColor(request.status) as
                        | "default"
                        | "secondary"
                        | "destructive"
                        | "outline"
                    }
                  >
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {request.status === "pending" && (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <CheckCircle className="h-4 w-4 text-success" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <XCircle className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
