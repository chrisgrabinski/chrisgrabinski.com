import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/styles";

const cardVariants = cva("overflow-clip rounded-lg p-6", {
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-surface",
      glass: "bg-surface/70 backdrop-blur-md backdrop-saturate-150",
    },
  },
});

type CardVariants = VariantProps<typeof cardVariants>;

interface CardProps extends React.ComponentProps<"div">, CardVariants {
  asChild?: boolean;
}

const Card = ({
  asChild,
  children,
  className,
  variant,
  ...props
}: CardProps) => {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component className={cn(cardVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
};

export { Card };
