"use client";

import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "role"> {
  checked?: boolean;
}

export function Switch({ checked = false, className, disabled, ...props }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={cn(styles.switch, checked && styles.switchChecked, className)}
      {...props}
    >
      <span className={styles.switchThumb} />
    </button>
  );
}
