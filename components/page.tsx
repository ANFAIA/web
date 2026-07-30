'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslations } from '@/lib/translations'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

export function Page() {
  const { t, language } = useTranslations()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [particles, setParticles] = useState<Array<{left: number, top: number, size: number, animationDelay: number, animationDuration: number}>>([])
  const [starPoints, setStarPoints] = useState<Array<{x: number, y: number, r: number, opacity: number}>>([])
  const [connections, setConnections] = useState<Array<{x1: number, y1: number, x2: number, y2: number, delay: number}>>([])
  const [isMounted, setIsMounted] = useState(false)

  const becasLinks = [
    { name: t.nav.convocatoria2025, href: 'https://docs.google.com/document/d/e/2PACX-1vR7SoZ4xZszy3oqNRxorgQvcMy1SSeUgLh0QTyD4zcPW8ikKrIj8BF0ysWPGFozPOt6qrtJb-EejRSd/pub' },
    { name: t.nav.basesGenerales, href: 'https://docs.google.com/document/d/e/2PACX-1vTTYdJO1w3Nzb4tP7lbkhs1UecyrDNPIZhJ9wKc4WYlrXDv4lGE2uZYtugKYDC6S9uQeh4tHF06_ZEf/pub' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      const sections = ['inicio', 'programa', 'ética']

      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Generate particles on client-side only to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true)

    // Generate floating particles
    const generatedParticles = [...Array(40)].map((_, i) => {
      const edge = i % 4
      let left, top

      if (edge === 0) { // Left edge
        left = Math.random() * 15
        top = Math.random() * 100
      } else if (edge === 1) { // Right edge
        left = 85 + Math.random() * 15
        top = Math.random() * 100
      } else if (edge === 2) { // Top edge
        left = Math.random() * 100
        top = Math.random() * 15
      } else { // Bottom edge
        left = Math.random() * 100
        top = 85 + Math.random() * 15
      }

      return {
        left,
        top,
        size: 1.5 + Math.random() * 3.5,
        animationDelay: Math.random() * 8,
        animationDuration: 8 + Math.random() * 12
      }
    })
    setParticles(generatedParticles)

    // Generate star points
    const points = [...Array(12)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 2 + 1,
      opacity: 0.5 + Math.random() * 0.3
    }))
    setStarPoints(points)

    // Generate connections
    const generatedConnections = points.slice(0, 6).map((point, i) => {
      const nextPoint = points[(i + 2 + Math.floor(Math.random() * 3)) % points.length]
      return {
        x1: point.x,
        y1: point.y,
        x2: nextPoint.x,
        y2: nextPoint.y,
        delay: i * 2
      }
    })
    setConnections(generatedConnections)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Gracias por tu interés. Te mantendremos informado en ${email} sobre nuestro programa de Becas.`)
      setIsModalOpen(false)
      setEmail('')
    } else {
      alert('Por favor, ingresa un correo electrónico válido.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50 relative">
        <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
          <img src="ANFAIA_logo_web.png" alt="ANFAIA Logo" className={`transition-all duration-300 ${isScrolled ? 'w-32' : 'w-40'} h-auto`} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-6">
                {[
                  { key: 'inicio', label: t.nav.inicio, href: '#inicio' },
                  { key: 'programa', label: t.nav.programa, href: '#programa' },
                  { key: 'ética', label: t.nav.etica, href: '#ética' }
                ].map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.key ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/blog"
                    className="text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-blue-600"
                  >
                    {t.nav.blog}
                  </a>
                </li>
                <li>
                  <a
                    href="/mentores"
                    className="text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-blue-600"
                  >
                    {t.nav.mentores}
                  </a>
                </li>

                {/* Becas Dropdown */}
                <li className="relative">
                  <button
                    className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 inline-flex items-center p-0"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                  >
                    {t.nav.becas}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                      >
                        {becasLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {link.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 z-50 backdrop-blur-md bg-white/90 shadow-lg"
            >
              <nav className="container mx-auto px-4 py-4">
                <ul className="space-y-4">
                  {[
                    { key: 'inicio', label: t.nav.inicio, href: '#inicio' },
                    { key: 'programa', label: t.nav.programa, href: '#programa' },
                    { key: 'ética', label: t.nav.etica, href: '#ética' }
                  ].map((item) => (
                    <li key={item.key}>
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-base font-medium transition-colors duration-200 ${activeSection === item.key ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/blog"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-base font-medium transition-colors duration-200 text-gray-600 hover:text-blue-600"
                    >
                      {t.nav.blog}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mentores"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-base font-medium transition-colors duration-200 text-gray-600 hover:text-blue-600"
                    >
                      {t.nav.mentores}
                    </a>
                  </li>

                  {/* Mobile Becas Links */}
                  <li>
                    <button
                      className="w-full text-left text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-between"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {t.nav.becas}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {becasLinks.map((link) => (
                          <li key={link.name}>
                            <a
                              href={link.href}
                              target="_blank"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-gray-600 hover:text-blue-600"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section with improved design */}
        <section id="inicio" className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight pb-2">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t.hero.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Announcement Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          {/* Particles Background Effect - Milky Way Style */}
          <div className="absolute inset-0 overflow-hidden opacity-55">
            {/* Ambient glow effects on edges - stronger */}
            <div className="absolute w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-[120px] -top-32 -left-32"></div>
            <div className="absolute w-[400px] h-[400px] bg-indigo-400/15 rounded-full blur-[120px] -bottom-32 -right-32"></div>

            {/* Milky Way glow effect */}
            <div className="absolute inset-0">
              <div className="absolute w-full h-2 bg-gradient-to-r from-transparent via-white/5 to-transparent top-1/4 blur-xl"></div>
              <div className="absolute w-full h-3 bg-gradient-to-r from-transparent via-blue-200/8 to-transparent top-1/3 blur-2xl"></div>
              <div className="absolute w-full h-2 bg-gradient-to-r from-transparent via-white/5 to-transparent bottom-1/3 blur-xl"></div>
            </div>

            {/* Elegant floating particles concentrated on edges */}
            {isMounted && particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)] animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`
                }}
              />
            ))}

            {/* Dynamic particle network - sparse connections */}
            {isMounted && (
              <svg className="absolute inset-0 w-full h-full opacity-20" id="particle-network">
                <defs>
                  <radialGradient id="starGlow">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Star points */}
                {starPoints.map((point, i) => (
                  <circle
                    key={`star-${i}`}
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r={point.r}
                    fill="url(#starGlow)"
                    opacity={point.opacity}
                  />
                ))}
                {/* Sparse connecting lines */}
                {connections.map((conn, i) => (
                  <line
                    key={`line-${i}`}
                    x1={`${conn.x1}%`}
                    y1={`${conn.y1}%`}
                    x2={`${conn.x2}%`}
                    y2={`${conn.y2}%`}
                    stroke="white"
                    strokeWidth="0.5"
                    opacity="0"
                    className="animate-connection"
                    style={{
                      animationDelay: `${conn.delay}s`,
                    }}
                  />
                ))}
              </svg>
            )}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-white rounded-full mx-auto mb-6"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight relative">
                <span className="relative bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,197,253,0.5)]">
                  {t.announcement.title}
                </span>
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100 mb-5">
                    Proyectos
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {[
                      { name: 'Agentic Smart Health', href: 'https://github.com/ANFAIA/Agentic-Smart-Health' },
                      { name: 'ClimaSafe', href: 'https://github.com/ANFAIA/ClimaSafe' },
                      { name: 'MalariaSentinel', href: 'https://github.com/ANFAIA/MalariaSentinel' },
                      { name: 'SkillNet', href: 'https://github.com/ANFAIA/SkillNet' }
                    ].map((project) => project.href ? (
                      <a
                        key={project.name}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-base md:text-lg font-semibold text-white shadow-xl shadow-blue-950/20 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <div
                        key={project.name}
                        className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-base md:text-lg font-semibold text-white shadow-xl shadow-blue-950/20 backdrop-blur-sm"
                      >
                        {project.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100 mb-5">
                    Mentores
                  </h3>
                  <div className="flex justify-center">
                    <a
                      href="/mentores"
                      className="bg-white/10 border border-white/20 rounded-lg px-8 py-4 text-base md:text-lg font-semibold text-white shadow-xl shadow-blue-950/20 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                    >
                      Ver mentores
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100 mb-5">
                    Patrocinador
                  </h3>
                  <div className="flex justify-center">
                    <a
                      href="https://www.cesga.es/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-white/30 rounded-lg px-8 py-6 shadow-2xl shadow-blue-950/30 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                      aria-label="Visitar CESGA"
                    >
                      <img
                        src="/logos/CESGA.png"
                        alt="Logo de CESGA, Centro de Supercomputación de Galicia"
                        className="h-16 md:h-20 w-auto object-contain"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100 mb-5">
                    Partners
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6">
                    <a
                      href="https://histora.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-white/30 rounded-lg px-8 py-6 shadow-2xl shadow-blue-950/30 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                      aria-label="Visitar Histora"
                    >
                      <img
                        src="/logos/Histora.png"
                        alt="Logo de Histora, plataforma de inteligencia artificial para gestión de datos dentales"
                        className="h-14 md:h-16 w-auto object-contain"
                      />
                    </a>
                    <a
                      href="https://gestiontickets.online/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-white/30 rounded-lg px-8 py-6 shadow-2xl shadow-blue-950/30 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                      aria-label="Visitar Gestiontickets"
                    >
                      <img
                        src="/logos/Gestiontickets.png"
                        alt="Logo de Gestiontickets, plataforma de ticketing y gestión de eventos"
                        className="h-14 md:h-16 w-auto object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* YouTube, Discord & Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* YouTube Card */}
              <Card className="h-full bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="flex h-full flex-col items-center text-center py-12 px-8">
                  <img
                    src="/logos/youtube-icon-white.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-auto mx-auto mb-6 opacity-90"
                  />
                  <h3 className="text-3xl font-bold mb-4">{t.youtube.title}</h3>
                  <p className="text-xl text-red-50 mb-8 leading-relaxed">{t.youtube.description}</p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://www.youtube.com/@Anfaia', '_blank')}
                    className="mt-auto bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg shadow-lg font-semibold"
                  >
                    <img
                      src="/logos/youtube-icon.svg"
                      alt=""
                      aria-hidden="true"
                      className="mr-2 h-5 w-5"
                    />
                    {t.youtube.button}
                  </Button>
                </CardContent>
              </Card>

              {/* Discord Card */}
              <Card className="h-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="flex h-full flex-col items-center text-center py-12 px-8">
                  <img
                    src="/logos/discord-symbol.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-auto mx-auto mb-6 opacity-90"
                  />
                  <h3 className="text-3xl font-bold mb-4">{t.discord.title}</h3>
                  <p className="text-xl text-indigo-50 mb-8 leading-relaxed">{t.discord.description}</p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://discord.gg/wGCsq88vwZ', '_blank')}
                    className="mt-auto bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-lg shadow-lg font-semibold"
                  >
                    {t.discord.button}
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter Card */}
              <Card className="h-full bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="flex h-full flex-col items-center text-center py-12 px-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t.newsletter.title}</h3>
                  <p className="text-xl text-green-50 mb-8 leading-relaxed">{t.newsletter.description}</p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://forms.gle/5BxnQgzP6EwbzY2t9', '_blank')}
                    className="mt-auto bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg shadow-lg font-semibold"
                  >
                    {t.newsletter.button}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Read Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0 shadow-xl max-w-5xl mx-auto">
              <CardContent className="text-center py-14 px-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t.readNewsletter.title}</h3>
                <p className="text-xl text-orange-50 mb-8 leading-relaxed max-w-2xl mx-auto">{t.readNewsletter.description}</p>
                <Button
                  size="lg"
                  onClick={() => window.open('https://anfaia.github.io/newsletter/index.html', '_blank')}
                  className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg shadow-lg font-semibold"
                >
                  {t.readNewsletter.button}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Areas Section */}
        <section id="areas" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.areas.title}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Exploramos diversas áreas donde la IA puede transformar la sociedad'
                  : language === 'gl'
                  ? 'Exploramos diversas áreas onde a IA pode transformar a sociedade'
                  : 'We explore various areas where AI can transform society'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                { title: t.areas.cultura.title, image: 'culture.webp', description: t.areas.cultura.description },
                { title: t.areas.arte.title, image: 'art.webp', description: t.areas.arte.description },
                { title: t.areas.salud.title, image: 'health.webp', description: t.areas.salud.description },
                { title: t.areas.robotica.title, image: 'robotic.webp', description: t.areas.robotica.description },
                { title: t.areas.sostenibilidad.title, image: 'sustainability.webp', description: t.areas.sostenibilidad.description },
                { title: t.areas.etica.title, image: 'ethic.webp', description: t.areas.etica.description },
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-2xl border-0 shadow-md">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={`${area.image}`}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="programa" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.nav.programa}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* GitHub Projects Card */}
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="text-center py-12 px-8">
                  <img
                    src="/logos/github-mark-white.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-auto mx-auto mb-6 opacity-90"
                  />
                  <h3 className="text-3xl font-bold mb-4">{t.scholarship.title}</h3>
                  <p className="text-xl text-blue-50 mb-6 leading-relaxed">
                    {t.scholarship.description}
                  </p>
                  <p className="text-lg text-blue-100 mb-8">
                    {t.scholarship.githubText}
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://github.com/anfaia', '_blank')}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-lg font-semibold"
                  >
                    <img
                      src="/logos/github-mark.svg"
                      alt=""
                      aria-hidden="true"
                      className="mr-2 h-5 w-5"
                    />
                    {t.scholarship.githubButton}
                  </Button>
                </CardContent>
              </Card>

              {/* Latest Blog Post Card */}
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/blog/images/summer-journey-part-3.png"
                    alt={language === 'es'
                      ? 'Un escarpado y maravilloso viaje de verano. Parte 3'
                      : language === 'gl'
                      ? 'Unha escarpada e marabillosa viaxe de verán. Parte 3'
                      : 'A Steep and Wonderful Summer Journey. Part 3'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'culture.webp'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t.blog.latestPost}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 line-clamp-3 group-hover:text-blue-600 transition-colors">
                    {language === 'es'
                      ? 'Un escarpado y maravilloso viaje de verano. Parte 3'
                      : language === 'gl'
                      ? 'Unha escarpada e marabillosa viaxe de verán. Parte 3'
                      : 'A Steep and Wonderful Summer Journey. Part 3'}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {language === 'es'
                      ? 'Carolina Tomas recupera el rumbo de su proyecto: desbloquea CrewAI, conecta modelos más capaces y convierte el trabajo en un MVP funcional con una interfaz sencilla.'
                      : language === 'gl'
                      ? 'Carolina Tomas recupera o rumbo do seu proxecto: desbloquea CrewAI, conecta modelos máis capaces e converte o traballo nun MVP funcional cunha interface sinxela.'
                      : 'Carolina Tomas finds her way again: she unblocks CrewAI, connects more capable models, and turns the work into a functional MVP with a simple interface.'}
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.open('/blog/un-escarpado-maravilloso-viaje-verano-parte-3', '_blank')}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {t.blog.readMore} →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ethics Section */}
        <section id="ética" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ethics.title}</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{t.ethics.description}</p>
              </div>
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <ul className="space-y-6">
                    {t.ethics.commitments.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-blue-600 transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:bg-white transition-colors"></div>
                        </div>
                        <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <p className="text-lg text-gray-600 leading-relaxed text-center">{t.ethics.conclusion}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <img src="ANFAIA_logo_square.jpg" alt="ANFAIA Logo" className="w-32 h-auto mb-4" />
              <div className="text-gray-400">
                <p>Asociación Nacional Faro,</p>
                <p>para la Aceleración de la Inteligencia Artificial</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                {[
                  { key: 'inicio', label: t.nav.inicio },
                  { key: 'programa', label: t.nav.programa },
                  { key: 'ética', label: t.nav.etica },
                  { key: 'blog', label: t.nav.blog, href: '/blog' },
                  { key: 'mentores', label: t.nav.mentores, href: '/mentores' }
                ].map((item) => (
                  <li key={item.key}>
                    <a href={'href' in item ? item.href : `#${item.key}`} className="text-gray-400 hover:text-white transition-colors duration-200">{item.label}</a>
                  </li>
                ))}
               
                <li>
                  <a 
                    href="https://docs.google.com/document/d/e/2PACX-1vSYW5wIThnu-WR2ji_cdaMuWhxbqopbHdZwhLyiKC2WV77owIJqqvzPl691etyZ_l3hc098v17xuSHo/pub" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {t.footer.legalNotice}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/document/d/e/2PACX-1vSFn9FHOtk83no0OTTN09rF9iHWIEJBqvdKToBenau6sPezSZqo9DDgzw8twhTZuxPM2Rt8-i9emJZo/pub" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {t.footer.privacyPolicy}
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
              <p className="text-gray-400 mb-2">info@anfaia.org</p>
              <p className="text-gray-400"></p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Únete a Nuestro Programa de Becas</DialogTitle>
            <DialogDescription>
              Déjanos tu correo electrónico y te mantendremos informado sobre las fechas de apertura y los requisitos del programa.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <DialogFooter>
              <Button type="submit">Enviar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
