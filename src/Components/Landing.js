import Clickable from "./Clickable"
// import g_logo from "../g_logo.jpg"
import t_img from "../dron_T.png"
import { ReactTyped } from "react-typed";

export default function Landing() {
  return (<div className="lg:flex lg:h-screen text-white ">
    <div className="sm:flex-1 justify-center grid grid-rows-2">
      <div className="mx-4 px-10 place-self-center">
        <h1 className="sm:text-6xl text-4xl text-white font-extrabold"><ReactTyped strings={["Boost your solar plant production"]} typeSpeed={40} backSpeed={50} loop>

          </ReactTyped></h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate eget, eros nisl aenean scelerisque dui facilisi euismod enim, himenaeos curabitur sem sapien cubilia odio porta class.
        </p>
      </div>
      <div className="sm:flex sm:flex-1">
        <div className="flex flex-1 justify-center"><Clickable text={'Request a quotation'} /></div>
        <div className="flex flex-1 justify-center"><Clickable text={'Download a sample'} /></div>
      </div>
    </div>
    <div className="lg:flex-1 lg:flex justify-center flex">
      <img src={t_img} alt="logo" className="w-fit h-fit rounded-3xl " />
    </div>
  </div>
  );
}
