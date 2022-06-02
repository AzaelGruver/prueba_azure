import { Router } from 'express'
import { obtenerMecanicos } from '../controllers/mecanicosController'
const router = Router()

// obtener todos los mecanicos
router.get('/mecanicos', obtenerMecanicos)

export default router