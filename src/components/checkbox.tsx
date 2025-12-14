import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";

const CheckboxRoot = CheckboxPrimitive.Root;

const CheckboxIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Indicator>) => {
  return (
    <CheckboxPrimitive.Indicator
      className={cn(
        "group/checkbox inline-grid size-8 place-items-center rounded bg-neutral-200 align-middle transition data-[state=checked]:bg-pink-500 [&>svg]:size-2/3",
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
