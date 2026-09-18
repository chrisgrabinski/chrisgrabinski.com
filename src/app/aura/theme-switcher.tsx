"use client";

import { useTheme } from "@teispace/next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleSwitchTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} theme`}
      onClick={handleSwitchTheme}
      size={2}
      variant="ghost"
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};
