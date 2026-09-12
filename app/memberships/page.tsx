import Link from "next/link";

import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MembershipSignals } from "@/features/account/membership-signals";
import { cn } from "@/lib/utils";

import styles from "@/features/account/account-experience.module.css";

export default function MembershipsPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Memberships"
        title="Membership area foundation"
        description="A personal membership preview for future active plans, check-ins, billing, and gym access."
      />
      <Section>
        <div className={styles.membershipHeader}>
          <Badge variant="warning">No live membership data</Badge>
          <Link className={cn(buttonVariants({ variant: "primary" }))} href="/member">
            Open member portal
          </Link>
        </div>
        <MembershipSignals />
      </Section>
    </PageContainer>
  );
}
