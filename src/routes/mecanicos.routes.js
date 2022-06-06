import { Router } from 'express'
import { obtenerMecanicos, calcularHorasMecanico } from '../controllers/mecanicosController'
const router = Router()

// obtener todos los mecanicos
router.get('/mecanicos', obtenerMecanicos)
// router.get('/mecanicosHoras', calcularHorasMecanico)
export default router