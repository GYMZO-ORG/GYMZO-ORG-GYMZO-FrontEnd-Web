import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export function Spinner({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(styles.spinner, className)} role="status" aria-label="Loading" {...props} />
  );
}
