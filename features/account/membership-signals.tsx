import { MEMBERSHIP_SIGNALS } from "@/constants/account-experience";

import uiStyles from "@/components/ui/ui.module.css";
import styles from "./account-experience.module.css";

export function MembershipSignals() {
  return (
    <div className={styles.signalGrid}>
      {MEMBERSHIP_SIGNALS.map(({ description, icon: Icon, title, value }) => (
        <div className={styles.signalCard} key={title}>
          <span className={styles.signalIcon}>
            <Icon className={uiStyles.iconMd} aria-hidden="true" />
          </span>
          <p className={styles.signalTitle}>{title}</p>
          <p className={styles.signalValue}>{value}</p>
          <p className={styles.signalCopy}>{description}</p>
        </div>
      ))}
    </div>
  );
}
