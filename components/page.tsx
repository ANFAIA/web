'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { motion } from 'framer-motion'
import { ChevronDown, Github, Youtube, Menu, X } from 'lucide-react'
import { useTranslations } from '@/lib/translations'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

export function Page() {
  const { t, language } = useTranslations()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const becasLinks = [
    { name: t.nav.convocatoria2025, href: 'https://docs.google.com/document/d/e/2PACX-1vSuT7Mb9YqG9bywfEwXlF1uznTJfb5EwGj-dJv3DI1aYao-ffYHUDRln3wntacOcRDnI7dGnOpX8y0o/pub' },
    { name: t.nav.basesGenerales, href: 'https://docs.google.com/document/d/e/2PACX-1vTTYdJO1w3Nzb4tP7lbkhs1UecyrDNPIZhJ9wKc4WYlrXDv4lGE2uZYtugKYDC6S9uQeh4tHF06_ZEf/pub' }
  ];

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <img src="ANFAIA_logo_web.png" alt="ANFAIA Logo" className="w-40 h-auto" />

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

                {/* Becas Dropdown */}
                <li className="relative">
                  <button
                    className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
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

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
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
                    </div>
                  )}
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
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
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.open('https://forms.gle/5BxnQgzP6EwbzY2t9', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {t.newsletter.button}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-6 text-lg border-2 hover:bg-gray-50"
                >
                  {t.nav.programa}
                </Button>
              </div>
            </motion.div>
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
                  <Github className="w-16 h-16 mx-auto mb-6 opacity-90" />
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
                    <Github className="mr-2 h-5 w-5" />
                    {t.scholarship.githubButton}
                  </Button>
                </CardContent>
              </Card>

              {/* Latest Blog Post Card */}
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/blog/images/blog1.jpg"
                    alt="Blog post"
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
                      ? 'Clausura de las Becas de Verano ANFAIA 2025: jóvenes investigadores impulsan proyectos de IA con impacto social'
                      : language === 'gl'
                      ? 'Clausura das Bolsas de Verán ANFAIA 2025: mozos investigadores impulsan proxectos de IA con impacto social'
                      : 'Closing Ceremony of ANFAIA Summer Scholarships 2025: Young Researchers Drive AI Projects with Social Impact'}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {language === 'es'
                      ? 'El pasado jueves 25 de septiembre, la Asociación ANFAIA celebró el acto de clausura de las Becas de Verano ANFAIA 2025 sobre Inteligencia Artificial...'
                      : language === 'gl'
                      ? 'O pasado xoves 25 de setembro, a Asociación ANFAIA celebrou o acto de clausura das Bolsas de Verán ANFAIA 2025 sobre Intelixencia Artificial...'
                      : 'Last Thursday, September 25th, the ANFAIA Association held the closing ceremony of the ANFAIA Summer Scholarships 2025 on Artificial Intelligence...'}
                  </p>
                  <Button
                    size="lg"
                    onClick={() => (window.location.href = '/blog/clausura-becas-verano-2025')}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {t.blog.readMore} →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* YouTube & Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* YouTube Card */}
              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="text-center py-12 px-8">
                  <Youtube className="w-16 h-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">{t.youtube.title}</h3>
                  <p className="text-xl text-red-50 mb-8 leading-relaxed">{t.youtube.description}</p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://www.youtube.com/@Anfaia', '_blank')}
                    className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg shadow-lg font-semibold"
                  >
                    <Youtube className="mr-2 h-5 w-5" />
                    {t.youtube.button}
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter Card */}
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="text-center py-12 px-8">
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
                    className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg shadow-lg font-semibold"
                  >
                    {t.newsletter.button}
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
                  { key: 'blog', label: t.nav.blog, href: '/blog' }
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
