"use client";

import { Avatar, AvatarFallback } from "biz-ui";
import { Badge } from "biz-ui";
import { Tag } from "biz-ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "biz-ui";
import { Button } from "biz-ui";
import { Eye, Edit, Trash2 } from "lucide-react";
import { formatDate, getInitials, getStatusColor } from "@examples/lib/utils";
import type { Contact } from "@examples/types";
import { BASE } from "@examples/constants";

interface ContactTableProps {
  contacts: Contact[];
}

export function ContactTable({ contacts }: ContactTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Last Contact</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>
                    {getInitials(contact.firstName, contact.lastName)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">
                    {contact.firstName} {contact.lastName}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {contact.position}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>
              <Badge
                variant={
                  getStatusColor(contact.status) as
                    | "default"
                    | "secondary"
                    | "destructive"
                    | "outline"
                }
              >
                {contact.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {contact.tags.slice(0, 2).map((tag) => (
                  <Tag key={tag} variant="outline">
                    {tag}
                  </Tag>
                ))}
                {contact.tags.length > 2 && (
                  <Tag variant="outline">+{contact.tags.length - 2}</Tag>
                )}
              </div>
            </TableCell>
            <TableCell>{formatDate(contact.lastContact)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <a href={`${BASE}/crm/${contact.id}`}>
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </a>
                <a href={`/crm/${contact.id}?edit=true`}>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </a>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
