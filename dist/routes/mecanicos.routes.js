"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mecanicosController = require("../controllers/mecanicosController");

var router = (0, _express.Router)(); // obtener todos los mecanicos

router.get('/mecanicos', _mecanicosController.obtenerMecanicos);
var _default = router;
exports["default"] = _default;