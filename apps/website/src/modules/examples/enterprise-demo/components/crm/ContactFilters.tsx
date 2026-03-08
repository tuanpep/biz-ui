"use client";

import { Input } from "biz-ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "biz-ui";
import { Search } from "lucide-react";

export function ContactFilters() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search contacts..."
          className="pl-9"
        />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-[150px]" placeholder="Status">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
          <SelectItem value="lead">Lead</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]" placeholder="Company">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Companies</SelectItem>
          <SelectItem value="acme">Acme Corp</SelectItem>
          <SelectItem value="techstart">TechStart Inc</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
