import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/styles";

const headingVariants = cva("font-display font-medium", {
  variants: {
    size: {
      1: "text-md",
      2: "text-lg",
      3: "text-xl",
      4: "text-2xl",
      5: "text-3xl",
      6: "text-4xl",
      7: "text-5xl",
      8: "text-6xl",
      9: "text-7xl",
    },
  },
});

type HeadingVariants = VariantProps<typeof headingVariants>;

interface HeadingProps extends React.ComponentProps<"h1">, HeadingVariants {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  asChild?: boolean;
}

const Heading = ({
  as: Tag = "h2",
  asChild,
  children,
  className,
  size = 6,
  ...props
}: HeadingProps) => {
  return (
    <Slot.Root className={cn(headingVariants({ size }), className)} {...props}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot.Root>
  );
};

export { Heading };
