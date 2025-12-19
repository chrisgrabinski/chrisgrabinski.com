import type { ComponentData } from "@/app/aura/data/components/types";
import { Status } from "@/components/status";

export const status: ComponentData = {
  demo: <Status severity={1}>Positive</Status>,
  description:
    "Communicates state at a glance with a colored indicator dot and label across five severity levels.",
  name: "status",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/status.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/status--docs",
  title: "Status",
  variants: [
    {
      demo: <Status severity={0}>Neutral</Status>,
      title: "Severity 0",
    },
    {
      demo: <Status severity={2}>Warning</Status>,
      title: "Severity 2",
    },
    {
      demo: <Status severity={3}>Error</Status>,
      title: "Severity 3",
    },
    {
      demo: <Status severity={4}>Critical</Status>,
      title: "Severity 4",
    },
  ],
};
