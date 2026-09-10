'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from '@/lib/translations'
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

type BlogPost = {
  slug: string
  title: {
    es: string
    en: string
    gl: string
  }
  summary: {
    es: string
    en: string
    gl: string
  }
  content: {
    es: string
    en: string
    gl: string
  }
  image: string
  date: string
}

export default function BlogPostClient({ slug, blogPosts }: { slug: string, blogPosts: BlogPost[] }) {
  const { t, language } = useTranslations()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const post = blogPosts.find(p => p.slug === slug)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
          <Link href="/">
            <img src="/ANFAIA_logo_web.png" alt="ANFAIA Logo" className={`transition-all duration-300 ${isScrolled ? 'w-32' : 'w-40'} h-auto cursor-pointer`} />
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
                <li>
                  <Link href="/mentores" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    {t.nav.mentores}
                  </Link>
                </li>
                <li>
                  <a href="https://evolvingagentslabs.github.io/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    {t.nav.researchLab}
                  </a>
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
                <li>
                  <Link
                    href="/mentores"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {t.nav.mentores}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://evolvingagentslabs.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {t.nav.researchLab}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
          <img
            src={post.image}
            alt={post.title[language]}
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              e.currentTarget.src = '/culture.webp'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12 max-w-4xl">
              <Link href="/blog">
                <Button variant="outline" className="mb-6 bg-white/90 hover:bg-white border-0 shadow-lg">
                  ← {t.blog.allPosts}
                </Button>
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
                <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                  {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'gl' ? 'gl-ES' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                {post.title[language]}
              </h1>
              {(post.slug === 'un-escarpado-maravilloso-viaje-verano-parte-1' || post.slug === 'un-escarpado-maravilloso-viaje-verano-parte-2' || post.slug === 'un-escarpado-maravilloso-viaje-verano-parte-3') && (
                <div className="mt-5 flex flex-wrap items-center gap-3 text-base font-semibold text-white/95">
                  <a
                    href="https://es.linkedin.com/in/carolina-tomas-franco/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/60 underline-offset-4 hover:text-blue-100 hover:decoration-blue-100 transition-colors"
                  >
                    Carolina Tomas
                  </a>
                  <span className="text-white/70">·</span>
                  <a
                    href="https://github.com/ANFAIA/IA4Edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/60 underline-offset-4 hover:text-blue-100 hover:decoration-blue-100 transition-colors"
                  >
                    ANFAIA/IA4Edu
                  </a>
                </div>
              )}
              {post.slug === 'evolving-agents-labs-se-une-a-anfaia' && (
                <div className="mt-5 flex flex-wrap items-center gap-3 text-base font-semibold text-white/95">
                  <span>Ismael Faro</span>
                  <span className="text-white/70">·</span>
                  <a
                    href="https://github.com/EvolvingAgentsLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/60 underline-offset-4 hover:text-blue-100 hover:decoration-blue-100 transition-colors"
                  >
                    EvolvingAgentsLabs
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="prose prose-lg prose-blue max-w-none">
            {post.content[language].split('\n').map((paragraph, index) => {
              // Function to render text with bold formatting and links
              const renderWithFormatting = (text: string) => {
                const elements: React.ReactNode[] = []
                let remainingText = text
                let key = 0

                // Process the text character by character
                while (remainingText.length > 0) {
                  // Check for bold+link pattern **[text](url)**
                  const boldLinkMatch = remainingText.match(/^\*\*\[([^\]]+)\]\(([^)]+)\)\*\*/)
                  if (boldLinkMatch) {
                    const linkText = boldLinkMatch[1]
                    const url = boldLinkMatch[2]
                    elements.push(
                      <strong key={key++}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          {linkText}
                        </a>
                      </strong>
                    )
                    remainingText = remainingText.slice(boldLinkMatch[0].length)
                    continue
                  }

                  // Check for markdown link pattern [text](url)
                  const linkMatch = remainingText.match(/^\[([^\]]+)\]\(([^)]+)\)/)
                  if (linkMatch) {
                    const linkText = linkMatch[1]
                    const url = linkMatch[2]

                    elements.push(
                      <a
                        key={key++}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold underline"
                      >
                        {linkText}
                      </a>
                    )
                    remainingText = remainingText.slice(linkMatch[0].length)
                    continue
                  }

                  // Check for bold pattern **text**
                  const boldMatch = remainingText.match(/^\*\*([^*]+)\*\*/)
                  if (boldMatch) {
                    elements.push(<strong key={key++}>{boldMatch[1]}</strong>)
                    remainingText = remainingText.slice(boldMatch[0].length)
                    continue
                  }

                  // Add regular character
                  elements.push(remainingText[0])
                  remainingText = remainingText.slice(1)
                }

                return elements
              }

              if (paragraph.startsWith('# ')) {
                return null // Skip main title since it's in hero
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-gray-900 first:mt-0">
                    {paragraph.substring(3)}
                  </h2>
                )
              } else if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6 mb-3 text-gray-700 leading-relaxed text-lg">
                    {renderWithFormatting(paragraph.substring(2))}
                  </li>
                )
              } else if (paragraph.trim() !== '') {
                return (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                    {renderWithFormatting(paragraph)}
                  </p>
                )
              }
              return null
            })}
          </div>

          {/* Decorative end mark */}
          <div className="flex justify-center mt-16 mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 bg-gray-400 rounded-full" />
              <div className="h-1 w-1 bg-gray-400 rounded-full" />
              <div className="h-1 w-1 bg-gray-400 rounded-full" />
            </div>
          </div>

          {post.slug === 'origen-anfaia-proyectos' && (
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-center border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {language === 'es' ? '¿Quieres ser parte del cambio?' : language === 'gl' ? 'Queres ser parte do cambio?' : 'Want to be part of the change?'}
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                {language === 'es'
                  ? 'Únete a nuestra comunidad y ayúdanos a democratizar la inteligencia artificial.'
                  : language === 'gl'
                  ? 'Únete á nosa comunidade e axúdanos a democratizar a intelixencia artificial.'
                  : 'Join our community and help us democratize artificial intelligence.'}
              </p>
              <Button
                size="lg"
                onClick={() => window.open('https://forms.gle/5BxnQgzP6EwbzY2t9', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {language === 'es' ? '¿Te unes a nosotros?' : language === 'gl' ? 'Úneste a nós?' : 'Will you join us?'}
              </Button>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
                ← {t.blog.allPosts}
              </Button>
            </Link>
          </div>
        </article>
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
                <li>
                  <Link href="/mentores" className="text-gray-400 hover:text-white transition-colors duration-200">{t.nav.mentores}</Link>
                </li>
                <li>
                  <a href="https://evolvingagentslabs.github.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{t.nav.researchLab}</a>
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
