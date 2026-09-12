"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { useMounted } from "@/hooks/use-mounted";

import styles from "./ui.module.css";

const options = [
  { icon: Sun, label: "Light", value: "light" },
  { icon: Moon, label: "Dark", value: "dark" },
  { icon: Monitor, label: "System", value: "system" },
] as const;

export function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();

  if (!mounted) {
    return <div className={styles.themeSkeleton} aria-hidden="true" />;
  }

  return (
    <div className={styles.themeToggle}>
      {options.map(({ icon: Icon, label, value }) => (
        <Tooltip key={value} content={`${label} theme`}>
          <Button
            aria-label={`${label} theme`}
            aria-pressed={theme === value}
            className={theme === value ? styles.themeActive : undefined}
            size="sm"
            variant="ghost"
            onClick={() => setTheme(value)}
          >
            <Icon className={styles.icon} aria-hidden="true" />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
