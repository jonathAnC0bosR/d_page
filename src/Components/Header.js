// import logo from "../logo.jpg";
import Link from "./Link";
// import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex justify-center py-3 text-white">
      <div className=" items-center flex flex-1 px-8">
        <h1 className="flex px-4 text-2xl font-bold">Drone company.</h1>
      </div>
      <div className="flex flex-1 items-center">
        <p className="flex-1 text-center relative after:content-[''] after:block after:w-16 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-white after:absolute after:bottom-[-2px]">Home</p>
        <Link name="Services" />
        <Link name="Resources" />
        <Link name="Us" />
        <Link name="Contact" />
      </div>
    </div>
  );
}
