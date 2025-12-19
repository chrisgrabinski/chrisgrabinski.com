import type { ComponentData } from "@/app/aura/data/components/types";
import { Filename } from "@/components/filename";

export const filename: ComponentData = {
  demo: (
    <span className="inline-block max-w-48">
      <Filename>my-very-long-filename-that-might-truncate.tsx</Filename>
    </span>
  ),
  description:
    "A component that displays filenames with smart middle truncation",
  name: "filename",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/filename.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/filename--docs",
  title: "Filename",
};
