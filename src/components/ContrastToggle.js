import React from 'react';

function ContrastToggle({ isHighContrast, toggleContrast }) {
  return (
    <button onClick={toggleContrast} className="contrast-toggle">
      {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
    </button>
  );
}

export default ContrastToggle;
