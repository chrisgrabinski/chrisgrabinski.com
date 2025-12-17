"use client";

import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import type { IconButton } from "@/components/icon-button";
import { PlayButton } from "@/components/play-button";
import { ProgressRing } from "@/components/progress-ring";

interface AudioButtonProps extends React.ComponentProps<typeof IconButton> {
  onEnd?: () => void;
  onLoad?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  onStop?: () => void;
  src: string;
}

const AudioButton = ({
  onEnd,
  onLoad,
  onPause,
  onPlay,
  onStop,
  src,
  ...props
}: AudioButtonProps) => {
  const frameRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  const { duration, getPosition, isPlaying, togglePlayPause } = useAudioPlayer(
    src,

    {
      autoplay: false,
      onend: onEnd,
      onload: onLoad,
      onpause: onPause,
      onplay: onPlay,
      onstop: onStop,
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
    <PlayButton onClick={togglePlayPause} playing={isPlaying} {...props}>
      <div className="absolute inset-[2.5%]">
        <ProgressRing
          className="absolute inset-0 size-full"
          value={percent}
          variant="gradient"
        />
        <ProgressRing
          className="size-full blur-xs"
          value={percent}
          variant="gradient"
        />
      </div>
    </PlayButton>
  );
};

export { AudioButton };
