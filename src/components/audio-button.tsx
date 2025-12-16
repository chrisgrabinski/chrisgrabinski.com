"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { IconButton } from "@/components/icon-button";
import { ProgressRing } from "@/components/progress-ring";
import { cn } from "@/lib/styles";

interface AudioButtonProps extends React.ComponentProps<typeof IconButton> {
  src: string;
}

const AudioButton = ({ className, size, src, ...props }: AudioButtonProps) => {
  const frameRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  const { duration, getPosition, isPlaying, togglePlayPause } = useAudioPlayer(
    src,
    {
      autoplay: false,
    },
  );

  useEffect(() => {
    const animate = () => {
      setProgress(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  const percent = !!progress && !!duration ? progress / duration : 0;

  return (
    <IconButton
      className={cn(
        "group/audio-button relative isolate inline-grid overflow-clip p-[0.25%]",
        className,
      )}
      onClick={togglePlayPause}
      size={size}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-radial from-pink-500/50 to-transparent",
          isPlaying ? "animate-pulse" : "animate-none opacity-0",
        )}
      />
      <ProgressRing
        className="relative z-10 col-start-1 row-start-1 size-full"
        size={size}
        value={percent}
        variant="gradient"
      >
        {isPlaying ? (
          <PauseIcon className="fill-transparent transition duration-75 group-hover/audio-button:fill-current" />
        ) : (
          <PlayIcon className="fill-transparent transition duration-75 group-hover/audio-button:fill-current" />
        )}
      </ProgressRing>
      <ProgressRing
        className="col-start-1 row-start-1 size-full blur-xs"
        size={size}
        value={percent}
        variant="gradient"
      />
    </IconButton>
  );
};

export { AudioButton };
