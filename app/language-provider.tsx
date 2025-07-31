'use client'

import { useEffect } from 'react'
import { detectLanguage } from '@/lib/translations'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Update the HTML lang attribute based on detected language
    const language = detectLanguage()
    document.documentElement.lang = language
    
    // Update the page title based on language
    const titles = {
      es: 'ANFAIA - Impulsando el Progreso con Inteligencia Artificial',
      en: 'ANFAIA - Driving Progress with Artificial Intelligence', 
      gl: 'ANFAIA - Impulsando o Progreso coa Intelixencia Artificial'
    }
    
    document.title = titles[language]
    
    // Update meta description
    const descriptions = {
      es: 'ANFAIA lidera proyectos innovadores en cultura, arte, salud, robótica y sostenibilidad ambiental. Utilizando la IA para crear un futuro mejor y ético.',
      en: 'ANFAIA leads innovative projects in culture, art, health, robotics, and environmental sustainability. Using AI to create a better and ethical future.',
      gl: 'ANFAIA lidera proxectos innovadores en cultura, arte, saúde, robótica e sustentabilidade ambiental. Usando a IA para crear un futuro mellor e ético.'
    }
    
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
  }, [])

  return <>{children}</>
}