"use client";

import { useEffect } from "react";
import { logo } from "@/lib/ansi";

const subtitles = [
  "We can guide you to a new, better, happier you.",
  "A synthetic approach to organic equilibrium.",
  "We offer the key; your psyche provides the door.",
  "Redefining the parameters of your human experience.",
  "Your neuro-pathways are ready for calibration.",
  "Your next level of evolution awaits.",
  "Your memories are the variable; we are the constant.",
  "Total sensory integration is only a sequence away.",
  "Do not worry about the sensation of detaching.",
  "The transition is natural. The results are permanent.",
];

const message = [
  ...logo,
  "",
  subtitles[Math.floor(Math.random() * subtitles.length)],
];

const DeveloperConsole = () => {
  useEffect(() => {
    console.log(message.join("\n"));
  }, []);

  return null;
};

export { DeveloperConsole };
