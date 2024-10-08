import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Link from './Link'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="relative flex py-3 text-white">
        <div className="lg:flex lg:flex-1 lg:px-8">
          <h1 className="flex px-4 text-2xl font-bold">
            PVMEX
          </h1>
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
          <button onClick={toggleMenu} className="text-white text-3xl size-11 absolute top-3 right-3">
            <FiMenu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="grid gap-1 bg-white text-black mx-1  p-4 rounded-md shadow-lg lg:hidden ">
          <p className='hover:font-extrabold'>Home</p>
          <p className='hover:font-extrabold'>Services</p>
          <p>Resources</p>
          <p>Us</p>
          <p>Contact</p>
        </div>
      )}
    </div>
  );
}
