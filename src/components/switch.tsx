import { cva, type VariantProps } from "class-variance-authority";
import { Switch as SwitchPrimitive } from "radix-ui";
import { cn } from "@/lib/styles";
import { ButtonPrimitive } from "@/primitives/button";

const switchRootVariants = cva(
  "inline-flex aspect-[1.75/1] rounded-full bg-neutral-100 ring-1 ring-black/10 transition data-[state=checked]:bg-pink-500",
  {
    defaultVariants: {
      size: 3,
    },
    variants: {
      size: {
        1: "h-4",
        2: "h-6",
        3: "h-8",
      },
    },
  },
);

type SwitchRootVariants = VariantProps<typeof switchRootVariants>;

type SwitchRootProps = React.ComponentProps<typeof SwitchPrimitive.Root> &
  SwitchRootVariants;

const SwitchRoot = ({
  asChild,
  children,
  className,
  size,
  ...props
}: SwitchRootProps) => {
  return (
    <SwitchPrimitive.Root
      asChild
      className={switchRootVariants({ className, size })}
      {...props}
    >
      <ButtonPrimitive asChild={asChild}>{children}</ButtonPrimitive>
    </SwitchPrimitive.Root>
  );
};

const SwitchThumb = ({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Thumb>) => {
  return (
    <SwitchPrimitive.Thumb
      className={cn(
        "group/switch-thumb aspect-square h-full p-1 transition data-[state=checked]:translate-x-3/4",
        className,
      )}
      {...props}
    >
      <div className="size-full rounded-full bg-black transition group-data-[state=checked]/switch-thumb:bg-white" />
    </SwitchPrimitive.Thumb>
  );
};

const Switch = ({ children, ...props }: SwitchRootProps) => {
  return (
    <div className="inline-flex items-center gap-[1ch]">
      <SwitchRoot {...props}>
        <SwitchThumb />
      </SwitchRoot>
      {children}
    </div>
  );
};

export { Switch, SwitchRoot, SwitchThumb };
