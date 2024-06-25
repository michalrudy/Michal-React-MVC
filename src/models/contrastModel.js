import { useState } from 'react';

export function useContrastModel() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  return {
    isHighContrast,
    setIsHighContrast,
  };
}
