import type { ModuleData } from "@/app/aura/data/modules/types";
import { AudioControls } from "@/components/audio-controls";

export const audioPlayer: ModuleData = {
  components: ["play-button", "scrubber", "icon-button"],
  demo: <AudioControls src="/aura/audio-long.mp3" />,
  description:
    "A complete audio playback interface with play/pause controls, scrubbing, and volume adjustment.",
  name: "audio-player",
  title: "Audio player",
};
