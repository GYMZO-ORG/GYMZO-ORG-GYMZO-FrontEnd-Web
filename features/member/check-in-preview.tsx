import { QrCode } from "lucide-react";
import Link from "next/link";

import { Alert } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { CHECK_IN_STEPS } from "@/constants/member-experience";
import { cn } from "@/lib/utils";

import uiStyles from "@/components/ui/ui.module.css";
import styles from "./member-experience.module.css";

export function CheckInPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={styles.checkInPanel}>
      <Alert variant="warning" title="Frontend-only check-in">
        QR codes, access validation, and visit recording are not connected yet.
      </Alert>
      <div className={styles.passPreview}>
        <span className={styles.passIcon}>
          <QrCode className={uiStyles.iconMd} aria-hidden="true" />
        </span>
        <div>
          <h2 className={styles.passTitle}>Member pass preview</h2>
          <p className={styles.passCopy}>Prepared for future secure check-in state.</p>
        </div>
        {!compact ? (
          <Link className={cn(buttonVariants({ variant: "primary" }))} href="/member">
            Back to member portal
          </Link>
        ) : null}
      </div>
      <div className={styles.stepGrid}>
        {CHECK_IN_STEPS.map(({ description, icon: Icon, title }) => (
          <div className={styles.stepCard} key={title}>
            <span className={styles.stepIcon}>
              <Icon className={uiStyles.iconMd} aria-hidden="true" />
            </span>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepCopy}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
