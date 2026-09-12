import Link from "next/link";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import styles from "./account-experience.module.css";

export function AuthForm({ mode }: { mode: "sign-in" | "register" }) {
  const isRegister = mode === "register";

  return (
    <div className={styles.authPanel}>
      <form className={styles.authForm}>
        <Alert variant="warning" title="Frontend-only">
          Authentication is not connected yet. This screen prepares the UX and form structure.
        </Alert>
        {isRegister ? (
          <Input label="Full name" name="name" placeholder="Alex Morgan" autoComplete="name" />
        ) : null}
        <Input
          label="Email"
          name="email"
          placeholder="you@example.com"
          type="email"
          autoComplete="email"
          required
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter password"
          type="password"
          autoComplete={isRegister ? "new-password" : "current-password"}
          required
        />
        {isRegister ? (
          <Input
            label="Preferred training area"
            name="area"
            placeholder="Downtown"
            helperText="Used later to personalize gym discovery."
          />
        ) : null}
        <Checkbox
          label={isRegister ? "Send me training and membership updates" : "Keep me signed in"}
        />
        <Button disabled>{isRegister ? "Create account" : "Sign in"}</Button>
      </form>
      <div className={styles.authFooter}>
        <span>{isRegister ? "Already have an account?" : "New to GYMZO?"}</span>
        <Link className={styles.inlineLink} href={isRegister ? "/sign-in" : "/register"}>
          {isRegister ? "Sign in" : "Create account"}
        </Link>
      </div>
    </div>
  );
}
