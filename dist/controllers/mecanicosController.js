"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerMecanicos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _conexion = require("../database/conexion");

var obtenerMecanicos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _conexion.obtenerConexion)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query('SELECT * FROM dbo.mecanicos');

          case 6:
            resultado = _context.sent;
            // console.log(resultado)
            res.json(resultado.recordset);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function obtenerMecanicos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtenerMecanicos = obtenerMecanicos;