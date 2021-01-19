import { useRef, useEffect } from 'react';
import useTimeout from './useTimeout';

const useSlideIn = (
  duration = 1,
  delay = 0,
  direction = 'X',
  distance = -400
) => {
  const [done] = useTimeout(1000 * delay);
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      if (done) {
        current.style.transition = `${duration}s`;
        current.style.transform = `translate${direction}(0px)`;
        current.style.opacity = 1;
      }
    }
  }, [done]);

  return {
    ref: element,
    style: { transform: `translate${direction}(${distance}px)`, opacity: 0 },
  };
};

export default useSlideIn;
