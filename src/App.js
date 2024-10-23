import Landing from "./Components/Landing";
import Middle from "./Components/Middle"
import AboutUs from "./Components/AboutUs";
import NewHeader from "./Components/NewHeader";

import "./App.css";

function App() {
  return (
    <div className="bg-blue-700">
      <div className="pb-16">
        <NewHeader />
      </div>
      <div className="">
        <Landing />
      </div>
      <div>
        <Middle />
      </div>
      {/* <div>
        <AboutUs />
      </div> */}
    </div>
  );
}

export default App;
