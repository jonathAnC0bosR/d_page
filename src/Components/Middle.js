import img_1 from "../Images/img_1.jpeg"
import img_2 from "../Images/img_2.jpeg"
import img_3 from "../Images/img_3.jpeg"
import img_4 from "../Images/img_4.jpeg"
import { motion } from "framer-motion"
import Carrousel from "./Carrousel"

const slides = [
    img_1,
    img_2,
    img_3,
    img_4
]
// import Card from "./Card"


export default function Middle() {
    return (
        <div className="lg:flex px-10 bg-neutral-100 h-fit p-8 custom-md:grid custom-md:grid-rows-2">
            <div className="lg:flex-initial flex flex-col justify-center lg:w-1/3 lg:h-screen mr-10 p-10">
                <h2 className="text-gray-400">
                    OUR SERVICES
                </h2>
                <h1 className="text-5xl py-3">
                    We provide a lot of cool services
                </h1>
                <p className="text-gray-400">
                    Eros duis nisi justo sollicitudin molestie interdum sodales primis praesent sociis, fermentum consequat pharetra eleifend aenean mauris orci lacus viverra sociosqu, leo phasellus tempus sapien maecenas nunc ornare class rutrum.
                </p>
                <motion.button
                    className="place-self-start p-3 mt-3 bg-blue-600 rounded-2xl text-white hover:bg-blue-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Our services
                </motion.button>
            </div>
            {/* <div className="lg:flex-1 lg:grid gap-3 sm:grid-cols-3 lg:grid-rows-2 items-center grid grid-rows-5">
                <Card title={"Termography"} text={"Lorem ipsum dolor sit amet consectetur, adipiscing elit eros fringilla."} />
                <Card title={"Reports"} text={"Lorem ipsum dolor sit amet consectetur, adipiscing elit eget convallis."} />
                <Card title={"Monitoring"} text={"Lorem ipsum dolor sit amet consectetur, adipiscing elit natoque erat."}/>
                <Card title={"Analysis"} text={"Lorem ipsum dolor sit amet consectetur, adipiscing elit interdum vestibulum."} />
                <Card title={"AI"} text={"Lorem ipsum dolor sit amet consectetur, adipiscing elit commodo varius."} />
                <Card title={"Debugging"} text={"Lorem ipsum dolor sit amet consectetur, adipiscing elit aenean venenatis."} />
            </div> */}
            <div className="max-w-lg">
                <Carrousel autoSlide={false}>
                    {slides.map((i) => (
                        <img src={i} alt="img" className="" />
                    ))}
                </Carrousel>
            </div>
        </div>
    )
}