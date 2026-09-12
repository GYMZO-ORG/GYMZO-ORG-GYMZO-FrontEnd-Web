import { Activity, CalendarCheck, DoorOpen, QrCode, Trophy } from "lucide-react";

export const MEMBER_PROFILE = {
  name: "Guest Member",
  homeGym: "Iron District",
  plan: "Strength Access",
  memberSince: "Preview",
  status: "Ready for check-in flow",
};

export const MEMBER_METRICS = [
  {
    label: "Visits this month",
    value: "12",
    detail: "Static preview metric",
    icon: Activity,
  },
  {
    label: "Current streak",
    value: "4",
    detail: "Weekly training consistency",
    icon: Trophy,
  },
  {
    label: "Next class",
    value: "Mobility",
    detail: "Tomorrow at 7:00 AM",
    icon: CalendarCheck,
  },
] as const;

export const CHECK_IN_STEPS = [
  {
    title: "Open member pass",
    description: "Future authenticated members will see a time-sensitive gym access pass.",
    icon: QrCode,
  },
  {
    title: "Confirm location",
    description: "The app can later validate gym location before allowing a check-in.",
    icon: DoorOpen,
  },
  {
    title: "Start session",
    description: "Successful check-ins will feed visit history and membership activity.",
    icon: Activity,
  },
] as const;

export const MEMBER_TIMELINE = [
  "Strength floor access confirmed",
  "Recovery area available after 6 PM",
  "Trainer intro recommended",
  "Membership billing not connected",
] as const;
