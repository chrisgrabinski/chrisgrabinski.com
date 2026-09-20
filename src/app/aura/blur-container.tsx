import { Pile } from "@/components/pile";
import { cn } from "@/lib/styles";

export const BlurContainer = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <Pile className={cn("pointer-events-none", className)} {...props}>
      <div className="mask-t-from-80% mask-t-to-100% size-full backdrop-blur-[0.5px]" />
      <div className="mask-t-from-60% mask-t-to-80% size-full backdrop-blur-[1px]" />
      <div className="mask-t-from-40% mask-t-to-60% size-full backdrop-blur-[2px]" />
      <div className="mask-t-from-20% mask-t-to-40% size-full backdrop-blur-xs" />
      <div className="mask-t-from-0% mask-t-to-60% size-full backdrop-blur-sm" />
    </Pile>
  );
};
