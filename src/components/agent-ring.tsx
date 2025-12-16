import { cn } from "@/lib/styles";

interface AgentGradientProps extends React.ComponentProps<"span"> {
  animated?: boolean;
}

export const AgentGradient = ({
  animated,
  className,
  ...props
}: AgentGradientProps) => {
  return (
    <span
      className={cn(
        "aura-gradient",
        animated && "aura-gradient-animation",
        className,
      )}
      {...props}
    />
  );
};

const Ring = ({ className, style, ...props }: AgentGradientProps) => {
  return (
    <AgentGradient
      className={cn(
        "pointer-none absolute inset-0 rounded-[inherit] p-[3px]",
        className,
      )}
      style={{
        mask: "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
        ...style,
      }}
      {...props}
    />
  );
};

type AgentRingProps = {
  animated?: boolean;
  glow?: boolean;
};

const AgentRing = ({ animated, glow }: AgentRingProps) => {
  return (
    <>
      {glow && (
        <>
          <span className="absolute inset-0 rounded-[inherit] opacity-50 blur-md">
            <Ring animated={animated} />
          </span>
          <span className="absolute inset-0 rounded-[inherit] blur-xs">
            <Ring animated={animated} />
          </span>
        </>
      )}
      <Ring animated={animated} />
    </>
  );
};

export { AgentRing };
