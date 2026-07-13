import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'
import { FaGraduationCap } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'

const codingProfiles = [
  {
    name: 'LeetCode',
    href: 'https://leetcode.com',
    icon: SiLeetcode,
  },
  {
    name: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org',
    icon: SiGeeksforgeeks,
  },
]

const About = () => {
  return (
    <section id="about" className="py-12 text-white md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div data-aos="fade-down" className="mb-8 text-center">
          <p className="text-sm tracking-widest text-cyan-200 uppercase mb-2">WHO I AM</p>
          <p className="text-3xl font-semibold tracking-tight text-slate-400 sm:text-5xl md:text-6xl">About <span className="text-cyan-200">Me</span></p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          {/* Left - About Text */}
          <div data-aos="fade-up" data-aos-delay="120" className="flex flex-col justify-start">
            <div className="rounded-2xl border border-white/10 bg-[#14134145] p-5 sm:p-8">
              <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                I&apos;m <span className="font-semibold text-cyan-200">Abhishek Kumar</span>, a passionate B.Tech Computer Science Engineering student specializing in <span className="font-semibold text-cyan-200">Artificial Intelligence & Machine Learning</span> at National Institute of Technology Delhi.
              </p>

              <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                I thrive at the intersection of intelligent systems and modern web development — from crafting GenAI-powered platforms to building autonomous embedded systems. I believe in learning by building, and every project is an opportunity to push my boundaries.
              </p>

              <p className="text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Beyond academics, I&apos;m an active competitive programmer with <span className="font-semibold text-cyan-200">600+ DSA problems</span> solved across LeetCode, GeeksforGeeks, HackerEarth, and Codeforces  <span className="font-semibold text-yellow-400"></span>.
              </p>

              
            </div>
          </div>

          {/* Right - Education & Coding Profiles */}
          <div data-aos="fade-up" data-aos-delay="220" className="space-y-6">
            {/* Education Box */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1220]/60 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="mt-1 p-3 rounded-lg bg-cyan-400/20 border border-cyan-400/30 shrink-0">
                  <FaGraduationCap className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <p className="text-base font-semibold leading-6 text-white sm:text-lg">National Institute Of Technology(NIT) Delhi</p>
                    <span className="w-fit whitespace-nowrap rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-300 sm:ml-2">2023-2027</span>
                  </div>
                  <p className="text-sm font-medium text-slate-400 mb-1">B.Tech Computer Science Engineering</p>
                  <p className="text-sm text-cyan-200">Specialization: AI & Machine Learning</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['AI', 'ML', 'COA', 'Data Structures', 'Algorithms', 'Database Systems', 'Web Dev', 'DSA'].map((course) => (
                      <span key={course} className="text-xs font-medium text-cyan-200 bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-1 rounded-md">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Coding Profiles */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1220]/60 p-5 sm:p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Coding Profiles</h4>
              <div className="flex flex-wrap gap-3">
                {codingProfiles.map((profile) => {
                  const Icon = profile.icon

                  return (
                    <Link
                      key={profile.name}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/10"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-cyan-200">{profile.name}</span>
                      <FiArrowUpRight className="h-4 w-4 text-cyan-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
