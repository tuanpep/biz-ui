import type { Notification } from "@examples/types";

export const notifications: Notification[] = [
  {
    id: "1",
    title: "New deal created",
    description: "Enterprise deal with Acme Corp worth $50,000",
    type: "success",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    link: "/crm/deals/1",
  },
  {
    id: "2",
    title: "Leave request pending",
    description: "John Smith requested annual leave for next week",
    type: "info",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    link: "/hr/leave",
  },
  {
    id: "3",
    title: "Invoice overdue",
    description: "Invoice #1023 is 7 days overdue",
    type: "warning",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    link: "/finance/invoices/1023",
  },
  {
    id: "4",
    title: "Task completed",
    description: "Website redesign project phase 1 completed",
    type: "success",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    link: "/projects/1",
  },
  {
    id: "5",
    title: "New employee onboarded",
    description: "Sarah Johnson joined the Marketing team",
    type: "info",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    link: "/hr",
  },
  {
    id: "6",
    title: "Expense approved",
    description: "Your travel expense of $1,250 has been approved",
    type: "success",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    link: "/finance/expenses",
  },
];

export function getUnreadNotifications(): Notification[] {
  return notifications.filter((n) => !n.read);
}

export function markNotificationAsRead(id: string): void {
  const notification = notifications.find((n) => n.id === id);
  if (notification) {
    notification.read = true;
  }
}
