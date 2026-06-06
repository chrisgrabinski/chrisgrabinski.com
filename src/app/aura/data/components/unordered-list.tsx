import type { ComponentData } from "@/app/aura/data/components/types";

import {
  UnorderedListItem,
  UnorderedListRoot,
} from "@/components/unordered-list";

export const unorderedList: ComponentData = {
  components: ["list"],
  demo: (
    <UnorderedListRoot>
      <UnorderedListItem>Item 1</UnorderedListItem>
      <UnorderedListItem>Item 2</UnorderedListItem>
      <UnorderedListItem>
        Item 3
        <UnorderedListRoot>
          <UnorderedListItem>Item A</UnorderedListItem>
          <UnorderedListItem>Item B</UnorderedListItem>
          <UnorderedListItem>Item C</UnorderedListItem>
        </UnorderedListRoot>
      </UnorderedListItem>
    </UnorderedListRoot>
  ),
  description: "An unordered list of items, rendered as a bulleted list.",
  name: "unordered-list",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/unordered-list.tsx",
  title: "Unordered List",
};
