import { useLayoutEffect, useState } from 'react';

export function useCurrentScreenWidth() {
  const [ screenWidth, setScreenWidth ] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return [ screenWidth ];
}

