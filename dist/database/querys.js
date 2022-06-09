"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  // getMecanicos: "SELECT DISTINCT no_empleado , nombre FROM dbo.mecanicos WHERE no_empleado != '' ORDER BY nombre ASC",
  getMecanicos: "SELECT  DISTINCT id_mec, no_empleado, nombre, id_plaza FROM dbo.mecanicos_suc",
  calcularNominaMecanico: "SELECT * FROM dbo.prenomina WHERE FECHAFIN BETWEEN '15/05/2022' AND '31/05/2022' AND IDTECNICO= @IDTECNICO AND SITUACION= @SITUACION"
};
exports.querys = querys;