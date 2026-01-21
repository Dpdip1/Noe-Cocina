import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'

const footerLinks = {
  empresa: [
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Nuestro Equipo', href: '#' },
    { label: 'Proyectos', href: '#gallery' },
    { label: 'Trabaja con Nosotros', href: '#' },
  ],
  servicios: [
    { label: 'Cocinas Modernas', href: '#services' },
    { label: 'Cocinas Clásicas', href: '#services' },
    { label: 'Cocinas Contemporáneas', href: '#services' },
    { label: 'Diseño Personalizado', href: '#services' },
  ],
  soporte: [
    { label: 'Preguntas Frecuentes', href: '#' },
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos y Condiciones', href: '#' },
    { label: 'Garantía', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-primary-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl mb-2">
                Mantente Informado
              </h3>
              <p className="text-primary-400">
                Descubre las últimas tendencias en diseño de cocinas y ofertas exclusivas.
              </p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-primary-800 border border-primary-700 focus:border-gold-500 outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gold-500 text-white font-medium tracking-wider uppercase hover:bg-gold-600 transition-colors flex items-center space-x-2"
              >
                <span>Suscribirse</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-serif font-bold tracking-wide">
                CACHOPAS<span className="text-gold-500">COMPANY</span>
              </span>
            </div>
            <p className="text-primary-400 leading-relaxed mb-6 max-w-sm">
              Más de 35 años creando cocinas de alto diseño. Donde la artesanía
              se encuentra con la innovación para transformar espacios en obras maestras.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg mb-6">Empresa</h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Servicios</h4>
            <ul className="space-y-4">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Soporte</h4>
            <ul className="space-y-4">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-500 text-sm">
              © {new Date().getFullYear()} CachopasCompany. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-primary-500 hover:text-gold-400 text-sm transition-colors">
                Política de Cookies
              </a>
              <a href="#" className="text-primary-500 hover:text-gold-400 text-sm transition-colors">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
