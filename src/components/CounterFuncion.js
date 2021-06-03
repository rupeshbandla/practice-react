import React, { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter value {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 1 ? count - 1 : 0)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterFunction;
