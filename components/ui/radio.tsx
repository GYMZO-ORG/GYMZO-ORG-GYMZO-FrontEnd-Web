import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Radio({ className, label, ...props }: RadioProps) {
  return (
    <label className={styles.choice}>
      <input type="radio" className={cn(styles.choiceControl, className)} {...props} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
