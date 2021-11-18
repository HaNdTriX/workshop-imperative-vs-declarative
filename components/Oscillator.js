import { useEffect, useRef } from "react";

export default function Oscillator({ frequency = 200 }) {
  const oscillatorRef = useRef();

  useEffect(() => {
    const audioContext = new AudioContext();
    oscillatorRef.current = audioContext.createOscillator();

    oscillatorRef.current.frequency.value = frequency;
    oscillatorRef.current.type = "sine";

    oscillatorRef.current.start();
    oscillatorRef.current.connect(audioContext.destination);

    return () => {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    oscillatorRef.current.frequency.value = frequency;
  }, [frequency]);

  return null;
}
