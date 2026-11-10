import { Pile } from "@/components/pile";
import { cn } from "@/lib/styles";

interface BlurContainerProps extends React.ComponentProps<"div"> {
  direction?: "top" | "bottom";
}

export const BlurContainer = ({ className, direction = "top", ...props }: BlurContainerProps) => {
  return (
    <Pile className={cn("pointer-events-none", className)} {...props}>
      <div
        className={cn(
          "size-full backdrop-blur-[0.5px]",
          direction === "top" ? "mask-t-from-80% mask-t-to-100%" : "mask-b-from-80% mask-b-to-100%",
        )}
      />
      <div
        className={cn(
          "size-full backdrop-blur-[1px]",
          direction === "top" ? "mask-t-from-60% mask-t-to-80%" : "mask-b-from-60% mask-b-to-80%",
        )}
      />
      <div
        className={cn(
          "size-full backdrop-blur-[2px]",
          direction === "top" ? "mask-t-from-40% mask-t-to-60%" : "mask-b-from-40% mask-b-to-60%",
        )}
      />
      <div
        className={cn(
          "size-full backdrop-blur-xs",
          direction === "top" ? "mask-t-from-20% mask-t-to-40%" : "mask-b-from-20% mask-b-to-40%",
        )}
      />
      <div
        className={cn(
          "size-full backdrop-blur-sm",
          direction === "top" ? "mask-t-from-0% mask-t-to-60%" : "mask-b-from-0% mask-b-to-60%",
        )}
      />
    </Pile>
  );
};
