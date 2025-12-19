import type { ComponentData } from "@/app/aura/data/components/types";
import { InlineToast } from "@/components/inline-toast";

export const inlineToast: ComponentData = {
  demo: (
    <InlineToast message="Ta-da! ✨">
      Something happens when you click me
    </InlineToast>
  ),
  description:
    "A clickable element that reveals a brief toast notification on interaction.",
  name: "inline-toast",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/inline-toast.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/inlinetoast--docs",
  title: "Inline Toast",
};
