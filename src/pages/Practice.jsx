import React, { useState, useEffect } from 'react';

const Practice = () => {
  const [items, setItems] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  console.log("items",items)
  console.log("history",history)
  console.log("currentIndex",currentIndex)

  useEffect(() => {
    const currentState = history[currentIndex];
    if (currentState !== undefined && currentState !== items) {
      setItems(currentState);
    }
  }, [currentIndex, history, items]);

  const addToHistory = (newState) => {
    const newHistory = [...history.slice(0, currentIndex + 1), newState];
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const handleAddItem = () => {
    const newItem = { 
      id: Date.now(), 
      text: `Item ${items.length + 1}`, 
      color: 'black', 
      fontSize: '16px' 
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    addToHistory(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    addToHistory(newItems);
  };

  const handleColorChange = (id, color) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, color };
      }
      return item;
    });
    setItems(newItems);
    addToHistory(newItems);
  };

  const handleFontSizeChange = (id, fontSize) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, fontSize };
      }
      return item;
    });
    console.log("newItems",newItems)
    setItems(newItems);
    addToHistory(newItems);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ color: item.color, fontSize: item.fontSize }}>
            {item.text}
            <div className='flex items-start w-48 gap-x-5'>
           <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleColorChange(item.id, 'red')}>Change Color</button>
            <button onClick={() => handleFontSizeChange(item.id, '20px')}>Increase Font</button>
           </div>
          </li>
        ))}
      </ul>
      <div className='flex items-center w-48 gap-x-5'>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleUndo} disabled={currentIndex <= 0}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={currentIndex >= history.length - 1}>
        Redo
      </button>
      </div>
    </div>
  );
};

export default Practice;
