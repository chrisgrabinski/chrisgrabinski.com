import { cva, type VariantProps } from "class-variance-authority";
import { ButtonPrimitive } from "@/primitives/button";

const buttonVariants = cva(
  "inline-flex place-items-center gap-[0.5ch] rounded-full px-[1.5ch] font-medium transition [&>svg]:size-[1em]",
  {
    defaultVariants: {
      size: 3,
      variant: "secondary",
    },
    variants: {
      size: {
        1: "h-6 text-xs",
        2: "h-8 text-sm",
        3: "h-10 text-base",
        4: "h-12 text-lg",
        5: "h-16 text-xl",
        6: "h-20 text-2xl",
      },
      variant: {
        destructive: "bg-red-500 text-red-50 hover:bg-red-600",
        ghost: "bg-transparent text-inherit hover:bg-neutral-100",
        outline:
          "bg-transparent text-neutral-800 ring-2 ring-neutral-200 ring-inset hover:ring-neutral-300",
        primary: "bg-pink-500 text-indigo-50 hover:bg-pink-600",
        secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-700",
      },
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ComponentProps<typeof ButtonPrimitive> &
  ButtonVariants;

const Button = ({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <ButtonPrimitive
      className={buttonVariants({ className, size, variant })}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  );
};

export { Button };
