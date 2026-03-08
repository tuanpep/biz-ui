"use client";

import { Button } from "biz-ui";
import { Avatar, AvatarFallback } from "biz-ui";
import { Badge } from "biz-ui";
import { Tag } from "biz-ui";
import { Card, CardContent, CardHeader, CardTitle } from "biz-ui";
import { formatDate, getInitials, getStatusColor } from "@examples/lib/utils";
import { ArrowLeft, Edit, Mail, Phone, Building } from "lucide-react";
import type { Contact } from "@examples/types";
import { BASE } from "@examples/constants";

interface ContactDetailProps {
  contact: Contact;
}

export function ContactDetail({ contact }: ContactDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <nav className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
            <a
              href={BASE + "/crm"}
              className="hover:text-foreground transition-colors"
            >
              CRM
            </a>
            <span>/</span>
            <a
              href={BASE + "/crm"}
              className="hover:text-foreground transition-colors"
            >
              Contacts
            </a>
            <span>/</span>
            <span className="text-foreground font-medium">
              {contact.firstName} {contact.lastName}
            </span>
          </nav>
          <h1 className="text-2xl font-semibold text-foreground">
            {contact.firstName} {contact.lastName}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {contact.position}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a href={BASE + "/crm"}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </a>
          <a href={`${BASE}/crm/${contact.id}?edit=true`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </a>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">
                    {getInitials(contact.firstName, contact.lastName)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">
                      {contact.firstName} {contact.lastName}
                    </h2>
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
                  </div>
                  <p className="text-muted-foreground">{contact.position}</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-primary hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-primary hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span>{contact.company}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {contact.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Created</p>
                <p className="font-medium">{formatDate(contact.createdAt)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Contact</p>
                <p className="font-medium">{formatDate(contact.lastContact)}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
