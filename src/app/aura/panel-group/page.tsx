import type React from "react";
import { cn } from "@/lib/styles";

const AppShellRoot = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className={cn("flex gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const AppShellMain = ({
  children,
  className,
  ...props
}: React.ComponentProps<"main">) => {
  return (
    <main className={cn("flex-1", className)} {...props}>
      {children}
    </main>
  );
};

interface AppShellPanelProps extends React.ComponentProps<"div"> {
  name: string;
}

const AppShellPanel = ({
  children,
  className,
  name,
  ...props
}: AppShellPanelProps) => {
  return (
    <div className={cn(null, className)} {...props}>
      {children}
    </div>
  );
};

const AppShellPanelToggle = ({
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return <div {...props}>{children}</div>;
};

export default function PanelGroupPage() {
  return (
    <AppShellRoot className="grid">
      <AppShellPanel name="navigation">test</AppShellPanel>
      <AppShellMain>Test</AppShellMain>
      <AppShellPanel name="agent">test</AppShellPanel>
    </AppShellRoot>
  );
}
