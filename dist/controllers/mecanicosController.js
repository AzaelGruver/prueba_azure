"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerMecanicos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

//obtiene todos los mecanicos por plaza
var obtenerMecanicos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.obtenerConexion)();

          case 3:
            pool = _context.sent;
            console.log(pool);
            _context.next = 7;
            return pool.request().query(_database.querys.getMecanicos);

          case 7:
            resultado = _context.sent;
            console.log(resultado);
            res.json(resultado.recordset);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function obtenerMecanicos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Calcular pago, por horas trabajadas
// export const calcularHorasMecanico = async (req, res) => {
//   try {
//       const sueldoBase = 3700
//       const pool = await obtenerConexion()
//       const resultado = await pool.request().query(querys.calcularHorasMecanico)
//       console.log(resultado)
//   } catch (error) {
//       res.status(500)
//       res.send(error.message)
//   }  
// }


exports.obtenerMecanicos = obtenerMecanicos;