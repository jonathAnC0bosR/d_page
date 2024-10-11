import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Middle from "./Components/Middle"
import "./App.css";

function App() {
  return (
    <div className="bg-blue-600 w-full">
      <div><Header /></div>
      <div className="sm:mt-4">
        <Landing />
      </div>
      <div>
        <Middle />
      </div>
    </div>
  );
}

export default App;
