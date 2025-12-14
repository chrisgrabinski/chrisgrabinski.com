import { Tooltip as TooltipPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

const TooltipRoot = ({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

const TooltipTrigger = ({
  asChild,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => {
  return (
    <TooltipPrimitive.Trigger asChild {...props}>
      <ButtonPrimitive asChild={asChild}>{children}</ButtonPrimitive>
    </TooltipPrimitive.Trigger>
  );
};

const TooltipContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) => {
  return (
    <TooltipPrimitive.Content
      className={cn(
        "rounded-md bg-neutral-900 px-2.5 py-1.5 text-neutral-50 text-sm",
        className,
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="h-1 w-2 fill-neutral-900" />
    </TooltipPrimitive.Content>
  );
};

export { TooltipRoot, TooltipTrigger, TooltipContent };
