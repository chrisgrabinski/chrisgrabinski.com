import type { ComponentData } from "@/app/aura/(docs)/data/components/types";
import { MiddleTruncate } from "@/components/middle-truncate";

export const middleTruncate: ComponentData = {
  demo: (
    <span className="inline-block max-w-48">
      <MiddleTruncate>my-very-long-filename-that-might-truncate.tsx</MiddleTruncate>
    </span>
  ),
  description: "Truncates overflowing text in the middle so the start and the end stay visible.",
  name: "middle-truncate",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/middle-truncate.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/middletruncate--docs",
  title: "Middle Truncate",
};
