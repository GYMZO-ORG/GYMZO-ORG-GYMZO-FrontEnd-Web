"use client";

import { X } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export function Dialog({
  children,
  onOpenChange,
  open,
  title,
}: {
  children: ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title: string;
}) {
  if (!open) return null;

  return (
    <div className={cn(styles.overlay, styles.dialogOverlay)} role="presentation">
      <section
        aria-modal="true"
        aria-labelledby="dialog-title"
        className={styles.dialog}
        role="dialog"
      >
        <div className={styles.overlayHeader}>
          <h2 id="dialog-title" className={styles.overlayTitle}>
            {title}
          </h2>
          <Button
            aria-label="Close dialog"
            size="sm"
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            <X className={styles.icon} aria-hidden="true" />
          </Button>
        </div>
        {children}
      </section>
    </div>
  );
}

export function DialogActions({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(styles.dialogActions, className)} {...props} />;
}
