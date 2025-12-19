import type { ComponentData } from "@/app/aura/data/components/types";
import { CopyToClipboard } from "@/components/copy-to-clipboard";

export const copyToClipboard: ComponentData = {
  demo: <CopyToClipboard>hello@example.com</CopyToClipboard>,
  description: "A button that copies text content to clipboard",
  name: "copy-to-clipboard",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/copy-to-clipboard.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/copytoclipboard--docs",
  title: "Copy to Clipboard",
};
