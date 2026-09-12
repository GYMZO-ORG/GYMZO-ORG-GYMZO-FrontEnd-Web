import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { AuthForm } from "@/features/account/auth-form";

import styles from "@/features/account/account-experience.module.css";

export default function RegisterPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Create account"
        title="Start a personal GYMZO account"
        description="A frontend-only registration path for future member personalization and gym discovery."
      />
      <Section>
        <div className={styles.authShell}>
          <AuthForm mode="register" />
          <aside className={styles.authAside}>
            <Badge variant="primary">Frontend only</Badge>
            <h2 className={styles.authAsideTitle}>Collect only what the UI needs for now.</h2>
            <p className={styles.authAsideCopy}>
              No account is created yet. This page establishes structure, accessibility, and visual
              conventions before API and validation layers arrive.
            </p>
          </aside>
        </div>
      </Section>
    </PageContainer>
  );
}
