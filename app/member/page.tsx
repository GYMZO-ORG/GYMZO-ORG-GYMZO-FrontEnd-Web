import { CreditCard, Dumbbell, QrCode, Utensils } from "lucide-react";
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

const memberActions = [
  { href: "/check-in", icon: QrCode, label: "Check-in" },
  { href: "/memberships", icon: Dumbbell, label: "Workout" },
  { href: "/memberships", icon: Utensils, label: "Diet" },
  { href: "/memberships", icon: CreditCard, label: "Pay fees" },
] as const;

export default function MemberPage() {
  return (
    <PageContainer>
      <section className={styles.memberHero} aria-labelledby="member-home-title">
        <div>
          <div className={styles.contextPills} aria-label="Role context">
            <span>Personal</span>
            <span className={styles.contextPillActive}>Member</span>
            <span>Owner</span>
          </div>
          <p className={styles.memberHeroKicker}>Iron District</p>
          <h1 id="member-home-title" className={styles.memberHeroTitle}>
            Ready for today&apos;s session?
          </h1>
          <p className={styles.memberHeroCopy}>
            Your pass, training signals, and membership preview are gathered in one frontend-only
            member surface.
          </p>
        </div>
        <div className={styles.progressCard}>
          <span>Monthly visits</span>
          <strong>12 / 16</strong>
          <div className={styles.progressTrack}>
            <span />
          </div>
        </div>
      </section>
      <div className={styles.actionGrid} aria-label="Member actions">
        {memberActions.map(({ href, icon: Icon, label }) => (
          <Link className={styles.actionCard} href={href} key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
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
