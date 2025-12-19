import type { ComponentData } from "@/app/aura/data/components/types";
import { ProgressRing } from "@/components/progress-ring";

export const progressRing: ComponentData = {
  demo: <ProgressRing size={6} value={0.65} />,
  description:
    "A circular progress indicator that visualizes completion percentage.",
  name: "progress-ring",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/progress-ring.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/progressring--docs",
  title: "Progress Ring",
  variants: [
    {
      demo: <ProgressRing size={6} value={0.75} variant="gradient" />,
      title: "Gradient",
    },
  ],
};
