import { cva } from "class-variance-authority";
import { Button } from "@/components/button";

const iconButtonVariants = cva(
  "inline-grid aspect-square place-items-center px-0",
  {
    defaultVariants: {
      size: 3,
    },
    variants: {
      size: {
        1: "[&>svg]:size-3",
        2: "[&>svg]:size-4",
        3: "[&>svg]:size-5",
        4: "[&>svg]:size-6",
        5: "[&>svg]:size-8",
        6: "[&>svg]:size-10",
      },
    },
  },
);

type IconButtonProps = React.ComponentProps<typeof Button>;

const IconButton = ({
  children,
  className,
  size,
  variant,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      className={iconButtonVariants({ className, size })}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export { IconButton };
