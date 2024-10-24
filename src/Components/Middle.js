import img_1 from "../Images/Group 1.svg";
import img_2 from "../Images/Group 3.svg";
import img_3 from "../Images/Group 5.svg";
import img_4 from "../Images/Group 7.svg";
import { motion } from "framer-motion";
import Carrousel from "./Carrousel";
import { GiDeliveryDrone } from "react-icons/gi";
import Card from "./Card";

const img1Wrapped = (
  <div>
    <div>
      <GiDeliveryDrone />
    </div>
    <div>hello</div>
    <p>point</p>
  </div>
);

const slides = [img_1, img_2, img_3, img_4];

export default function Middle() {
  return (
    <div className="lg:flex px-10 bg-neutral-100 h-fit p-8 custom-md:grid custom-md:grid-rows-2">
      <div className="lg:flex-initial flex flex-col justify-center lg:w-1/3  mr-10 p-10">
        <h2 className="text-gray-400">OUR SERVICES</h2>
        <h1 className="text-5xl py-3">We provide a lot of cool services</h1>
        <p className="text-gray-400">
          Eros duis nisi justo sollicitudin molestie interdum sodales primis
          praesent sociis, fermentum consequat pharetra eleifend aenean mauris
          orci lacus viverra sociosqu, leo phasellus tempus sapien maecenas nunc
          ornare class rutrum.
        </p>
        <motion.button
          className="place-self-start p-3 mt-3 bg-blue-600 rounded-2xl text-white hover:bg-blue-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Our services
        </motion.button>
      </div>
      <div className="mx-auto">
        <div className="max-w-lg">
          <Carrousel autoSlide={false}>
            {slides.map((i) => (
              <img src={i} alt="img" className="rounded-lg" />
            ))}
          </Carrousel>
        </div>
      </div>
    </div>
  );
}
