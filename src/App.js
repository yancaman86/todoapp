import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState([]);
  let c = "update";

  const addInput = () => {
    if (input !== "") {
      setInputs([...inputs, input])
      setInput("")
    }

  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="a">
        <h1>Search Box</h1>

        <div>
          <input
            type="text"
            placeholder='Enter'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="add-button" onClick={addInput}>Submit</button>
        </div>
        <ul className="todo-list">
          {inputs.map((input, index) => (
            <div className="input">
              <li key={index}>{input}</li>    
            </div>
          ))}
        </ul>
      </div>
    </form>
  );

}

export default App;
