import type { Invoice, Expense } from "@examples/types";

export const invoices: Invoice[] = [
  {
    id: "INV-1025",
    clientName: "Acme Corp",
    items: [
      {
        id: "1",
        description: "Enterprise License - Annual",
        quantity: 1,
        rate: 50000,
        amount: 50000,
      },
      {
        id: "2",
        description: "Implementation Services",
        quantity: 40,
        rate: 150,
        amount: 6000,
      },
      {
        id: "3",
        description: "Training Sessions",
        quantity: 4,
        rate: 500,
        amount: 2000,
      },
    ],
    subtotal: 58000,
    tax: 5220,
    total: 63220,
    status: "paid",
    dueDate: new Date("2024-03-15"),
    createdAt: new Date("2024-02-15"),
  },
  {
    id: "INV-1024",
    clientName: "TechStart Inc",
    items: [
      {
        id: "1",
        description: "Cloud Migration - Phase 1",
        quantity: 1,
        rate: 40000,
        amount: 40000,
      },
      {
        id: "2",
        description: "Consulting Hours",
        quantity: 20,
        rate: 200,
        amount: 4000,
      },
    ],
    subtotal: 44000,
    tax: 3960,
    total: 47960,
    status: "sent",
    dueDate: new Date("2024-03-25"),
    createdAt: new Date("2024-02-25"),
  },
  {
    id: "INV-1023",
    clientName: "Global Retail",
    items: [
      {
        id: "1",
        description: "POS System - 10 locations",
        quantity: 10,
        rate: 5000,
        amount: 50000,
      },
      {
        id: "2",
        description: "Installation & Setup",
        quantity: 10,
        rate: 500,
        amount: 5000,
      },
    ],
    subtotal: 55000,
    tax: 4950,
    total: 59950,
    status: "overdue",
    dueDate: new Date("2024-02-28"),
    createdAt: new Date("2024-01-28"),
  },
  {
    id: "INV-1022",
    clientName: "Innovate Co",
    items: [
      {
        id: "1",
        description: "SaaS Platform - Monthly",
        quantity: 50,
        rate: 50,
        amount: 2500,
      },
    ],
    subtotal: 2500,
    tax: 225,
    total: 2725,
    status: "paid",
    dueDate: new Date("2024-02-15"),
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "INV-1021",
    clientName: "Financial Services LLC",
    items: [
      {
        id: "1",
        description: "Security Audit",
        quantity: 1,
        rate: 35000,
        amount: 35000,
      },
    ],
    subtotal: 35000,
    tax: 3150,
    total: 38150,
    status: "paid",
    dueDate: new Date("2024-02-01"),
    createdAt: new Date("2024-01-01"),
  },
];

export const expenses: Expense[] = [
  {
    id: "1",
    description: "Client meeting - Airfare and hotel",
    category: "travel",
    amount: 1250,
    date: new Date("2024-03-01"),
    status: "approved",
    submittedBy: "Admin User",
    approvedBy: "Manager",
  },
  {
    id: "2",
    description: "Annual Figma subscription",
    category: "software",
    amount: 540,
    date: new Date("2024-02-28"),
    status: "approved",
    submittedBy: "Admin User",
    approvedBy: "Manager",
  },
  {
    id: "3",
    description: "New MacBook Pro for development",
    category: "hardware",
    amount: 2499,
    date: new Date("2024-02-25"),
    status: "pending",
    submittedBy: "Admin User",
  },
  {
    id: "4",
    description: "Office supplies - Q1",
    category: "office",
    amount: 450,
    date: new Date("2024-02-20"),
    status: "approved",
    submittedBy: "Admin User",
    approvedBy: "Manager",
  },
  {
    id: "5",
    description: "Google Ads campaign - February",
    category: "marketing",
    amount: 3500,
    date: new Date("2024-02-15"),
    status: "approved",
    submittedBy: "Marketing Team",
    approvedBy: "Director",
  },
  {
    id: "6",
    description: "Conference tickets - React Summit",
    category: "other",
    amount: 899,
    date: new Date("2024-03-05"),
    status: "pending",
    submittedBy: "Admin User",
  },
];

export function getInvoicesByStatus(status: Invoice["status"]): Invoice[] {
  return invoices.filter((i) => i.status === status);
}

export function getExpensesByStatus(status: Expense["status"]): Expense[] {
  return expenses.filter((e) => e.status === status);
}

export function getTotalRevenue(): number {
  return invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.total, 0);
}

export function getTotalOutstanding(): number {
  return invoices
    .filter((i) => i.status === "sent" || i.status === "overdue")
    .reduce((sum, i) => sum + i.total, 0);
}

export function getTotalOverdue(): number {
  return invoices
    .filter((i) => i.status === "overdue")
    .reduce((sum, i) => sum + i.total, 0);
}
