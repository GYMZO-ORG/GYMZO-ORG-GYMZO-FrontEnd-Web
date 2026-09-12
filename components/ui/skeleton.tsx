import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(styles.skeleton, className)} aria-hidden="true" {...props} />;
}
