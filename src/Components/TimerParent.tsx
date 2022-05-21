import { useState } from "react";
import { Timer } from "./Timer";

export const TimerParent = () => {
  const [miliseg, setMiliseg] = useState(1000);

  return (
    <>
      <span>Milisegundos {miliseg} </span>
      <br />

      <button
        className="btn btn-outline-success"
        onClick={() => setMiliseg(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMiliseg(2000)}
      >
        2000
      </button>
      <Timer miliseg={miliseg}/>
    </>
  );
}

