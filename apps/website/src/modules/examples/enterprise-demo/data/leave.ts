import type { LeaveRequest, AttendanceRecord } from "@examples/types";

export const leaveRequests: LeaveRequest[] = [
  {
    id: "1",
    employeeId: "5",
    employeeName: "Steven Rodriguez",
    type: "annual",
    startDate: new Date("2024-03-15"),
    endDate: new Date("2024-03-22"),
    status: "pending",
    reason: "Family vacation",
    createdAt: new Date("2024-03-01"),
  },
  {
    id: "2",
    employeeId: "3",
    employeeName: "Kevin Lee",
    type: "sick",
    startDate: new Date("2024-03-08"),
    endDate: new Date("2024-03-09"),
    status: "approved",
    reason: "Medical appointment",
    createdAt: new Date("2024-03-05"),
  },
  {
    id: "3",
    employeeId: "8",
    employeeName: "Jessica Hall",
    type: "personal",
    startDate: new Date("2024-03-20"),
    endDate: new Date("2024-03-20"),
    status: "pending",
    reason: "Personal matters",
    createdAt: new Date("2024-03-06"),
  },
  {
    id: "4",
    employeeId: "1",
    employeeName: "Alex Thompson",
    type: "annual",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-05"),
    status: "approved",
    reason: "Spring break trip",
    createdAt: new Date("2024-02-28"),
  },
  {
    id: "5",
    employeeId: "10",
    employeeName: "Nicole King",
    type: "sick",
    startDate: new Date("2024-03-04"),
    endDate: new Date("2024-03-05"),
    status: "approved",
    reason: "Flu",
    createdAt: new Date("2024-03-04"),
  },
  {
    id: "6",
    employeeId: "15",
    employeeName: "Ryan Nelson",
    type: "other",
    startDate: new Date("2024-03-25"),
    endDate: new Date("2024-03-26"),
    status: "rejected",
    reason: "Conference attendance",
    createdAt: new Date("2024-03-02"),
  },
];

export const attendanceRecords: AttendanceRecord[] = [
  {
    id: "1",
    employeeId: "1",
    employeeName: "Alex Thompson",
    date: new Date("2024-03-07"),
    status: "present",
    checkIn: "09:00",
    checkOut: "18:00",
  },
  {
    id: "2",
    employeeId: "2",
    employeeName: "Maria Garcia",
    date: new Date("2024-03-07"),
    status: "present",
    checkIn: "08:45",
    checkOut: "17:30",
  },
  {
    id: "3",
    employeeId: "3",
    employeeName: "Kevin Lee",
    date: new Date("2024-03-07"),
    status: "late",
    checkIn: "09:30",
    checkOut: "18:00",
  },
  {
    id: "4",
    employeeId: "4",
    employeeName: "Rachel Clark",
    date: new Date("2024-03-07"),
    status: "present",
    checkIn: "08:55",
    checkOut: "17:45",
  },
  {
    id: "5",
    employeeId: "5",
    employeeName: "Steven Rodriguez",
    date: new Date("2024-03-07"),
    status: "on-leave",
  },
  {
    id: "6",
    employeeId: "6",
    employeeName: "Michelle Lewis",
    date: new Date("2024-03-07"),
    status: "present",
    checkIn: "09:00",
    checkOut: "18:15",
  },
  {
    id: "7",
    employeeId: "7",
    employeeName: "Daniel Walker",
    date: new Date("2024-03-07"),
    status: "absent",
  },
  {
    id: "8",
    employeeId: "8",
    employeeName: "Jessica Hall",
    date: new Date("2024-03-07"),
    status: "present",
    checkIn: "08:50",
    checkOut: "17:30",
  },
];

export const leaveBalance = {
  annual: { used: 5, total: 20 },
  sick: { used: 2, total: 10 },
  personal: { used: 1, total: 3 },
};

export function getLeaveRequestsByStatus(
  status: LeaveRequest["status"],
): LeaveRequest[] {
  return leaveRequests.filter((r) => r.status === status);
}

export function getLeaveRequestsByEmployee(employeeId: string): LeaveRequest[] {
  return leaveRequests.filter((r) => r.employeeId === employeeId);
}
