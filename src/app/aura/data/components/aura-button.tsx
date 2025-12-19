import type { ComponentData } from "@/app/aura/data/components/types";
import { AuraButton } from "@/components/aura-button";

export const auraButton: ComponentData = {
  components: ["button"],
  demo: <AuraButton size={5}>Ask Aura</AuraButton>,
  description:
    "A styled call-to-action button for interactions with AI agents.",
  name: "aura-button",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/aura-button.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/aurabutton--docs",
  title: "Aura Button",
};
