'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/constant/projects'
import { FiGithub } from 'react-icons/fi'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
    // Display only first 3 projects on home page
    const displayedProjects = projectsData.slice(0, 3)

    return (
        <section id="projects" className='py-12 text-white md:py-16'>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                <div data-aos="fade-down" className="mb-6 sm:mb-8 text-center">
                    <p className="text-sm tracking-widest text-cyan-200 uppercase mb-2">WHAT I&apos;VE BUILT</p>
                    <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Featured <span className='text-cyan-300'>Projects</span></h1>
                </div>

                <div className="mt-10 space-y-8 md:mt-16 md:space-y-10">
                    {displayedProjects.map((project, idx) => (
                        <div key={project.id} data-aos="fade-up" data-aos-delay={idx * 100} className="rounded-2xl border border-white/10 bg-[#0b1220]/60 overflow-hidden hover:border-white/20 transition-all">
                            <div className="grid grid-cols-1 items-center gap-5 p-4 sm:gap-6 sm:p-6 lg:grid-cols-5">
                                <div className="aspect-[4/3] overflow-hidden rounded-xl lg:col-span-2">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-3 flex flex-col justify-between">
                                    <div>
                                        <div className="mb-3 flex items-start gap-3">
                                            <div className="shrink-0 rounded-lg bg-cyan-400/20 p-2">
                                                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold leading-6 text-white sm:text-xl">{project.title}</h3>
                                        </div>
                                        <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>

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
                                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-white transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
                                        >
                                            <FiGithub className="w-4 h-4" />
                                            GitHub
                                        </Link>
                                        {project.liveLink && (
                                            <Link
                                                href={project.liveLink}
                                                target="_blank"
                                                className="flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition-all hover:bg-cyan-300 sm:w-auto"
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

                {/* Show More Button */}
                <div data-aos="fade-up" className="mt-10 flex justify-center md:mt-12">
                    <Link
                        href="/projects"
                        className="w-full rounded-lg bg-cyan-400 px-8 py-3 text-center font-semibold text-slate-950 transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 sm:w-auto"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Projects
