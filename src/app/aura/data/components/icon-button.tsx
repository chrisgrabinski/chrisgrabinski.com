import { CheckIcon, GhostIcon, StarIcon, TrashIcon } from "lucide-react";
import type { ComponentData } from "@/app/aura/data/components/types";
import { IconButton } from "@/components/icon-button";

export const iconButton: ComponentData = {
  demo: (
    <IconButton aria-label="Add to favorites" size={5}>
      <StarIcon />
    </IconButton>
  ),
  description:
    "A compact button designed specifically for icon-only actions, available in multiple variants for different contexts.",
  name: "icon-button",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-button.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/iconbutton--docs",
  title: "Icon Button",
  variants: [
    {
      demo: (
        <IconButton size={5} variant="primary">
          <CheckIcon />
        </IconButton>
      ),
      title: "Primary",
    },
    {
      demo: (
        <IconButton aria-label="Delete" size={5} variant="destructive">
          <TrashIcon />
        </IconButton>
      ),
      title: "Destructive",
    },
    {
      demo: (
        <IconButton aria-label="Go incognito" size={5} variant="ghost">
          <GhostIcon />
        </IconButton>
      ),
      title: "Ghost",
    },
    {
      demo: (
        <IconButton aria-label="Add to favorites" size={5} variant="outline">
          <StarIcon />
        </IconButton>
      ),
      title: "Outline",
    },
  ],
};
