"use client";

import { cva } from "class-variance-authority";
import { createContext, useContext } from "react";
import { Button, type ButtonVariant } from "@/components/button";
import { cn } from "@/lib/styles";

type ButtonGroupVariant = Extract<ButtonVariant, "secondary" | "outline">;

type ButtonProps = React.ComponentProps<typeof Button>;

interface ButtonGroupContextProps extends Pick<ButtonProps, "size"> {
  variant?: ButtonGroupVariant;
}

const ButtonGroupContext = createContext<ButtonGroupContextProps | null>(null);

const useButtonGroupContext = () => {
  const context = useContext(ButtonGroupContext);

  if (!context) {
    throw new Error(
      "useButtonGroupContext must be used within a ButtonGroupRoot",
    );
  }

  return context;
};

interface ButtonGroupRootProps
  extends React.ComponentProps<"div">,
    ButtonGroupContextProps {}

const ButtonGroupRoot = ({
  children,
  size,
  variant,
  ...props
}: ButtonGroupRootProps) => {
  return (
    <ButtonGroupContext.Provider value={{ size, variant }}>
      <div {...props}>{children}</div>
    </ButtonGroupContext.Provider>
  );
};

const buttonGroupItemVariants = cva(
  "not-last:rounded-r-none not-first:rounded-l-none focus-visible:relative",
  {
    defaultVariants: {
      variant: "secondary",
    },
    variants: {
      variant: {
        outline: "not-first-of-type:border-l-0",
        secondary: "not-first-of-type:border-l",
      } satisfies Record<ButtonGroupVariant, string>,
    },
  },
);

type ButtonGroupItemProps = Omit<ButtonProps, "size" | "variant">;

const ButtonGroupItem = ({
  children,
  className,
  ...props
}: ButtonGroupItemProps) => {
  const { size, variant } = useButtonGroupContext();

  return (
    <Button
      className={cn(buttonGroupItemVariants({ variant }), className)}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export { ButtonGroupItem, ButtonGroupRoot };
