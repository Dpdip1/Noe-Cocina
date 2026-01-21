# 📁 Carpeta de Galería - CachopasCompany

## Cómo usar este sistema

¡Es muy sencillo! Solo tienes que arrastrar tus fotos a las carpetas correspondientes.

---

## Estructura de carpetas

```
galeria/
├── hero/           ← Fotos de la página principal (portada)
├── about/          ← Fotos de "Sobre Nosotros"
├── services/       ← Fotos de los servicios
├── gallery/        ← Fotos de proyectos realizados
└── testimonials/   ← Fotos de clientes para testimonios
```

---

## Reglas importantes

### 1. Nombres de archivos
**No importa el nombre de tus fotos.** Puedes llamarlas como quieras:

- ✅ `foto.jpg`
- ✅ `IMG_2024.png`
- ✅ `cocina-mia.webp`
- ✅ `WhatsApp Image 2024-01-15 at 14.30.22.jpeg`

### 2. Tamaño de archivos
El programa adapta automáticamente las fotos. Sin embargo, para mejor rendimiento:

| Carpeta | Tamaño recomendado |
|---------|-------------------|
| Hero | 1920x1080 px máximo |
| Gallery | 1200x900 px máximo |
| Services | 800x600 px máximo |
| About | 800x1000 px máximo |
| Testimonials | 200x200 px (cuadrado) |

### 3. Formatos soportados
- JPG / JPEG
- PNG
- WebP
- SVG
- GIF

### 4. Orden de las fotos
Las fotos se muestran en orden alfabético por nombre de archivo. Si quieres un orden específico, usa prefijos numéricos:

```
gallery/
├── 01_cocina-madrid.jpg    ← Primera
├── 02_cocina-barcelona.jpg ← Segunda
├── 03_cocina-sevilla.jpg   ← Tercera
└── 04_cocina-valencia.jpg  ← Cuarta
```

---

## Ejemplos de uso

### Para la página principal (Hero)
Arrastra 1-5 fotos de cocinas最美的 a la carpeta `hero/`. Se mostrarán como un slideshow automático.

### Para la galería de proyectos
Arrastra todas las fotos de tus proyectos a la carpeta `gallery/`. Se mostrarán automáticamente en el orden que indiques.

### Para testimonios
Arrastra fotos de clientes a `testimonials/. Se asignarán automáticamente a cada testimonio.

---

## Después de añadir fotos

### En desarrollo
Los cambios se ven automáticamente. No necesitas reiniciar nada.

### En producción
Necesitas reconstruir el proyecto:

```bash
npm run build
```

---

## Notas

- Si una carpeta está vacía, se mostrará un diseño alternativo automático
- No hace falta renombrar ni redimensionar las fotos
- El sistema maneja automáticamente cualquier formato válido

¡Listo! 🎉
