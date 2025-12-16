import { cva, type VariantProps } from "class-variance-authority";
import { Progress } from "radix-ui";
import { cn } from "@/lib/styles";

const progressRingVariants = cva(
  "relative grid place-items-center rounded-full",
  {
    defaultVariants: {
      size: 3,
    },
    variants: {
      size: {
        1: "size-6",
        2: "size-8",
        3: "size-10",
        4: "size-12",
        5: "size-16",
        6: "size-20",
      },
    },
  },
);

type ProgressRingVariants = VariantProps<typeof progressRingVariants>;

type ProgressRingProps = React.ComponentProps<typeof Progress.Root> &
  ProgressRingVariants;

const ProgressRing = ({
  children,
  className,
  value = 0,
  max = 1,
  size,
  ...props
}: ProgressRingProps) => {
  const progress = typeof value === "number" ? value / max : 0;

  return (
    <Progress.Root
      className={cn(progressRingVariants({ size }), className)}
      value={value}
      {...props}
    >
      <Progress.Indicator
        className="mask-contain mask-r-from-black absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, var(--color-pink-500) ${progress * 100}%, transparent ${progress * 100}%) border-box`,
          mask: "linear-gradient(white, white) content-box exclude, linear-gradient(white, white ) border-box",
          padding: `clamp(1px, ${size}px, 3px)`,
        }}
      />
      {children}
    </Progress.Root>
  );
};

export { ProgressRing };
