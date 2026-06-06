import { cva, type VariantProps } from "class-variance-authority";

const boxVariants = cva("grid place-items-center [&>svg]:size-1/2", {
  defaultVariants: {
    color: "grey",
    size: 3,
  },
  variants: {
    color: {
      green: "bg-green-800 text-green-200",
      grey: "bg-neutral-800 text-neutral-200",
      red: "bg-red-800 text-red-200",
      yellow: "bg-yellow-800 text-yellow-200",
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
