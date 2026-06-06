import { SparklesIcon } from "lucide-react";
import { AgentRing } from "@/components/agent-ring";
import { cn } from "@/lib/styles";
import { Button } from "./button";

type AuraButtonProps = React.ComponentProps<typeof Button>;

const AuraButton = ({ children, className, ...props }: AuraButtonProps) => {
  return (
    <span className="relative z-10">
      <Button
        className={cn(
          "relative bg-transparent hover:bg-transparent",
          className,
        )}
        variant="ghost"
        {...props}
      >
        <SparklesIcon />
        {children}
        <AgentRing animated glow />
      </Button>
    </span>
  );
};

export { AuraButton };
