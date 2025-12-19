import type { ComponentData } from "@/app/aura/data/components/types";
import { Link } from "@/components/link";

export const link: ComponentData = {
  demo: <Link href="#">Visit homepage</Link>,
  description: "A styled link component with hover effects",
  name: "link",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/link.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/link--docs",
  title: "Link",
};
