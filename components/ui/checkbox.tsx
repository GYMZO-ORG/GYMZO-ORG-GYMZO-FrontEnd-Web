import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <label className={styles.choice}>
      <input type="checkbox" className={cn(styles.choiceControl, className)} {...props} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
