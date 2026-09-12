import { PageContainer, Section } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { GymSearch } from "@/features/public/gym-search";

export default function ExplorePage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Explore"
        title="Browse public gym profiles"
        description="Search static Phase 3 sample listings by gym, area, training style, and popular public amenities."
      />
      <Section>
        <GymSearch />
      </Section>
    </PageContainer>
  );
}
