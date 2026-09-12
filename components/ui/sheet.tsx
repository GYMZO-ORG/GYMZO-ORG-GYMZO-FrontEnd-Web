"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export function Sheet({
  children,
  onOpenChange,
  open,
  side = "right",
  title,
}: {
  children: ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  side?: "left" | "right";
  title: string;
}) {
  if (!open) return null;

  return (
    <div className={styles.overlay} role="presentation">
      <section
        aria-modal="true"
        aria-labelledby="sheet-title"
        className={cn(styles.sheet, side === "right" ? styles.sheetRight : styles.sheetLeft)}
        role="dialog"
      >
        <div className={styles.overlayHeader}>
          <h2 id="sheet-title" className={styles.overlayTitle}>
            {title}
          </h2>
          <Button
            aria-label="Close drawer"
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
