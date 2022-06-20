"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getMecanicos: "SELECT DISTINCT no_empleado , nombre FROM dbo.mecanicos WHERE no_empleado != '' ORDER BY nombre ASC",
  // getMecanicos: "SELECT  DISTINCT id_mec, no_empleado, nombre, id_plaza FROM dbo.mecanicos_suc",
  calcularNominaMecanico: "SELECT * FROM [dbo].[prenomina] WHERE FECHAFIN BETWEEN '15/05/2022' AND '31/05/2022' AND IDTECNICO= @IDTECNICO AND SITUACION= @SITUACION",
  reporteMecanicos: "SELECT DISTINCT  mecanicos.nombre AS MECANICO, 162.59 AS HORAS,CASE  WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A' WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B' WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C' WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D' WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E' ELSE 'NO CLASIFICADO' END AS CLASIFICACION, mecanicos_suc.COSTO_HORA AS TARIFA, mecanicos_suc.COSTO_HORA * 162.59  AS SUELDO, 190 AS OBJETIVO, ROUND(162.59 * 100/ 190,0) AS ALCANCE FROM mecanicos INNER JOIN mecanicos_suc  ON mecanicos.no_empleado = mecanicos_suc.no_empleado  WHERE mecanicos.no_empleado > 0"
};
exports.querys = querys;