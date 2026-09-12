import type { ReactNode } from "react";

import styles from "./ui.module.css";

export function Tooltip({ children, content }: { children: ReactNode; content: string }) {
  return (
    <span className={styles.tooltipWrap}>
      {children}
      <span className={styles.tooltip} role="tooltip">
        {content}
      </span>
    </span>
  );
}
