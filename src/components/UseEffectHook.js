import React, { useState, useEffect } from 'react';

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter value is ${count}`;
  });

  return (
    <div>
      <p>Counter value is {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Counter
      </button>
    </div>
  );
}