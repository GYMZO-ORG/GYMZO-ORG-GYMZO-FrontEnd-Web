"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FOUNDATION_NAV_ITEMS } from "@/constants/navigation";

import styles from "./layout.module.css";
import uiStyles from "../ui/ui.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <PageContainer className={styles.siteHeaderInner}>
        <Link className={styles.brand} href="/">
          GYMZO
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {FOUNDATION_NAV_ITEMS.map((item) => (
            <Link key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.desktopActions}>
          <ThemeToggle />
        </div>
        <Button
          className={styles.mobileMenu}
          size="sm"
          variant="ghost"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <Menu className={uiStyles.iconMd} aria-hidden="true" />
        </Button>
      </PageContainer>
      <Sheet open={open} onOpenChange={setOpen} title="Navigation">
        <div className={styles.mobileSheetContent}>
          {FOUNDATION_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              className={styles.mobileNavLink}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.mobileTheme}>
            <ThemeToggle />
          </div>
        </div>
      </Sheet>
    </header>
  );
}
