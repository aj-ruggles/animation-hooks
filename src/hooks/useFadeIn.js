import { useRef, useEffect } from 'react';
import useTimeout from './useTimeout';

const useFadeIn = (duration = 1, delay = 0) => {
  const [done] = useTimeout(1000 * delay);
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      if (done) {
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      } 
    }
  }, [open]);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
