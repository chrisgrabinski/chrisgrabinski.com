import { Dropzone } from "@/components/dropzone";

const name = "dropzone";

const components = ["dropzone", "icon-box"];

const Component = () => {
  return (
    <Dropzone
      accept={{
        "audio/*": [".mp3", ".wav", ".ogg"],
        "video/*": [".mp4", ".mov", ".avi"],
      }}
    />
  );
};

export const DropzoneDemo = {
  Component,
  components,
  name,
};
