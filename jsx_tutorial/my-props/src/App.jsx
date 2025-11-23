import Message from "./Message";
import MultiMessage from "./MultiMessage";
import List from "./List";

function App() {
    const skills = ["React", "JavaScript", "HTML", "CSS"];
  return (
    <div>
      <h1>Props Demo</h1>
      <Message name="Sourav Singh" />
      <hr/>
      <h2>Multi Message </h2>
      <MultiMessage name="Sunny"
      age={25}
      city="Bangalore"/>
      <hr/>
      <List items={skills} />
    </div>
  );
}

export default App;
