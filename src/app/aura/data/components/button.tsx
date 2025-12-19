import { TrashIcon } from "lucide-react";
import type { ComponentData } from "@/app/aura/data/components/types";
import { Button } from "@/components/button";

export const button: ComponentData = {
  demo: <Button size={4}>You can click me</Button>,
  description: "A button component",
  name: "button",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/button--docs",
  title: "Button",
  variants: [
    {
      demo: (
        <Button size={4} variant="primary">
          You must click me
        </Button>
      ),
      title: "Primary",
    },
    {
      demo: (
        <Button size={4} variant="destructive">
          <TrashIcon />
          Beware of clicking me
        </Button>
      ),
      title: "Destructive",
    },
    {
      demo: (
        <Button size={4} variant="ghost">
          You may click me
        </Button>
      ),
      title: "Ghost",
    },
    {
      demo: (
        <Button size={4} variant="outline">
          You may click me
        </Button>
      ),
      title: "Outline",
    },
  ],
};
