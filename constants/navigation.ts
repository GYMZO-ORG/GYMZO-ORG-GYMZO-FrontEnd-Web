import {
  Building2,
  ClipboardCheck,
  Compass,
  Dumbbell,
  LayoutDashboard,
  LifeBuoy,
  type LucideIcon,
  UserRound,
} from "lucide-react";

export type NavigationItem = {
  description?: string;
  disabled?: boolean;
  href: string;
  icon: LucideIcon;
  label: string;
};

export const PUBLIC_NAV_ITEMS: ReadonlyArray<NavigationItem> = [
  {
    href: "/explore",
    label: "Explore",
    description: "Browse public gym listings.",
    icon: Compass,
  },
  {
    href: "/memberships",
    label: "Memberships",
    description: "Personal membership preview.",
    icon: Dumbbell,
  },
  {
    href: "/member",
    label: "Member",
    description: "Gym member portal preview.",
    icon: ClipboardCheck,
  },
  {
    href: "/for-gyms",
    label: "For Gyms",
    description: "Public overview for gym operators.",
    icon: Building2,
  },
] as const;

export const ACCOUNT_NAV_ITEMS: ReadonlyArray<NavigationItem> = [
  {
    href: "/account",
    label: "Account",
    description: "Personal account preview.",
    icon: UserRound,
  },
  {
    href: "/check-in",
    label: "Check-in",
    description: "Member check-in preview.",
    icon: LayoutDashboard,
  },
] as const;

export const SUPPORT_NAV_ITEMS: ReadonlyArray<NavigationItem> = [
  {
    href: "/support",
    label: "Support",
    description: "Support and help center shell, planned later.",
    icon: LifeBuoy,
    disabled: true,
  },
] as const;

export const INTERNAL_NAV_ITEMS: ReadonlyArray<NavigationItem> = [
  {
    href: "/design-system",
    label: "Design System",
    description: "Internal component validation page.",
    icon: LayoutDashboard,
  },
] as const;

export const SHELL_NAV_GROUPS: ReadonlyArray<{
  label: string;
  items: ReadonlyArray<NavigationItem>;
}> = [
  { label: "Public", items: PUBLIC_NAV_ITEMS },
  { label: "Account", items: ACCOUNT_NAV_ITEMS },
  { label: "Internal", items: INTERNAL_NAV_ITEMS },
];
