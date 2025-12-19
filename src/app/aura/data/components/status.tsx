import type { ComponentData } from "@/app/aura/data/components/types";
import { Status } from "@/components/status";

export const status: ComponentData = {
  demo: <Status level={1}>Positive</Status>,
  description: "A status indicator with colored dot and label",
  name: "status",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/status.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/status--docs",
  title: "Status",
  variants: [
    {
      demo: <Status level={0}>Neutral</Status>,
      title: "Level 0",
    },
    {
      demo: <Status level={2}>Warning</Status>,
      title: "Level 2",
    },
    {
      demo: <Status level={3}>Error</Status>,
      title: "Level 3",
    },
    {
      demo: <Status level={4}>Critical</Status>,
      title: "Level 4",
    },
  ],
};
