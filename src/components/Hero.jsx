import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
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
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        {/* Abstract geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(197,160,101,0.3)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(197,160,101,0.2)_0%,transparent_50%)]" />
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 border border-gold-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-48 h-48 border border-gold-400/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left"
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center space-x-3 bg-gold-500 text-white px-8 py-4 font-medium tracking-wider hover:bg-gold-600 transition-all duration-300"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 font-medium tracking-wider hover:bg-white hover:text-primary-900 transition-all duration-300"
              >
                <span>Contáctanos</span>
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

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block relative"
          >
            <motion.div
              className="relative w-full aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-gold-500/30 transform -rotate-6" />
              <div className="absolute inset-0 border-2 border-gold-500/30 transform rotate-6" />

              {/* Image placeholder with gradient */}
              <div className="absolute inset-4 bg-gradient-to-br from-gold-400/20 to-gold-600/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-gold-300/50">
                  <div className="w-32 h-32 mx-auto mb-4 border border-gold-400/30 rounded-full flex items-center justify-center">
                    <Sparkles className="w-12 h-12" />
                  </div>
                  <p className="font-serif text-lg">Diseño Premium</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md px-4 py-2 border border-gold-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-gold-400 text-sm font-medium">Diseñadores de Élite</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md px-4 py-2 border border-gold-500/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-gold-400 text-sm font-medium">Montajes Impecables</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

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
