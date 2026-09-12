import { Building2, ChartNoAxesCombined, UsersRound } from "lucide-react";
import Link from "next/link";

import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import uiStyles from "@/components/ui/ui.module.css";
import styles from "@/features/public/public-experience.module.css";

const ownerSignals = [
  {
    icon: Building2,
    title: "Public gym presence",
    copy: "A clean public profile structure for brand, location, amenities, hours, and membership signals.",
  },
  {
    icon: UsersRound,
    title: "Member-ready foundation",
    copy: "Designed to grow into member check-in, account, and role-specific areas without changing the visual system.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Owner tools later",
    copy: "No admin workflows yet, but the public surface sets up the future management architecture.",
  },
];

export default function ForGymsPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="For gyms"
        title="A public presence built for serious facilities"
        description="Phase 3 introduces a guest-facing operator overview only. Owner dashboards, staff tools, and payments remain future phases."
        actions={
          <Link className={cn(buttonVariants({ variant: "primary" }))} href="/explore">
            See public profiles
          </Link>
        }
      />
      <Section>
        <div className={styles.featureGrid}>
          {ownerSignals.map(({ copy, icon: Icon, title }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className={uiStyles.iconMd} aria-hidden="true" />
                <Badge variant="primary">Public</Badge>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{copy}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={styles.featureCopy}>
                  Admin functionality intentionally not implemented.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </PageContainer>
  );
}
