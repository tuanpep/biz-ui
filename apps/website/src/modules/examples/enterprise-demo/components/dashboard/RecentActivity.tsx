import { Avatar, AvatarFallback } from "biz-ui";
import { Badge } from "biz-ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "biz-ui";
import { formatRelativeTime, getInitials } from "@examples/lib/utils";

interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: Date;
}

interface RecentActivityTableProps {
  activities: Activity[];
}

export function RecentActivityTable({ activities }: RecentActivityTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Target</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {getInitials(
                      activity.user.split(" ")[0],
                      activity.user.split(" ")[1] || "",
                    )}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{activity.user}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="secondary">{activity.action}</Badge>
            </TableCell>
            <TableCell>{activity.target}</TableCell>
            <TableCell className="text-muted-foreground">
              {formatRelativeTime(activity.timestamp)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
