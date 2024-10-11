<<<<<<< HEAD
import Clickable from "./Clickable"
import g_logo from "../g_logo.jpg"
import Typed from "react-typed"

export default function Landing() {
    return (<div className="lg:flex lg:h-screen ">
        <div className="sm:flex-1 justify-center grid grid-rows-2">
            <div className="flex flex-1">
                <h1 className="sm:text-6xl text-4xl px-10 text-white font-extrabold mt-20 text-center pb-5">Boost your solar plant production </h1>
                <Typed />
            </div>
            <div className="sm:flex sm:flex-1 justify-center">
                <div className="flex flex-1 justify-center"><Clickable text={'Request a quotation'} /></div>
                <div className="flex flex-1 justify-center"><Clickable text={'Download a sample'} /></div>
            </div>
        </div>
        <div className="lg:flex-1 lg:flex justify-center flex">
            <img src={g_logo} alt="logo" className="w-4/6 h-4/6 rounded-3xl " />
=======
import Clickable from "./Clickable";
import g_logo from "../dron_T.png";

export default function Landing() {
  return (
    <div className="lg:flex lg:h-screen ">
      <div className="sm:flex-1 justify-center grid grid-rows-2">
        <div className="flex-1 grid grid-rows-2">
          <h1 className="sm:text-6xl text-4xl px-10 text-white font-extrabold self-center text-center">
            Boost your solar plant production{" "}
          </h1>
          <div className="grid grid-cols-2">
            <Clickable  text={"Request a quotation"} />
            <Clickable text={"Download a sample"} />
          </div>
>>>>>>> 8c70c77eba68678c48d734825f1c74e57a2c2f3e
        </div>
        <div className="sm:flex sm:flex-1 justify-center"></div>
      </div>
      <div className="lg:flex-1 lg:flex justify-center flex">
        <img src={g_logo} alt="logo" className="w-fit h-fit py-3 rounded-3xl " />
      </div>
    </div>
  );
}
