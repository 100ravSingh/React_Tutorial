import Greet from "./greet";

function App() {
  const today = new Date().toDateString();
  return (
    <div>
      <h1>Sourav Singh</h1>
      <p>Welcome to my React App!</p>
      <p>Today's date is: {today}</p>
      <p> let's do some math : 5 + 10 = {5 + 10}</p>
      <Greet />
    </div>
  );
}

export default App;