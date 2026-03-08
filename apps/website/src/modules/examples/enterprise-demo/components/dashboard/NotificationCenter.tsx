"use client";

import { useState } from "react";
import { Bell, Check, X } from "lucide-react";
import { Button } from "biz-ui";
import { Badge } from "biz-ui";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "biz-ui";
import { ScrollArea } from "biz-ui";
import { cn } from "@examples/lib/utils";
import { notifications, markNotificationAsRead } from "@examples/data";
import type { Notification } from "@examples/types";

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

function getNotificationIcon(type: Notification["type"]) {
  const iconClass = "h-5 w-5";
  switch (type) {
    case "success":
      return (
        <div
          className={cn(
            iconClass,
            "rounded-full bg-success/20 text-success flex items-center justify-center text-xs",
          )}
        >
          ✓
        </div>
      );
    case "warning":
      return (
        <div
          className={cn(
            iconClass,
            "rounded-full bg-warning/20 text-warning flex items-center justify-center text-xs",
          )}
        >
          !
        </div>
      );
    case "error":
      return (
        <div
          className={cn(
            iconClass,
            "rounded-full bg-destructive/20 text-destructive flex items-center justify-center text-xs",
          )}
        >
          ✕
        </div>
      );
    default:
      return (
        <div
          className={cn(
            iconClass,
            "rounded-full bg-info/20 text-info flex items-center justify-center text-xs",
          )}
        >
          i
        </div>
      );
  }
}

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [localNotifications, setLocalNotifications] = useState(notifications);

  const unreadCount = localNotifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    setLocalNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
    markNotificationAsRead(id);
  };

  const handleMarkAllAsRead = () => {
    setLocalNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-96">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Notifications</SheetTitle>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMarkAllAsRead}
                className="text-xs"
              >
                <Check className="mr-1 h-3 w-3" />
                Mark all read
              </Button>
            )}
          </div>
        </SheetHeader>
        <ScrollArea className="mt-4 h-[calc(100vh-120px)]">
          <div className="space-y-2 pr-4">
            {localNotifications.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                No notifications
              </div>
            ) : (
              localNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "rounded-lg border p-3 transition-colors",
                    notification.read ? "bg-card" : "bg-muted/50",
                  )}
                >
                  <div className="flex items-start gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <p
                          className={cn(
                            "text-sm font-medium",
                            !notification.read && "text-foreground",
                          )}
                        >
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleMarkAsRead(notification.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatRelativeTime(notification.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
