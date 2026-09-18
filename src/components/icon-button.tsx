import { Button } from "@/components/button";
import { cn } from "@/lib/styles";

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
      className={cn(
        "inline-grid aspect-square place-items-center px-0",
        className,
      )}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export { IconButton };
