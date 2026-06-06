import type { ComponentData } from "@/app/aura/data/components/types";

import { OrderedListItem, OrderedListRoot } from "@/components/ordered-list";

export const orderedList: ComponentData = {
  components: ["list"],
  demo: (
    <OrderedListRoot>
      <OrderedListItem>Item 1</OrderedListItem>
      <OrderedListItem>Item 2</OrderedListItem>
      <OrderedListItem>
        Item 3
        <OrderedListRoot>
          <OrderedListItem>Item A</OrderedListItem>
          <OrderedListItem>Item B</OrderedListItem>
          <OrderedListItem>Item C</OrderedListItem>
        </OrderedListRoot>
      </OrderedListItem>
    </OrderedListRoot>
  ),
  description: "An ordered list of items, rendered as a numbered list.",
  name: "Ordered-list",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/ordered-list.tsx",
  title: "Ordered List",
  variants: [
    {
      demo: (
        <OrderedListRoot>
          <OrderedListItem variant="highlight">Item 1</OrderedListItem>
          <OrderedListItem variant="highlight">Item 2</OrderedListItem>
          <OrderedListItem variant="highlight">
            Item 3
            <OrderedListRoot>
              <OrderedListItem variant="highlight">Item A</OrderedListItem>
              <OrderedListItem variant="highlight">Item B</OrderedListItem>
              <OrderedListItem variant="highlight">Item C</OrderedListItem>
            </OrderedListRoot>
          </OrderedListItem>
        </OrderedListRoot>
      ),
      title: "Highlight",
    },
  ],
};
