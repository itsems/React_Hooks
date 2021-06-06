import { useState, useRef } from 'react';

const UseRefTimer = () => {
  const [count, setCount] = useState(0);
  const ref = useRef({});
  const startCounter = () => {
    ref.current = setInterval(() => setCount(c => c + 1), 100);
  };
  const stopCounter = () => {
    clearInterval(ref.current);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </div>
  )
}

export default UseRefTimer;