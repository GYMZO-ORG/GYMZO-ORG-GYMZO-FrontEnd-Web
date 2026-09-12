import { ArrowLeft, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer, Section } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PUBLIC_GYMS } from "@/constants/public-experience";
import { cn } from "@/lib/utils";

import uiStyles from "@/components/ui/ui.module.css";
import styles from "@/features/public/public-experience.module.css";

export function generateStaticParams() {
  return PUBLIC_GYMS.map((gym) => ({ slug: gym.slug }));
}

export default async function GymDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gym = PUBLIC_GYMS.find((item) => item.slug === slug);

  if (!gym) {
    notFound();
  }

  return (
    <>
      <section className={styles.detailHero}>
        <PageContainer>
          <Section>
            <div className={styles.detailGrid}>
              <div>
                <Link
                  className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                  href="/explore"
                >
                  <ArrowLeft className={uiStyles.icon} aria-hidden="true" />
                  Back to explore
                </Link>
                <p className={styles.detailEyebrow}>{gym.area}</p>
                <h1 className={styles.detailTitle}>{gym.name}</h1>
                <p className={styles.detailCopy}>{gym.description}</p>
                <div className={styles.detailActions}>
                  <Link className={cn(buttonVariants({ variant: "primary" }))} href="/explore">
                    Compare gyms
                  </Link>
                  <Link className={cn(buttonVariants({ variant: "outline" }))} href="/">
                    Return home
                  </Link>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Public profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className={styles.infoList}>
                    <li className={styles.infoItem}>
                      <span className={styles.infoLabel}>
                        <Star className={uiStyles.icon} aria-hidden="true" />
                        Rating
                      </span>
                      <span className={styles.infoValue}>
                        {gym.rating.toFixed(1)} from {gym.reviews} reviews
                      </span>
                    </li>
                    <li className={styles.infoItem}>
                      <span className={styles.infoLabel}>
                        <MapPin className={uiStyles.icon} aria-hidden="true" />
                        Distance
                      </span>
                      <span className={styles.infoValue}>{gym.distance}</span>
                    </li>
                    <li className={styles.infoItem}>
                      <span>Hours</span>
                      <span className={styles.infoValue}>{gym.hours}</span>
                    </li>
                    <li className={styles.infoItem}>
                      <span>Starting price</span>
                      <span className={styles.infoValue}>{gym.price}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Section>
        </PageContainer>
      </section>

      <PageContainer>
        <Section>
          <div className={styles.featureGrid}>
            {gym.amenities.map((amenity) => (
              <div className={styles.featureCard} key={amenity}>
                <Badge variant="primary">{amenity}</Badge>
                <h2 className={styles.featureTitle}>{amenity}</h2>
                <p className={styles.featureCopy}>
                  Public amenity signal prepared for richer profile content in later phases.
                </p>
              </div>
            ))}
          </div>
        </Section>
      </PageContainer>
    </>
  );
}
