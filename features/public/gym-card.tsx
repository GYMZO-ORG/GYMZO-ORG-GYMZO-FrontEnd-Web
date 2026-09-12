import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PublicGym } from "@/constants/public-experience";
import { cn } from "@/lib/utils";

import styles from "./public-experience.module.css";

const visualClass = {
  charcoal: styles.visualCharcoal,
  lime: styles.visualLime,
  warm: styles.visualWarm,
} satisfies Record<PublicGym["imageTone"], string>;

export function GymCard({ gym }: { gym: PublicGym }) {
  return (
    <Card className={styles.gymCard}>
      <div className={cn(styles.gymVisual, visualClass[gym.imageTone])} aria-hidden="true" />
      <div className={styles.gymCardBody}>
        <div className={styles.gymMeta}>
          <span>{gym.area}</span>
          <span>{gym.distance}</span>
          <span>{gym.hours}</span>
        </div>
        <div className={styles.gymNameRow}>
          <div>
            <h3 className={styles.gymName}>{gym.name}</h3>
            <p className={styles.gymSpecialty}>{gym.specialty}</p>
          </div>
          <span className={styles.rating}>
            {gym.rating.toFixed(1)} ({gym.reviews})
          </span>
        </div>
        <p className={styles.gymDescription}>{gym.description}</p>
        <div className={styles.amenities}>
          {gym.amenities.slice(0, 4).map((amenity) => (
            <Badge key={amenity}>{amenity}</Badge>
          ))}
        </div>
        <div className={styles.gymFooter}>
          <span className={styles.price}>{gym.price}</span>
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            href={`/gyms/${gym.slug}`}
          >
            View gym
          </Link>
        </div>
      </div>
    </Card>
  );
}
