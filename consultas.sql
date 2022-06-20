/*
CONSULTA a vistas mecanicos y mecanicos_suc
NOTAS
*Hay muchos registros con un no_empleado vacío
*No se encuentra el tiempo trabajado
*No se encuentra la clasificacion del mecanico
*/
	SELECT DISTINCT 
		mecanicos.nombre AS MECANICO, 
		162.59 AS HORAS,
		CASE 
			WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A'
			WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B'
			WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C'
			WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D'
			WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E'
			ELSE 'NO CLASIFICADO'
		END AS CLASIFICACION,
		mecanicos_suc.COSTO_HORA AS TARIFA, 
		mecanicos_suc.COSTO_HORA * 162.59  AS SUELDO, 
		190 AS OBJETIVO, 
		ROUND(162.59 * 100/190,0) AS ALCANCE
		FROM mecanicos INNER JOIN mecanicos_suc 
		ON mecanicos.no_empleado = mecanicos_suc.no_empleado 
		WHERE mecanicos.no_empleado > 0


/*Consulta de reporte con todos los campos; Falta agrupar las personas con diferentes id_mec*/
SELECT mecanicos_suc.id_mec, mecanicos_suc.nombre,
(select SUM(destajo_por_fecha_1.ttr)
FROM destajo_por_fecha_1 
WHERE destajo_por_fecha_1.fecha_fact BETWEEN '2022-04-01' AND '2022-04-30'
AND destajo_por_fecha_1.id_mec = mecanicos_suc.id_mec) AS HORAS,
CASE 
	WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A'
	WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B'
	WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C'
	WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D'
	WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E'
	ELSE 'NO CLASIFICADO'
END AS CLASIFICACION,
mecanicos_suc.COSTO_HORA,
190 AS Objetivo, 
(((SELECT SUM(destajo_por_fecha_1.ttr)
FROM destajo_por_fecha_1 
WHERE destajo_por_fecha_1.fecha_fact BETWEEN '2022-04-01' AND '2022-04-30'
AND destajo_por_fecha_1.id_mec = mecanicos_suc.id_mec))*100/190) AS Alcance
FROM mecanicos_suc 
JOIN destajo_por_fecha_1 ON destajo_por_fecha_1.id_mec = mecanicos_suc.id_mec
WHERE mecanicos_suc.no_empleado > 0
GROUP BY mecanicos_suc.id_mec, mecanicos_suc.nombre, mecanicos_suc.COSTO_HORA
ORDER BY mecanicos_suc.id_mec

/*Suma las horas trabajadas por cada orden atendida por un mismo mecanico */
(SELECT SUM(destajo_por_fecha_1.ttr) 
FROM destajo_por_fecha_1 
WHERE destajo_por_fecha_1.id_mec = 'OJV'
GROUP BY destajo_por_fecha_1.no_orden, destajo_por_fecha_1.id_mec)