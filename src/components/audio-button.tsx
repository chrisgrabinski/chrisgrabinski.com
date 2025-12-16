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

const AudioButton = ({
  className,
  size,
  src,
  style,
  ...props
}: AudioButtonProps) => {
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
      className={cn("relative", className)}
      onClick={togglePlayPause}
      size={size}
      style={{ padding: `clamp(1px, ${size}px, 2px)`, ...style }}
      {...props}
    >
      <ProgressRing className="size-full" size={size} value={percent}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </ProgressRing>
    </IconButton>
  );
};

export { AudioButton };
