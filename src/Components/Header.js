import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Link from './Link';
// import g_logo from '../g_logo.jpg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header with fixed position */}
      <div className="flex py-3 text-white bg-blue-600 fixed top-0 left-0 right-0 z-50 h-16 w-full overflow-x-hidden">
        <div className="flex lg:flex-1 px-14 items-center">
          <div>
            <h1 className="lg:flex px-4 text-2xl font-bold">
              ECODRON
            </h1>
          </div>
        </div>

        <div className="lg:flex lg:flex-1 lg:items-center hidden">
          <p className="flex-1 text-center relative after:content-[''] after:block after:w-16 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-white after:absolute after:bottom-[-2px]">
            Home
          </p>
          <Link name="Services" />
          <Link name="Resources" />
          <Link name="Us" />
          <Link name="Contact" />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl size-11 absolute top-3 right-3"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-14 left-0 right-0 grid gap-1 bg-white text-black p-4 rounded-md shadow-lg z-40 lg:hidden w-full">
          <p className="hover:font-extrabold">Home</p>
          <p className="hover:font-extrabold">Services</p>
          <p className="hover:font-extrabold">Resources</p>
          <p className="hover:font-extrabold">Us</p>
          <p>Contact</p>
        </div>
      )}
    </>
  );
}

