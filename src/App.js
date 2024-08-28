import Header from "./Components/Header";
import Landing from "./Components/Landing";
import "./App.css";

function App() {
  return (
    <div className="bg-blue-600">
      <div><Header /></div>
      <div>
        <Landing />
      </div>
    </div>
  );
}

export default App;
