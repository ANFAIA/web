'use client'

import { useState } from 'react'
import { useTranslations } from '@/lib/translations'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

// Blog posts data - you can move this to a separate file or database later
const blogPosts = [
  {
    slug: 'un-escarpado-maravilloso-viaje-verano-parte-3',
    title: {
      es: 'Un escarpado y maravilloso viaje de verano. Parte 3',
      en: 'A Steep and Wonderful Summer Journey. Part 3',
      gl: 'Unha escarpada e marabillosa viaxe de verán. Parte 3'
    },
    summary: {
      es: 'Carolina Tomas recupera el rumbo de su proyecto: desbloquea CrewAI, conecta modelos más capaces y convierte el trabajo en un MVP funcional con una interfaz sencilla.',
      en: 'Carolina Tomas finds her way again: she unblocks CrewAI, connects more capable models, and turns the work into a functional MVP with a simple interface.',
      gl: 'Carolina Tomas recupera o rumbo do seu proxecto: desbloquea CrewAI, conecta modelos máis capaces e converte o traballo nun MVP funcional cunha interface sinxela.'
    },
    image: '/blog/images/summer-journey-part-3.png',
    date: '2026-06-30'
  },
  {
    slug: 'un-escarpado-maravilloso-viaje-verano-parte-2',
    title: {
      es: 'Un escarpado y maravilloso viaje de verano. Parte 2',
      en: 'A Steep and Wonderful Summer Journey. Part 2',
      gl: 'Unha escarpada e marabillosa viaxe de verán. Parte 2'
    },
    summary: {
      es: 'Carolina Tomas continúa su viaje de verano entre pivotes técnicos, sistemas de agentes, modelos locales y el aprendizaje de volver a mirar los mapas cuando el camino cambia.',
      en: 'Carolina Tomas continues her summer journey through technical pivots, agent systems, local models, and the lesson of looking back at the maps when the route changes.',
      gl: 'Carolina Tomas continúa a súa viaxe de verán entre pivotes técnicos, sistemas de axentes, modelos locais e a aprendizaxe de volver mirar os mapas cando o camiño cambia.'
    },
    image: '/blog/images/summer-journey-part-2.jpg',
    date: '2026-06-11'
  },
  {
    slug: 'un-escarpado-maravilloso-viaje-verano-parte-1',
    title: {
      es: 'Un escarpado y maravilloso viaje de verano. Parte 1',
      en: 'A Steep and Wonderful Summer Journey. Part 1',
      gl: 'Unha escarpada e marabillosa viaxe de verán. Parte 1'
    },
    summary: {
      es: 'Carolina Tomas comparte el inicio de su experiencia con la beca ANFAIA: una idea educativa ambiciosa, el aterrizaje en el briefing y el aprendizaje de reducir para construir algo funcional.',
      en: 'Carolina Tomas shares the beginning of her ANFAIA scholarship experience: an ambitious educational idea, the landing into the briefing, and the lesson of reducing scope to build something functional.',
      gl: 'Carolina Tomas comparte o inicio da súa experiencia coa bolsa ANFAIA: unha idea educativa ambiciosa, a aterraxe no briefing e a aprendizaxe de reducir para construír algo funcional.'
    },
    image: '/blog/images/summer-journey-part-1.jpg',
    date: '2026-05-29'
  },
  {
    slug: 'clausura-becas-verano-2025',
    title: {
      es: 'Clausura de las Becas de Verano ANFAIA 2025: jóvenes investigadores impulsan proyectos de IA con impacto social',
      en: 'Closing Ceremony of ANFAIA Summer Scholarships 2025: Young Researchers Drive AI Projects with Social Impact',
      gl: 'Clausura das Bolsas de Verán ANFAIA 2025: mozos investigadores impulsan proxectos de IA con impacto social'
    },
    summary: {
      es: 'El pasado jueves 25 de septiembre, la Asociación ANFAIA celebró el acto de clausura de las Becas de Verano ANFAIA 2025 sobre Inteligencia Artificial, un programa que durante los meses de julio y agosto reunió a cinco jóvenes investigadores en torno a proyectos innovadores con impacto social.',
      en: 'Last Thursday, September 25th, the ANFAIA Association held the closing ceremony of the ANFAIA Summer Scholarships 2025 on Artificial Intelligence, a program that during the months of July and August brought together five young researchers around innovative projects with social impact.',
      gl: 'O pasado xoves 25 de setembro, a Asociación ANFAIA celebrou o acto de clausura das Bolsas de Verán ANFAIA 2025 sobre Intelixencia Artificial, un programa que durante os meses de xullo e agosto reuniu a cinco mozos investigadores ao redor de proxectos innovadores con impacto social.'
    },
    image: '/blog/images/blog1.jpg',
    date: '2025-10-03'
  },
  {
    slug: 'origen-anfaia-proyectos',
    title: {
      es: 'ANFAIA: Origen, Misión y Proyectos que Transforman la Sociedad con Innovación',
      en: 'ANFAIA: Origin, Mission and Projects Transforming Society with Innovation',
      gl: 'ANFAIA: Orixe, Misión e Proxectos que Transforman a Sociedade con Innovación'
    },
    summary: {
      es: 'Descubre cómo nació ANFAIA, nuestra misión de democratizar la inteligencia artificial y los proyectos innovadores que estamos desarrollando en cultura, salud, educación y sostenibilidad.',
      en: 'Discover how ANFAIA was born, our mission to democratize artificial intelligence and the innovative projects we are developing in culture, health, education and sustainability.',
      gl: 'Descobre como naceu ANFAIA, a nosa misión de democratizar a intelixencia artificial e os proxectos innovadores que estamos desenvolvendo en cultura, saúde, educación e sustentabilidade.'
    },
    image: '/culture.webp',
    date: '2025-10-03'
  }
]

