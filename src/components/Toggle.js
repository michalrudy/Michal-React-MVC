import React, { useState } from 'react';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <h2>{isToggled ? 'ON' : 'OFF'}</h2>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
}

export default Toggle;
