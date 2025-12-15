"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { IconButton } from "@/components/icon-button";
import { cn } from "@/lib/styles";

interface AudioButtonProps extends React.ComponentProps<typeof IconButton> {
  src: string;
}

const AudioButton = ({ className, src, ...props }: AudioButtonProps) => {
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
      {...props}
    >
      <div
        className="mask-contain mask-r-from-black -inset-0.5 absolute rounded-full p-0.5"
        style={{
          background: `conic-gradient(from 0deg, var(--color-pink-500) ${percent * 100}%, transparent ${percent * 100}%) border-box`,
          mask: "linear-gradient(white, white) content-box exclude, linear-gradient(white, white ) border-box",
        }}
      />
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </IconButton>
  );
};

export { AudioButton };
