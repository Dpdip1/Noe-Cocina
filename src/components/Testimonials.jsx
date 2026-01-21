import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Cliente Particular',
    image: 'bg-gradient-to-br from-amber-300 to-amber-500',
    rating: 5,
    text: 'CachopasCompany transformó nuestra cocina en un espacio espectacular. La atención al detalle y la calidad de los acabados superaron todas nuestras expectativas. El equipo de diseño entendió perfectamente nuestra visión y la materializó de manera impecable.',
    project: 'Cocina Clásica en Sevilla',
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    role: 'Arquitecto',
    image: 'bg-gradient-to-br from-primary-400 to-primary-600',
    rating: 5,
    text: 'Como arquitecto, trabajo con muchos proveedores, pero CachopasCompany destaca por su profesionalismo y capacidad de ejecución. Sus montajes son impecables y el nivel de artesanía que logran es excepcional. Sin duda mi primera opción para proyectos de lujo.',
    project: 'Reforma Integral en Madrid',
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    role: 'Diseñadora de Interiores',
    image: 'bg-gradient-to-br from-gold-400 to-gold-600',
    rating: 5,
    text: 'Recomiendo CachopasCompany a todos mis clientes que buscan cocinas de alto diseño. Su equipo de diseñadores está a la altura de los mejores profesionales internacionales. La combinación de creatividad, materiales premium y ejecución perfecta es inigualable.',
    project: 'Cocina Contemporánea en Barcelona',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle text-gold-400">TESTIMONIOS</span>
          <h2 className="section-title text-white">
            Lo que{' '}
            <span className="italic text-gold-400">Nuestros Clientes</span> Dicen
          </h2>
          <p className="text-primary-300 max-w-2xl mx-auto leading-relaxed mt-6">
            La satisfacción de nuestros clientes es nuestro mayor orgullo.
            Estas son algunas de sus experiencias trabajando con nosotros.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Card */}
              <div className="bg-primary-800/50 backdrop-blur-sm p-8 pt-10 h-full border border-primary-700/50 hover:border-gold-500/30 transition-colors duration-500">
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-primary-200 leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-primary-700/50">
                  <div className={`w-12 h-12 rounded-full ${testimonial.image} flex items-center justify-center text-white font-serif font-bold`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-primary-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 pt-16 border-t border-primary-700/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '98%', label: 'Satisfacción' },
              { value: '500+', label: 'Proyectos' },
              { value: '35+', label: 'Años' },
              { value: '100%', label: 'Garantía' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-serif text-gold-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-400 text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
