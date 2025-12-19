import type { ComponentData } from "@/app/aura/data/components/types";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const breadcrumbs: ComponentData = {
  demo: (
    <Breadcrumbs
      items={[
        { name: "Home", url: "#" },
        { name: "Components", url: "#" },
        { name: "Breadcrumbs", url: "#" },
      ]}
    />
  ),
  description:
    "A navigation trail that shows the user's current location within the site hierarchy.",
  name: "breadcrumbs",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/breadcrumbs.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/breadcrumbs--docs",
  title: "Breadcrumbs",
};
