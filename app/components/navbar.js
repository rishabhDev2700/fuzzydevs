"use client"
import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { GrClose } from "react-icons/gr";
import Link from 'next/link';
import { motion, useAnimate, stagger } from 'framer-motion';






export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='border-2 border-black/10 p-2 lg:p-0 rounded-3xl fixed top-4 left-[50%] -translate-x-[50%] z-50 w-[95%] sm:w-[70%] bg-white/30 backdrop-blur-md shadow-lg shadow-black/20 lg:flex lg:justify-between lg:overflow-clip'>
            <div className='flex justify-between items-center px-4'>

                <Link href="/"><header className='text-3xl font-light uppercase pl-2'>Fuzzydevs</header></Link>
                <motion.button className="px-2 lg:hidden" onClick={() => setIsOpen(!isOpen)} whileTap={{ rotate: "360deg" }}>
                    {isOpen ? <GrClose size={32} color='' /> :
                        <HiOutlineMenuAlt4 size={32} color='' />
                    }
                </motion.button>
            </div>
            <nav className={`nav-container flex flex-col overflow-hidden lg:flex-row lg:h-auto duration-500 transition-all ${isOpen ? "h-auto" : "h-0"}`}>
                <Link className={`nav-link px-6 py-4 lg:ml-1 hover:bg-black/30 duration-300 ${isOpen ? "opacity-100" : "opacity-0"} duration-1000`} href='/'>Home</Link>
                <Link className={`nav-link px-6 py-4 lg:ml-1 hover:bg-black/30 duration-300 ${isOpen ? "opacity-100" : "opacity-0"} duration-1000`} href='/about'>About</Link>
                <Link className={`nav-link px-6 py-4 lg:ml-1 hover:bg-black/30 duration-300 ${isOpen ? "opacity-100" : "opacity-0"} duration-1000`} href='/projects'>Projects</Link>
                <Link className={`nav-link px-6 py-4 lg:ml-1 rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl hover:bg-black/30 duration-300 ${isOpen ? "opacity-100" : "opacity-0"} duration-1000`} href='/contact'>Contact</Link>
            </nav>
        </div>

    );
}