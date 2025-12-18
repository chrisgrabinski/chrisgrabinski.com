import { CopyToClipboard } from "@/components/copy-to-clipboard";

const name = "copy-to-clipboard";

const components = ["copy-to-clipboard", "inline-toast"];

const Component = () => {
  return <CopyToClipboard className="text-xl">You can copy me</CopyToClipboard>;
};

export const CopyToClipboardDemo = {
  Component,
  components,
  name,
};
