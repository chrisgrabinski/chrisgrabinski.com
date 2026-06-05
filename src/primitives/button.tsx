"use client";

import { Slot } from "radix-ui";
import { Interaction } from "@/components/interaction";
import { cn } from "@/lib/styles";

export interface ButtonPrimitiveProps extends React.ComponentProps<"button"> {
  /**
   * Renders the component as the child element.
   */
  asChild?: boolean;
  /**
   * Sets aria-disabled attribute and prevents interaction with the button.
   */
  disabled?: boolean;
  /**
   * Sets aria-busy attribute and prevents interaction with the button.
   */
  loading?: boolean;
}

/**
 * An interactive component for performing user actions.
 */
const ButtonPrimitive = ({
  asChild,
  className,
  disabled = false,
  loading = false,
  onClick,
  type,
  ...props
}: ButtonPrimitiveProps) => {
  const Component = asChild ? Slot.Root : "button";

  const defaultButtonType = !asChild ? "button" : undefined;

  const isDisabled = disabled || loading;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  };

  return (
    <Interaction asChild>
      <Component
        aria-busy={loading || undefined}
        aria-disabled={disabled || undefined}
        className={cn(
          "cursor-pointer aria-busy:cursor-wait aria-disabled:cursor-not-allowed",
          className,
        )}
        onClick={handleClick}
        type={type || defaultButtonType}
        {...props}
      />
    </Interaction>
  );
};

export { ButtonPrimitive };
