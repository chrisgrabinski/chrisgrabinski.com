import type { ComponentData } from "@/app/aura/data/components/types";
import { Switch } from "@/components/switch";

export const switchComponent: ComponentData = {
  demo: <Switch size={2}>Enable notifications</Switch>,
  description:
    "A toggle control for enabling or disabling settings with smooth on/off transitions.",
  name: "switch",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/switch.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/switch--docs",
  title: "Switch",
};