export default function BlogPage() {
  const { t, language } = useTranslations()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <img src="/ANFAIA_logo_web.png" alt="ANFAIA Logo" className="w-40 h-auto cursor-pointer" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/#inicio" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    {t.nav.inicio}
                  </Link>
                </li>
                <li>
                  <Link href="/#programa" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    {t.nav.programa}
                  </Link>
                </li>
                <li>
                  <Link href="/#ética" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    {t.nav.etica}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm font-medium text-blue-600 transition-colors duration-200">
                    {t.nav.blog}
                  </Link>
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
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/#inicio"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {t.nav.inicio}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#programa"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {t.nav.programa}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#ética"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {t.nav.etica}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-blue-600 transition-colors duration-200"
                  >
                    {t.nav.blog}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">{t.blog.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col h-full cursor-pointer border-0 shadow-md">
                <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                  <img
                    src={post.image}
                    alt={post.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/culture.webp'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-1 w-12 bg-blue-600 rounded-full" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'gl' ? 'gl-ES' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-3">
                    {post.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col pt-0">
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {post.summary[language]}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                    <span>{t.blog.readMore}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <img src="/ANFAIA_logo_square.jpg" alt="ANFAIA Logo" className="w-32 h-auto mb-4" />
              <div className="text-gray-400">
                <p>Asociación Nacional Faro,</p>
                <p>para la Aceleración de la Inteligencia Artificial</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#inicio" className="text-gray-400 hover:text-white transition-colors duration-200">{t.nav.inicio}</Link>
                </li>
                <li>
                  <Link href="/#programa" className="text-gray-400 hover:text-white transition-colors duration-200">{t.nav.programa}</Link>
                </li>
                <li>
                  <Link href="/#ética" className="text-gray-400 hover:text-white transition-colors duration-200">{t.nav.etica}</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">{t.nav.blog}</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
              <p className="text-gray-400 mb-2">info@anfaia.org</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
