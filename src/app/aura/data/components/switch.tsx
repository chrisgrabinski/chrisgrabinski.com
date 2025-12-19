import type { ComponentData } from "@/app/aura/data/components/types";
import { Switch } from "@/components/switch";

export const switchComponent: ComponentData = {
  demo: <Switch size={2}>Enable notifications</Switch>,
  description: "A toggle switch for boolean settings",
  name: "switch",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/switch.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/switch--docs",
  title: "Switch",
};
