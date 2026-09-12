import { MEMBER_TIMELINE } from "@/constants/member-experience";

import styles from "./member-experience.module.css";

export function MemberTimeline() {
  return (
    <div className={styles.timelineCard}>
      <h2 className={styles.timelineTitle}>Member activity signals</h2>
      <p className={styles.timelineCopy}>
        These static signals shape the future member portal without creating live activity data.
      </p>
      <ul className={styles.timelineList}>
        {MEMBER_TIMELINE.map((item) => (
          <li className={styles.timelineItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
