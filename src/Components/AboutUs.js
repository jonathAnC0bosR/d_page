import about from "../about.svg"

export default function AboutUs() {
    return (
        <div className="h-screen bg-neutral-100">
            <div className="flex h-screen">
                <div className="flex flex-row-reverse flex-1">
                    <img className="w-5/6" src={about} alt="About svg " />
                </div>
                <div className="flex-1 place-self-center">
                    <hi className="text-gray-400 font-semibold text-sm">
                        ABOUT US
                    </hi>
                    <p>
                        Nuestro objetivo como empresa especializada es brindarle a nuestros clientes (industriales y utility) un reporte detallado
                        de lo que sucede en sus activos en operación y aplicar conocimiento especializado para indicarles acciones en corto y largo plazo
                    </p>
                </div>
            </div>
        </div>
    )
}