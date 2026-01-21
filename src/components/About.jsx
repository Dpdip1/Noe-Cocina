import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '35+ Años de Trayectoria',
    description: 'Medio siglo de experiencia refinando el arte del diseño de cocinas, transmittedo de generación en generación.',
  },
  {
    icon: Users,
    title: 'Diseñadores de Élite',
    description: 'Nuestro equipo incluye profesionales reconocidos nacional e internacionalmente por su excelencia creativa.',
  },
  {
    icon: Award,
    title: 'Premios y Reconocimientos',
    description: 'Múltiples premios de diseño que respaldan nuestro compromiso con la innovación y calidad.',
  },
  {
    icon: Shield,
    title: 'Garantía de Excelencia',
    description: 'Cada proyecto cuenta con nuestra garantía de satisfacción y materiales de primera calidad.',
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image frame */}
            <div className="relative aspect-[4/5] bg-primary-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20" />

              {/* Decorative elements */}
              <motion.div
                className="absolute top-6 left-6 right-6 bottom-6 border border-gold-500/30"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="w-full h-full border border-gold-400/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 border-2 border-gold-500/40 rounded-full flex items-center justify-center">
                      <Award className="w-10 h-10 text-gold-500" />
                    </div>
                    <p className="font-serif text-xl text-primary-700">Excelencia</p>
                    <p className="text-sm text-primary-500 mt-1">Desde 1989</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-primary-900 p-6 shadow-2xl max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-gold-400 font-serif text-2xl mb-2">35+</p>
              <p className="text-white text-sm leading-relaxed">
                Años creando espacios únicos donde el diseño se encuentra con la funcionalidad.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <span className="section-subtitle">SOBRE NOSOTROS</span>
              <h2 className="section-title">
                Tres Décadas y Media de{' '}
                <span className="italic text-gold-500">Pasión por el Diseño</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-primary-600 leading-relaxed mb-8 text-lg"
            >
              En CachopasCompany, cada cocina que creamos es una historia de artesanía,
              innovación y diseño excepcional. Desde nuestra fundación en 1989, hemos
              mantenido un compromiso inquebrantable con la excelencia, transformando
              miles de hogares en espacios donde la funcionalidad meets la belleza.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-primary-600 leading-relaxed mb-12 text-lg"
            >
              Nuestro equipo de diseñadores, reconocido tanto en el ámbito nacional como
              internacional, combina técnicas tradicionales con las últimas tendencias para
              crear cocinas que no solo satisfacen necesidades, sino que inspiran vidas.
            </motion.p>

            {/* Features grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group p-6 bg-primary-50 hover:bg-primary-100 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-gold-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg text-primary-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
