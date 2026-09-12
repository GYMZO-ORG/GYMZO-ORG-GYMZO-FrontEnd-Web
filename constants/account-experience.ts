import { CalendarDays, CreditCard, Dumbbell, ShieldCheck } from "lucide-react";

export const ACCOUNT_SUMMARY = {
  name: "Guest Preview",
  status: "Not signed in",
  preferredArea: "Downtown",
  trainingGoal: "Strength consistency",
};

export const MEMBERSHIP_SIGNALS = [
  {
    title: "Active plan",
    value: "No active membership",
    description: "Real membership state will connect after authentication and payments.",
    icon: CreditCard,
  },
  {
    title: "Next visit",
    value: "Not scheduled",
    description: "Future member flows can connect bookings, check-ins, and reminders.",
    icon: CalendarDays,
  },
  {
    title: "Training preference",
    value: "Strength",
    description: "Personal preferences are represented without storing user data yet.",
    icon: Dumbbell,
  },
  {
    title: "Account security",
    value: "Auth pending",
    description: "Credentials and sessions are intentionally not implemented in Phase 4.",
    icon: ShieldCheck,
  },
] as const;
