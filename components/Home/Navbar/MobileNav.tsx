import React from 'react'
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import { FaCode } from 'react-icons/fa'

type Props={
    showNav:boolean;
    closeNav:()=>void;
};

const MobileNav = ({closeNav,showNav}:Props) => {
    const navOpen=showNav ? 'translate-x-0' : 'translate-x-[100%]';
    return (
        <div>
            {/* overlay */}
            <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-100002 bg-black opacity-70 w-full h-screen`}></div>

            {/* navlinks */}
            <div className={`${navOpen} text-white fixed flex flex-col h-full transform transition-all duration-500 delay-300 w-[85%] max-w-sm bg-[#0b0d24] z-100050 right-0`}>
                <Link href="/#home" onClick={closeNav} className="mt-10 ml-6 sm:ml-10 inline-flex w-fit items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400 text-[#071023]">
                        <FaCode className="h-5 w-5" />
                    </span>
                    <span className="text-xl font-bold text-sky-400 sm:text-2xl">
                        Abhishek
                    </span>
                </Link>

                <div className="mt-14 space-y-6">
                {NavLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url} onClick={closeNav}>
                            <p className="text-white w-fit text-xl ml-8 border-b-[1.5px] pb-1 border-white sm:ml-12 sm:text-[30px] ">
                                {link.label}
                            </p>
                        </Link>
                    );
                })}
                </div>
            {/* cross icon */}
            <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
            </div>
        </div>
    )
}

export default MobileNav
