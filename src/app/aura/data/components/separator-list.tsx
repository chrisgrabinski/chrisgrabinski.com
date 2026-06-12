import avatarImageOne from "@/app/(homepage)/images/chris-grabinski.jpg";
import avatarImageTwo from "@/app/(homepage)/images/joanna-horanin.jpg";
import type { ComponentData } from "@/app/aura/data/components/types";
import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";
import { Overline } from "@/components/overline";
import {
  SeparatorListItem,
  SeparatorListRoot,
} from "@/components/separator-list";

export const separatorList: ComponentData = {
  demo: (
    <Card className="w-full max-w-md">
      <SeparatorListRoot>
        <SeparatorListItem className="flex items-center gap-3">
          <Avatar fallback="Chris Grabiński" src={avatarImageOne.src} />
          <div>
            <span className="block">Chris Grabiński</span>
            <Overline className="block" size={1}>
              Frontend Engineer
            </Overline>
          </div>
        </SeparatorListItem>
        <SeparatorListItem className="flex items-center gap-3">
          <Avatar fallback="Joanna Horanin" src={avatarImageTwo.src} />
          <div>
            <span className="block">Joanna Horanin</span>
            <Overline className="block" size={1}>
              CEO
            </Overline>
          </div>
        </SeparatorListItem>
        <SeparatorListItem className="flex items-center gap-3">
          <Avatar fallback="Zak McKracken" />
          <div>
            <span className="block">Zak McKracken</span>
            <Overline className="block" size={1}>
              Reporter
            </Overline>
          </div>
        </SeparatorListItem>
      </SeparatorListRoot>
    </Card>
  ),
  description: "List of items separated by a thin border.",
  name: "separator-list",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/separator-list.tsx",
  title: "Separator List",
};
