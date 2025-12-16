import { PauseIcon, PlayIcon } from "lucide-react";
import { IconButton } from "@/components/icon-button";
import { cn } from "@/lib/styles";

interface PlayButtonProps extends React.ComponentProps<typeof IconButton> {
  playing?: boolean;
}

const PlayButton = ({
  children,
  className,
  playing,
  ...props
}: PlayButtonProps) => {
  return (
    <IconButton
      className={cn(
        "group/play-button relative isolate overflow-clip",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-radial from-pink-500/50 to-transparent",
          playing ? "animate-pulse" : "animate-none opacity-0",
        )}
      />
      {playing ? (
        <PauseIcon className="z-10 fill-transparent transition duration-75 group-hover/play-button:fill-current" />
      ) : (
        <PlayIcon className="z-10 fill-transparent transition duration-75 group-hover/play-button:fill-current" />
      )}
      {children}
    </IconButton>
  );
};

export { PlayButton };
