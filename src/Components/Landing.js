import Clickable from "./Clickable";
// import g_logo from "../g_logo.jpg"
import t_img from "../dron_T.png";
import { ReactTyped } from "react-typed";

export default function Landing() {
  return (
    <div className="h-screen text-white ">
      <div className="justify-center grid grid-rows-2">
        <div className="mx-4 px-10 place-self-center my-10">
          <div className="h-28 mb-8">
            <h1 className="sm:text-6xl text-4xl text-white font-extrabold">
              <ReactTyped
                strings={["Boost your solar plant production."]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></ReactTyped>
            </h1>
          </div>
          <p className="my-5">

          </p>
        </div>
        <div className=" grid grid-cols-2 h-1 my-10">
              <div>
                Request a quotation 
              </div>
              <div>
                Watch a preview
              </div>
        </div>
      </div>
      <div className="justify-center">
        <img src={t_img} alt="logo" className="w rounded-3xl " />
      </div>
    </div>
  );
}
