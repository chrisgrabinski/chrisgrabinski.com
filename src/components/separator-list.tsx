import { Slot } from "radix-ui";
import { cn } from "@/lib/styles";

interface SeparatorListRootProps extends React.ComponentProps<"ul"> {
  asChild?: boolean;
}

const SeparatorListRoot = ({
  asChild,
  children,
  className,
  ...props
}: SeparatorListRootProps) => {
  const Component = asChild ? Slot.Root : "ul";

  return (
    <Component className={cn("divide-y divide-border", className)} {...props}>
      {children}
    </Component>
  );
};

interface SeparatorListItemProps extends React.ComponentProps<"li"> {
  asChild?: boolean;
}

const SeparatorListItem = ({
  asChild,
  children,
  className,
  ...props
}: SeparatorListItemProps) => {
  const Component = asChild ? Slot.Root : "li";

  return (
    <Component className={cn("py-1.5", className)} {...props}>
      {children}
    </Component>
  );
};

export { SeparatorListItem, SeparatorListRoot };
