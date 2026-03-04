/**
 * Textarea Skeleton Component
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { textareaSkeletonVariants } from "./Textarea.variants";
import type { TextareaSkeletonProps } from "./Textarea.types";

const TextareaSkeleton = React.forwardRef<
  HTMLDivElement,
  TextareaSkeletonProps
>(
  (
    {
      className,
      size = "md",
      hasLabel = false,
      hasDescription = false,
      lines = 3,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("grid w-full gap-1.5", className)}
        {...props}
      >
        {hasLabel && (
          <div className="h-4 w-20 bg-muted animate-pulse rounded" />
        )}
        <div
          className={cn(
            textareaSkeletonVariants({ size }),
            "w-full p-3 space-y-2",
          )}
        >
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className="h-3 bg-muted-foreground/20 animate-pulse rounded"
              style={{ width: `${100 - i * 15}%` }}
            />
          ))}
        </div>
        {hasDescription && (
          <div className="h-3 w-40 bg-muted animate-pulse rounded" />
        )}
      </div>
    );
  },
);

TextareaSkeleton.displayName = "TextareaSkeleton";

export { TextareaSkeleton };
