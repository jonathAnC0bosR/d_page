import {GiDeliveryDrone} from "react-icons/gi"

export default function Card ({title, text}) {
    return (
        <div className="group bg-neutral-100 drop-shadow-md h-64 m-4 hover:bg-indigo-300 hover:rounded-xl text-center pt-5">
            <div className="p-4 mx-auto text-sky-600 text-4xl rounded-full bg-sky-100 w-fit group-hover:bg-white">
                <GiDeliveryDrone/>
            </div>
            <h1 className="p-3 group-hover:text-white group-hover:font-bold">
                {title} 
            </h1>
            <p className="text-gray-400 px-4 group-hover:text-white">
                {text}
            </p>
        </div>
    )
}