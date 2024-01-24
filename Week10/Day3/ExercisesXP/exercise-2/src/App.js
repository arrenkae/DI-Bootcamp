import React, { useState, useRef } from "react";
import "./App.css";

function CharacterCounter() {
  const [charCount, setcharCount] = useState(0);

  const inputRef = useRef(null);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setcharCount(textLength);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {charCount}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;

