import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import { getImagesFromFolder } from '../utils/galleryLoader'

const projectData = [
  { title: 'Cocina Minimalista Premium', category: 'Modernas', location: 'Madrid, España', description: 'Diseño de cocina abierta con isla central, superficies de cuarzo y electrodomésticos integrados.' },
  { title: 'Cocina Clásica Artesanal', category: 'Clásicas', location: 'Sevilla, España', description: 'Cocina de estilo tradicional con carpintería de madera de nogal y acabados dorados.' },
  { title: 'Espacio Contemporáneo', category: 'Contemporáneas', location: 'Barcelona, España', description: 'Fusión de materiales: acero inoxidable, mármol negro y madera de olivo.' },
  { title: 'Cocina de Diseño Italiano', category: 'Modernas', location: 'Valencia, España', description: 'Diseños italianos minimalistas con líneas puras y tecnología de vanguardia.' },
  { title: 'Cocina Rústica de Lujo', category: 'Clásicas', location: 'Toledo, España', description: 'Combinación de piedra natural, madera recuperada y hierro forjado artesanal.' },
  { title: 'Cocina Integral Moderna', category: 'Contemporáneas', location: 'Málaga, España', description: 'Diseño continuo sin divisiones, perfecto para espacios abiertos y sociales.' },
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
  const galleryImages = getImagesFromFolder('gallery')

  const filteredProjects = projectData.filter((project, index) => {
    if (activeCategory === 'todas') return true
    return project.category.toLowerCase() === activeCategory.toLowerCase()
  })

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">GALERÍA DE PROYECTOS</span>
          <h2 className="section-title">
            Nuestros{' '}
            <span className="italic text-gold-500">Trabajos Destacados</span>
          </h2>
          <p className="text-primary-600 max-w-2xl mx-auto leading-relaxed mt-6">
            Añade tus fotos de proyectos a la carpeta <code className="bg-primary-100 px-2 py-1 rounded text-gold-600">galeria/gallery/</code>
            y se mostrarán automáticamente aquí.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const image = galleryImages[index]
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject({ ...project, image })}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    {image ? (
                      <img
                        src={image.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                        <Maximize2 className="w-12 h-12 text-white/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-gold-400 text-xs tracking-wider uppercase mb-2">{project.category}</p>
                        <h3 className="text-xl font-serif text-white mb-2">{project.title}</h3>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-primary-800 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-lg text-primary-800 group-hover:text-gold-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-500 text-sm mt-1">{project.location}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {galleryImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-16 bg-primary-50 rounded-lg"
          >
            <Maximize2 className="w-16 h-16 text-primary-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-primary-700 mb-2">Sin imágenes en la galería</h3>
            <p className="text-primary-500">
              Añade fotos a <code className="bg-primary-200 px-2 py-1 rounded">galeria/gallery/</code>
            </p>
          </motion.div>
        )}

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
                  {selectedProject.image && (
                    <img
                      src={selectedProject.image.src}
                      alt={selectedProject.title}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <X className="w-6 h-6 text-primary-800" />
                  </button>
                </div>
                <div className="p-8">
                  <span className="text-gold-500 text-sm tracking-wider uppercase">{selectedProject.category}</span>
                  <h3 className="text-3xl font-serif text-primary-800 mt-2 mb-2">{selectedProject.title}</h3>
                  <p className="text-primary-500 text-sm mb-6">{selectedProject.location}</p>
                  <p className="text-primary-600 leading-relaxed">{selectedProject.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
