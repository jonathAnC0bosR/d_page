import { motion } from "framer-motion"

export default function Middle() {
    return (
        <div className="flex px-10 bg-neutral-100 h-fit p-8">
            <div className="flex-initial flex flex-col justify-center w-1/3 h-screen mr-10 p-10">
                <h2 className="text-gray-400">
                    Our services
                </h2>
                <h1 className="text-5xl py-3">
                    We provide a lot of cool services!
                </h1>
                <p className="text-gray-400">
                    Eros duis nisi justo sollicitudin molestie interdum sodales primis praesent sociis, fermentum consequat pharetra eleifend aenean mauris orci lacus viverra sociosqu, leo phasellus tempus sapien maecenas nunc ornare class rutrum.
                </p>
                <motion.button
                    className="place-self-start p-3 mt-3 bg-blue-600 rounded-2xl text-white hover:bg-blue-400"
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    >
                    Our services
                </motion.button>
            </div>
            <div className="flex-1 flex justify-center">
                <p className="">hi</p>
            </div>
        </div>
    )
}