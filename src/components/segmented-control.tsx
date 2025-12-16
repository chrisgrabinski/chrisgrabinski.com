"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ToggleGroup } from "radix-ui";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

const segmentedControlVariants = cva(
  "flex gap-1 rounded-full bg-neutral-100 p-[0.333ch] font-medium",
  {
    defaultVariants: {
      size: 2,
    },
    variants: {
      size: {
        1: "h-6 text-xs",
        2: "h-8 text-sm",
        3: "h-10 text-base",
      },
    },
  },
);

type SegmentedControlVariants = VariantProps<typeof segmentedControlVariants>;

type SegmentedControlRootProps = Omit<
  ToggleGroup.ToggleGroupSingleProps,
  "type"
> &
  SegmentedControlVariants;

const SegmentedControlRoot = ({
  children,
  className,
  size,
  onValueChange,
  ...props
}: SegmentedControlRootProps) => {
  const handleValueChange = (value: string) => {
    if (!value) {
      return;
    }

    onValueChange?.(value);
  };

  return (
    <ToggleGroup.Root
      className={segmentedControlVariants({
        className,
        size,
      })}
      onValueChange={handleValueChange}
      type="single"
      {...props}
    >
      {children}
    </ToggleGroup.Root>
  );
};

type SegmentedControlItemProps = React.ComponentProps<typeof ToggleGroup.Item>;

const SegmentedControlItem = ({
  asChild,
  children,
  className,
  ...props
}: SegmentedControlItemProps) => {
  return (
    <ToggleGroup.Item
      asChild
      className={cn(
        "rounded-full",
        "px-[1ch] transition hover:bg-neutral-200 data-[state=on]:cursor-default data-[state=on]:bg-neutral-900 data-[state=on]:text-neutral-50",
        className,
      )}
      {...props}
    >
      <ButtonPrimitive asChild={asChild}>{children}</ButtonPrimitive>
    </ToggleGroup.Item>
  );
};

export { SegmentedControlRoot, SegmentedControlItem };
