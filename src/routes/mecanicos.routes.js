import { Router } from 'express'
import { obtenerMecanicos, reporteMecanico, nominaMecanico, detallesNominaMecanico, nominaAllMecanicos } from '../controllers/mecanicosController'
const router = Router()

// obtener todos los mecanicos
router.get('/mecanicos', obtenerMecanicos)
//router.get('/mecanico/:id/:factura', reporteMecanico)

router.get('/mecanico/:fechaInicio/:fechaFinal/:noEmpleado', nominaMecanico)
router.get('/mecanico_detalles/:fechaInicio/:fechaFinal/:noEmpleado', detallesNominaMecanico)
router.get('/mecanicos/:fechaInicio/:fechaFinal/:idPlaza', nominaAllMecanicos)
//router.get('/mecanicosReporte', nominaAllMecanicos)
// router.get('/mecanicosReporte', nominaAllMecanicos)
export default router
