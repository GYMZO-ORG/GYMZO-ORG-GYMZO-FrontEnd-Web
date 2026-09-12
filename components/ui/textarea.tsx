import type { TextareaHTMLAttributes } from "react";

import { FieldDescription, FieldLabel } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import styles from "./ui.module.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  helperText?: string;
  label?: string;
}

export function Textarea({
  className,
  error,
  helperText,
  id,
  label,
  required,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;
  const descriptionId = textareaId ? `${textareaId}-description` : undefined;

  return (
    <div className={styles.field}>
      {label ? (
        <FieldLabel htmlFor={textareaId} required={required}>
          {label}
        </FieldLabel>
      ) : null}
      <textarea
        id={textareaId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error || helperText ? descriptionId : undefined}
        className={cn(styles.control, styles.textarea, error && styles.errorControl, className)}
        {...props}
      />
      <FieldDescription id={descriptionId} error={error}>
        {error ?? helperText}
      </FieldDescription>
    </div>
  );
}
