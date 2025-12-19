import type { ModuleData } from "@/app/aura/data/modules/types";
import { Dropzone } from "@/components/dropzone";

export const dropzone: ModuleData = {
  components: ["card", "icon-box"],
  demo: <Dropzone />,
  description:
    "A drag-and-drop file upload area that accepts files through clicking or dragging them into the zone.",
  name: "dropzone",
  title: "Dropzone",
};
