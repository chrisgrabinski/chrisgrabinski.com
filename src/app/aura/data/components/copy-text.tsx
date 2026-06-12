import type { ComponentData } from "@/app/aura/data/components/types";
import { CopyText } from "@/components/copy-text";

export const copyText: ComponentData = {
  components: ["inline-toast"],
  demo: <CopyText>hello@example.com</CopyText>,
  description:
    "A clickable element that instantly copies its text content to the clipboard with visual feedback.",
  name: "copy-text",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/copy-text.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/CopyText--docs",
  title: "Copy Text",
};
