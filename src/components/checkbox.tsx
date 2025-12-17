import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

const CheckboxRoot = ({
  children,
  asChild,
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      asChild
      className={cn(
        "group/checkbox inline-flex items-center gap-[1ch]",
        className,
      )}
      {...props}
    >
      <ButtonPrimitive asChild={asChild}>{children}</ButtonPrimitive>
    </CheckboxPrimitive.Root>
  );
};

const CheckboxIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Indicator>) => {
  return (
    <CheckboxPrimitive.Indicator
      className={cn(
        "inline-grid size-4 place-items-center rounded bg-neutral-100 align-middle ring-1 ring-black/10 transition group-hover/checkbox:cursor-pointer group-hover/checkbox:bg-neutral-200 data-[state=checked]:bg-pink-500 [&>svg]:size-2/3",
        className,
      )}
      {...props}
      forceMount
    >
      <CheckIcon className="stroke-white transition group-data-[state=unchecked]/checkbox:opacity-0" />
    </CheckboxPrimitive.Indicator>
  );
};

export { CheckboxRoot, CheckboxIndicator };
