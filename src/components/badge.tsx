import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-grid place-items-center rounded-md px-[0.666ch]",
  {
    defaultVariants: {
      size: 2,
      variant: "solid",
    },
    variants: {
      size: {
        1: "h-5 text-xs",
        2: "h-6 text-sm",
        3: "h-7 text-base",
      },
      variant: {
        ghost: "",
        outline: "bg-transparent ring-1 ring-neutral-800",
        solid: "bg-neutral-200",
      },
    },
  },
);

type BadgeVariants = VariantProps<typeof buttonVariants>;

type BadgeProps = React.ComponentProps<"span"> & BadgeVariants;

const Badge = ({
  children,
  className,
  size,
  variant,
  ...props
}: BadgeProps) => {
  return (
    <span className={buttonVariants({ className, size, variant })} {...props}>
      {children}
    </span>
  );
};

export { Badge };
