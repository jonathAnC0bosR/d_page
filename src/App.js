import Header from "./Components/Header";
// import Landing from "./Components/Landing";
import NewLanding from "./Components/NewLanding";
import Middle from "./Components/Middle"
import AboutUs from "./Components/AboutUs";
// import Footer from .....
import "./App.css";

function App() {
  return (
    <div className="bg-blue-600 ">
      <div><Header /></div>
      <div className="">
        <NewLanding />
      </div>
      <div>
        <Middle />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
