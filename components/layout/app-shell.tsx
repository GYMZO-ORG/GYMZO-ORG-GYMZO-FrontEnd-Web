import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import styles from "./layout.module.css";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main className={styles.shellMain} id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
