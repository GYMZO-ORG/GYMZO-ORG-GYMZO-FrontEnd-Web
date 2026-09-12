import type { SelectHTMLAttributes } from "react";

import { FieldDescription, FieldLabel } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  helperText?: string;
  label?: string;
}

export function Select({
  children,
  className,
  error,
  helperText,
  id,
  label,
  required,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;
  const descriptionId = selectId ? `${selectId}-description` : undefined;

  return (
    <div className={styles.field}>
      {label ? (
        <FieldLabel htmlFor={selectId} required={required}>
          {label}
        </FieldLabel>
      ) : null}
      <select
        id={selectId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error || helperText ? descriptionId : undefined}
        className={cn(styles.control, error && styles.errorControl, className)}
        {...props}
      >
        {children}
      </select>
      <FieldDescription id={descriptionId} error={error}>
        {error ?? helperText}
      </FieldDescription>
    </div>
  );
}

export const SelectTrigger = Select;
