export type GymAmenity =
  | "24/7 access"
  | "Strength"
  | "Cardio"
  | "Classes"
  | "Personal training"
  | "Recovery"
  | "Women friendly"
  | "Parking";

export type PublicGym = {
  amenities: GymAmenity[];
  area: string;
  description: string;
  distance: string;
  hours: string;
  id: string;
  imageTone: "charcoal" | "lime" | "warm";
  name: string;
  price: string;
  rating: number;
  reviews: number;
  slug: string;
  specialty: string;
};

export const PUBLIC_GYMS: PublicGym[] = [
  {
    id: "iron-district",
    slug: "iron-district",
    name: "Iron District",
    area: "Downtown",
    distance: "1.2 mi",
    rating: 4.8,
    reviews: 312,
    price: "From $59/mo",
    specialty: "Strength and conditioning",
    hours: "Open until 11 PM",
    imageTone: "charcoal",
    amenities: ["Strength", "Cardio", "Classes", "Personal training", "Parking"],
    description:
      "A focused strength floor with serious racks, clean locker rooms, and coaching available without pressure.",
  },
  {
    id: "pulse-athletic",
    slug: "pulse-athletic",
    name: "Pulse Athletic",
    area: "West Loop",
    distance: "2.4 mi",
    rating: 4.7,
    reviews: 198,
    price: "From $79/mo",
    specialty: "Hybrid training",
    hours: "Open 24/7",
    imageTone: "lime",
    amenities: ["24/7 access", "Cardio", "Classes", "Recovery", "Women friendly"],
    description:
      "High-energy training zones, measured class programming, and recovery options for consistent weekly routines.",
  },
  {
    id: "forge-house",
    slug: "forge-house",
    name: "Forge House",
    area: "Riverside",
    distance: "3.1 mi",
    rating: 4.9,
    reviews: 421,
    price: "From $99/mo",
    specialty: "Premium performance",
    hours: "Open until midnight",
    imageTone: "warm",
    amenities: ["Strength", "Personal training", "Recovery", "Parking", "Women friendly"],
    description:
      "Premium equipment, trainer-led performance plans, and a quieter atmosphere built for repeat training.",
  },
];

export const PUBLIC_FILTERS = ["Strength", "24/7 access", "Classes", "Recovery"] as const;
