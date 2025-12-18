import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import { CountryAvatar } from "@/components/avatar-country";
import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

const name = "card-profile";

const components = ["card", "avatar/country", "badge"];

const Component = () => {
  return (
    <Card className="flex items-center gap-3">
      <CountryAvatar
        code="DE"
        fallback="Chris Grabiński"
        size={4}
        src={avatarImage.src}
      />
      <div className="flex flex-col">
        <p className="flex items-baseline gap-1.5 font-medium text-base">
          Chris Grabiński
          <Badge size={1}>Admin</Badge>
        </p>
        <p className="text-neutral-500 text-sm">mail@example.com</p>
      </div>
    </Card>
  );
};

export const CardProfileDemo = {
  Component,
  components,
  name,
};
