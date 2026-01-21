/**
 * Sistema de carga automática de imágenes para el navegador
 * Usa import.meta.glob de Vite para detectar imágenes sin nombres específicos
 */

// Cargar todas las imágenes de la carpeta galeria
const allImages = import.meta.glob('../../galeria/**/*.{jpg,jpeg,png,webp,svg,gif}', {
  eager: true,
  import: 'default'
})

/**
 * Obtiene todas las imágenes de una carpeta específica
 * @param {string} folder - Nombre de la carpeta (hero, about, services, gallery, testimonials)
 * @returns {Array} Array de objetos con {src, name}
 */
export function getImagesFromFolder(folder) {
  const folderPath = `../../galeria/${folder}/`
  const images = []
  
  Object.entries(allImages).forEach(([path, src]) => {
    if (path.startsWith(folderPath)) {
      const name = path.split('/').pop().split('.')[0]
      images.push({
        src,
        name,
        path
      })
    }
  })
  
  // Ordenar por nombre (alfabéticamente)
  images.sort((a, b) => a.name.localeCompare(b.name))
  
  return images
}

/**
 * Obtiene una imagen específica por índice
 * @param {string} folder - Nombre de la carpeta
 * @param {number} index - Índice de la imagen (0, 1, 2...)
 * @returns {string|null} URL de la imagen o null si no existe
 */
export function getImageByIndex(folder, index = 0) {
  const images = getImagesFromFolder(folder)
  return images[index]?.src || null
}

/**
 * Obtiene el total de imágenes en una carpeta
 * @param {string} folder - Nombre de la carpeta
 * @returns {number} Número total de imágenes
 */
export function getImageCount(folder) {
  return getImagesFromFolder(folder).length
}

/**
 * Verifica si una carpeta tiene imágenes
 * @param {string} folder - Nombre de la carpeta
 * @returns {boolean}
 */
export function hasImages(folder) {
  return getImageCount(folder) > 0
}

export default {
  getImagesFromFolder,
  getImageByIndex,
  getImageCount,
  hasImages
}
