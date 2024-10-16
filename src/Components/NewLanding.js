import Clickable from "./Clickable";
import t_img from "../dron_T.png";
import { ReactTyped } from "react-typed";

export default function NewLanding() {
  return (
    <div className="px-5 pb-8 text-white lg:grid lg:grid-cols-2">
      <div className="sm:my-5">
        <div className="sm:h-36 md:h-48 h-24">
          <h1 className="font-extrabold sm:text-6xl text-4xl">
            <ReactTyped
              strings={["Boost your solar plant production."]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h1>
        </div>
        <p className="lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate eget,
          eros nisl aenean scelerisque dui facilisi euismod enim, himenaeos
          curabitur sem sapien cubilia odio porta class.
        </p>

        <div className="lg:max-h-80 lg:h-screen items-center flex justify-center">
          <div className="flex justify-center flex-col lg:flex-row gap-8 sm:justify-center lg:flex-grow my-8 ">
            <Clickable text={"Request a quotation"} />
            <Clickable text={"Watch a preview"} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="rounded-lg" src={t_img} alt="Termography img " />
      </div>
    </div>
  );
}
