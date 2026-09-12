import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { ThemeToggle } from "@/components/ui";

import { DesignSystemShowcase } from "./showcase";

export default function DesignSystemPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Internal"
        title="Design System"
        description="A development-only validation page for the GYMZO frontend foundation."
        actions={<ThemeToggle />}
      />
      <Section>
        <DesignSystemShowcase />
      </Section>
    </PageContainer>
  );
}
