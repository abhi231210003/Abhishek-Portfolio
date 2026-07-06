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
        <section id='experience' className='pt-16 pb-16 text-white'>
            <div className="mx-auto w-full max-w-7xl px-6">
                {/* Header */}
                <div data-aos="fade-down" className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Work <span className='text-cyan-300'>Experience</span></h1>
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
                            <div className="p-6 md:p-8">
                                {/* Header Row */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className="p-3 rounded-lg bg-cyan-400/20 border border-cyan-400/30 shrink-0">
                                            <FaBriefcase className="w-6 h-6 text-cyan-300" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                            <div className="flex flex-wrap gap-4 items-center text-sm text-slate-300">
                                                <span className="font-semibold text-cyan-200">{exp.company}</span>
                                                <span className="flex items-center gap-1">
                                                    <FaMapMarkerAlt className="w-3 h-3" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {exp.certificateLink && (
                                        <Link
                                            href={exp.certificateLink}
                                            target="_blank"
                                            className="px-4 py-2 rounded-lg border border-cyan-400/50 text-cyan-200 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400 transition-all flex items-center gap-2 shrink-0"
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
                                            <li key={pointIdx} className="flex items-start gap-3 text-slate-300">
                                                <span className="text-cyan-300 mt-1">›</span>
                                                <span>{point}</span>
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
