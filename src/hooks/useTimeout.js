import { useEffect, useState } from 'react';

const useTimeout = (delay = 0) => {
  const [done, setDone] = useState(false);

  const Start = () => setDone(false);

  useEffect(() => {
    setDone(false);
    const timmer = setTimeout(() => {
      setDone(true);
    }, delay);
    return () => timmer;
  }, [done]);

  return [done, Start];
};

export default useTimeout;
