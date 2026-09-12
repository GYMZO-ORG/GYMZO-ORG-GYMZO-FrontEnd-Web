"use client";

import { ChevronDown, Menu, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { INTERNAL_NAV_ITEMS, PUBLIC_NAV_ITEMS, SHELL_NAV_GROUPS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

import styles from "./layout.module.css";
import uiStyles from "../ui/ui.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href ||
    (href === "/explore" && pathname.startsWith("/gyms")) ||
    (href === "/member" && pathname === "/check-in");

  return (
    <header className={styles.siteHeader}>
      <PageContainer className={styles.siteHeaderInner}>
        <div className={styles.brandCluster}>
          <Link className={styles.brand} href="/" aria-label="GYMZO home">
            <span className={styles.brandMark} aria-hidden="true" />
            <span>GYMZO</span>
          </Link>
          <span className={styles.environmentBadge}>Guest</span>
        </div>

        <nav className={styles.nav} aria-label="Primary navigation">
          {PUBLIC_NAV_ITEMS.map((item) =>
            item.disabled ? (
              <span
                key={item.href}
                className={styles.navLinkDisabled}
                aria-disabled="true"
                title={item.description}
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.href}
                className={cn(styles.navLink, isActive(item.href) && styles.navLinkActive)}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className={styles.navMore}>
            <button className={styles.navMoreButton} type="button" aria-haspopup="true">
              More
              <ChevronDown className={uiStyles.icon} aria-hidden="true" />
            </button>
            <div className={styles.navMenu} role="menu">
              {INTERNAL_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    styles.navMenuItem,
                    pathname === item.href && styles.navMenuItemActive,
                  )}
                  href={item.href}
                  role="menuitem"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <item.icon className={uiStyles.icon} aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className={styles.desktopActions}>
          <ThemeToggle />
          <Link
            className={cn(uiStyles.button, uiStyles.buttonSm, uiStyles.buttonOutline)}
            href="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className={cn(uiStyles.button, uiStyles.buttonSm, uiStyles.buttonPrimary)}
            href="/register"
          >
            Get started
          </Link>
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
          {SHELL_NAV_GROUPS.map((group) => (
            <div key={group.label} className={styles.mobileNavGroup}>
              <p className={styles.mobileNavGroupLabel}>{group.label}</p>
              {group.items.map((item) =>
                item.disabled ? (
                  <span key={item.href} className={styles.mobileNavDisabled} aria-disabled="true">
                    <item.icon className={uiStyles.icon} aria-hidden="true" />
                    <span>
                      <span className={styles.mobileNavTitle}>{item.label}</span>
                      <span className={styles.mobileNavDescription}>{item.description}</span>
                    </span>
                  </span>
                ) : (
                  <Link
                    key={item.href}
                    className={cn(
                      styles.mobileNavLink,
                      isActive(item.href) && styles.mobileNavLinkActive,
                    )}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <item.icon className={uiStyles.icon} aria-hidden="true" />
                    <span>
                      <span className={styles.mobileNavTitle}>{item.label}</span>
                      <span className={styles.mobileNavDescription}>{item.description}</span>
                    </span>
                  </Link>
                ),
              )}
            </div>
          ))}
          <div className={styles.mobileActions}>
            <Link
              className={cn(uiStyles.button, uiStyles.buttonFull, uiStyles.buttonOutline)}
              href="/sign-in"
              onClick={() => setOpen(false)}
            >
              <UserRound className={uiStyles.icon} aria-hidden="true" />
              Sign in
            </Link>
            <Link
              className={cn(uiStyles.button, uiStyles.buttonFull, uiStyles.buttonPrimary)}
              href="/register"
              onClick={() => setOpen(false)}
            >
              Get started
            </Link>
          </div>
          <div className={styles.mobileTheme}>
            <ThemeToggle />
          </div>
        </div>
      </Sheet>
    </header>
  );
}
