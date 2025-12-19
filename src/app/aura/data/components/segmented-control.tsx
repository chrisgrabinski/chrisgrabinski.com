import type { ComponentData } from "@/app/aura/data/components/types";
import {
  SegmentedControlItem,
  SegmentedControlRoot,
} from "@/components/segmented-control";

export const segmentedControl: ComponentData = {
  demo: (
    <SegmentedControlRoot defaultValue="monthly">
      <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      <SegmentedControlItem value="yearly">Yearly</SegmentedControlItem>
    </SegmentedControlRoot>
  ),
  description: "A toggle group for selecting between options",
  name: "segmented-control",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/segmented-control.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/segmentedcontrol--docs",
  title: "Segmented Control",
};
