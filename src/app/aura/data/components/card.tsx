import Image from "next/image";
import type { ComponentData } from "@/app/aura/data/components/types";
import { Card } from "@/components/card";
import pattern from "../../../(homepage)/images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg";

export const card: ComponentData = {
  demo: <Card className="p-24" />,
  description:
    "A versatile container with elevated styling, perfect for grouping related content.",
  name: "card",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/card.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/card--docs",
  title: "Card",
  variants: [
    {
      demo: (
        <div className="relative overflow-clip rounded-xl p-12">
          <Image
            alt=""
            className="absolute inset-0 object-cover contrast-200"
            src={pattern}
          />
          <Card className="block aspect-square p-24" variant="glass"></Card>
        </div>
      ),
      title: "Glass",
    },
  ],
};
