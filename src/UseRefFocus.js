import { useRef, useEffect } from 'react';

const UseRefFocus = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return <input ref={ref} />;
}
export default UseRefFocus;