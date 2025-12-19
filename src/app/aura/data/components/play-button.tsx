import type { ComponentData } from "@/app/aura/data/components/types";
import { PlayButton } from "@/components/play-button";

export const playButton: ComponentData = {
  demo: <PlayButton />,
  description: "A play/pause button for media controls",
  name: "play-button",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/play-button.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/playbutton--docs",
  title: "Play Button",
};
