export function increaseTextSize(textSize, setTextSize) {
    if (textSize === 'small') setTextSize('medium');
    if (textSize === 'medium') setTextSize('large');
  }
  
  export function decreaseTextSize(textSize, setTextSize) {
    if (textSize === 'large') setTextSize('medium');
    if (textSize === 'medium') setTextSize('small');
  }
  