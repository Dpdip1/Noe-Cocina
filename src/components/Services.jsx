import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChefHat,
  Home,
  Building2,
  PenTool,
  Ruler,
  Wrench,
  ArrowUpRight
} from 'lucide-react'

const services = [
  {
    id: 'modernas',
    title: 'Cocinas Modernas',
    description: 'Líneas limpias, superficies minimalistas y tecnología integrada para espacios contemporáneos.',
    icon: Home,
    features: ['Diseños minimalistas', 'Materiales innovadores', 'Tecnología integrada', 'Colores neutros'],
    image: 'bg-gradient-to-br from-primary-700 to-primary-900',
  },
  {
    id: 'clasicas',
    title: 'Cocinas Clásicas',
    description: 'Elegancia atemporal con acabados artesanales y detalles que trascienden las modas.',
    icon: ChefHat,
    features: ['Carpintería artesanal', 'Detalles ornamentados', 'Materiales nobles', 'Acabados premium'],
    image: 'bg-gradient-to-br from-amber-700 to-amber-900',
  },
  {
    id: 'contemporaneas',
    title: 'Cocinas Contemporáneas',
    description: 'Fusión perfecta entre funcionalidad y diseño vanguardista para hogares actuales.',
    icon: Building2,
    features: ['Diseños audaces', 'Formas orgánicas', 'Materiales mixtos', 'Espacios abiertos'],
    image: 'bg-gradient-to-br from-primary-600 to-primary-800',
  },
  {
    id: 'diseno',
    title: 'Diseño Personalizado',
    description: 'Creamos cocinas únicas adaptadas a tu visión, espacio y estilo de vida.',
    icon: PenTool,
    features: ['Consultoría de diseño', 'Proyectos a medida', 'Adaptación total', 'Ideas únicas'],
    image: 'bg-gradient-to-br from-gold-600 to-gold-800',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Conocemos tus necesidades, preferencias y el espacio disponible.',
    icon: Ruler,
  },
  {
    number: '02',
    title: 'Diseño y Propuesta',
    description: 'Presentamos提案es personalizadas con renders y planos detallados.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Fabricación',
    description: 'Crafting each piece with precision using premium materials.',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Montaje Impecable',
    description: 'Instalación profesional garantizada con atención al mínimo detalle.',
    icon: ArrowUpRight,
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <section id="services" className="py-24 lg:py-32 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">NUESTROS SERVICIOS</span>
          <h2 className="section-title">
            Soluciones Completas para{' '}
            <span className="italic text-gold-500">Cada Estilo</span>
          </h2>
          <p className="text-primary-600 max-w-2xl mx-auto leading-relaxed mt-6">
            Desde cocinas minimalistas hasta diseños clásicos ornamentados, tenemos la
            experiencia y creatividad para hacer realidad la cocina de tus sueños.
          </p>
        </motion.div>

        {/* Services Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border-2 ${
                activeService === service.id
                  ? 'bg-primary-800 text-white border-primary-800'
                  : 'bg-transparent text-primary-600 border-primary-300 hover:border-primary-800 hover:text-primary-800'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {service.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          {services.map((service) => (
            service.id === activeService && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12 items-center mb-24"
              >
                {/* Service Visual */}
                <div className={`${service.image} aspect-[4/3] relative overflow-hidden rounded-lg shadow-2xl`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-white/30" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white/80 text-sm tracking-wider uppercase mb-2">
                      Características
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 text-white text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Info */}
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif text-primary-800">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="group flex items-center space-x-2 text-gold-500 font-medium"
                    >
                      <span>Ver Proyectos Realizados</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <span className="section-subtitle">NUESTRO PROCESO</span>
            <h2 className="section-title">
              De la{' '}
              <span className="italic text-gold-500">Visión</span> a la{' '}
              <span className="italic text-gold-500">Realidad</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-gold-500/50 to-transparent" />
                )}

                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:bg-primary-800 transition-colors duration-500">
                    <step.icon className="w-10 h-10 text-gold-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gold-500 font-serif text-4xl mb-4">{step.number}</p>
                  <h3 className="text-xl font-serif text-primary-800 mb-3">{step.title}</h3>
                  <p className="text-primary-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
