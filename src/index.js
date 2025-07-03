// 🖥️ Imprime un mensaje para confirmar que el proyecto inició
console.log("Mi Primer Proyecto Node js")

// 🚫 Esta línea está comentada porque no necesitas importar 'ejs' directamente si ya está configurado más adelante
// import ejs from 'ejs'

// 🚀 Importa el framework Express para crear el servidor
import express from 'express'

// 📁 Importa utilidades para manejar rutas de archivos
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

// 📦 Importa las rutas definidas en otro archivo
import indexRoutes from './routes/index.js'

// 🏗️ Crea una instancia de la aplicación Express
const app = express()

// 📍 Obtiene la ruta absoluta del directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url))

// 📂 Muestra la ruta a la carpeta 'views', útil para verificar que esté correctamente ubicada
console.log(join(__dirname, 'views'))

// 🛠️ Configura la carpeta donde están las vistas EJS
app.set('views', join(__dirname, 'views'))

// 🧠 Establece EJS como motor de plantillas
app.set('view engine', 'ejs')

// 🔀 Usa las rutas importadas en la app
app.use(indexRoutes)

// 🌐 Sirve archivos estáticos desde la carpeta 'public' (CSS, imágenes, JS)
app.use(express.static(join(__dirname, 'public')))

// 📡 Inicia el servidor en el puerto definido por el entorno o por defecto en el 3000
app.listen(process.env.PORT || 3000)

// ✅ Imprime un mensaje indicando en qué puerto está escuchando el servidor
console.log('Server is listening on port', process.env.PORT || 3000)
