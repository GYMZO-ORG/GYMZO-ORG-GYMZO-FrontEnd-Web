import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { AuthForm } from "@/features/account/auth-form";

import styles from "@/features/account/account-experience.module.css";

export default function SignInPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Account access"
        title="Sign in to your GYMZO account"
        description="Phase 4 prepares the authenticated entry experience without connecting sessions or credentials."
      />
      <Section>
        <div className={styles.authShell}>
          <AuthForm mode="sign-in" />
          <aside className={styles.authAside}>
            <Badge variant="primary">Phase 4</Badge>
            <h2 className={styles.authAsideTitle}>A calm entry point for every future role.</h2>
            <p className={styles.authAsideCopy}>
              The sign-in structure is ready to support personal members, gym owners, trainers, and
              staff once backend authentication is introduced.
            </p>
          </aside>
        </div>
      </Section>
    </PageContainer>
  );
}
