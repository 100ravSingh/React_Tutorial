import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // List to render
  const items = ["React", "JavaScript", "HTML", "CSS"];

  return (
    <div>
      <h1>My State App</h1>

      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />

      <h2>Live Typing Demo</h2>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />

      {text !== "" && <p>You typed: {text}</p>}

      <hr />

      <h2>Rendering a List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
