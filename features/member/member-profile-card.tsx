import { Badge } from "@/components/ui/badge";
import { MEMBER_PROFILE } from "@/constants/member-experience";

import styles from "./member-experience.module.css";

export function MemberProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileHeader}>
        <div>
          <h2 className={styles.profileName}>{MEMBER_PROFILE.name}</h2>
          <p className={styles.profileMeta}>{MEMBER_PROFILE.homeGym}</p>
        </div>
        <Badge variant="primary">Member</Badge>
      </div>
      <ul className={styles.detailList}>
        <li className={styles.detailItem}>
          <span>Plan</span>
          <span className={styles.detailValue}>{MEMBER_PROFILE.plan}</span>
        </li>
        <li className={styles.detailItem}>
          <span>Status</span>
          <span className={styles.detailValue}>{MEMBER_PROFILE.status}</span>
        </li>
        <li className={styles.detailItem}>
          <span>Member since</span>
          <span className={styles.detailValue}>{MEMBER_PROFILE.memberSince}</span>
        </li>
      </ul>
    </div>
  );
}
