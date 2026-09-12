import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export function Avatar({
  className,
  initials,
  ...props
}: HTMLAttributes<HTMLDivElement> & { initials: string }) {
  return (
    <div className={cn(styles.avatar, className)} {...props}>
      {initials}
    </div>
  );
}
