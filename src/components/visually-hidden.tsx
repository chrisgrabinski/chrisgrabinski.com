import { cn } from "@/lib/styles";

type VisuallyHiddenProps = React.ComponentProps<"span">;


const VisuallyHidden = ({ children, className, ...props }: VisuallyHiddenProps) => {
  return (
    <span className={cn("sr-only", className)} {...props}>
      {children}
    </span>
  );
};

export { VisuallyHidden };