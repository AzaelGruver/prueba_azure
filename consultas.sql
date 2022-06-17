/*
CONSULTA a vistas mecanicos y mecanicos_suc
SELECT DISTINCT mecanicos.no_empleado, mecanicos.nombre, mecanicos_suc.COSTO_HORA,
	CASE 
		WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A'
		WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B'
		WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C'
		WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D'
		WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E'
		ELSE 'NO CLASIFICADO'
	END AS Clasificacion
	FROM mecanicos INNER JOIN mecanicos_suc 
	ON mecanicos.no_empleado = mecanicos_suc.no_empleado 
	WHERE mecanicos.no_empleado > 0


NOTAS
*Hay muchos registros con un no_empleado vacío
*No se encuentra el tiempo trabajado
*No se encuentra la clasificacion del mecanico
*/

