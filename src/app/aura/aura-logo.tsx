import Image from "next/image";
import auraLogo from "@/app/aura/aura-logo.svg";
import { cn } from "@/lib/styles";

interface GradientProps extends React.ComponentProps<"span"> {
  animated?: boolean;
}

export const Gradient = ({ animated, className, ...props }: GradientProps) => {
  return (
    <span
      className={cn("aura-gradient aura-gradient-animation", className)}
      {...props}
    />
  );
};

const AuraLogo = ({
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children">) => {
  return (
    <div
      className={cn(
        "group/aura-logo relative aspect-256/64 h-[1em] saturate-150",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 blur-[0.75em] transition duration-500 group-hover/aura-logo:opacity-100">
        <Gradient
          className="mask-contain absolute inset-0"
          style={{ maskImage: `url(${auraLogo.src})` }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-75 blur-[0.5em] transition duration-400 group-hover/aura-logo:opacity-75">
        <Gradient
          className="mask-contain absolute inset-0"
          style={{ maskImage: `url(${auraLogo.src})` }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-75 blur-[0.125em] transition duration-300 group-hover/aura-logo:opacity-100">
        <Gradient
          className="mask-contain absolute inset-0"
          style={{ maskImage: `url(${auraLogo.src})` }}
        />
      </div>

      <Image alt="Aura" className="absolute inset-0 size-full" src={auraLogo} />
    </div>
  );
};

export { AuraLogo };
