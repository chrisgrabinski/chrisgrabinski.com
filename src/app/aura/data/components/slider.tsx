import type { ComponentData } from "@/app/aura/data/components/types";
import { Slider } from "@/components/slider";

export const slider: ComponentData = {
  demo: (
    <div className="w-48">
      <Slider defaultValue={[50]} max={100} />
    </div>
  ),
  description: "A draggable slider for selecting numeric values",
  name: "slider",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/slider.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/slider--docs",
  title: "Slider",
};
