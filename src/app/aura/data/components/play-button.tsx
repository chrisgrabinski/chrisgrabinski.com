import type { ComponentData } from "@/app/aura/data/components/types";
import { PlayButton } from "@/components/play-button";

export const playButton: ComponentData = {
  demo: <PlayButton />,
  description:
    "A toggle button that smoothly animates between play and pause states for media playback.",
  name: "play-button",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/play-button.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/playbutton--docs",
  title: "Play Button",
};
