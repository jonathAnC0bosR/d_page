import { ContactMail, DescriptionOutlined } from "@mui/icons-material";
import { ReactTyped } from "react-typed";
import tg from "../Images/TM.jpeg"
import { motion,} from "framer-motion";

export default function Landing() {
  return (
    <div className="px-5 py-6 text-white lg:grid lg:grid-cols-2 rounded-md mx-4">
      <div className="my-5">
        <div className="sm:h-36 ">
          <h1 className="font-extrabold sm:text-6xl text-4xl">
            <ReactTyped
              strings={["Boost your solar plant production."]}
              typeSpeed={40}
              backSpeed={50}
            // loop
            />
          </h1>
        </div>
        <p className="lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate eget,
          eros nisl aenean scelerisque dui facilisi euismod enim, himenaeos
          curabitur sem sapien cubilia odio porta class.
        </p>
      </div>
      <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 flex flex-col lg:space-y-0 space-y-3">
        <motion.div className="row-span-2 flex justify-center"
          whileHover={{ x:-10 }}
        >
          <img src={tg} alt="Termography img" className="h-full" />
        </motion.div>
        <motion.button className="flex justify-center space-x-3 bg-neutral-100 text-black items-center lg:h-40 h-20 lg:rounded-none rounded-lg"
          whileHover={{
            // background: "linear-gradient(45deg, hsla(217, 100%, 50%, 1) 40%, hsla(0, 0%, 0%, 1) 88%",
            y: -5,
            x:10

          }}
          transition={{
            type: "spring",
            stiffness: 500
          }}
        >
          <ContactMail />
          <p>
            Request more information
          </p>
        </motion.button>
        <motion.div className="flex justify-center space-x-3 bg-neutral-100 text-black items-center lg:h-40 h-20 lg:rounded-none rounded-lg"
        whileHover={{
          x:10,
          y:5
        }}
        transition={{
          type: "spring",
          stiffness:500
        }}
        >
          <DescriptionOutlined />
          <p>
            Watch a preview
          </p>
        </motion.div>
      </div>
    </div >
  );
}
