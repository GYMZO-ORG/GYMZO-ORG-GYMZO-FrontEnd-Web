import { MEMBER_METRICS } from "@/constants/member-experience";

import uiStyles from "@/components/ui/ui.module.css";
import styles from "./member-experience.module.css";

export function MemberMetrics() {
  return (
    <div className={styles.metricGrid}>
      {MEMBER_METRICS.map(({ detail, icon: Icon, label, value }) => (
        <div className={styles.metricCard} key={label}>
          <span className={styles.metricIcon}>
            <Icon className={uiStyles.iconMd} aria-hidden="true" />
          </span>
          <p className={styles.metricValue}>{value}</p>
          <p className={styles.metricLabel}>{label}</p>
          <p className={styles.metricDetail}>{detail}</p>
        </div>
      ))}
    </div>
  );
}
