import Link from "next/link";

import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import styles from "./app.module.css";

export default function Home() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Phase 1"
        title="Frontend Foundation"
        description="A production-minded base for GYMZO tokens, themes, reusable UI primitives, layout patterns, and internal validation."
        actions={
          <Link
            className={cn(buttonVariants({ variant: "primary", size: "md" }))}
            href="/design-system"
          >
            View components
          </Link>
        }
      />
      <Section>
        <div className={styles.statusGrid}>
          {["Semantic tokens", "Theme persistence", "Reusable primitives"].map((item) => (
            <Card key={item}>
              <CardHeader>
                <Badge variant="primary">Ready</Badge>
                <CardTitle>{item}</CardTitle>
                <CardDescription>
                  Foundation-level implementation only, ready for the next application shell phase.
                </CardDescription>
              </CardHeader>
              <CardContent className={styles.statusCardContent}>
                <Alert variant="success">Validated against the GYMZO visual direction.</Alert>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </PageContainer>
  );
}
