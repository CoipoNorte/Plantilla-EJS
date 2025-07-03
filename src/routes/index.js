// 🚀 Importamos el Router de Express
import { Router } from 'express'

// 🛠️ Creamos la instancia del router
const router = Router()

// 🌐 Ruta raíz: página de inicio
router.get('/', (req, res) => {
    res.render('index', { title: 'Saludos' })
})

// 📘 Ruta "About": información sobre nosotros
router.get('/about', (req, res) => {
    res.render('about', { title: 'Nosotros' })
})

// 📬 Ruta "Contact": formulario o medios de contacto
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto' })
})

// 📤 Exportamos el router para usarlo en app.js
export default router
