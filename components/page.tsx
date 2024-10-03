'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'areas', 'programa', 'etica']
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
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <img src="ANFAIA_logo_web.png" alt="ANFAIA Logo" className="w-40 h-auto" />
          <nav>
            <ul className="flex space-x-6">
              {['Inicio', 'Áreas', 'Programa', 'Ética'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="inicio" className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Impulsando el Progreso con Inteligencia Artificial</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">ANFAIA lidera proyectos innovadores en cultura, arte, salud, robótica y sostenibilidad ambiental. Utilizando la IA para crear un futuro mejor y ético.</p>
            <Button size="lg" onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })}>
              Explora Nuestras Áreas
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>

        <section id="areas" className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestras Áreas de Acción</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Cultura', image: 'culture.webp', description: `Creemos que la inteligencia artificial tiene el potencial de revolucionar la forma en que creamos, compartimos y experimentamos la cultura` },
              { title: 'Arte', image: 'art.webp', description: 'La intersección entre el arte y la inteligencia artificial ofrece un vasto campo de exploración creativa' },
              { title: 'Salud', image: 'health.webp', description: 'La aplicación de la IA en el campo de la salud tiene el potencial de salvar vidas y mejorar la calidad de vida de millones de personas' },
              { title: 'Robótica', image: 'robotic.webp', description: 'La combinación de IA y robótica abre un mundo de posibilidades para automatizar tareas y crear sistemas inteligentes' },
              { title: 'Sostenibilidad', image: 'sustainability.webp', description: 'La IA juega un papel crucial en la lucha contra el cambio climático y la promoción de un futuro sostenible' },
              { title: 'Ética', image: 'ethic.webp', description: 'Reconocemos la importancia de abordar las implicaciones éticas del desarrollo y uso de la IA' },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <img src={`${area.image}`} alt={area.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="programa" className="mb-24">
          <Card className="bg-blue-50">
            <CardContent className="text-center py-16">
              <h2 className="text-3xl font-bold mb-6">Programa de Becas ANFAIA</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Únete a nuestro programa de Becas en IA. Trabaja en proyectos de vanguardia y aprende de los mejores expertos en el campo.</p>
              <Button size="lg" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc_FhEvUd7sP_gYcO4dbyW7By7Hw6SFzwg7oH6BIM0rkxcRvg/viewform?usp=sf_link', '_blank')}>Postúlate Ahora</Button>
            </CardContent>
          </Card>
        </section>

        <section id="etica" className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Compromiso Ético</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">En ANFAIA, creemos firmemente que el desarrollo y la implementación de la Inteligencia Artificial deben estar guiados por sólidos principios éticos. Nos comprometemos a:</p>
            <ul className="space-y-4 mb-6">
              {[
                'Promover la transparencia en los algoritmos de IA',
                'Generar y trabajar con fuentes de datos abiertas',
                'Fomentar la equidad y evitar sesgos discriminatorios',
                'Considerar el impacto social y ambiental de nuestras tecnologías',
                'Educar sobre el uso responsable de la IA',
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-lg text-gray-600">Trabajamos en estrecha colaboración con expertos en ética, legisladores y la comunidad para asegurar que nuestros proyectos de IA beneficien a la sociedad en su conjunto.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <img src="ANFAIA_logo_square.jpg" alt="ANFAIA Logo" className="w-32 h-auto mb-4" />
              <p className="text-gray-400"><p>Asociación Nacional Faro, para la</p> 
              <p>Aceleración de la Inteligencia Artificial</p></p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {['Inicio', 'Áreas', 'Programa', 'Ética'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400 mb-2">info@anfaia.org</p>
              <p className="text-gray-400"></p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 ANFAIA - Todos los derechos reservados.</p>
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
