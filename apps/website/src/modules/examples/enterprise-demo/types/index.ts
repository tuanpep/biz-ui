// Contact types
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  status: "active" | "inactive" | "lead";
  tags: string[];
  avatar?: string;
  createdAt: Date;
  lastContact: Date;
}

// Employee types
export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  status: "active" | "on-leave" | "inactive";
  avatar?: string;
  joinDate: Date;
  phone: string;
}

// Leave request types
export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: "annual" | "sick" | "personal" | "other";
  startDate: Date;
  endDate: Date;
  status: "pending" | "approved" | "rejected";
  reason: string;
  createdAt: Date;
}

// Attendance types
export interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: Date;
  status: "present" | "absent" | "late" | "on-leave";
  checkIn?: string;
  checkOut?: string;
}

// Notification types
export interface Notification {
  id: string;
  title: string;
  description: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: Date;
  link?: string;
}

// Deal types for CRM pipeline
export interface Deal {
  id: string;
  title: string;
  company: string;
  contactId: string;
  value: number;
  stage:
    | "lead"
    | "qualified"
    | "proposal"
    | "negotiation"
    | "closed-won"
    | "closed-lost";
  probability: number;
  expectedCloseDate: Date;
  assignedTo: string;
  createdAt: Date;
}

// Interaction types for contact timeline
export interface Interaction {
  id: string;
  contactId: string;
  type: "call" | "email" | "meeting" | "note";
  title: string;
  description: string;
  date: Date;
  createdBy: string;
}

// Project types
export interface Project {
  id: string;
  name: string;
  description: string;
  status: "planning" | "active" | "on-hold" | "completed" | "cancelled";
  priority: "low" | "medium" | "high" | "critical";
  progress: number;
  startDate: Date;
  endDate: Date;
  team: string[];
  createdAt: Date;
}

// Task types
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "review" | "done";
  priority: "low" | "medium" | "high";
  assignee: string;
  projectId: string;
  dueDate: Date;
  createdAt: Date;
}

// Invoice types
export interface Invoice {
  id: string;
  number: string;
  client: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  dueDate: Date;
  createdAt: Date;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

// Expense types
export interface Expense {
  id: string;
  description: string;
  category:
    | "travel"
    | "software"
    | "hardware"
    | "office"
    | "marketing"
    | "other";
  amount: number;
  date: Date;
  receipt?: string;
  status: "pending" | "approved" | "rejected";
  submittedBy: string;
  approvedBy?: string;
}

// Activity types for recent activity
export interface Activity {
  id: string;
  type: "deal" | "contact" | "task" | "invoice" | "employee" | "project";
  action: "created" | "updated" | "deleted" | "completed";
  title: string;
  description: string;
  timestamp: Date;
  user: string;
}

// Dashboard types
export interface DashboardMetric {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}
