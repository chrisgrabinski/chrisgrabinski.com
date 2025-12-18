import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import { VerifiedAvatar } from "@/components/avatar-verified";

const name = "avatar/verified";

const components = ["avatar/verified"];

const Component = () => {
  return (
    <VerifiedAvatar fallback="Chris Grabiński" size={7} src={avatarImage.src} />
  );
};

export const AvatarVerifiedDemo = {
  Component,
  components,
  name,
};
