import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Cocina Minimalista Premium',
    category: 'Modernas',
    location: 'Madrid, España',
    description: 'Diseño de cocina abierta con isla central, superficies de cuarzo y electrodomésticos integrados.',
    image: 'bg-gradient-to-br from-primary-600 to-primary-800',
  },
  {
    id: 2,
    title: 'Cocina Clásica Artesanal',
    category: 'Clásicas',
    location: 'Sevilla, España',
    description: 'Cocina de estilo tradicional con carpintería de madera de nogal y acabados dorados.',
    image: 'bg-gradient-to-br from-amber-700 to-amber-900',
  },
  {
    id: 3,
    title: 'Espacio Contemporáneo',
    category: 'Contemporáneas',
    location: 'Barcelona, España',
    description: 'Fusión de materiales: acero inoxidable, mármol negro y madera de olivo.',
    image: 'bg-gradient-to-br from-primary-700 to-primary-900',
  },
  {
    id: 4,
    title: 'Cocina de Diseño Italiano',
    category: 'Modernas',
    location: 'Valencia, España',
    description: 'Diseños italianos minimalistas con líneas puras y tecnología de vanguardia.',
    image: 'bg-gradient-to-br from-stone-600 to-stone-800',
  },
  {
    id: 5,
    title: 'Cocina Rústica de Lujo',
    category: 'Clásicas',
    location: 'Toledo, España',
    description: 'Combinación de piedra natural, madera recuperada y hierro forjado artesanal.',
    image: 'bg-gradient-to-br from-amber-800 to-amber-950',
  },
  {
    id: 6,
    title: 'Cocina Integral Moderna',
    category: 'Contemporáneas',
    location: 'Málaga, España',
    description: 'Diseño continuo sin divisiones, perfecto para espacios abiertos y sociales.',
    image: 'bg-gradient-to-br from-primary-500 to-primary-700',
  },
]

const categories = [
  { id: 'todas', label: 'Todas' },
  { id: 'modernas', label: 'Modernas' },
  { id: 'clásicas', label: 'Clásicas' },
  { id: 'contemporáneas', label: 'Contemporáneas' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todas')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'todas'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">GALERÍA DE PROYECTOS</span>
          <h2 className="section-title">
            Nuestros{' '}
            <span className="italic text-gold-500">Trabajos Destacados</span>
          </h2>
          <p className="text-primary-600 max-w-2xl mx-auto leading-relaxed mt-6">
            Cada proyecto es una obra única que refleja nuestra dedicación al detalle
            y nuestro compromiso con la excelencia en el diseño de cocinas.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-800 text-white'
                  : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  {/* Project Image */}
                  <div className={`${project.image} w-full h-full transition-transform duration-700 group-hover:scale-110`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-gold-400 text-xs tracking-wider uppercase mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-serif text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm flex items-center">
                        <Maximize2 className="w-4 h-4 mr-2" />
                        Ver Detalles
                      </p>
                    </div>
                  </div>

                  {/* Always visible info */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-primary-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-4">
                  <h3 className="font-serif text-lg text-primary-800 group-hover:text-gold-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary-500 text-sm mt-1">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-primary-800 text-white font-medium tracking-wider uppercase hover:bg-primary-900 transition-colors duration-300"
          >
            Ver Todos los Proyectos
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className={`${selectedProject.image} aspect-video`}>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6 text-primary-800" />
                </button>
              </div>

              <div className="p-8">
                <span className="text-gold-500 text-sm tracking-wider uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-serif text-primary-800 mt-2 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-primary-500 text-sm mb-6">
                  {selectedProject.location}
                </p>
                <p className="text-primary-600 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mt-8 pt-8 border-t border-primary-100">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="px-6 py-3 bg-gold-500 text-white font-medium tracking-wider uppercase hover:bg-gold-600 transition-colors"
                  >
                    Solicitar Proyecto Similar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
