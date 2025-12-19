import type { ComponentData } from "@/app/aura/data/components/types";
import { AudioButton } from "@/components/audio-button";

export const audioButton: ComponentData = {
  demo: <AudioButton size={5} src="/aura/audio-medium.mp3" />,
  description:
    "An interactive button that plays short audio content with animated waveform visualization.",
  name: "audio-button",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/audio-button.tsx",
  storybookUrl:
    "https://storybook.chrisgrabinski.com/?path=/docs/audiobutton--docs",
  title: "Audio Button",
};
