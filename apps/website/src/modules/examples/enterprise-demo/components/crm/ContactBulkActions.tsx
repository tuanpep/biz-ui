"use client";

import { useState } from "react";
import { Trash2, Download, X, Check } from "lucide-react";
import { Button } from "biz-ui";
import { Checkbox } from "biz-ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "biz-ui";
import { Avatar, AvatarFallback } from "biz-ui";
import { Badge } from "biz-ui";
import { Tag } from "biz-ui";
import { Eye, Edit } from "lucide-react";
import { formatDate, getInitials, getStatusColor } from "@examples/lib/utils";
import { useAppToast } from "@examples/hooks";
import { ConfirmDialog } from "@examples/components/ui";
import type { Contact } from "@examples/types";

interface ContactTableEnhancedProps {
  contacts: Contact[];
}

export function ContactTableEnhanced({ contacts }: ContactTableEnhancedProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { success, warning } = useAppToast();

  const allSelected = selectedIds.size === contacts.length;
  const someSelected = selectedIds.size > 0;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(contacts.map((c) => c.id)));
    }
  };

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const handleBulkDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmBulkDelete = () => {
    // Simulate delete
    success(
      "Contacts Deleted",
      `${selectedIds.size} contacts have been deleted`,
    );
    setSelectedIds(new Set());
    setShowDeleteDialog(false);
  };

  const handleBulkExport = () => {
    success("Export Started", `Exporting ${selectedIds.size} contacts to CSV`);
    setSelectedIds(new Set());
  };

  const clearSelection = () => {
    setSelectedIds(new Set());
  };

  return (
    <div>
      {/* Bulk Actions Bar */}
      {someSelected && (
        <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={clearSelection}>
              <X className="mr-1 h-3 w-3" />
              Clear
            </Button>
            <span className="text-sm text-muted-foreground">
              {selectedIds.size} selected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleBulkExport}>
              <Download className="mr-1 h-3 w-3" />
              Export Selected
            </Button>
            <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
              <Trash2 className="mr-1 h-3 w-3" />
              Delete Selected
            </Button>
          </div>
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={allSelected}
                onCheckedChange={toggleSelectAll}
                aria-label="Select all"
              />
            </TableHead>
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
            <TableRow
              key={contact.id}
              className={selectedIds.has(contact.id) ? "bg-muted/50" : ""}
            >
              <TableCell>
                <Checkbox
                  checked={selectedIds.has(contact.id)}
                  onCheckedChange={() => toggleSelect(contact.id)}
                  aria-label={`Select ${contact.firstName} ${contact.lastName}`}
                />
              </TableCell>
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
                  <a href={`/crm/${contact.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href={`/crm/${contact.id}?edit=true`}>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ConfirmDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Contacts"
        description={`Are you sure you want to delete ${selectedIds.size} contacts? This action cannot be undone.`}
        confirmLabel="Delete"
        variant="destructive"
        onConfirm={confirmBulkDelete}
      />
    </div>
  );
}
