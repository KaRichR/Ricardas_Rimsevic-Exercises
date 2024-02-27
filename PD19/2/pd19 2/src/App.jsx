import React, {useState} from "react";
import './App.css';

function App() {
  const [text, setText] = useState("First text");

  const changeText = () => {
    setText("New Text");
  };

  return (
    <>
        <div>
          <p>{text}</p>
          <button onClick={changeText}>Change Text</button>
        </div>
     </>
  )
}

export default App

