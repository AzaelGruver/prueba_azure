"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _mecanicos = _interopRequireDefault(require("./routes/mecanicos.routes"));

var app = (0, _express["default"])(); //configuración del puerto

app.set('port', _config["default"].port);
app.use(_mecanicos["default"]);
var _default = app;
exports["default"] = _default;