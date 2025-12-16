import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("overflow-clip rounded-xl p-6 ring-1 ring-black/5", {
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-white",
      glass: "bg-white/70 backdrop-blur-md backdrop-saturate-150",
    },
  },
});

type CardVariants = VariantProps<typeof cardVariants>;

type CardProps = React.ComponentProps<"div"> & CardVariants;

const Card = ({ children, className, variant, ...props }: CardProps) => {
  return (
    <div className={cardVariants({ className, variant })} {...props}>
      {children}
    </div>
  );
};

export { Card };
