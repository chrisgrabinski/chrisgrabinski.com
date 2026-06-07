import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/styles";

const textVariants = cva(null, {
  variants: {
    muted: {
      false: "",
      true: "text-foreground-muted",
    },
    size: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-lg",
      5: "text-xl",
      6: "text-2xl",
    },
  },
});

type TextVariants = VariantProps<typeof textVariants>;

interface TextProps extends React.ComponentProps<"span">, TextVariants {
  as?: "p" | "span";
  asChild?: boolean;
}

const Text = ({
  as: Tag = "span",
  asChild,
  children,
  className,
  muted,
  size = 4,
  ...props
}: TextProps) => {
  return (
    <Slot.Root
      className={cn(textVariants({ muted, size }), className)}
      {...props}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot.Root>
  );
};

export { Text };
