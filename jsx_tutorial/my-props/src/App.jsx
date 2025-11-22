import Message from "./Message";
import MultiMessage from "./MultiMessage";

function App() {

  return (
    <div>
      <h1>Props Demo</h1>
      <Message name="Sourav Singh" />
      <hr/>
      <h2>Multi Message </h2>
      <MultiMessage name="Sunny"
      age={25}
      city="Bangalore"/>
    </div>
  );
}

export default App;
