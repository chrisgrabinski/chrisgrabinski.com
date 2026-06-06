import type { ComponentData } from "@/app/aura/data/components/types";

import { ListItem, ListMarker, ListRoot } from "@/components/list";

export const list: ComponentData = {
  demo: (
    <ListRoot>
      <ListItem>
        <ListMarker />
        Item 1
      </ListItem>
      <ListItem>
        <ListMarker />
        Item 2
      </ListItem>
      <ListItem>
        <ListMarker />
        Item 3
        <ListRoot>
          <ListItem>
            <ListMarker />
            Item A
          </ListItem>
          <ListItem>
            <ListMarker />
            Item B
          </ListItem>
          <ListItem>
            <ListMarker />
            Item C
          </ListItem>
        </ListRoot>
      </ListItem>
    </ListRoot>
  ),
  description: "Primitive component for building styled lists.",
  name: "list",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/list.tsx",
  title: "List",
};
