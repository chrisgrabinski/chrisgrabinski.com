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
        "relative grid place-items-center overflow-clip p-6",
        className,
      )}
      style={{
        background:
          "repeating-conic-gradient(hsl(0,0%,95%) 0 25%, hsl(0,0%,100%) 0 50%) 50% / 20px 20px",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { ComponentCanvas };
