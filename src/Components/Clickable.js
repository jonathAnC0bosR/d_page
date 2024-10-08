import {motion} from "framer-motion"

export default function Clickable({ text }) {
    return (
        <div className="text-white flex justify-center h-fit">
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className="p-8 bg-indigo-500 rounded-2xl">
                {text}
            </motion.button>
        </div>
    )
}