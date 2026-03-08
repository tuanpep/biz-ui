import type { Project, Task } from "@examples/types";

export const projects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete overhaul of company website with new branding",
    status: "active",
    priority: "high",
    progress: 65,
    startDate: new Date("2024-01-15"),
    dueDate: new Date("2024-04-30"),
    team: ["Admin User", "Sarah Williams", "Mike Johnson"],
    budget: 50000,
    spent: 32000,
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "Native iOS and Android app for customer portal",
    status: "active",
    priority: "critical",
    progress: 40,
    startDate: new Date("2024-02-01"),
    dueDate: new Date("2024-06-30"),
    team: ["Admin User", "Jane Smith"],
    budget: 150000,
    spent: 58000,
  },
  {
    id: "3",
    name: "CRM Integration",
    description: "Integrate Salesforce CRM with internal systems",
    status: "planning",
    priority: "medium",
    progress: 15,
    startDate: new Date("2024-03-01"),
    dueDate: new Date("2024-05-15"),
    team: ["Admin User"],
    budget: 25000,
    spent: 3500,
  },
  {
    id: "4",
    name: "Data Migration",
    description: "Migrate legacy database to new cloud infrastructure",
    status: "completed",
    priority: "high",
    progress: 100,
    startDate: new Date("2023-11-01"),
    dueDate: new Date("2024-02-28"),
    team: ["Admin User", "David Brown"],
    budget: 30000,
    spent: 28000,
  },
  {
    id: "5",
    name: "Security Audit",
    description: "Annual security assessment and penetration testing",
    status: "on-hold",
    priority: "high",
    progress: 25,
    startDate: new Date("2024-02-15"),
    dueDate: new Date("2024-04-15"),
    team: ["Admin User"],
    budget: 15000,
    spent: 4000,
  },
];

export const tasks: Task[] = [
  // Website Redesign tasks
  {
    id: "1",
    projectId: "1",
    title: "Design mockups",
    description: "Create high-fidelity design mockups for all pages",
    status: "completed",
    priority: "high",
    assignee: "Sarah Williams",
    dueDate: new Date("2024-02-15"),
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    projectId: "1",
    title: "Frontend development",
    description: "Implement React components based on designs",
    status: "in-progress",
    priority: "high",
    assignee: "Admin User",
    dueDate: new Date("2024-03-30"),
    createdAt: new Date("2024-02-16"),
  },
  {
    id: "3",
    projectId: "1",
    title: "Content migration",
    description: "Migrate all content from old CMS",
    status: "todo",
    priority: "medium",
    assignee: "Mike Johnson",
    dueDate: new Date("2024-04-15"),
    createdAt: new Date("2024-02-20"),
  },
  // Mobile App tasks
  {
    id: "4",
    projectId: "2",
    title: "API design",
    description: "Design REST API endpoints for mobile app",
    status: "completed",
    priority: "critical",
    assignee: "Admin User",
    dueDate: new Date("2024-02-28"),
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "5",
    projectId: "2",
    title: "iOS development",
    description: "Develop iOS app using Swift",
    status: "in-progress",
    priority: "critical",
    assignee: "Jane Smith",
    dueDate: new Date("2024-05-15"),
    createdAt: new Date("2024-03-01"),
  },
  {
    id: "6",
    projectId: "2",
    title: "Android development",
    description: "Develop Android app using Kotlin",
    status: "todo",
    priority: "critical",
    assignee: "Jane Smith",
    dueDate: new Date("2024-06-15"),
    createdAt: new Date("2024-03-01"),
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getTasksByProject(projectId: string): Task[] {
  return tasks.filter((t) => t.projectId === projectId);
}

export function getTasksByStatus(status: Task["status"]): Task[] {
  return tasks.filter((t) => t.status === status);
}
