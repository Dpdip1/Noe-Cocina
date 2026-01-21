import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    details: ['Calle de la Cocina Premium 123', '28001 Madrid, España'],
  },
  {
    icon: Phone,
    title: 'Teléfono',
    details: ['+34 912 345 678', 'Lun - Vie: 9:00 - 19:00'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@cachopascompany.com', 'respuesta en 24h'],
  },
  {
    icon: Clock,
    title: 'Horario',
    details: ['Lunes - Viernes: 9:00 - 19:00', 'Sábado: 10:00 - 14:00'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoCocina: '',
    presupuesto: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tipoCocina: '',
      presupuesto: '',
      mensaje: '',
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">CONTÁCTANOS</span>
            <h2 className="section-title">
              Comienza tu{' '}
              <span className="italic text-gold-500">Proyecto Soñado</span>
            </h2>
            <p className="text-primary-600 leading-relaxed mb-12 text-lg">
              Estamos listos para hacer realidad la cocina de tus sueños. Contáctanos
              y descubre cómo podemos transformar tu espacio en una obra maestra de
              diseño y funcionalidad.
            </p>

            {/* Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="font-serif text-lg text-primary-800 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-primary-500 text-sm">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-primary-800 p-6 rounded-lg"
            >
              <h3 className="font-serif text-lg text-white mb-3">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3">
                {[
                  'Más de 35 años de experiencia',
                  'Diseñadores de reconocimiento internacional',
                  'Materiales premium y acabados impeccables',
                  'Garantía total en todos nuestros proyectos',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-primary-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-10 shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl text-primary-800 mb-3">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-primary-600">
                  Gracias por contactarnos. Nos pondremos en contacto contigo
                  en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-primary-50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-primary-50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-primary-50"
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Tipo de Cocina
                    </label>
                    <select
                      name="tipoCocina"
                      value={formData.tipoCocina}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-primary-50"
                    >
                      <option value="">Seleccionar tipo</option>
                      <option value="moderna">Moderna</option>
                      <option value="clasica">Clásica</option>
                      <option value="contemporanea">Contemporánea</option>
                      <option value="personalizada">Personalizada</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Presupuesto Aproximado
                  </label>
                  <select
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-primary-50"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="20k-40k">20.000€ - 40.000€</option>
                    <option value="40k-70k">40.000€ - 70.000€</option>
                    <option value="70k-100k">70.000€ - 100.000€</option>
                    <option value="100k+">Más de 100.000€</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-primary-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-primary-50 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold-500 text-white font-medium tracking-wider uppercase hover:bg-gold-600 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Enviar Consulta</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-primary-500 text-sm">
                  Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
