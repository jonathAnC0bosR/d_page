import {motion} from "framer-motion"

export default function Clickable({ text }) {
    return (
        <div className="text-white">
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className="sm:p-8 p-5 bg-slate-700 rounded-2xl w-60 ">
                {text}
            </motion.button>
        </div>
    )
}