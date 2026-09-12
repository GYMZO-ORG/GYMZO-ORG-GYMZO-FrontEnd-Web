import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { CheckInPreview } from "@/features/member/check-in-preview";

export default function CheckInPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Check-in"
        title="Member check-in foundation"
        description="A frontend-only access pass and check-in workflow preview for future authenticated gym visits."
      />
      <Section>
        <CheckInPreview />
      </Section>
    </PageContainer>
  );
}
