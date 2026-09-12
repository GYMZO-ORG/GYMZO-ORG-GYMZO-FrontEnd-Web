"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { GymCard } from "@/features/public/gym-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { PUBLIC_FILTERS, PUBLIC_GYMS, type GymAmenity } from "@/constants/public-experience";
import { cn } from "@/lib/utils";

import styles from "./public-experience.module.css";
import uiStyles from "../../components/ui/ui.module.css";

export function GymSearch() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const gyms = useMemo(() => {
    return PUBLIC_GYMS.filter((gym) => {
      const matchesQuery = [gym.name, gym.area, gym.specialty]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesFilter = activeFilter
        ? gym.amenities.includes(activeFilter as GymAmenity)
        : true;

      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  return (
    <>
      <div className={styles.searchPanel}>
        <div className={styles.searchGrid}>
          <Input
            label="Search"
            name="search"
            placeholder="Gym, area, or training style"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Select label="Area" name="area" defaultValue="anywhere">
            <option value="anywhere">Any area</option>
            <option value="downtown">Downtown</option>
            <option value="west-loop">West Loop</option>
            <option value="riverside">Riverside</option>
          </Select>
          <Select label="Sort" name="sort" defaultValue="recommended">
            <option value="recommended">Recommended</option>
            <option value="rating">Highest rated</option>
            <option value="distance">Nearest first</option>
          </Select>
        </div>
        <div className={styles.filterRow} aria-label="Popular filters">
          {PUBLIC_FILTERS.map((filter) => (
            <button
              key={filter}
              className={cn(styles.filterPill, activeFilter === filter && styles.filterPillActive)}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter((current) => (current === filter ? null : filter))}
            >
              {filter}
            </button>
          ))}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setQuery("");
              setActiveFilter(null);
            }}
          >
            <Search className={uiStyles.icon} aria-hidden="true" />
            Reset
          </Button>
        </div>
      </div>

      <div className={styles.gymGrid}>
        {gyms.map((gym) => (
          <GymCard key={gym.id} gym={gym} />
        ))}
      </div>
    </>
  );
}
