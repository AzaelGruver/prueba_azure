import { Router } from 'express'
import { obtenerMecanicos, reporteMecanico } from '../controllers/mecanicosController'
const router = Router()

// obtener todos los mecanicos
router.get('/mecanicos', obtenerMecanicos)
router.get('/mecanico/:id/:factura', reporteMecanico)
export default router