import React, { useState, useEffect } from "react";
import "./App.css";
import buildUnits from "./unit_reader.js"

function App() {
  const [message, setMessage] = useState("");

  let text = "";

  
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  if(message != '' && message != null)
  {

    const unit_configs = buildUnits(message, []);

    for(let u = 0; u < unit_configs.length; u++)
    {
      if(unit_configs[u].type == "human")
      {

        text += unit_configs[u].human_display();

      }
      else if(unit_configs[u] != null)
      {

        text += unit_configs[u].unit_display();

      }
    }

    return (
      <div className="App">
        {text}
      </div>
    );

  }

  
}

export default App

// ON COMMAND PROMPT: cd Documents/Javascript/Iron Harvest Modding Tool/ironharvestmoddingtool
// npm start