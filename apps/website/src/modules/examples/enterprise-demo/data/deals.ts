import type { Deal, Interaction } from "@examples/types";

export const deals: Deal[] = [
  {
    id: "1",
    title: "Enterprise License Agreement",
    company: "Acme Corp",
    contactId: "1",
    value: 50000,
    stage: "negotiation",
    probability: 75,
    expectedCloseDate: new Date("2024-04-15"),
    assignedTo: "Admin User",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Cloud Migration Project",
    company: "TechStart Inc",
    contactId: "2",
    value: 120000,
    stage: "proposal",
    probability: 50,
    expectedCloseDate: new Date("2024-05-01"),
    assignedTo: "Admin User",
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "3",
    title: "POS System Implementation",
    company: "Global Retail",
    contactId: "3",
    value: 75000,
    stage: "qualified",
    probability: 30,
    expectedCloseDate: new Date("2024-06-15"),
    assignedTo: "Admin User",
    createdAt: new Date("2024-02-15"),
  },
  {
    id: "4",
    title: "SaaS Platform Subscription",
    company: "Innovate Co",
    contactId: "4",
    value: 25000,
    stage: "lead",
    probability: 10,
    expectedCloseDate: new Date("2024-07-01"),
    assignedTo: "Admin User",
    createdAt: new Date("2024-03-01"),
  },
  {
    id: "5",
    title: "Security Audit Services",
    company: "Financial Services LLC",
    contactId: "5",
    value: 35000,
    stage: "closed-won",
    probability: 100,
    expectedCloseDate: new Date("2024-03-01"),
    assignedTo: "Admin User",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "6",
    title: "Healthcare IT Integration",
    company: "HealthTech Solutions",
    contactId: "6",
    value: 85000,
    stage: "closed-lost",
    probability: 0,
    expectedCloseDate: new Date("2024-02-01"),
    assignedTo: "Admin User",
    createdAt: new Date("2023-12-01"),
  },
];

export const interactions: Interaction[] = [
  {
    id: "1",
    contactId: "1",
    type: "call",
    title: "Discovery call",
    description:
      "Discussed enterprise requirements and budget timeline. They are looking for a 3-year license.",
    date: new Date("2024-03-05"),
    createdBy: "Admin User",
  },
  {
    id: "2",
    contactId: "1",
    type: "email",
    title: "Proposal sent",
    description: "Sent detailed pricing proposal with volume discounts.",
    date: new Date("2024-03-03"),
    createdBy: "Admin User",
  },
  {
    id: "3",
    contactId: "1",
    type: "meeting",
    title: "Product demo",
    description:
      "Conducted 90-minute product demo with technical team. Very positive feedback.",
    date: new Date("2024-02-28"),
    createdBy: "Admin User",
  },
  {
    id: "4",
    contactId: "2",
    type: "call",
    title: "Technical consultation",
    description:
      "Discussed cloud architecture requirements and migration timeline.",
    date: new Date("2024-03-04"),
    createdBy: "Admin User",
  },
  {
    id: "5",
    contactId: "2",
    type: "note",
    title: "Internal note",
    description:
      "They are also considering AWS and Azure. Need to emphasize our competitive advantages.",
    date: new Date("2024-03-02"),
    createdBy: "Admin User",
  },
];

export function getDealsByStage(stage: Deal["stage"]): Deal[] {
  return deals.filter((d) => d.stage === stage);
}

export function getInteractionsByContact(contactId: string): Interaction[] {
  return interactions.filter((i) => i.contactId === contactId);
}

export const pipelineStages = [
  { id: "lead", label: "Lead", color: "bg-gray-500" },
  { id: "qualified", label: "Qualified", color: "bg-blue-500" },
  { id: "proposal", label: "Proposal", color: "bg-yellow-500" },
  { id: "negotiation", label: "Negotiation", color: "bg-orange-500" },
  { id: "closed-won", label: "Won", color: "bg-green-500" },
  { id: "closed-lost", label: "Lost", color: "bg-red-500" },
];
