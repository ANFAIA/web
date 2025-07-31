'use client'

import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { Language, useTranslations } from '@/lib/translations'

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'gl' as Language, name: 'Galego', flag: '🏴󠁥󠁳󠁧󠁡󠁿' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (newLanguage: Language) => {
    // Save the language choice to localStorage
    localStorage.setItem('anfaia-language', newLanguage)
    
    // Update metadata immediately
    updateMetadata(newLanguage)
    
    // Force page reload to apply the new language
    window.location.reload()
  }

  // Helper function to update metadata (copied from translations.ts)
  function updateMetadata(language: Language) {
    const titles = {
      es: 'ANFAIA - Impulsando el Progreso con Inteligencia Artificial',
      en: 'ANFAIA - Driving Progress with Artificial Intelligence', 
      gl: 'ANFAIA - Impulsando o Progreso coa Intelixencia Artificial'
    }
    
    const descriptions = {
      es: 'ANFAIA lidera proyectos innovadores en cultura, arte, salud, robótica y sostenibilidad ambiental. Utilizando la IA para crear un futuro mejor y ético.',
      en: 'ANFAIA leads innovative projects in culture, art, health, robotics, and environmental sustainability. Using AI to create a better and ethical future.',
      gl: 'ANFAIA lidera proxectos innovadores en cultura, arte, saúde, robótica e sustentabilidade ambiental. Usando a IA para crear un futuro mellor e ético.'
    }
    
    document.title = titles[language]
    document.documentElement.lang = language
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language])
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    
    if (ogTitle) {
      ogTitle.setAttribute('content', titles[language])
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', descriptions[language])
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}