import { AudioButton } from "@/components/audio-button";

const name = "audio-button";

const components = ["audio-button", "icon-button", "progress-ring"];

const Component = () => {
  return <AudioButton size={5} src="/aura/audio-medium.mp3" />;
};

export const AudioButtonDemo = {
  Component,
  components,
  name,
};
