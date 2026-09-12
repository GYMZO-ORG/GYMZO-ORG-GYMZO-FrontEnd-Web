"use client";

import { Bell, Dumbbell, Info, Settings } from "lucide-react";
import { useState } from "react";

import { SectionHeader } from "@/components/layout/section-header";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogActions,
  Divider,
  EmptyState,
  Input,
  Radio,
  Select,
  Sheet,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  useToast,
} from "@/components/ui";

import styles from "./design-system.module.css";
import uiStyles from "../../components/ui/ui.module.css";

const colors = [
  ["Background", "var(--background)"],
  ["Surface", "var(--surface)"],
  ["Surface secondary", "var(--surface-secondary)"],
  ["Surface tertiary", "var(--surface-tertiary)"],
  ["Text primary", "var(--text-primary)"],
  ["Text secondary", "var(--text-secondary)"],
  ["Border", "var(--border)"],
  ["Primary", "var(--primary)"],
  ["Success", "var(--success)"],
  ["Warning", "var(--warning)"],
  ["Danger", "var(--danger)"],
];

export function DesignSystemShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const { showToast } = useToast();

  return (
    <div className={styles.showcase}>
      <section>
        <SectionHeader
          title="Colors"
          description="Semantic variables mapped to GYMZO light and dark themes."
        />
        <div className={styles.swatchGrid}>
          {colors.map(([name, value]) => (
            <Card key={name}>
              <CardContent className={styles.swatchContent}>
                <div className={styles.swatch} style={{ background: value }} />
                <p className={styles.swatchName}>{name}</p>
                <p className={styles.swatchValue}>{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          title="Typography"
          description="Geist via Next font optimization, with a restrained product UI scale."
        />
        <Card>
          <CardContent className={styles.typographyContent}>
            <p className={styles.typeDisplay}>Display</p>
            <h1 className={styles.typeH1}>Heading one</h1>
            <h2 className={styles.typeH2}>Heading two</h2>
            <h3 className={styles.typeH3}>Heading three</h3>
            <p className={styles.typeBodyLarge}>Body large for important page introductions.</p>
            <p className={styles.typeBody}>Body text for core application content.</p>
            <p className={styles.typeBodySmall}>Body small and secondary interface details.</p>
            <p className={styles.typeLabel}>Label and caption</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <SectionHeader
          title="Actions"
          description="Button variants, sizes, icons, loading, and disabled states."
        />
        <Card>
          <CardContent className={styles.actionsContent}>
            <Button>
              <Dumbbell className={uiStyles.icon} aria-hidden="true" />
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <SectionHeader
          title="Forms"
          description="Accessible form controls prepared for future validation and form libraries."
        />
        <div className={styles.twoColumnGrid}>
          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>
                Labels, helper text, required state, errors, and disabled controls.
              </CardDescription>
            </CardHeader>
            <CardContent className={styles.formContent}>
              <Input
                label="Gym name"
                name="gym-name"
                placeholder="Iron District"
                helperText="Shown exactly as members see it."
                required
              />
              <Input
                label="Email"
                name="email"
                placeholder="owner@gymzo.app"
                error="Enter a valid business email."
              />
              <Textarea label="Notes" name="notes" placeholder="Add operational details." />
              <Select label="Role" name="role" defaultValue="owner">
                <option value="owner">Owner</option>
                <option value="trainer">Trainer</option>
                <option value="member">Member</option>
              </Select>
              <Input label="Disabled" name="disabled" placeholder="Not editable" disabled />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Choices</CardTitle>
              <CardDescription>
                Native inputs with visible focus and touch-friendly targets.
              </CardDescription>
            </CardHeader>
            <CardContent className={styles.formContent}>
              <Checkbox label="Require check-in before workout access" defaultChecked />
              <Checkbox label="Disabled checkbox" disabled />
              <Radio name="plan" label="Monthly membership" defaultChecked />
              <Radio name="plan" label="Annual membership" />
              <div className={styles.choicePanel}>
                <span className={styles.choiceLabel}>Active membership</span>
                <Switch checked={switchOn} onClick={() => setSwitchOn((value) => !value)} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <SectionHeader
          title="Status"
          description="Reusable feedback primitives for loading, empty, success, warning, and error states."
        />
        <div className={styles.twoColumnGrid}>
          <Card>
            <CardHeader>
              <CardTitle>Badges and alerts</CardTitle>
            </CardHeader>
            <CardContent className={styles.statusContent}>
              <div className={styles.badgeRow}>
                <Badge>Neutral</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
              <Alert title="Saved" variant="success">
                The success pattern is ready for future flows.
              </Alert>
              <Alert title="Review needed" variant="warning">
                Warnings stay visible without overwhelming the interface.
              </Alert>
              <Alert title="Action failed" variant="danger">
                Errors use the shared danger token.
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading and empty</CardTitle>
            </CardHeader>
            <CardContent className={styles.statusContent}>
              <div className={styles.inlineRow}>
                <Spinner />
                <span className={styles.loadingText}>Loading state</span>
              </div>
              <Skeleton className={styles.skeletonShort} />
              <Skeleton className={styles.skeletonBlock} />
              <EmptyState
                title="No records yet"
                description="A reusable empty-state pattern is available for future feature pages."
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <SectionHeader
          title="Composition"
          description="Cards, tabs, overlays, tooltip, avatar, divider, and toast abstraction."
        />
        <Card>
          <CardContent className={styles.compositionContent}>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                Tabs use controlled state and ARIA tab roles.
              </TabsContent>
              <TabsContent value="activity">
                Future screens can compose tab panels without custom state each time.
              </TabsContent>
            </Tabs>
            <Divider />
            <div className={styles.inlineRow}>
              <Avatar initials="GZ" />
              <Tooltip content="Settings">
                <Button aria-label="Settings" variant="outline">
                  <Settings className={uiStyles.icon} aria-hidden="true" />
                </Button>
              </Tooltip>
              <Button variant="outline" onClick={() => setDialogOpen(true)}>
                <Info className={uiStyles.icon} aria-hidden="true" />
                Dialog
              </Button>
              <Button variant="outline" onClick={() => setSheetOpen(true)}>
                Sheet
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  showToast({
                    title: "Notification",
                    message: "Toast abstraction is wired.",
                    variant: "primary",
                  })
                }
              >
                <Bell className={uiStyles.icon} aria-hidden="true" />
                Toast
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen} title="Dialog example">
        <p className={styles.mutedText}>
          Modal content uses semantic surfaces and a shared close action.
        </p>
        <DialogActions>
          <Button variant="outline" onClick={() => setDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
        </DialogActions>
      </Dialog>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen} title="Sheet example">
        <p className={styles.mutedText}>
          This pattern will support mobile navigation and authentication flows later.
        </p>
      </Sheet>
    </div>
  );
}
