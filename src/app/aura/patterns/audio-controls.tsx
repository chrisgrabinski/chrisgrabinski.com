import { AudioControls } from "@/components/audio-controls";

const name = "audio-controls";

const components = ["play-button", "scrubber", "icon-button"];

const Component = () => {
  return <AudioControls src="/aura/audio-long.mp3" />;
};

export const AudioControlsDemo = {
  Component,
  components,
  name,
};
