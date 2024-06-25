import React, { useState } from 'react';

function FormInput() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2>Form Input</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default FormInput;
