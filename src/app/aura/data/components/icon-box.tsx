import { BellIcon } from "lucide-react";
import type { ComponentData } from "@/app/aura/data/components/types";
import { IconBox } from "@/components/icon-box";

export const iconBox: ComponentData = {
  demo: (
    <IconBox size={5}>
      <BellIcon />
    </IconBox>
  ),
  description:
    "A decorative container that wraps icons with a colored background and border for visual emphasis.",
  name: "icon-box",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/icon-box.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/iconbox--docs",
  title: "Icon Box",
};
