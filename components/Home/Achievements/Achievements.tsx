'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { achievementsData } from '@/constant/achievements'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Achievements = () => {
  return (
    <section id="achievements" className="pt-16 pb-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div data-aos="fade-down" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Key <span className="text-cyan-300">Achievements</span></h2>
        </div>

        <div className="space-y-6">
          {achievementsData.map((achievement, idx) => (
            <div 
              key={achievement.id} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="group relative rounded-2xl border border-white/10 bg-[#0b1220]/60 p-6 hover:border-white/20 transition-all overflow-hidden"
            >
              {/* Medal Icon - Top Right */}
              <div className="absolute top-4 right-4 text-3xl opacity-60 group-hover:opacity-100 transition-opacity">
                🏅
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 items-start">
                {/* Logo/Image */}
                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30 flex items-center justify-center overflow-hidden shrink-0">
                    <Image 
                      src={achievement.image} 
                      alt={achievement.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
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
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/50 text-cyan-200 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
                        >
                          {link.name}
                          <FaExternalLinkAlt className="w-3 h-3" />
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
