"use client";
import React from 'react'
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiMongodb,
    SiGooglegemini,
    SiFastapi,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
} from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'
import { FaDatabase, FaTools, FaCode, FaLock, FaChartBar } from 'react-icons/fa'

const categories = [
    {
        title: 'Languages',
        items: [
            { name: 'C++ (DSA)', icon: <FaCode /> },
            { name: 'C', icon: <FaCode /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'SQL', icon: <FaDatabase /> },
        ],
    },
    {
        title: 'AI/ML & GenAI',
        items: [
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'TensorFlow', icon: <GiBrain /> },
            { name: 'Pandas', icon: <SiPandas  /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn  /> },
            { name: 'Matplotlib', icon: <FaChartBar  /> },
            { name: 'OpenCV', icon: <GiBrain /> },
            { name: 'LLMs', icon: <GiBrain /> },
            { name: 'Prompt Engineering', icon: <GiBrain /> },
            { name: 'Gemini API', icon: <SiGooglegemini /> },
            { name: 'RAG (Basic)', icon: <GiBrain /> },
            { name: 'AI-Powered App Development', icon: <GiBrain /> },
        ],
    },
    {
        title: 'Web Development',
        items: [
            { name: 'HTML/CSS', icon: <FaTools /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            { name: 'React.js', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Express.js', icon: <SiNodedotjs /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'PostgreSQL', icon: <FaDatabase /> },
            { name: 'REST APIs', icon: <FaDatabase /> },
            { name: 'FastAPI', icon: <SiFastapi /> },
            { name: 'Clerk Authentication', icon: <FaLock /> },
        ],
    },
    // {
    //     title: 'Cloud & DevOps',
    //     items: [
    //         { name: 'Docker', icon: <SiDocker /> },
    //         { name: 'Kubernetes', icon: <SiKubernetes /> },
    //         { name: 'AWS', icon: <FaAws /> },
    //         { name: 'CI/CD', icon: <SiGithub /> },
    //     ],
    // },
    // {
    //     title: 'Tools',
    //     items: [
    //         { name: 'Git', icon: <SiGit /> },
    //         { name: 'GitHub', icon: <SiGithub /> },
    //         { name: 'VS Code', icon: <VscVscode /> },
    //         { name: 'Postman', icon: <SiPostman /> },
    //         { name: 'NPM / PNPM', icon: <SiNpm /> },
    //         { name: 'Vercel', icon: <SiVercel /> },
    //     ],
    // },
]

const Skills = () => {
    return (
        <section id="skills" className="py-12 text-white md:py-16">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                <h2 data-aos="fade-right" className="text-center text-3xl font-bold text-gray-100 sm:text-4xl md:text-5xl">Technical <span className="text-cyan-300">Expertise</span></h2>

                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
                    {categories.map((cat, idx) => (
                        <div key={cat.title} data-aos="fade-up" data-aos-delay={idx * 80}>
                            <h3 className="mb-4 text-sm tracking-widest text-slate-300">{cat.title.toUpperCase()}</h3>
                            <div className="grid grid-cols-2 gap-3 grid-cols-3">
                                {cat.items.map((item) => (
                                    <div key={item.name} className="flex min-h-28 transform flex-col items-center justify-center gap-2 rounded-xl border border-white/6 bg-[#0f1724]/60 p-3 text-center text-sm text-slate-200 transition hover:scale-105 sm:p-4">
                                        <div className="mb-1 text-2xl text-cyan-300">{item.icon}</div>
                                        <div className="max-w-full break-words text-xs leading-5">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coding Profiles below categories */}
                    
            </div>
        </section>
    )
}

export default Skills

