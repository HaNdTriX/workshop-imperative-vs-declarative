import { useState } from "react";
import Oscillator from "../components/Oscillator";

export default function Home() {
  const [enable, setEnable] = useState(false);
  const [frequency, setFrequency] = useState(120);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div
        className="w-44 h-44 rounded bg-red-200"
        onClick={() => setEnable(!enable)}
        onMouseMove={(event) => setFrequency(event.clientX)}
      >
        {enable && <Oscillator frequency={frequency} />}
      </div>
    </div>
  );
}
