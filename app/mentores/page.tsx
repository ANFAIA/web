'use client'

import { useState, useEffect } from 'react'
import { Linkedin, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useTranslations } from '@/lib/translations'

const mentorFiles = [
  'alexHermida.jpeg',
  'anxoLopez.png',
  'carolinaTomas.jpeg',
  'davidGarciaSelfa.png',
  'davidIbañez.jpeg',
  'eliasPerez.jpeg',
  'emilioAbad.jpeg',
  'hugoSuarez.jpeg',
  'ireneGallardo.jpeg',
  'ismaelFaro.jpeg',
  'ismaelRozas.jpeg',
  'marielMartinez.jpeg',
  'matiasMolinas.jpeg',
  'miguelPaz.jpeg',
  'pabloGarciaFortes.jpeg',
  'pabloPajon.jpeg',
  'sergioCarracedo.jpeg'
]

const mentorDetails: Record<string, { name?: string; expertise?: string; linkedin?: string }> = {
  'alexHermida.jpeg': {
    name: 'Álex Hermida',
    expertise: 'Principal Software Engineer',
    linkedin: 'https://www.linkedin.com/in/alexhermida/'
  },
  'anxoLopez.png': {
    name: 'Anxo López',
    expertise: 'Estudiante de IA - UVigo',
    linkedin: 'https://www.linkedin.com/in/anxo-lopez-rodriguez/'
  },
  'pabloPajon.jpeg': {
    name: 'Pablo Pajón',
    expertise: 'Ingeniero Informático',
    linkedin: 'https://www.linkedin.com/in/pablopaj%C3%B3n'
  },
  'ismaelFaro.jpeg': {
    name: 'Ismael Faro',
    expertise: 'Fundador de ANFAIA | Speaker and Startup advisor | Former IBM Reseach Executive',
    linkedin: 'https://www.linkedin.com/in/ismaelfaro/'
  },
  'carolinaTomas.jpeg': {
    name: 'Carolina Tomas',
    expertise: 'Data Analyst | AI Developer Junior | Psychology | Python | Machine and deep learning | LLM | Quantum enthusiast',
    linkedin: 'https://www.linkedin.com/in/carolina-tomas-franco/'
  },
  'davidGarciaSelfa.png': {
    name: 'David García Selfa',
    expertise: 'Coordinador de investigación en inteligencia artificial en CESGA',
    linkedin: 'https://www.linkedin.com/in/david-garc%C3%ADa-selfa-phd-772869246/'
  },
  'davidIbañez.jpeg': {
    name: 'David Ibáñez',
    expertise: 'Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/davidibanezcerdeira/'
  },
  'eliasPerez.jpeg': {
    name: 'Elías Pérez',
    expertise: 'CEO and co-founder, Quobis',
    linkedin: 'https://www.linkedin.com/in/eliasperezcarrera/'
  },
  'emilioAbad.jpeg': {
    name: 'Emilio Abad',
    expertise: 'Analista SIG',
    linkedin: 'https://www.linkedin.com/in/emilio-abad-vidal-322a52ab/'
  },
  'hugoSuarez.jpeg': {
    name: 'Hugo Suárez',
    expertise: 'Bioinformatics and Biostatistics | Machine Learning | Genomics and Genetics',
    linkedin: 'https://www.linkedin.com/in/hugo-suarez-glez/'
  },
  'ireneGallardo.jpeg': {
    name: 'Irene Gallardo',
    expertise: 'Estudiante de ingeniería biomédica',
    linkedin: 'https://www.linkedin.com/in/irene-gallardo-sierra-3bb13b329/'
  },
  'ismaelRozas.jpeg': {
    name: 'Ismael Rozas',
    expertise: 'Tech lead@ IBM Quantum',
    linkedin: 'https://www.linkedin.com/in/ismaelrozasramallal/'
  },
  'marielMartinez.jpeg': {
    name: 'Mariel Martinez',
    expertise: 'Co Fundadora ANFAIA | Computer scientist',
    linkedin: 'https://www.linkedin.com/in/marielmartinezestevez/'
  },
  'matiasMolinas.jpeg': {
    name: 'Matías Molina',
    expertise: 'CTO of HISTORA by GEMEDATA, Inc',
    linkedin: 'https://www.linkedin.com/in/matiasmolinas/'
  },
  'miguelPaz.jpeg': {
    name: 'Miguel Paz',
    expertise: 'COO & Co-Founder Innatial Developers | CTO Zander Soft | Ingeniero de software',
    linkedin: 'https://www.linkedin.com/in/miguelpazfigueroa/'
  },
  'pabloGarciaFortes.jpeg': {
    name: 'Pablo Garcia Fortes',
    expertise: 'Director & Fundador en FORTES escuela de personas',
    linkedin: 'https://www.linkedin.com/in/pablogarciafortes/'
  },
  'sergioCarracedo.jpeg': {
    name: 'Sergio Carracedo',
    expertise: 'Staff Engineer | Product Engineering, Design Systems, Developer Experience, AI Product Engineering | TypeScript, React, Vue, Go',
    linkedin: 'https://www.linkedin.com/in/sergiocarracedo/'
  }
}

