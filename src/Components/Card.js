export default function Card ({title, text}) {
    return (
        <div className="text-center h-64 m-4 hover:bg-indigo-400 hover:rounded-2xl hover:text-white">
            <h1 className="p-3">
                {title}
            </h1>
            <p className="text-gray-400 px-4 hover:text-white ">
                {text}
            </p>
        </div>
    )
}