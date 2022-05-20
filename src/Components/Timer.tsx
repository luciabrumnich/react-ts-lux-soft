import React, { useEffect, useState, useRef } from "react";

type TimerArgs = {
  miliseg: number;
};

function Timer({ miliseg }: TimerArgs) {
  const [seg, setSeg] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeg((s) => s + 1), miliseg);
  }, [miliseg]);

  return (
    <>
      <h4>
        Timer: <small>{seg}</small>
      </h4>
    </>
  );
}

export default Timer;
