'use client'

import { useTranslations } from '@/lib/translations'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import Link from 'next/link'

// Blog posts data - you can move this to a separate file or database later
const blogPosts = [
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <img src="/ANFAIA_logo_web.png" alt="ANFAIA Logo" className="w-40 h-auto cursor-pointer" />
          </Link>
          <div className="flex items-center space-x-4">
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
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">{t.blog.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full cursor-pointer hover:scale-105">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title[language]}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/culture.webp' // Fallback image
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="hover:text-blue-600 transition-colors">{post.title[language]}</CardTitle>
                  <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'gl' ? 'gl-ES' : 'en-US')}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4 flex-grow">{post.summary[language]}</p>
                  <span className="text-blue-600 font-semibold hover:underline">{t.blog.readMore} →</span>
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
