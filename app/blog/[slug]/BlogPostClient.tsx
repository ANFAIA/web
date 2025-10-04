'use client'

import { useState } from 'react'
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

  const post = blogPosts.find(p => p.slug === slug)

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
        <article className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="outline" className="mb-6">← {t.blog.allPosts}</Button>
          </Link>

          <img
            src={post.image}
            alt={post.title[language]}
            className="w-full h-auto object-contain rounded-lg mb-8"
            onError={(e) => {
              e.currentTarget.src = '/culture.webp' // Fallback image
            }}
          />

          <h1 className="text-4xl font-bold mb-4">{post.title[language]}</h1>
          <p className="text-gray-500 mb-8">
            {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'gl' ? 'gl-ES' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          <div className="prose prose-lg max-w-none">
            {post.content[language].split('\n').map((paragraph, index) => {
              // Function to render text with bold formatting and links
              const renderWithFormatting = (text: string) => {
                const elements: React.ReactNode[] = []
                let remainingText = text
                let key = 0

                // Process the text character by character
                while (remainingText.length > 0) {
                  // Check for markdown link pattern [text](url)
                  const linkMatch = remainingText.match(/^\[([^\]]+)\]\(([^)]+)\)/)
                  if (linkMatch) {
                    const linkText = linkMatch[1]
                    const url = linkMatch[2]

                    // Process bold within link text
                    const boldParts = linkText.split(/(\*\*[^*]+\*\*)/g)
                    const processedLinkText = boldParts.map((boldPart, j) => {
                      if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                        return <strong key={j}>{boldPart.slice(2, -2)}</strong>
                      }
                      return boldPart
                    })

                    elements.push(
                      <a
                        key={key++}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold underline"
                      >
                        {processedLinkText}
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
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.substring(2)}</h1>
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>
              } else if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-6 mb-2">{renderWithFormatting(paragraph.substring(2))}</li>
              } else if (paragraph.trim() !== '') {
                return <p key={index} className="mb-4 text-gray-700">{renderWithFormatting(paragraph)}</p>
              }
              return null
            })}
          </div>

          {post.slug === 'origen-anfaia-proyectos' && (
            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={() => window.open('https://forms.gle/5BxnQgzP6EwbzY2t9', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg"
              >
                {language === 'es' ? '¿Te unes a nosotros?' : language === 'gl' ? 'Úneste a nós?' : 'Will you join us?'}
              </Button>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog">
              <Button>← {t.blog.allPosts}</Button>
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
