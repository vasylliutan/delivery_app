import "./App.css";
import Shop from "./pages/shop";
import items from "./data/data.js";

function App() {
  return (
    <div className="App">
      <Shop items={items} />
    </div>
  );
}

export default App;
