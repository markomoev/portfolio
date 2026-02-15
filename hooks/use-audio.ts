import { useCallback, useState } from "react";

export const useAudio = (url: string) => {
  // Using simple HTML Audio element
  const play = useCallback(() => {
    const audio = new Audio(url);
    audio.volume = 0.2; // Keep it subtle by default
    audio.play().catch((e) => {
      // Audio playback failed (usually due to user interaction required first)
      console.warn("Audio playback failed", e);
    });
  }, [url]);

  return play;
};
