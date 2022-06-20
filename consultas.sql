/*
CONSULTA a vistas mecanicos y mecanicos_suc
NOTAS
*Hay muchos registros con un no_empleado vacío
*No se encuentra el tiempo trabajado
*No se encuentra la clasificacion del mecanico
*/
<<<<<<< HEAD
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
=======
SELECT DISTINCT
	mecanicos.no_empleado,
	mecanicos.nombre AS MECANICO, 
	162.59 /*CONSULTA A HORAS*/ AS HORAS,
	CASE 
		WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A'
		WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B'
		WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C'
		WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D'
		WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E'
		ELSE 'NO CLASIFICADO'
	END AS CLASIFICACION,
	mecanicos_suc.COSTO_HORA AS TARIFA, 
	mecanicos_suc.COSTO_HORA * 162.59 /*CONSULTA A HORAS*/ AS SUELDO, 
	190 AS OBJETIVO, 
	ROUND(162.59  /*CONSULTA A HORAS*/ *100/190,0) AS ALCANCE
	FROM mecanicos INNER JOIN mecanicos_suc 
	ON mecanicos.no_empleado = mecanicos_suc.no_empleado 
	WHERE mecanicos.no_empleado > 0
>>>>>>> 35b86b9fb1e7c5f8075488935c46e65e717782c4



