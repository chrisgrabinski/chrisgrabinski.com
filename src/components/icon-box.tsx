import { cva, type VariantProps } from "class-variance-authority";

const boxVariants = cva(
  "grid place-items-center border border-neutral-300 bg-neutral-100 [&>svg]:size-1/2",
  {
    defaultVariants: {
      size: 3,
    },
    variants: {
      size: {
        1: "size-6 rounded",
        2: "size-8 rounded-sm",
        3: "size-10 rounded-md",
        4: "size-12 rounded-lg",
        5: "size-16 rounded-xl",
        6: "size-20 rounded-2xl",
      },
    },
  },
);

type BoxVariants = VariantProps<typeof boxVariants>;

type IconBoxProps = React.ComponentProps<"div"> & BoxVariants;

const IconBox = ({ children, className, size, ...props }: IconBoxProps) => {
  return (
    <div className={boxVariants({ className, size })} {...props}>
      {children}
    </div>
  );
};

export { IconBox };
