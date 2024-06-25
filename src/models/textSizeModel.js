import { useState } from 'react';

export function useTextSizeModel() {
  const [textSize, setTextSize] = useState('medium');

  return {
    textSize,
    setTextSize,
  };
}
