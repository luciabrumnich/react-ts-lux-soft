import { Counter } from "./Components/Counter";
import { User } from "./Components/User";

import { TimerParent } from "./Components/TimerParent";
import { CounterReducer } from "./Components/CounterReducer";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <hr />
      <Counter />
      <User />
      <br />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerParent />

      <h2>useReducer</h2>
      <hr />
      <CounterReducer />
    </>
  );
}

export default App;
