'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { achievementsData } from '@/constant/achievements'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 text-white md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div data-aos="fade-down" className="mb-8 text-center md:mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Key <span className="text-cyan-300">Achievements</span></h2>
        </div>

        <div className="space-y-6">
          {achievementsData.map((achievement, idx) => (
            <div 
              key={achievement.id} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/60 p-5 transition-all hover:border-white/20 sm:p-6"
            >
              {/* Medal Icon - Top Right */}
              <div className="absolute right-4 top-4 text-cyan-300/60 transition-opacity group-hover:text-cyan-300 group-hover:opacity-100">
                <FaAward className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <div className="grid grid-cols-[56px_1fr] items-start gap-4 sm:grid-cols-[80px_1fr] sm:gap-5 md:grid-cols-[100px_1fr] md:gap-6">
                {/* Logo/Image */}
                <div className="flex items-start justify-center">
                  <div className="flex h-full w-full shrink-0 items-center justify-center overflow-hidden">
                    <Image 
                      src={achievement.image} 
                      alt={achievement.title}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain p-1"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 pr-8 text-lg font-bold leading-6 text-white md:text-xl">
                    {achievement.title}
                  </h3>
                  <p className="mb-4 text-sm leading-7 text-slate-300 md:text-base">
                    {achievement.description}
                  </p>

                  {/* Links */}
                  {achievement.links && achievement.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {achievement.links.map((link, linkIdx) => (
                        <Link
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                        >
                          {link.name}
                          <FaExternalLinkAlt className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
