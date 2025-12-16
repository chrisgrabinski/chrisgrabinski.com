import { cva, type VariantProps } from "class-variance-authority";

const boxVariants = cva("grid place-items-center border [&>svg]:size-1/2", {
  defaultVariants: {
    color: "grey",
    size: 3,
  },
  variants: {
    color: {
      green: "border-green-300 bg-green-100 text-green-900",
      grey: "border-neutral-300 bg-neutral-100 text-neutral-900",
      red: "border-red-300 bg-red-100 text-red-900",
      yellow: "border-yellow-300 bg-yellow-100 text-yellow-900",
    },
    size: {
      1: "size-6 rounded",
      2: "size-8 rounded-sm",
      3: "size-10 rounded-md",
      4: "size-12 rounded-lg",
      5: "size-16 rounded-xl",
      6: "size-20 rounded-2xl",
    },
  },
});

type BoxVariants = VariantProps<typeof boxVariants>;

type IconBoxProps = React.ComponentProps<"div"> & BoxVariants;

const IconBox = ({
  children,
  className,
  color,
  size,
  ...props
}: IconBoxProps) => {
  return (
    <div className={boxVariants({ className, color, size })} {...props}>
      {children}
    </div>
  );
};

export { IconBox };
