"use client";

import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react";
import { type HTMLMotionProps, motion } from "motion/react";
import { createContext, useContext, useState } from "react";
import { BlurContainer } from "@/app/aura/blur-container";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

type AppShellContextProps = {
  isPanelOpen: boolean;
  setIsPanelOpen: (isPanelOpen: boolean) => void;
};

const AppShellContext = createContext<AppShellContextProps | null>(null);

interface AppShellRootProps extends React.ComponentProps<"div"> {}

const useAppShell = () => {
  const context = useContext(AppShellContext);
  if (!context) {
    throw new Error("useAppShell must be used within an AppShellRoot");
  }
  return context;
};

const AppShellProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(true);

  return (
    <AppShellContext.Provider value={{ isPanelOpen: isPanelOpen, setIsPanelOpen }}>
      {children}
    </AppShellContext.Provider>
  );
};

const AppShellRoot = ({ children, className, ...props }: AppShellRootProps): React.ReactElement => {
  return (
    <AppShellProvider>
      <div className={cn("flex h-dvh gap-2 p-2", className)} {...props}>
        {children}
      </div>
    </AppShellProvider>
  );
};

interface AppShellPanelProps extends HTMLMotionProps<"div"> {
  direction?: "left" | "right";
}

const AppShellPanel = ({
  children,
  className,
  direction = "left",
  ...props
}: AppShellPanelProps): React.ReactElement => {
  const { isPanelOpen } = useAppShell();

  return (
    <motion.div
      className={cn(
        "fixed inset-y-0 left-0 z-90 flex p-2 md:static",
        direction === "left" && "justify-end",
        className,
      )}
      initial={{ width: "auto" }}
      animate={{
        marginLeft: direction === "left" ? (isPanelOpen ? 0 : -8) : undefined,
        marginRight: direction === "right" ? (isPanelOpen ? 0 : -8) : undefined,
        width: isPanelOpen ? "auto" : 0,
      }}
      transition={{ duration: 0.25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AppShellPanelToggleProps extends React.ComponentProps<"button"> {}

const AppShellPanelToggle = ({
  className,
  ...props
}: AppShellPanelToggleProps): React.ReactElement => {
  const { isPanelOpen, setIsPanelOpen } = useAppShell();

  return (
    <ButtonPrimitive
      className={cn("", className)}
      {...props}
      onClick={() => setIsPanelOpen(!isPanelOpen)}
    >
      {isPanelOpen ? <PanelLeftCloseIcon /> : <PanelLeftOpenIcon />}
    </ButtonPrimitive>
  );
};

interface AppShellMainProps extends React.ComponentProps<"main"> {}

const AppShellMain = ({ children, className, ...props }: AppShellMainProps): React.ReactElement => {
  return (
    <main
      className={cn(
        "grow scrollbar-thin scrollbar-thumb-accent/10 scrollbar-track-transparent scrollbar-gutter-stable overflow-clip overflow-y-auto rounded-lg p-2",
        className,
      )}
      {...props}
    >
      {children}
      <BlurContainer className="sticky bottom-0 z-10 h-16" direction="top" />
    </main>
  );
};

export { AppShellMain, AppShellPanel, AppShellPanelToggle, AppShellRoot };
