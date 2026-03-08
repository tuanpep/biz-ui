import type { DashboardMetric, ChartDataPoint } from "@examples/types";

export const dashboardMetrics: DashboardMetric[] = [
  {
    title: "Total Revenue",
    value: "$124,500",
    change: 12.5,
    changeType: "increase",
    icon: "dollar",
  },
  {
    title: "Active Users",
    value: "8,234",
    change: 8.2,
    changeType: "increase",
    icon: "users",
  },
  {
    title: "Pending Orders",
    value: "156",
    change: 3.1,
    changeType: "decrease",
    icon: "shopping-cart",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: 0.8,
    changeType: "increase",
    icon: "trending-up",
  },
];

export const revenueData: ChartDataPoint[] = [
  { name: "Jan", value: 4000, previous: 2400 },
  { name: "Feb", value: 3000, previous: 1398 },
  { name: "Mar", value: 2000, previous: 9800 },
  { name: "Apr", value: 2780, previous: 3908 },
  { name: "May", value: 1890, previous: 4800 },
  { name: "Jun", value: 2390, previous: 3800 },
  { name: "Jul", value: 3490, previous: 4300 },
  { name: "Aug", value: 4000, previous: 2400 },
  { name: "Sep", value: 3000, previous: 1398 },
  { name: "Oct", value: 2000, previous: 9800 },
  { name: "Nov", value: 2780, previous: 3908 },
  { name: "Dec", value: 4890, previous: 4800 },
];

export const userGrowthData: ChartDataPoint[] = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1800 },
  { name: "Mar", value: 2400 },
  { name: "Apr", value: 2800 },
  { name: "May", value: 3200 },
  { name: "Jun", value: 4100 },
  { name: "Jul", value: 4800 },
  { name: "Aug", value: 5400 },
  { name: "Sep", value: 6200 },
  { name: "Oct", value: 7100 },
  { name: "Nov", value: 7800 },
  { name: "Dec", value: 8234 },
];

export const trafficSourceData: ChartDataPoint[] = [
  { name: "Direct", value: 4000 },
  { name: "Organic Search", value: 3000 },
  { name: "Social Media", value: 2000 },
  { name: "Referral", value: 1500 },
  { name: "Email", value: 1000 },
];

export const recentActivity = [
  {
    id: "1",
    user: "John Doe",
    action: "Created new order",
    target: "Order #12345",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "Updated customer",
    target: "Acme Corp",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: "3",
    user: "Mike Johnson",
    action: "Closed ticket",
    target: "Ticket #6789",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
  },
  {
    id: "4",
    user: "Sarah Wilson",
    action: "Added comment",
    target: "Project Alpha",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
  },
  {
    id: "5",
    user: "Tom Brown",
    action: "Uploaded file",
    target: "Q4 Report.pdf",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
  },
];
