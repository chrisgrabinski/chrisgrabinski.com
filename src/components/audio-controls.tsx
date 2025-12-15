"use client";

import {
  HeadphoneOffIcon,
  HeadphonesIcon,
  PauseIcon,
  PlayIcon,
  Repeat1Icon,
  RepeatIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { IconButton } from "@/components/icon-button";

import { Scrubber } from "@/components/scrubber";

type AudioControlsProps = {
  src: string;
};

const AudioControls = ({ src }: AudioControlsProps) => {
  const frameRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  const {
    duration,
    getPosition,
    isPlaying,
    togglePlayPause,
    toggleLoop,
    isLooping,
    isMuted,
    toggleMute,
    seek,
  } = useAudioPlayer(src, {
    autoplay: false,
  });

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

  return (
    <div className="grid w-full gap-1.5">
      <div className="flex items-center justify-center gap-1.5">
        <IconButton onClick={toggleMute} size={2} variant="ghost">
          {isMuted ? <HeadphoneOffIcon /> : <HeadphonesIcon />}
        </IconButton>
        <IconButton onClick={togglePlayPause} variant="ghost">
          <SkipBackIcon />
        </IconButton>
        <IconButton onClick={togglePlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </IconButton>
        <IconButton onClick={togglePlayPause} variant="ghost">
          <SkipForwardIcon />
        </IconButton>
        <IconButton onClick={toggleLoop} size={2} variant="ghost">
          {isLooping ? <Repeat1Icon /> : <RepeatIcon />}
        </IconButton>
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        <div className="tabular-nums">
          {(progress / 60).toFixed(2).replace(".", ":")}
        </div>
        <div className="flex-1">
          <Scrubber
            max={duration}
            onValueChange={(value) => seek(value[0])}
            step={0.01}
            value={[progress]}
          />
        </div>
        <div className="tabular-nums">
          {(duration / 60).toFixed(2).replace(".", ":")}
        </div>
      </div>
    </div>
  );
};

export { AudioControls };
