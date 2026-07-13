"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { NavLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props={
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
    const [navBg,setNavBg]= useState(false);
    useEffect(()=>{
        const handler=()=>{
            if(window.scrollY>=90) setNavBg(true);
            if(window.scrollY<90) setNavBg(false);
    
        };
        window.addEventListener('scroll', handler);
        return ()=>window.removeEventListener('scroll',handler);        
    },[]);
    return (
        <div className={`translate-all ${navBg ? 'bg-[#0f142ed9] shadow-md backdrop-blur' : 'fixed'} duration-200 h-16 sm:h-20 z-10000 fixed w-full`}>
            <div className="flex h-full items-center justify-between mx-auto w-full max-w-7xl px-4 sm:px-6">
                {/* logo */}
                <Link href="/#home" className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-[#071023] hover:scale-105">
                        <FaCode className="h-5 w-5" />
                    </span>
                    <span className="hidden text-xl font-bold text-cyan-300 sm:block md:text-2xl">
                        Abhishek
                    </span>
                </Link>
                
                <div className="ml-auto flex items-center gap-4 lg:gap-8">
                    {/* navlinks */}
                    <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                        {NavLinks.map((link) => {
                            return (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    className="text-base font-medium text-white transition-all duration-200  relative no-underline after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    <p>{link.label}</p>
                                </Link>
                            );
                        })}
                    </div>

                    {/* buttons */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        {/* <Link
                            href="/#contact"
                            rel="noopener noreferrer"
                            className="hidden sm:flex px-5 md:px-8 py-3 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white items-center space-x-2"
                        >
                            <span>Hire Me</span>
                        </Link> */}
                        {/* burger menu */}
                        <HiBars3BottomRight onClick={openNav} className="h-8 w-8 cursor-pointer text-white lg:hidden" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
