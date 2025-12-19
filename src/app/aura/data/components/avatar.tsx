import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import type { ComponentData } from "@/app/aura/data/components/types";

import { Avatar } from "@/components/avatar";
import { CountryAvatar } from "@/components/avatar-country";
import { VerifiedAvatar } from "@/components/avatar-verified";

export const avatar: ComponentData = {
  demo: <Avatar fallback="Chris Grabinski" size={6} src={avatarImage.src} />,
  description:
    "An image element with a fallback for representing users, complete with optional country flags and verification badges.",
  name: "avatar",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/avatar--docs",
  title: "Avatar",
  variants: [
    {
      demo: <Avatar fallback="Chris Grabinski" size={6} />,
      title: "Fallback",
    },
    {
      demo: (
        <CountryAvatar
          code="DE"
          fallback="Chris Grabinski"
          size={6}
          src={avatarImage.src}
        />
      ),
      title: "Country flag",
    },
    {
      demo: (
        <VerifiedAvatar
          fallback="Chris Grabinski"
          size={6}
          src={avatarImage.src}
        />
      ),
      title: "Verified badge",
    },
  ],
};
