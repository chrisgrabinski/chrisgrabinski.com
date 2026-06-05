import { Slot } from "radix-ui";
import { cn } from "@/lib/styles";

interface Interaction extends React.ComponentProps<"button"> {
  asChild?: boolean;
  focusTarget?: "self" | "within";
}

/**
 * Applies consistent focus styles across interactive components.
 */
export const Interaction = ({
  asChild,
  children,
  className,
  focusTarget = "self",
  ...props
}: Interaction) => {
  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      className={cn(
        "outline-indigo-500 outline-offset-2",
        focusTarget === "self" && "focus-visible:outline-2",
        focusTarget === "within" && "focus-within:outline-2",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
