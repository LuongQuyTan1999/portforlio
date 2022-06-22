// @ts-nocheck
import { useEffect } from 'react';

const useScrolling = (ref) => {
  useEffect(() => {
    (function (timer) {
      const onScroll = () => {
        ref.current.className += ' scroll';
        clearTimeout(timer);
        timer = setTimeout(function () {
          ref.current.className = ref.current?.className.split('scroll')[0];
        }, 500);
      };

      window.addEventListener('load', () => {
        if (ref.current === null) return;

        ref.current.addEventListener('scroll', () => {
          if (ref.current?.className === null) return;
          if (ref.current?.className.includes('scroll')) return;

          onScroll();
        });
      });
    })();
  }, [ref]);
};

export default useScrolling;
