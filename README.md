# Dibujos en Vidrio - Monti

Sitio web para servicios de dibujos en vidrieras para locales comerciales.

## Sitio en vivo

El sitio está disponible en: https://almamontii.github.io/Dibujos-en-vidrio/

## Estructura del Proyecto

- **Hero**: Sección de bienvenida con imagen grande
- **Servicios**: Grid 2x2 con 4 servicios (Diseños Personalizados, Decoración Estacional, Promociones y Ofertas, Mantenimiento y Actualización)
- **Galería**: Fotos de trabajos realizados con modal para ver en grande
- **Contacto**: Formulario de contacto e información

## Instalación

1. Instalar Node.js (si no lo tienes instalado)
2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Para construir para producción:
```bash
npm run build
```

## Agregar Imágenes

Todas las imágenes deben colocarse en la carpeta `public/images/`:

- **Hero**: `public/images/hero.jpg` (o el nombre que prefieras)
- **Servicios**: 4 imágenes para los servicios
- **Galería**: Múltiples imágenes de trabajos realizados

Luego actualizar las rutas en los componentes correspondientes.

## Notas

- Todas las imágenes están configuradas como placeholders vacíos
- El diseño es responsive (se adapta a móvil y desktop)
- Paleta de colores: grises oscuros (sin azul)
- Tipografía: tamaños pequeños, menos bold
