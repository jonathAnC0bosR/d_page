import { UilBars } from '@iconscout/react-unicons'

export default function NewHeader() {

    return (
        <header className="flex justify-between items-center text-white py-3 px-8 md:px-32">
            <h1 className="text-2xl font-bold">ECODRON</h1>
            <ul className="hidden lg:flex items-center gap-12 font-semibold text-base">
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Nosotros</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Servicios</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Objetivo</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Noticias</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Contacto</li>
            </ul>
            <div className="lg:hidden block text-5xl cursor-pointer">
                <UilBars size="40"/>
            </div>
        </header>
    )
}