function mentorNameFromFile(fileName: string) {
  const baseName = fileName.replace(/\.[^.]+$/, '').normalize('NFC')
  const withSpaces = baseName.replace(/([a-záéíóúñ])([A-ZÁÉÍÓÚÑ])/g, '$1 $2')

  return withSpaces
    .split(' ')
    .map((part) => part.charAt(0).toLocaleUpperCase('es-ES') + part.slice(1))
    .join(' ')
}

export default function MentoresPage() {
  const { t } = useTranslations()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/#inicio', label: t.nav.inicio },
    { href: '/#programa', label: t.nav.programa },
    { href: '/#ética', label: t.nav.etica },
    { href: '/blog', label: t.nav.blog },
    { href: '/mentores', label: t.nav.mentores, active: true }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
          <Link href="/">
            <img src="/ANFAIA_logo_web.png" alt="ANFAIA Logo" className={`transition-all duration-300 ${isScrolled ? 'w-32' : 'w-40'} h-auto cursor-pointer`} />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        item.active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher />
          </div>

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

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-base font-medium transition-colors duration-200 ${
                        item.active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-14">
        <div className="text-center mb-12">
          <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.nav.mentores}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mentorFiles.map((fileName) => {
            const details = mentorDetails[fileName]
            const name = details?.name ?? mentorNameFromFile(fileName)
            const expertise = details?.expertise ?? 'Mentor'
            const imageClassName = fileName === 'sergioCarracedo.jpeg'
              ? 'w-full h-full object-cover object-[62%_28%] scale-[1.45]'
              : fileName === 'carolinaTomas.jpeg'
              ? 'w-full h-full object-cover object-[58%_26%] scale-[1.48]'
              : 'w-full h-full object-cover'

            return (
              <Card key={fileName} className="overflow-hidden border-0 shadow-md hover:shadow-2xl transition-shadow bg-white h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="pt-8 px-8 flex justify-center">
                    <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-100 ring-4 ring-white shadow-lg">
                      <img
                        src={encodeURI(`/mentores/${fileName}`)}
                        alt={`Foto de ${name}, mentor de ANFAIA`}
                        className={imageClassName}
                      />
                    </div>
                  </div>
                  <div className="p-6 text-center flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 mb-6">
                      {expertise}
                    </p>
                    <div className="flex justify-center mt-auto">
                      {details?.linkedin ? (
                        <a
                          href={details.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-500 text-white flex items-center justify-center transition-colors duration-200 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                          aria-label={`LinkedIn de ${name}`}
                          title={`LinkedIn de ${name}`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full bg-slate-500 text-white flex items-center justify-center"
                          aria-label={`LinkedIn de ${name}`}
                          title={`LinkedIn de ${name}`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
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
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
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
