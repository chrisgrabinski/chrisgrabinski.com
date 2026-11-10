import { cn } from "@/lib/styles";

type ComponentCanvasProps = React.ComponentProps<"div">;

const ComponentCanvas = ({ className, children, ...props }: ComponentCanvasProps) => {
  return (
    <div
      className={cn(
        "relative isolate grid place-items-center overflow-visible p-4 bg-canvas",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { ComponentCanvas };
