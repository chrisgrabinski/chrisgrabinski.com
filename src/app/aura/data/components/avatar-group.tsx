import avatarImageOne from "@/app/(homepage)/images/chris-grabinski.jpg";
import avatarImageTwo from "@/app/(homepage)/images/joanna-horanin.jpg";
import type { ComponentData } from "@/app/aura/data/components/types";

import { Avatar } from "@/components/avatar";
import { AvatarGroupItem, AvatarGroupRoot } from "@/components/avatar-group";

export const avatarGroup: ComponentData = {
  demo: (
    <AvatarGroupRoot size={7}>
      <AvatarGroupItem>
        <Avatar fallback="Chris Grabiński" src={avatarImageOne.src} />
      </AvatarGroupItem>
      <AvatarGroupItem>
        <Avatar fallback="Joanna Horanin" src={avatarImageTwo.src} />
      </AvatarGroupItem>
      <AvatarGroupItem>
        <Avatar fallback="Zak McKracken" />
      </AvatarGroupItem>
    </AvatarGroupRoot>
  ),
  description: "A list of avatars displayed with a partial overlap.",
  name: "avatar-group",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/avatar.tsx",
  storybookUrl: "https://storybook.chrisgrabinski.com/?path=/docs/avatar--docs",
  title: "Avatar Group",
  variants: [
    {
      demo: (
        <AvatarGroupRoot orientation="vertical" size={5}>
          <AvatarGroupItem>
            <Avatar fallback="Chris Grabiński" src={avatarImageOne.src} />
          </AvatarGroupItem>
          <AvatarGroupItem>
            <Avatar fallback="Joanna Horanin" src={avatarImageTwo.src} />
          </AvatarGroupItem>
          <AvatarGroupItem>
            <Avatar fallback="Zak McKracken" />
          </AvatarGroupItem>
        </AvatarGroupRoot>
      ),
      title: "Vertical",
    },
  ],
};
