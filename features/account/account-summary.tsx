import { UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ACCOUNT_SUMMARY } from "@/constants/account-experience";

import uiStyles from "@/components/ui/ui.module.css";
import styles from "./account-experience.module.css";

export function AccountSummary() {
  return (
    <div className={styles.summaryPanel}>
      <div className={styles.summaryHeader}>
        <div>
          <h2 className={styles.summaryName}>{ACCOUNT_SUMMARY.name}</h2>
          <p className={styles.summaryMeta}>{ACCOUNT_SUMMARY.status}</p>
        </div>
        <UserRound className={uiStyles.iconMd} aria-hidden="true" />
      </div>
      <Badge variant="warning">Preview state</Badge>
      <ul className={styles.summaryList}>
        <li className={styles.summaryItem}>
          <span>Preferred area</span>
          <span className={styles.summaryValue}>{ACCOUNT_SUMMARY.preferredArea}</span>
        </li>
        <li className={styles.summaryItem}>
          <span>Training goal</span>
          <span className={styles.summaryValue}>{ACCOUNT_SUMMARY.trainingGoal}</span>
        </li>
        <li className={styles.summaryItem}>
          <span>Session state</span>
          <span className={styles.summaryValue}>Not connected</span>
        </li>
      </ul>
    </div>
  );
}
