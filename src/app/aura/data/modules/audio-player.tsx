import type { ModuleData } from "@/app/aura/data/modules/types";
import { AudioControls } from "@/components/audio-controls";

export const audioPlayer: ModuleData = {
  components: ["play-button", "scrubber", "icon-button"],
  demo: <AudioControls src="/aura/audio-long.mp3" />,
  name: "audio-player",
  title: "Audio player",
};
