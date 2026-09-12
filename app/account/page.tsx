import Link from "next/link";

import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Alert } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { AccountSummary } from "@/features/account/account-summary";
import { MembershipSignals } from "@/features/account/membership-signals";
import { cn } from "@/lib/utils";

import styles from "@/features/account/account-experience.module.css";

export default function AccountPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Account"
        title="Personal account preview"
        description="A role-ready account surface prepared for future authentication, membership, and preference data."
        actions={
          <Link className={cn(buttonVariants({ variant: "outline" }))} href="/member">
            View member portal
          </Link>
        }
      />
      <Section>
        <Alert variant="warning" title="Preview mode">
          This account page does not read a session yet. It is the frontend foundation for future
          authenticated state.
        </Alert>
        <div className={styles.accountGrid}>
          <AccountSummary />
          <MembershipSignals />
        </div>
      </Section>
    </PageContainer>
  );
}
