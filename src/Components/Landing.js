import img from "../bg_1.svg"

export default function Landing() {
    return (<div className="flex h-screen">
        <div className=" flex flex-1 justify-center">
            <h1 className="text-6xl px-10 text-white font-extrabold mt-20">Boost your solar plant production </h1>
        </div>
        <div className="flex-1">
            <img src={img} alt="svg" />

        </div>
    </div>
    )
}