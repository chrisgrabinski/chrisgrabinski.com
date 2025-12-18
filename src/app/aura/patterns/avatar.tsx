import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import { Avatar } from "@/components/avatar";

const name = "avatar";

const components = ["avatar"];

const Component = () => {
  return <Avatar fallback="Chris Grabiński" size={7} src={avatarImage.src} />;
};

export const AvatarDemo = {
  Component,
  components,
  name,
};
