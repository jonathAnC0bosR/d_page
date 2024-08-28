import img from "../bg_1.svg"

export default function Landing() {
    return (<div className="sm:flex h-screen">
        <div className="sm:flex sm:flex-1 justify-center">
            <h1 className="sm:text-6xl text-4xl px-10 text-white font-extrabold mt-20 text-center pb-5">Boost your solar plant production </h1>
        </div>
        <div className="flex-1">
            <img src={img} alt="svg" />
        </div>
    </div>
    )
}