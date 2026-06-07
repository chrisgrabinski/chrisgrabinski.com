import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/styles";

const overlineVariants = cva(
  "font-mono text-foreground-muted uppercase tracking-wide",
  {
    variants: {
      size: {
        1: "text-xs",
        2: "text-sm",
        3: "text-base",
      },
    },
  },
);

type OverlineVariants = VariantProps<typeof overlineVariants>;

interface OverlineProps extends React.ComponentProps<"span">, OverlineVariants {
  asChild?: boolean;
}

const Overline = ({
  asChild,
  children,
  className,
  size = 2,
}: OverlineProps) => {
  const Component = asChild ? Slot.Root : "span";

  return (
    <Component className={cn(overlineVariants({ size }), className)}>
      {children}
    </Component>
  );
};

export { Overline };
