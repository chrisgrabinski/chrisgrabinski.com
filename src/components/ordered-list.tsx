"use client";

import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import type React from "react";
import { ListItem, ListMarker, ListRoot, useList } from "@/components/list";
import { cn } from "@/lib/styles";

interface OrderedListRootProps extends React.ComponentProps<"ol"> {
  asChild?: boolean;
}

const OrderedListRoot = ({
  asChild,
  children,
  className,
  ...props
}: OrderedListRootProps) => {
  const Component = asChild ? Slot.Root : "ol";

  return (
    <ListRoot
      asChild
      className={cn("[counter-reset:ordered-list]", className)}
      {...props}
    >
      <Component>
        <Slot.Slottable>{children}</Slot.Slottable>
      </Component>
    </ListRoot>
  );
};

const MARKERS = [
  "before:content-[counter(ordered-list,decimal)]",
  "before:content-[counter(ordered-list,lower-alpha)]",
  "before:content-[counter(ordered-list,lower-roman)]",
] as const;

const orderedListItemMarkerVariants = cva("", {
  variants: {
    variant: {
      default: "after:content-['.']",
      highlight: "min-w-[1lh] rounded-full bg-neutral-300 px-1 text-center",
    },
  },
});

interface OrderedListItemProps extends React.ComponentProps<"li"> {
  asChild?: boolean;
  marker?: React.ReactNode;
  variant?: "default" | "highlight";
}

const OrderedListItem = ({
  asChild,
  children,
  className,
  marker,
  variant = "highlight",
  ...props
}: OrderedListItemProps) => {
  const { level } = useList();

  return (
    <ListItem
      asChild={asChild}
      className={cn("[counter-increment:ordered-list]", className)}
      {...props}
    >
      {marker ?? (
        <ListMarker
          className={cn(
            orderedListItemMarkerVariants({ variant }),
            MARKERS[level % MARKERS.length],
          )}
        />
      )}
      <Slot.Slottable>{children}</Slot.Slottable>
    </ListItem>
  );
};

export { OrderedListRoot, OrderedListItem };
