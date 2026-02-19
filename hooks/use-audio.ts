import { useCallback } from "react";

export const useAudio = (url: string) => {
  // Using simple HTML Audio element
  const play = useCallback(() => {
    const audio = new Audio(url);
    audio.volume = 0.2; 
    audio.play().catch((e) => {
      console.warn("Audio playback failed", e);
    });
  }, [url]);

  return play;
};
