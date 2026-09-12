import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

const alertVariants = cva(styles.alert, {
  variants: {
    variant: {
      neutral: styles.toneNeutral,
      success: styles.toneSuccess,
      warning: styles.toneWarning,
      danger: styles.toneDanger,
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
}

export function Alert({ children, className, title, variant, ...props }: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant }), className)} role="status" {...props}>
      {title ? <p className={styles.alertTitle}>{title}</p> : null}
      <div className={cn(styles.alertBody, title && styles.alertBodyWithTitle)}>{children}</div>
    </div>
  );
}
