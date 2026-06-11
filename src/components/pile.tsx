import { Slot } from "radix-ui";
import { cn } from "@/lib/styles";

interface PileProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

const Pile = ({ asChild, children, className, ...props }: PileProps) => {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      className={cn(
        "grid place-items-center [grid-template-areas:'pile'] *:[grid-area:pile]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Pile };
