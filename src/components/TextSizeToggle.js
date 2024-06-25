import React from 'react';

function TextSizeToggle({ textSize, increaseTextSize, decreaseTextSize }) {
  return (
    <div className="text-size-toggle">
      <button onClick={decreaseTextSize} disabled={textSize === 'small'}>A-</button>
      <button onClick={increaseTextSize} disabled={textSize === 'large'}>A+</button>
    </div>
  );
}

export default TextSizeToggle;
