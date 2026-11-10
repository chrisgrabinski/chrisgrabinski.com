import { Pile } from "@/components/pile";
import { cn } from "@/lib/styles";

export const BlurContainer = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <Pile className={cn("pointer-events-none", className)} {...props}>
      <div className="size-full mask-t-from-80% mask-t-to-100% backdrop-blur-[0.5px]" />
      <div className="size-full mask-t-from-60% mask-t-to-80% backdrop-blur-[1px]" />
      <div className="size-full mask-t-from-40% mask-t-to-60% backdrop-blur-[2px]" />
      <div className="size-full mask-t-from-20% mask-t-to-40% backdrop-blur-xs" />
      <div className="size-full mask-t-from-0% mask-t-to-60% backdrop-blur-sm" />
    </Pile>
  );
};
