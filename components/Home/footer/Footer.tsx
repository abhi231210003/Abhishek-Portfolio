import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0b0d24] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <Link href="/#home" className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-300 text-[#071023] hover:scale-105">
                        <FaCode className="h-4 w-4" />
                    </span>
                    <span className="hidden text-xl font-bold text-cyan-300 sm:block md:text-2xl">
                        Abhishek
                    </span>
                </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              Building thoughtful web experiences, AI-powered tools, and practical software with curiosity and care.
            </p>
          </div>

          <nav aria-label="Footer quick links" className="md:justify-self-end">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Quick Links
            </h2>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 md:max-w-sm md:justify-end">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-slate-400">
          &copy; {currentYear} Abhishek Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
