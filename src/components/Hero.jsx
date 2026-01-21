import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { getImagesFromFolder } from '../utils/galleryLoader'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = getImagesFromFolder('hero')

  useEffect(() => {
    if (heroImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background con imágenes de la carpeta hero */}
      <div className="absolute inset-0">
        {heroImages.length > 0 ? (
          heroImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={img.src}
                alt={`Diseño de cocina ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(197,160,101,0.3)_0%,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(197,160,101,0.2)_0%,transparent_50%)]" />
            </div>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/30 to-primary-900/80" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">
                Más de 35 Años de Excelencia
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-serif font-medium text-white leading-tight"
            >
              Cocinas de{' '}
              <span className="text-gradient">Alto Diseño</span>
              <br />
              <span className="italic text-gold-400">Artesanía Excepcional</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-primary-200 max-w-xl leading-relaxed"
            >
              Transformamos espacios en obras maestras culinarias. Cada cocina es una
              expresión única de diseño, funcionalidad y elegancia, creada por los
              mejores diseñadores del panorama nacional e internacional.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center space-x-3 bg-gold-500 text-white px-8 py-4 font-medium tracking-wider hover:bg-gold-600 transition-all duration-300"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8"
            >
              <div>
                <p className="text-3xl lg:text-4xl font-serif text-gold-400">35+</p>
                <p className="text-sm text-primary-300 tracking-wider uppercase mt-1">
                  Años de Experiencia
                </p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-serif text-gold-400">500+</p>
                <p className="text-sm text-primary-300 tracking-wider uppercase mt-1">
                  Proyectos Realizados
                </p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-serif text-gold-400">100%</p>
                <p className="text-sm text-primary-300 tracking-wider uppercase mt-1">
                  Satisfacción
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Controles del slideshow */}
      {heroImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-20 hidden lg:flex"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-20 hidden lg:flex"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gold-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
