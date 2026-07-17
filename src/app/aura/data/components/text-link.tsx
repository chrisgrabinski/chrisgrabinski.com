import type { ComponentData } from "@/app/aura/data/components/types";
import { TextLink } from "@/components/text-link";

export const textLink: ComponentData = {
  demo: <TextLink href="#">Visit homepage</TextLink>,
  description:
    "A hyperlink with refined styling and smooth hover transitions for better visual feedback.",
  name: "text-link",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/text-link.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/text-link--docs",
  title: "Text Link",
};
