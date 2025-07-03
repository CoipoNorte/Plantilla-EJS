# 🧪 Plantilla-EJS

Un sitio web simple pero funcional construido con **Node.js**, **Express** y **EJS** para practicar plantillas dinámicas y estructuración de rutas en proyectos backend.

![Captura del proyecto](./doc/Captura%201.jpeg)

---

## 🚀 Tecnologías utilizadas

- **Node.js**: Entorno de ejecución.
- **Express**: Framework para servidor web.
- **EJS**: Motor de plantillas para renderizar vistas dinámicas.
- **Bootstrap**: Estilos responsivos vía CDN.
- **CSS personalizado**: ubicado en `public/css/main.css`.

---

## 📁 Estructura del proyecto

```
Plantilla-EJS/
├── doc/                 # Imágenes y documentación
├── src/
│   ├── public/          # Archivos estáticos
│   │   ├── css/
│   │   └── img/
│   ├── routes/          # Rutas con Express
│   ├── views/
│   │   ├── partials/    # Componentes reutilizables (head, nav, footer)
│   │   ├── index.ejs    # Página principal
│   │   ├── about.ejs    # Sección "Nosotros"
│   │   └── contact.ejs  # Sección "Contacto"
│   └── index.js         # Configuración principal del servidor
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

---

## 🛠️ Instalación

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/Plantilla-EJS.git

# Ingresa a la carpeta del proyecto
cd Plantilla-EJS

# Instala dependencias
npm install

# Inicia el servidor
npm start
```

Por defecto corre en `http://localhost:3000` o donde encuentre un puerto disponible

---

## 📌 Rutas principales

| Ruta       | Descripción               |
|------------|---------------------------|
| `/`        | Página de inicio          |
| `/about`   | Información sobre el sitio|
| `/contact` | Página de contacto        |

---

## 📷 Créditos visuales

- `Captura 1.jpeg`: ubicada en la carpeta `doc/`
- `patos (1).gif`: divertido toque visual desde `public/img`

---

## 💡 Notas

Este proyecto está pensado como una base educativa para comenzar a trabajar con Express y EJS. Puedes expandirlo, integrarle bases de datos, usar Tailwind, Chakra UI o añadir formularios interactivos.

---

## 📬 Autoría

Este proyecto es del contenido de [fazt](https://youtu.be/OVESuyVoPkI), quien comparte excelentes tutoriales sobre desarrollo web con Node.js y EJS.

