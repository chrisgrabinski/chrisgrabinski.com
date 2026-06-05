"use client";

import { Slot } from "radix-ui";
import { ListItem, ListMarker, ListRoot, useList } from "@/components/list";

interface UnorderedListRootProps extends React.ComponentProps<"ul"> {
  asChild?: boolean;
}

const UnorderedListRoot = ({ children, ...props }: UnorderedListRootProps) => {
  return (
    <ListRoot {...props}>
      <Slot.Slottable>{children}</Slot.Slottable>
    </ListRoot>
  );
};

const MARKERS: string[] = ["•", "◦", "▪", "▫"];

interface UnorderedListItemProps extends React.ComponentProps<"li"> {
  asChild?: boolean;
  marker?: React.ReactNode;
}

const UnorderedListItem = ({
  children,
  marker,
  ...props
}: UnorderedListItemProps) => {
  const { level } = useList();

  return (
    <ListItem {...props}>
      {marker ?? <ListMarker>{MARKERS[level % MARKERS.length]}</ListMarker>}
      <Slot.Slottable>{children}</Slot.Slottable>
    </ListItem>
  );
};

export { UnorderedListRoot, UnorderedListItem };
