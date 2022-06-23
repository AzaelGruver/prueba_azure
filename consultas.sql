/*
*REPORTE TODOS LOS MECANICO
* recibe; fechaInicio, fechaFinal, id_Plaza
*/
SELECT DISTINCT destajo_por_fecha_1.no_empleado,
mecanicos_suc.nombre, 
(select SUM(destajo_por_fecha_1.ttr) 
	FROM destajo_por_fecha_1 
	WHERE destajo_por_fecha_1.fecha_fact 
	BETWEEN '2022-04-01' AND '2022-04-30'
	AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) 
AS HORAS,
CASE 
	WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A'
	WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B'
	WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C'
	WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D'
	WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E'
	ELSE 'NO CLASIFICADO'
END AS CLASIFICACION, 
mecanicos_suc.COSTO_HORA, 
((select SUM(destajo_por_fecha_1.ttr) 
	FROM destajo_por_fecha_1 
	WHERE destajo_por_fecha_1.fecha_fact 
	BETWEEN '2022-04-01' AND '2022-04-30'
	AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) * mecanicos_suc.COSTO_HORA) 
	AS SUELDO,
	190 AS OBJETIVO, 
((select SUM(destajo_por_fecha_1.ttr) 
	FROM destajo_por_fecha_1 
	WHERE destajo_por_fecha_1.fecha_fact 
	BETWEEN '2022-04-01' AND '2022-04-30'
	AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado)*100/190) 
AS ALCANCE
FROM destajo_por_fecha_1 
	JOIN mecanicos_suc ON mecanicos_suc.no_empleado = destajo_por_fecha_1.no_empleado
WHERE  destajo_por_fecha_1.no_empleado > 0 AND mecanicos_suc.id_plaza = 8

SELECT DISTINCT destajo_por_fecha_1.no_empleado, mecanicos_suc.nombre, (select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) AS HORAS, CASE WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A' WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B' WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C' WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D' WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E' ELSE 'NO CLASIFICADO' END AS CLASIFICACION, mecanicos_suc.COSTO_HORA, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) * mecanicos_suc.COSTO_HORA) AS SUELDO, 190 AS OBJETIVO, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado)*100/190) AS ALCANCE FROM destajo_por_fecha_1 JOIN mecanicos_suc ON mecanicos_suc.no_empleado = destajo_por_fecha_1.no_empleado WHERE  destajo_por_fecha_1.no_empleado > 0 AND mecanicos_suc.id_plaza = @idPlaza

/* 
*reporte individual por mecanico; 
*recibe los parametros: fechaInicio, fechaFinal, idMec
*/
SELECT DISTINCT destajo_por_fecha_1.no_empleado,
mecanicos_suc.nombre, 
(select SUM(destajo_por_fecha_1.ttr) 
	FROM destajo_por_fecha_1 
	WHERE destajo_por_fecha_1.fecha_fact 
	BETWEEN '2022-04-01' AND '2022-04-30'
	AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) 
AS HORAS,
CASE 
	WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A'
	WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B'
	WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C'
	WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D'
	WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E'
	ELSE 'NO CLASIFICADO'
END AS CLASIFICACION, 
mecanicos_suc.COSTO_HORA, 
((select SUM(destajo_por_fecha_1.ttr) 
	FROM destajo_por_fecha_1 
	WHERE destajo_por_fecha_1.fecha_fact 
	BETWEEN '2022-04-01' AND '2022-04-30'
	AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) * mecanicos_suc.COSTO_HORA) 
	AS SUELDO,
	190 AS OBJETIVO, 
((select SUM(destajo_por_fecha_1.ttr) 
	FROM destajo_por_fecha_1 
	WHERE destajo_por_fecha_1.fecha_fact 
	BETWEEN '2022-04-01' AND '2022-04-30'
	AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado)*100/190) 
AS ALCANCE, 
mecanicos_suc.id_plaza
FROM destajo_por_fecha_1 
	JOIN mecanicos_suc ON mecanicos_suc.no_empleado = destajo_por_fecha_1.no_empleado
WHERE  destajo_por_fecha_1.no_empleado > 0 AND mecanicos_suc.no_empleado = 0000383


SELECT DISTINCT destajo_por_fecha_1.no_empleado,mecanicos_suc.nombre, (select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) AS HORAS, CASE WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A' WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B' WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C' WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D' WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E' ELSE 'NO CLASIFICADO' END AS CLASIFICACION, mecanicos_suc.COSTO_HORA, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado) * mecanicos_suc.COSTO_HORA) AS SUELDO, 190 AS OBJETIVO, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND destajo_por_fecha_1.no_empleado = mecanicos_suc.no_empleado)*100/190) AS ALCANCE, mecanicos_suc.id_plaza FROM destajo_por_fecha_1 JOIN mecanicos_suc ON mecanicos_suc.no_empleado = destajo_por_fecha_1.no_empleado WHERE  destajo_por_fecha_1.no_empleado > 0 AND mecanicos_suc.no_empleado = @noEmpleado
/*
* CONSULTA DETALLES DE LA NOMINA MECANICO
* recibe los parametros: fechaInicio, fechaFinal, idMecanico

*/
Select mecanicos_suc.no_empleado, mecanicos_suc.nombre, destajo_por_fecha_1.no_orden, destajo_por_fecha_1.descripcion,  destajo_por_fecha_1.ttr as horas, mecanicos_suc.COSTO_HORA AS Tarifa, (destajo_por_fecha_1.ttr*mecanicos_suc.COSTO_HORA) AS salario  ,destajo_por_fecha_1.estado, destajo_por_fecha_1.fecha_fact FROM destajo_por_fecha_1 JOIN mecanicos_suc on mecanicos_suc.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN '2022-04-01' AND '2022-05-30' AND mecanicos_suc.no_empleado = 0000383 ORDER BY destajo_por_fecha_1.fecha_fact

Select mecanicos_suc.no_empleado, mecanicos_suc.nombre, destajo_por_fecha_1.no_orden, 
destajo_por_fecha_1.descripcion,  destajo_por_fecha_1.ttr as horas, mecanicos_suc.COSTO_HORA AS Tarifa, 
(destajo_por_fecha_1.ttr*mecanicos_suc.COSTO_HORA) AS salario  ,destajo_por_fecha_1.estado, destajo_por_fecha_1.fecha_fact
FROM destajo_por_fecha_1 JOIN mecanicos_suc on mecanicos_suc.id_mec = destajo_por_fecha_1.id_mec
WHERE destajo_por_fecha_1.fecha_fact BETWEEN '2022-04-01' AND '2022-05-30'
AND mecanicos_suc.no_empleado = 0000383
ORDER BY destajo_por_fecha_1.fecha_fact

Select mecanicos_suc.no_empleado, mecanicos_suc.nombre, destajo_por_fecha_1.no_orden, destajo_por_fecha_1.descripcion,  destajo_por_fecha_1.ttr as horas, mecanicos_suc.COSTO_HORA AS Tarifa, (destajo_por_fecha_1.ttr*mecanicos_suc.COSTO_HORA) AS salario  ,destajo_por_fecha_1.estado, destajo_por_fecha_1.fecha_fact FROM destajo_por_fecha_1 JOIN mecanicos_suc on mecanicos_suc.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND mecanicos_suc.no_empleado = @no_empleado ORDER BY destajo_por_fecha_1.fecha_fact