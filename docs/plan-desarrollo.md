# plan de desarrollo - sitio web dibujos en vidrio

## descripción del proyecto
Sitio web para vender servicios de dibujos en vidrieras para locales comerciales. El objetivo principal es mostrar los servicios disponibles y facilitar el contacto con clientes potenciales.

## estructura del sitio

### 1. home / página principal
- **imagen de bienvenida grande**: Imagen principal que ocupe toda la altura de la pantalla (hero section)
- Diseño atractivo que muestre el trabajo de vidrieras

### 2. sección de servicios
- **layout**: Grid de 2x2 (dos fotos arriba, dos abajo)
- **servicios a mostrar**:
  1. **diseños personalizados**
     - Foto representativa
     - Breve descripción del servicio
  
  2. **decoración estacional**
     - Foto representativa
     - Breve descripción del servicio
  
  3. **promociones y ofertas**
     - Foto representativa
     - Breve descripción del servicio
  
  4. **mantenimiento y actualización**
     - Foto representativa
     - Breve descripción del servicio

### 3. galería de trabajos realizados
- **layout**: Sección horizontal con scroll o grid de fotos
- **funcionalidad**: 
  - Fotos de trabajos realizados en locales
  - Al hacer click, la foto se abre en grande (modal/lightbox)
  - Múltiples fotos que se puedan navegar

### 4. sección de contacto
- Formulario de contacto o información de contacto
- Datos para que los clientes puedan solicitar presupuestos

## stack tecnológico
- **framework**: React con Vite (proyecto simple, sin necesidad de backend complejo)
- **estilos**: CSS moderno o framework ligero
- **paleta de colores**: Tonos grises oscuros (evitar azul según preferencias)

## funcionalidades principales
1. ✅ Diseño responsive (se ve bien en móvil y desktop)
2. ✅ Navegación suave entre secciones
3. ✅ Galería de fotos con modal para ver en grande
4. ✅ Formulario de contacto funcional
5. ✅ Imágenes optimizadas para carga rápida

## páginas/secciones
- Home (todo en una página con scroll)
  - Hero/Bienvenida
  - Servicios
  - Galería
  - Contacto

## próximos pasos
1. Configurar proyecto React con Vite
2. Crear estructura de componentes
3. Implementar sección hero/bienvenida
4. Implementar sección de servicios
5. Implementar galería con modal
6. Implementar sección de contacto
7. Aplicar estilos y diseño responsive
8. Optimizar imágenes y rendimiento

## notas de diseño
- Tipografía: Tamaños más pequeños, menos bold
- Colores: Grises oscuros, evitar azul
- Títulos: Minúsculas según preferencia del usuario
- Diseño limpio y profesional que transmita calidad del servicio

