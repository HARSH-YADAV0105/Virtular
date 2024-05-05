import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbr = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <nav className="sticky top-0 z-50 py3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex item-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src={logo} alt=" logo-is-here" srcset="" />
                        <span className="text-xl tracking-tight mt-1.5">VirtualIR</span>

                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}> {item.label} </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className='px-3 py-2 border rounded-md'>
                            Sign In
                        </a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md'>
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbr}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-20 flex flex-col justify-center items-center lg:hidden ">
                        <ul>
                           {navItems.map((item,index)=>(
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                           ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="http://" className="py-2 px-3 border rounded-md">
                                sign In
                            </a>
                            <a href="#" className=' px-2 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>
                            Create an account
                        </a>
                            
                        </div>
                        
                    </div>

                )}
            </div>
        </nav>

    )
}

export default Navbar
