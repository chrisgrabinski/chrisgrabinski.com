import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/styles";

const statusIndicatorVariants = cva(
  cn(
    "relative inline-block size-[0.75em]",
    "before:absolute before:inset-[-0.125em] before:z-10 before:rounded-full before:bg-current before:opacity-50 before:blur-[0.125em] before:content-['']",
    "after:absolute after:inset-0 after:z-20 after:rounded-full after:bg-current after:bg-radial after:content-['']",
  ),
  {
    defaultVariants: {
      severity: 0,
    },
    variants: {
      severity: {
        0: "text-neutral-300 before:hidden",
        1: "text-green-500 after:from-green-300 after:to-green-700",
        2: "text-yellow-400 after:from-yellow-200 after:to-yellow-500",
        3: "text-red-500 before:animate-pulse before:opacity-100 after:from-red-300 after:to-red-600",
        4: "text-fuchsia-600 before:animate-pulse before:opacity-100 after:from-fuchsia-400 after:to-fuchsia-700",
      },
    },
  },
);

type StatusIndicatorVariants = VariantProps<typeof statusIndicatorVariants>;

type StatusProps = React.ComponentProps<"span"> & StatusIndicatorVariants;

const Status = ({ children, className, severity, ...props }: StatusProps) => {
  return (
    <span
      className={cn("isolate inline-flex items-center gap-[0.5ch]", className)}
      {...props}
    >
      <span className={cn(statusIndicatorVariants({ severity }))} />
      {children}
    </span>
  );
};

export { Status };
