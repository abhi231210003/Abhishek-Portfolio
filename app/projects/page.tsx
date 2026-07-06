'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/constant/projects'
import { FiGithub } from 'react-icons/fi'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectsPage() {
    return (
        <section className='min-h-screen pt-32 pb-16 text-white'>
            <div className="mx-auto w-full max-w-7xl px-6">
                <div data-aos="fade-down" className="mb-12 text-center">
                    <p className="text-sm tracking-widest text-cyan-200 uppercase mb-2">PORTFOLIO</p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white">All <span className='text-cyan-300'>Projects</span></h1>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        Explore my complete collection of projects showcasing my expertise in full-stack development, AI/ML, and modern web technologies.
                    </p>
                </div>

                <div className="mt-16 space-y-10">
                    {projectsData.map((project, idx) => (
                        <div key={project.id} data-aos="fade-up" data-aos-delay={idx * 100} className="rounded-2xl border border-white/10 bg-[#0b1220]/60 overflow-hidden hover:border-white/20 transition-all">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                                {/* Image */}
                                <div className="rounded-xl overflow-hidden">
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        width={600} 
                                        height={400} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-cyan-400/20">
                                                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                        </div>
                                        <p className="text-slate-300 mb-4">{project.description}</p>

                                        {/* Features */}
                                        <div className="mb-4">
                                            <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-2">Features</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.features.map((feature) => (
                                                    <span key={feature} className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-xs text-cyan-200">
                                                        ● {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Skills */}
                                        <div className="mb-6">
                                            <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.skills.map((skill) => (
                                                    <span key={skill} className="px-3 py-1 rounded-md bg-slate-700/50 border border-white/10 text-xs text-slate-200">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <Link 
                                            href={project.githubLink}
                                            target="_blank"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                                        >
                                            <FiGithub className="w-4 h-4" />
                                            GitHub
                                        </Link>
                                        {project.liveLink && (
                                            <Link 
                                                href={project.liveLink}
                                                target="_blank"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-all"
                                            >
                                                <FiExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back to Home */}
                <div className="flex justify-center mt-12">
                    <Link 
                        href="/"
                        className="px-8 py-3 rounded-lg border border-cyan-400/50 text-cyan-200 font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}
