import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
  label?: string;
}

export function Input({ className, error, helperText, id, label, required, ...props }: InputProps) {
  const inputId = id ?? props.name;
  const descriptionId = inputId ? `${inputId}-description` : undefined;

  return (
    <div className={styles.field}>
      {label ? (
        <FieldLabel htmlFor={inputId} required={required}>
          {label}
        </FieldLabel>
      ) : null}
      <input
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error || helperText ? descriptionId : undefined}
        className={cn(styles.control, error && styles.errorControl, className)}
        {...props}
      />
      <FieldDescription id={descriptionId} error={error}>
        {error ?? helperText}
      </FieldDescription>
    </div>
  );
}

export function FieldLabel({
  children,
  className,
  htmlFor,
  required,
}: {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
  required?: boolean;
}) {
  return (
    <label className={cn(styles.label, className)} htmlFor={htmlFor}>
      {children}
      {required ? (
        <span className={styles.required} aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}

export function FieldDescription({
  children,
  error,
  id,
}: {
  children?: ReactNode;
  error?: string;
  id?: string;
}) {
  if (!children) return null;

  return (
    <p id={id} className={cn(styles.description, error && styles.errorText)}>
      {children}
    </p>
  );
}
