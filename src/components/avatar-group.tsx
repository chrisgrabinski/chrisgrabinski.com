import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { AvatarProvider, type AvatarSize } from "@/components/avatar";
import { cn } from "@/lib/styles";

const avatarGroupRootVariants = cva("flex", {
  compoundVariants: [
    {
      className: "-space-x-0.75",
      orientation: "horizontal",
      size: 1,
    },
    {
      className: "-space-x-1",
      orientation: "horizontal",
      size: 2,
    },
    {
      className: "-space-x-1.25",
      orientation: "horizontal",
      size: 3,
    },
    {
      className: "-space-x-1.5",
      orientation: "horizontal",
      size: 4,
    },
    {
      className: "-space-x-2",
      orientation: "horizontal",
      size: 5,
    },
    {
      className: "-space-x-2.5",
      orientation: "horizontal",
      size: 6,
    },
    {
      className: "-space-x-3",
      orientation: "horizontal",
      size: 7,
    },
    {
      className: "-space-x-4",
      orientation: "horizontal",
      size: 8,
    },
    {
      className: "-space-x-4.5",
      orientation: "horizontal",
      size: 9,
    },
    {
      className: "-space-y-0.75",
      orientation: "vertical",
      size: 1,
    },
    {
      className: "-space-y-1",
      orientation: "vertical",
      size: 2,
    },
    {
      className: "-space-y-1.25",
      orientation: "vertical",
      size: 3,
    },
    {
      className: "-space-y-1.5",
      orientation: "vertical",
      size: 4,
    },
    {
      className: "-space-y-2",
      orientation: "vertical",
      size: 5,
    },
    {
      className: "-space-y-2.5",
      orientation: "vertical",
      size: 6,
    },
    {
      className: "-space-y-3",
      orientation: "vertical",
      size: 7,
    },
    {
      className: "-space-y-4",
      orientation: "vertical",
      size: 8,
    },
    {
      className: "-space-y-4.5",
      orientation: "vertical",
      size: 9,
    },
  ],
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    size: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    },
  },
});

type AvatarGroupRootVariants = VariantProps<typeof avatarGroupRootVariants>;

interface AvatarGroupRootProps
  extends React.ComponentProps<"div">,
    Omit<AvatarGroupRootVariants, "size"> {
  asChild?: boolean;
  size?: AvatarSize;
}

const AvatarGroupRoot = ({
  asChild,
  children,
  className,
  orientation = "horizontal",
  size = 4,
  ...props
}: AvatarGroupRootProps) => {
  const Component = asChild ? Slot.Root : "div";

  return (
    <AvatarProvider value={{ size }}>
      <Component
        className={cn(
          avatarGroupRootVariants({ orientation, size }),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </AvatarProvider>
  );
};

interface AvatarGroupItemProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

const AvatarGroupItem = ({
  asChild,
  children,
  className,
  ...props
}: AvatarGroupItemProps) => {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      className={cn(
        "z-[calc(sibling-count()-sibling-index())] grid",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { AvatarGroupItem, AvatarGroupRoot };
