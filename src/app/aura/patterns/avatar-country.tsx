import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import { CountryAvatar } from "@/components/avatar-country";

const name = "avatar/country";

const components = ["avatar/country"];

const Component = () => {
  return (
    <CountryAvatar
      code="DE"
      fallback="Chris Grabiński"
      size={7}
      src={avatarImage.src}
    />
  );
};

export const AvatarCountryDemo = {
  Component,
  components,
  name,
};
