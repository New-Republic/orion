import { useState } from "react";

import "./counter.scss";

function Counter() {
  const [count, setCount] = useState(10);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="counter">
      <button onClick={decrementCount}>-</button>
      <strong>{count}</strong>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Counter;
