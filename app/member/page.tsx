import Link from "next/link";

import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { buttonVariants } from "@/components/ui/button";
import { CheckInPreview } from "@/features/member/check-in-preview";
import { MemberMetrics } from "@/features/member/member-metrics";
import { MemberProfileCard } from "@/features/member/member-profile-card";
import { MemberTimeline } from "@/features/member/member-timeline";
import { cn } from "@/lib/utils";

import styles from "@/features/member/member-experience.module.css";

export default function MemberPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Member portal"
        title="Gym member experience preview"
        description="Phase 5 prepares the member-facing portal for access, visits, training signals, and check-in flows without connecting live state."
        actions={
          <Link className={cn(buttonVariants({ variant: "primary" }))} href="/check-in">
            Open check-in
          </Link>
        }
      />
      <Section>
        <div className={styles.memberGrid}>
          <MemberProfileCard />
          <div className={styles.sectionStack}>
            <MemberMetrics />
            <CheckInPreview compact />
            <MemberTimeline />
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
