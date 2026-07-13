'use client'
import React from 'react'
import Link from 'next/link'
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'

const Resume = () => {
    const experiences = [
        {
            id: 1,
            title: 'Full Stack Web Developer Intern',
            company: 'NIT Delhi',
            duration: 'June 2025 - Present',
            location: 'Delhi, India',
            description: [
                'Contributed to the end-to-end transition of the Official NIT Delhi Website from WordPress to a Next.js, Node.js, and MongoDB stack, modernizing 100+ webpages',
                'Worked on 5+ internal web applications, including Faculty Profile Systems used by 150+ faculty members',
                'Built and maintained key website modules including the Convocation and Training & Placement (T&P) portals',
            ],
            skills: ['Next.js', 'Node.js', 'MongoDB', 'JavaScript', 'REST API'],
            certificateLink: '#',
        },
        {
            id: 2,
            title: 'AI/ML Research Intern',
            company: 'DAViSE LAB, NIT Delhi',
            duration: 'June 2025 - July 2025',
            location: 'Delhi, India',
            description: [
                'Developed an AI-assisted water quality monitoring system for smart cities using a multi-layered Edge-Fog-Cloud architecture',
                'Engineered real-time Water Contamination Analysis (WCA) algorithms for edge devices, achieving 96.2% detection accuracy and a 95% reduction in response time',
                'Implemented advanced machine and deep learning models including GRU, LSTM, and CNN networks for water quality forecasting',
            ],
            skills: ['Python', 'GRU', 'LSTM', 'CNN', 'Machine Learning', 'Deep Learning'],
            certificateLink: '#',
        },
    ]

    return (
        <section id='experience' className='py-12 text-white md:py-16'>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                {/* Header */}
                <div data-aos="fade-down" className="mb-8 text-center md:mb-12 ">
                    <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Work <span className='text-cyan-300'>Experience</span></h1>
                </div>

                {/* Experience Cards */}
                <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                        <div 
                            key={exp.id} 
                            data-aos="fade-up" 
                            data-aos-delay={idx * 100}
                            className="group rounded-2xl border border-white/10 bg-[#0b1220]/60 overflow-hidden hover:border-white/20 transition-all"
                        >
                            <div className="p-5 sm:p-6 md:p-8">
                                {/* Header Row */}
                                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div className="flex flex-1 items-start gap-4">
                                        <div className="shrink-0 rounded-lg border border-cyan-400/30 bg-cyan-400/20 p-2.5 sm:p-3">
                                            <FaBriefcase className="h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="mb-1 text-lg font-bold leading-7 text-white sm:text-xl md:text-2xl">{exp.title}</h3>
                                            <div className="flex flex-col gap-2 text-sm text-slate-300 md:flex-row md:flex-wrap md:items-center md:gap-4">
                                                <span className="font-semibold text-cyan-200">{exp.company}</span>
                                                <div className="flex min-w-0 items-center justify-between gap-3">
                                                    <span className="flex min-w-0 items-center gap-1">
                                                        <FaMapMarkerAlt className="h-3 w-3 shrink-0" />
                                                        <span className="truncate">{exp.location}</span>
                                                    </span>
                                                    {exp.certificateLink && (
                                                        <Link
                                                            href={exp.certificateLink}
                                                            target="_blank"
                                                            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-cyan-400/50 px-2.5 py-1 text-xs font-medium text-cyan-200 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 md:hidden"
                                                        >
                                                            Certificate
                                                            <FaExternalLinkAlt className="h-2.5 w-2.5" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {exp.certificateLink && (
                                        <Link
                                            href={exp.certificateLink}
                                            target="_blank"
                                            className="hidden w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-cyan-400/50 px-4 py-2 text-sm font-medium text-cyan-200 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 sm:w-fit md:flex"
                                        >
                                            Certificate
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                        </Link>
                                    )}
                                </div>

                                {/* Duration */}
                                <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                                    <FaCalendarAlt className="w-4 h-4" />
                                    {exp.duration}
                                </div>

                                {/* Description Points */}
                                <div className="mb-6">
                                    <ul className="space-y-2">
                                        {exp.description.map((point, pointIdx) => (
                                            <li key={pointIdx} className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                                                <span className="mt-1 text-cyan-300">&gt;</span>
                                                <span className="min-w-0">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skills */}
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span 
                                                key={skill} 
                                                className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-xs text-cyan-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Resume
