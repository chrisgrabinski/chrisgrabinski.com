import { cn } from "@/lib/styles";

type ComponentCanvasProps = React.ComponentProps<"div">;

const ComponentCanvas = ({
  className,
  children,
  style,
  ...props
}: ComponentCanvasProps) => {
  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-visible bg-canvas",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { ComponentCanvas };
