import React from 'react'

/**
 * Componente que muestra una imagen con manejo automático de proporciones
 * @param {string} src - Ruta de la imagen
 * @param {string} alt - Descripción de la imagen
 * @param {string} className - Clases adicionales
 * @param {string} aspectRatio - Proporción del contenedor (default: 4/3)
 */
export default function GalleryImage({
  src,
  alt = 'Imagen de galería',
  className = '',
  aspectRatio = 'aspect-[4/3]'
}) {
  // Colores de placeholder aleatorios para cuando no hay imagen
  const placeholderColors = [
    'from-amber-700 to-amber-900',
    'from-primary-600 to-primary-800',
    'from-stone-600 to-stone-800',
    'from-gold-600 to-gold-800',
  ]

  const randomColor = placeholderColors[Math.floor(Math.random() * placeholderColors.length)]

  if (!src) {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${className} bg-gradient-to-br ${randomColor}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white/30">
            <svg
              className="w-16 h-16 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Añade una foto a esta carpeta</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        onError={(e) => {
          // Si la imagen falla, mostrar placeholder
          e.target.style.display = 'none'
          e.target.parentElement.classList.add('bg-gradient-to-br', randomColor)
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

/**
 * Componente de slideshow automático para el Hero
 */
export function HeroSlideshow({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!images || images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(197,160,101,0.3)_0%,transparent_50%)]" />
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/20 to-primary-900/80" />
    </div>
  )
}

/**
 * Componente de grid de galería responsive
 */
export function GalleryGrid({ images, columns = 3, gap = 8 }) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns] || gridCols[3]} gap-${gap}`}>
      {images.map((img, index) => (
        <GalleryImage
          key={index}
          src={img.src}
          alt={`Imagen ${index + 1}`}
          aspectRatio="aspect-[4/3]"
        />
      ))}
    </div>
  )
}
