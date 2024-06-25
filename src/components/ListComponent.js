import React, { useState } from 'react';

function ListComponent() {
  const [items, setItems] = useState(['', '', '']);

  const handleChange = (index, event) => {
    const newItems = [...items];
    newItems[index] = event.target.value;
    setItems(newItems);
  };

  return (
    <div className="list-component">
      <h2>Enter 3 Items</h2>
      <div>
        {items.map((item, index) => (
          <input
            key={index}
            type="text"
            value={item}
            onChange={(e) => handleChange(index, e)}
            placeholder={`Item ${index + 1}`}
          />
        ))}
      </div>
      <h2>List of Items</h2>
      <ul className="no-bullets">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
