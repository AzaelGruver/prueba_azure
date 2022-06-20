import { Router } from 'express'
import { obtenerMecanicos, reporteMecanico, nominaAllMecanicos } from '../controllers/mecanicosController'
const router = Router()

// obtener todos los mecanicos
router.get('/mecanicos', obtenerMecanicos)
router.get('/mecanico/:id/:factura', reporteMecanico)
router.get('/mecanicos/:fechaInicio/:fechaFinal/:idPlaza', nominaAllMecanicos)
export default router
