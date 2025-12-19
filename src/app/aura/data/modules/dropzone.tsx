import type { ModuleData } from "@/app/aura/data/modules/types";
import { Dropzone } from "@/components/dropzone";

export const dropzone: ModuleData = {
  components: ["card", "icon-box"],
  demo: <Dropzone />,
  name: "dropzone",
  title: "Dropzone",
};
