import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-grid place-items-center rounded-md bg-neutral-100 px-[0.666ch] font-medium ring-1 ring-black/10",
  {
    defaultVariants: {
      size: 2,
    },
    variants: {
      size: {
        1: "h-5 text-xs",
        2: "h-6 text-sm",
        3: "h-7 text-base",
      },
    },
  },
);

type BadgeVariants = VariantProps<typeof badgeVariants>;

type BadgeProps = React.ComponentProps<"span"> & BadgeVariants;

const Badge = ({
  children,
  className,
  size,

  ...props
}: BadgeProps) => {
  return (
    <span className={badgeVariants({ className, size })} {...props}>
      {children}
    </span>
  );
};

export { Badge };
