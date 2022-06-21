"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reporteMecanico = exports.obtenerMecanicos = exports.nominaMecanico = exports.nominaAllMecanicos = exports.detallesNominaMecanico = void 0;

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
            _context.next = 6;
            return pool.request().query(_database.querys.getMecanicos);

          case 6:
            resultado = _context.sent;
            console.log(resultado);
            res.json(resultado.recordset);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function obtenerMecanicos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Calcular pago, por horas trabajadas


exports.obtenerMecanicos = obtenerMecanicos;

var reporteMecanico = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.obtenerConexion)();

          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().input("IDTECNICO", req.params.id).input("SITUACION", req.params.factura).query(_database.querys.calcularNominaMecanico);

          case 6:
            resultado = _context2.sent;
            console.log(resultado.recordset);
            return _context2.abrupt("return", res.json(resultado.recordset));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function reporteMecanico(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.reporteMecanico = reporteMecanico;

var nominaMecanico = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.obtenerConexion)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("fechaInicio", req.params.fechaInicio).input("fechaFinal", req.params.fechaFinal).input("idMec", req.params.idMec).query(_database.querys.nominaMecanico);

          case 6:
            resultado = _context3.sent;
            return _context3.abrupt("return", res.json(resultado.recordset));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function nominaMecanico(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.nominaMecanico = nominaMecanico;

var detallesNominaMecanico = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.obtenerConexion)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("fechaInicio", req.params.fechaInicio).input("fechaFinal", req.params.fechaFinal).input("idMec", req.params.idMec).query(_database.querys.detallesNominaMecanico);

          case 6:
            resultado = _context4.sent;
            return _context4.abrupt("return", res.json(resultado.recordset));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function detallesNominaMecanico(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.detallesNominaMecanico = detallesNominaMecanico;

var nominaAllMecanicos = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _database.obtenerConexion)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().input("fechaInicio", req.params.fechaInicio).input("fechaFinal", req.params.fechaFinal).input("idPlaza", req.params.idPlaza).query(_database.querys.nominaAllMecanicos);

          case 6:
            resultado = _context5.sent;
            return _context5.abrupt("return", res.json(resultado.recordset));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function nominaAllMecanicos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.nominaAllMecanicos = nominaAllMecanicos;