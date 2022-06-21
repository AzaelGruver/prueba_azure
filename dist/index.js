"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

// import './database/conexion'
_app["default"].listen(_app["default"].get('port'));

console.log("Servidor corriendo en el puerto ".concat(_app["default"].get('port'))); // console.log('Desde index')
//hoisting de javascript