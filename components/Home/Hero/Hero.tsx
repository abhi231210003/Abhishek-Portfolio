"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { BiEnvelope } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ParticlesHero from './ParticleBackground';
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK, PROJECTS_PAGE_LINK, RESUME_LINK } from '@/constant/constant'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0d0d1f] pt-20 pb-12 text-white sm:pt-24 sm:pb-14 xl:min-h-screen xl:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20" />
      <ParticlesHero />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 xl:min-h-[calc(100vh-5rem)]">
        <div className="grid w-full items-center gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p data-aos="fade-up" className="mb-4 inline-flex max-w-full items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/90 sm:text-sm sm:tracking-[0.35em] lg:justify-start">
              <span className="h-px w-8 shrink-0 bg-cyan-300/80 sm:w-10" />
              Welcome to my portfolio
            </p>

            <h1 data-aos="fade-up" data-aos-delay="150" className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{' '}
              <span className="text-cyan-300">Abhishek Kumar</span>
            </h1>

            <h2 data-aos="fade-up" data-aos-delay="300" className="mt-4 min-h-8 text-xl font-semibold text-slate-200 sm:text-3xl md:text-4xl">
            <Typewriter
              options={{
                strings: ['Full-Stack Developer', 'AI/ML Developer', 'Competitive programmer','Gen AI Enthusiast'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                // wrapperClassName: 'pl-2',
              }}
            />
          </h2>

            <p data-aos="fade-up" data-aos-delay="450" className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              {/* I build modern, fast, and responsive web experiences with a strong focus on clean UI, smooth
              interactions, and practical solutions that help ideas become products. */}
              {/* I enjoy building scalable web applications, exploring artificial intelligence, and solving real-world problems through technology. I&apos;m passionate about learning new technologies, contributing to impactful projects, and continuously improving my skills in software development and machine learning. */}
              Passionate Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. Experienced in full-stack development, AI/ ML, and building AI-powered applications.
            </p>

            <div data-aos="fade-up" data-aos-delay="600" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 sm:px-7"
              >
                View Resume
                <FiArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href={PROJECTS_PAGE_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/50 bg-transparent px-6 py-3.5 text-sm font-semibold text-cyan-200 transition-colors duration-200 hover:border-cyan-300 hover:bg-cyan-300/10 sm:px-7"
              >
                View Projects
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="750" className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
              <a
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-14 sm:w-14"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-14 sm:w-14"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href={EMAIL_LINK}
                aria-label="Send email"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-14 sm:w-14"
              >
                <BiEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="250" className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative aspect-square w-[min(74vw,18rem)] overflow-hidden rounded-full border-8 border-white/10 bg-[#10162f] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:w-[21rem] md:w-[23rem] lg:w-[25rem] xl:w-[30rem]">
              <Image
                src="/images/s1.jpg"
                alt="Abhishek Kumar portrait"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
