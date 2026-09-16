import type { ComponentData } from "@/app/aura/data/components/types";
import { Link as TextLink } from "@/components/link";

export const Link: ComponentData = {
  demo: <TextLink href="#">Visit homepage</TextLink>,
  description:
    "A hyperlink with refined styling and smooth hover transitions for better visual feedback.",
  name: "link",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/link.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/link--docs",
  title: "Link",
};
