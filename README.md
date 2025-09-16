# 🚀 Ewaffle Landing Page

Landing page corporativa para Ewaffle, expertos en soluciones e-learning y diseño instruccional.

![Ewaffle Logo](/public/assets/logoewchico.png)

## 📋 Descripción

Este proyecto es la landing page oficial de Ewaffle, desarrollada con Astro y TailwindCSS. Ofrece una experiencia moderna y optimizada para presentar nuestros servicios de e-learning, diseño instruccional y producción multimedia. El sitio incluye múltiples páginas especializadas para diferentes servicios y una academia de formación.

## ✨ Características

- 🎨 Diseño moderno y responsive con Mobile First Design
- 🚀 Optimizado para SEO con meta tags completos
- 📊 Integración con Google Tag Manager (GTM-K3268VF)
- 💨 Animaciones y transiciones suaves
- 📱 Totalmente adaptable a dispositivos móviles
- 🔍 Optimización de imágenes con Sharp
- 📧 Formularios de contacto con EmailJS
- 🎓 Páginas especializadas para academia y cursos
- 📊 Structured Data (JSON-LD) para SEO
- 🌐 Multiidioma preparado (español)

## 🛠️ Tecnologías

- [Astro 5.6.1](https://astro.build) - Framework principal
- [TailwindCSS 3.4.17](https://tailwindcss.com) - Framework CSS
- [TypeScript](https://www.typescriptlang.org) - Tipado estático
- [Remix Icons 3.5.0](https://remixicon.com) - Iconografía
- [EmailJS](https://www.emailjs.com) - Formularios de contacto
- [PostCSS](https://postcss.org) - Procesamiento CSS
- [Autoprefixer](https://autoprefixer.github.io) - Compatibilidad CSS

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/yourusername/ewaffle-landing.git
```

2. Instala las dependencias:
```bash
cd ewaffle-landing
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

## 📦 Estructura del Proyecto

```
/
├── public/
│   ├── assets/
│   │   ├── clientlogos/          # Logos de clientes
│   │   ├── team/                 # Fotos del equipo
│   │   └── ...                   # Recursos multimedia
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── landing/              # Componentes página principal
│   │   │   ├── Hero.astro
│   │   │   ├── Benefits.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── Process.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── Contact.astro
│   │   │   ├── CTA.astro
│   │   │   ├── Footer.astro
│   │   │   └── ...
│   │   ├── academia/             # Componentes academia
│   │   │   ├── AcademiaHero.astro
│   │   │   ├── AcademiaCursos.astro
│   │   │   ├── AcademiaInstructor.astro
│   │   │   └── ...
│   │   └── asesoria/             # Componentes asesoría
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout principal con SEO
│   ├── pages/
│   │   ├── index.astro           # Página principal
│   │   ├── academia.astro        # Academia de cursos
│   │   ├── asesoria.astro        # Servicios de asesoría
│   │   └── curso-ia.astro        # Curso específico de IA
│   └── styles/
│       └── global.css            # Estilos globales
├── astro.config.mjs              # Configuración Astro
├── tailwind.config.mjs           # Configuración Tailwind
├── postcss.config.cjs            # Configuración PostCSS
└── package.json
```

## 🎯 Páginas del Sitio

### 1. **Página Principal** (`/`)
- Hero section con propuesta de valor
- Beneficios clave del servicio
- Testimonios de clientes
- Proceso de trabajo
- FAQ
- Formulario de contacto

### 2. **Academia** (`/academia`)
- Cursos de diseño instruccional
- Certificaciones
- Instructores especializados
- Precios y modalidades
- Structured Data para cursos

### 3. **Asesoría** (`/asesoria`)
- Servicios de consultoría personalizada
- Proceso de asesoría
- Beneficios de productos digitales
- Público objetivo
- Precios y agenda

### 4. **Curso IA** (`/curso-ia`)
- Curso específico sobre IA en e-learning
- Módulos detallados
- Formulario de inscripción
- Información del instructor
- FAQ específicas

## 🎨 Sistema de Diseño

### Colores
- **Primary**: `#28244a` (Azul oscuro)
- **Secondary**: `#2692d6` (Azul claro)
- **Accent**: `#fd5a93` (Rosa)
- **Yellow**: `#ffb148` (Amarillo)
- **Gray Light**: `#F5F5F5`
- **Text Dark**: `#333333`

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Configuración

### Google Tag Manager
El proyecto utiliza Google Tag Manager para analytics:
- ID: `GTM-K3268VF`
- Configurado en `BaseLayout.astro`

### EmailJS
Formularios de contacto configurados con:
- Service ID: `service_d08f3xv`
- Template ID: `template_b6dnfrh`
- Public Key: `K-nZvIRLeVaUXubMu`

### SEO y Meta Tags
- Meta tags completos para cada página
- Open Graph para redes sociales
- Twitter Cards
- Structured Data (JSON-LD)
- Sitemap automático
- Robots.txt optimizado

## 🚀 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run deploy` | Despliega a Cloudflare Pages |

## 📈 Características SEO

- ✅ Meta tags optimizados por página
- ✅ Open Graph y Twitter Cards
- ✅ Structured Data (JSON-LD) para organización y cursos
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ URLs canónicas
- ✅ Imágenes optimizadas con Sharp
- ✅ Carga rápida y Core Web Vitals optimizados

## 🎓 Servicios Documentados

### E-learning
- Cursos SCORM gamificados
- Diseño instruccional
- Producción multimedia
- Plataformas marca blanca

### Academia
- Cursos de diseño instruccional
- Certificaciones profesionales
- Formación en herramientas digitales
- Cursos en vivo y grabados

### Asesoría
- Consultoría personalizada
- Transformación digital
- Productos digitales
- Estrategias de monetización

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto

- **Website**: [https://ewaffle.cl](https://ewaffle.cl)
- **LinkedIn**: [Ewaffle](https://linkedin.com/company/ewaffle)
- **Instagram**: [@ewaffle.cl](https://www.instagram.com/ewaffle.cl/)
- **Email**: contacto@ewaffle.cl

---

Desarrollado con ❤️ por el equipo de Ewaffle
