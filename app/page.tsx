import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageContainer, Section } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GymCard } from "@/features/public/gym-card";
import { PUBLIC_GYMS } from "@/constants/public-experience";
import { cn } from "@/lib/utils";

import uiStyles from "@/components/ui/ui.module.css";
import styles from "@/features/public/public-experience.module.css";

const highlights = [
  {
    icon: MapPin,
    title: "Find the right fit nearby",
    copy: "Compare training style, location, access, amenities, and atmosphere before you visit.",
  },
  {
    icon: ShieldCheck,
    title: "Clear public signals",
    copy: "Public profiles focus on the details guests need: hours, equipment, reviews, and membership starting points.",
  },
  {
    icon: CheckCircle2,
    title: "Built for future roles",
    copy: "The same guest experience can grow into personal accounts, member portals, and owner tools later.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/images/gymzo-hero.png"
          alt="Premium gym floor with strength equipment and morning light"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <PageContainer className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Gym discovery, made sharper</p>
            <h1 className={styles.heroTitle}>Find a gym that fits how you train.</h1>
            <p className={styles.heroCopy}>
              GYMZO helps guests compare serious training spaces, membership signals, and
              neighborhood fit before walking through the door.
            </p>
            <div className={styles.heroActions}>
              <Link
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
                href="/explore"
              >
                Explore gyms
                <ArrowRight className={uiStyles.icon} aria-hidden="true" />
              </Link>
              <Link
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
                href="/for-gyms"
              >
                For gym owners
              </Link>
            </div>
            <div className={styles.heroStats}>
              <span className={styles.stat}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>sample public profiles</span>
              </span>
              <span className={styles.stat}>
                <span className={styles.statValue}>4.8</span>
                <span className={styles.statLabel}>average guest rating</span>
              </span>
              <span className={styles.stat}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>access signals supported</span>
              </span>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className={styles.sectionBand}>
        <PageContainer>
          <Section>
            <div className={styles.sectionHeaderRow}>
              <div>
                <Badge variant="primary">Public experience</Badge>
                <h2 className={styles.sectionTitle}>Discover with useful context.</h2>
                <p className={styles.sectionCopy}>
                  Phase 3 turns the shell into a real guest surface with public listing cards,
                  detail pages, and non-authenticated browsing.
                </p>
              </div>
              <Link className={cn(buttonVariants({ variant: "outline" }))} href="/explore">
                View all
              </Link>
            </div>
            <div className={styles.gymGrid}>
              {PUBLIC_GYMS.map((gym) => (
                <GymCard key={gym.id} gym={gym} />
              ))}
            </div>
          </Section>
        </PageContainer>
      </section>

      <PageContainer>
        <Section>
          <div className={styles.featureGrid}>
            {highlights.map(({ copy, icon: Icon, title }) => (
              <div className={styles.featureCard} key={title}>
                <Icon className={uiStyles.iconMd} aria-hidden="true" />
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureCopy}>{copy}</p>
              </div>
            ))}
          </div>
        </Section>
      </PageContainer>
    </>
  );
}
