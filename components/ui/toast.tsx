"use client";

import { X } from "lucide-react";
import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentTone } from "@/types/ui";

import styles from "./ui.module.css";

type Toast = {
  id: string;
  message: string;
  title: string;
  variant?: ComponentTone;
};

type ToastInput = Omit<Toast, "id">;

const ToastContext = createContext<{ showToast: (toast: ToastInput) => void } | null>(null);

const toneClasses: Record<ComponentTone, string> = {
  neutral: styles.toneNeutral,
  primary: styles.tonePrimary,
  success: styles.toneSuccess,
  warning: styles.toneWarning,
  danger: styles.toneDanger,
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (toast: ToastInput) => {
      const id = crypto.randomUUID();
      setToasts((current) => [...current, { ...toast, id }]);
      window.setTimeout(() => dismiss(id), 4000);
    },
    [dismiss],
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className={styles.toastRegion}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(styles.toast, toneClasses[toast.variant ?? "neutral"])}
            role="status"
          >
            <div className={styles.toastInner}>
              <div>
                <p className={styles.toastTitle}>{toast.title}</p>
                <p className={styles.toastMessage}>{toast.message}</p>
              </div>
              <Button
                aria-label="Dismiss notification"
                size="sm"
                variant="ghost"
                onClick={() => dismiss(toast.id)}
              >
                <X className={styles.icon} aria-hidden="true" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider.");
  }
  return context;
}
