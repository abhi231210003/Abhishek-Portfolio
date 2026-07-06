'use client'
import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from '@/constant/constant'

const Contact = () => {
    return (
        <section id='contact' className='pt-16 pb-16 text-white'>
            <div className="mx-auto w-full max-w-7xl px-6">
                <div data-aos="fade-down" className="mb-12 text-center">
                    {/* <p className="text-sm tracking-widest text-cyan-200 uppercase mb-2">LET'S CONNECT</p> */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Get In <span className="text-cyan-300">Touch</span></h1>
                    <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
                        Let's Build Something Great Together.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[65%_35%]">
                    <div data-aos="fade-up" className="rounded-2xl border border-white/10 bg-[#0b1220]/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                        <div className="flex flex-col items-start text-left">

                            <p className="text-sm tracking-widest font-bold text-cyan-200 uppercase mb-2">LET'S CONNECT</p>
                            <p className="mt-2 max-w-4xl text-slate-300">
                                Whether you're looking for a Software Development Engineer, want to collaborate on AI/ML or Generative AI projects, contribute to open source, or simply discuss technology, I'd love to hear from you.
                            </p>

                            <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-5">
                                <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
                                    <span className="relative flex h-3.5 w-3.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400" />
                                    </span>
                                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">Open to </p>
                                </div>
                                <ul className="mt-4 space-y-2 text-slate-200">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                                        <span>Software Engineering Internships</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                                        <span>AI/ML and Generative AI Projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                                        <span>Open Source Collaboration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                                        <span>Technical Discussions and Networking</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="mt-4 max-w-xl italic text-slate-400 leading-6">
                                Always learning. Always building.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl border border-white/10 bg-[#0b1220]/60 p-8">
                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-cyan-400/20 border border-cyan-400/30">
                                    <BiPhone className="text-cyan-300 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Phone</p>
                                    <a href="tel:+918882637315" className="text-white hover:text-cyan-300 transition-colors">+91 8882637315</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-cyan-400/20 border border-cyan-400/30">
                                    <BiMap className="text-cyan-300 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                                    <span className="text-white">New Delhi, India</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-cyan-400/20 border border-cyan-400/30">
                                    <BiEnvelope className="text-cyan-300 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                                    <a href="mailto:abhishekkumar25225@gmail.com" className="text-white hover:text-cyan-300 transition-colors">abhishekkumar25225@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-white/10">
                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Connect With Me</p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={GITHUB_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                                >
                                    <FaGithub className="w-5 h-5" />

                                </a>
                                <a
                                    href={LINKEDIN_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                                >
                                    <FaLinkedin className="w-5 h-5" />

                                </a>
                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                                >
                                    <FaXTwitter className="w-5 h-5" />

                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                                >
                                    <FaInstagram className="w-5 h-5" />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
