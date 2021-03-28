import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";

function App() {
  return (
    <div>
      <Header />
      <button>Add</button>
      <div>
        <span>Name</span>
        <br />
        <span>Phone</span>
      </div>
    </div>
  );
}

export default App;
