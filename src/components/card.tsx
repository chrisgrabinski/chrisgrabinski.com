import { cn } from "@/lib/styles";

type CardProps = React.ComponentProps<"div">;

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "overflow-clip rounded-xl bg-white p-6 ring-1 ring-neutral-200/50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
