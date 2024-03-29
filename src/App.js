import React from 'react';
import { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {

  const[showParagraph, setShowParagraph] = useState(false);
  const[allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  }, [])

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p> THis is New!</p>}
      <DemoOutput show="false" />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      {console.log("App Running!!")}
    </div>
  );
}

export default App;
