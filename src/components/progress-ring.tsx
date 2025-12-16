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

interface ProgressRingProps
  extends React.ComponentProps<typeof Progress.Root>,
    ProgressRingVariants {
  variant?: "solid" | "gradient";
}

const ProgressRing = ({
  children,
  className,
  max = 1,
  size,
  value = 0,
  variant = "solid",
  ...props
}: ProgressRingProps) => {
  const progress = typeof value === "number" ? value / max : 0;

  return (
    <Progress.Root
      className={cn(progressRingVariants({ size }), className)}
      value={value}
      {...props}
    >
      <div
        className="absolute inset-0 rounded-full p-[max(1px,5%)]"
        style={{
          mask: "linear-gradient(white, white) content-box exclude, linear-gradient(white, white) border-box",
        }}
      >
        <Progress.Indicator
          className="mask-contain will-change absolute inset-0 rounded-full bg-pink-500"
          style={{
            background:
              variant === "gradient"
                ? `conic-gradient(from ${progress * 360}deg, transparent 0%, var(--color-pink-500) 7.5%, var(--color-pink-500) 50%, var(--color-pink-400) 75%, var(--color-pink-50) 95%, var(--color-white) 100%) border-box`
                : undefined,
            mask: `conic-gradient(from 0deg, white 0%, white ${progress * 100}%, transparent ${progress * 100}%) border-box`,
          }}
        />
      </div>
      {children}
    </Progress.Root>
  );
};

export { ProgressRing };
