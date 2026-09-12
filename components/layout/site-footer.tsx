import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { INTERNAL_NAV_ITEMS, SUPPORT_NAV_ITEMS } from "@/constants/navigation";

import styles from "./layout.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <PageContainer className={styles.footerInner}>
        <div>
          <Link className={styles.footerBrand} href="/">
            GYMZO
          </Link>
          <p className={styles.footerCopy}>Application shell and navigation foundation.</p>
        </div>
        <nav className={styles.footerNav} aria-label="Footer">
          {INTERNAL_NAV_ITEMS.map((item) => (
            <Link key={item.href} className={styles.footerLink} href={item.href}>
              {item.label}
            </Link>
          ))}
          {SUPPORT_NAV_ITEMS.map((item) => (
            <span key={item.href} className={styles.footerLinkDisabled} aria-disabled="true">
              {item.label}
            </span>
          ))}
        </nav>
      </PageContainer>
    </footer>
  );
}
