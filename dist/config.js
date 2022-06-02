"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "powerbi",
  dbPassword: process.env.DB_PASSWORD || "Soporte1",
  dbServer: process.env.DB_SERVER || "10.74.210.149",
  dbDatabase: process.env.DB_DATABASE || "BUSINESS_PRO"
};
exports["default"] = _default;