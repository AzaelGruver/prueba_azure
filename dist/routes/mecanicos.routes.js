"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mecanicosController = require("../controllers/mecanicosController");

var router = (0, _express.Router)(); // obtener todos los mecanicos

router.get('/mecanicos', _mecanicosController.obtenerMecanicos); //router.get('/mecanico/:id/:factura', reporteMecanico)

router.get('/mecanico/:fechaInicio/:fechaFinal/:idMec', _mecanicosController.nominaMecanico);
router.get('/mecanico_detalles/:fechaInicio/:fechaFinal/:idMec', _mecanicosController.detallesNominaMecanico);
router.get('/mecanicos/:fechaInicio/:fechaFinal/:idPlaza', _mecanicosController.nominaAllMecanicos); //router.get('/mecanicosReporte', nominaAllMecanicos)
// router.get('/mecanicosReporte', nominaAllMecanicos)

var _default = router;
exports["default"] = _default;