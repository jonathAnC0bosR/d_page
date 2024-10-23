import { UilBars } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function NewHeader() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="flex justify-between items-center text-white py-3 px-8 md:px-32 fixed top-0 right-0 z-50 overflow-x-hidden w-full h-20 bg-blue-700">
            <h1 className="text-2xl font-bold">ECODRON</h1>
            <ul className="hidden lg:flex items-center gap-12 font-semibold text-base">
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Nosotros</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Servicios</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Objetivo</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Noticias</li>
                <li className="p-3 hover:bg-neutral-100 hover:text-black rounded-md transition-all cursor-pointer">Contacto</li>
            </ul>

            <div className="lg:hidden ">
                <button
                    onClick={toggleMenu}
                    className="text-white text-3xl size-11 absolute top-3 right-3 "
                >
                    <UilBars size="40" />
                </button>
            </div>

            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 300 }}
                            transition={{ duration: 0.5 }}
                            className='fixed top-3 left-0 right-0  z-40  rounded-md shadow-lg lg:hidden mx-6'
                            key="menu"
                        >
                            <div className="fixed top-14 left-0 right-0 grid gap-1 bg-white text-black p-4 rounded-md shadow-lg z-40 lg:hidden mx-6">
                                <button className='w-full p-4 text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                                    Nosotros
                                </button>
                                <button className='w-full p-4 text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                                    Servicios
                                </button>
                                <button className='w-full p-4 text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                                    Objetivo
                                </button>
                                <button className='w-full p-4 text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
                                    Contacto
                                </button>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </header >
    )
}