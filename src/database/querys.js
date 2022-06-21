export const querys = {
    getMecanicos: "SELECT * FROM dbo.mecanicos WHERE no_empleado != '' ORDER BY nombre ASC",
    // getMecanicos: "SELECT  DISTINCT id_mec, no_empleado, nombre, id_plaza FROM dbo.mecanicos_suc",
    calcularNominaMecanico: "SELECT * FROM [dbo].[prenomina] WHERE FECHAFIN BETWEEN '15/05/2022' AND '31/05/2022' AND IDTECNICO= @IDTECNICO AND SITUACION= @SITUACION",
    // reporteMecanicos: "SELECT mecanicos_suc.id_mec, mecanicos_suc.nombre, (select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN '2022-04-01' AND '2022-04-30' AND mecanicos.nombre = mecanicos_suc.nombre) AS HORAS, CASE  	WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A' 	WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B' 	WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C' 	WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D' 	WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E' 	ELSE 'NO CLASIFICADO' END AS CLASIFICACION, mecanicos_suc.COSTO_HORA, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN '2022-04-01' AND '2022-04-30' AND mecanicos.nombre = mecanicos_suc.nombre)* mecanicos_suc.COSTO_HORA) AS Sueldo, 190 AS Objetivo,  (((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN '2022-04-01' AND '2022-04-30' AND mecanicos.nombre = mecanicos_suc.nombre))*100/190) AS Alcance FROM mecanicos_suc  JOIN destajo_por_fecha_1 ON destajo_por_fecha_1.id_mec = mecanicos_suc.id_mec WHERE mecanicos_suc.no_empleado > 0 AND  mecanicos_suc.id_plaza = 8 GROUP BY mecanicos_suc.id_mec, mecanicos_suc.nombre, mecanicos_suc.COSTO_HORA ORDER BY mecanicos_suc.id_mec"
    // nominaAllMecanicos: "SELECT mecanicos_suc.id_mec, mecanicos_suc.nombre, (select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN  @fechaInicio AND fecha_fact= @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre) AS HORAS, CASE WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A' 	WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B' 	WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C' 	WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D' 	WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E' 	ELSE 'NO CLASIFICADO' END AS CLASIFICACION, mecanicos_suc.COSTO_HORA, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN fecha_fact= @fechaInicio AND fecha_fact= @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre)* mecanicos_suc.COSTO_HORA) AS Sueldo, 190 AS Objetivo,  (((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN fecha_fact= @fechaInicio AND fecha_fact= @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre))*100/190) AS Alcance FROM mecanicos_suc  JOIN destajo_por_fecha_1 ON destajo_por_fecha_1.id_mec = mecanicos_suc.id_mec WHERE mecanicos_suc.no_empleado > 0 AND  mecanicos_suc.id_plaza = @idPlaza GROUP BY mecanicos_suc.id_mec, mecanicos_suc.nombre, mecanicos_suc.COSTO_HORA ORDER BY mecanicos_suc.id_mec"
    nominaMecanico: "SELECT mecanicos_suc.id_mec, mecanicos_suc.nombre, (select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre) AS HORAS, CASE WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A' WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B' WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C' WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D' WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E' ELSE 'NO CLASIFICADO' END AS CLASIFICACION, mecanicos_suc.COSTO_HORA, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre)* mecanicos_suc.COSTO_HORA) AS Sueldo, 190 AS Objetivo, (((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre))*100/190) AS Alcance, mecanicos_suc.id_plaza FROM mecanicos_suc JOIN destajo_por_fecha_1 ON destajo_por_fecha_1.id_mec = mecanicos_suc.id_mec WHERE mecanicos_suc.no_empleado > 0 AND mecanicos_suc.id_mec = @idMec GROUP BY mecanicos_suc.id_mec, mecanicos_suc.nombre, mecanicos_suc.COSTO_HORA, mecanicos_suc.id_plaza",
    detallesNominaMecanico: "Select mecanicos_suc.id_mec, mecanicos_suc.nombre, destajo_por_fecha_1.no_orden, destajo_por_fecha_1.descripcion,  destajo_por_fecha_1.ttr as horas, mecanicos_suc.COSTO_HORA AS Tarifa, (destajo_por_fecha_1.ttr*mecanicos_suc.COSTO_HORA) AS salario  ,destajo_por_fecha_1.estado, destajo_por_fecha_1.fecha_fact FROM destajo_por_fecha_1 JOIN mecanicos_suc on mecanicos_suc.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN @fechaInicio AND @fechaFinal AND mecanicos_suc.id_mec = @idMec OR mecanicos_suc.id_mec = @idMeca ORDER BY destajo_por_fecha_1.fecha_fact",
    nominaAllMecanicos: "SELECT mecanicos_suc.id_mec, mecanicos_suc.nombre, (select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN  @fechaInicio AND  @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre) AS HORAS, CASE WHEN mecanicos_suc.COSTO_HORA >= 110 then 'A' WHEN  mecanicos_suc.COSTO_HORA >= 100 then 'B' 	WHEN  mecanicos_suc.COSTO_HORA >= 90 then 'C' 	WHEN  mecanicos_suc.COSTO_HORA >= 70 then 'D' 	WHEN  mecanicos_suc.COSTO_HORA >= 60 then 'E' 	ELSE 'NO CLASIFICADO' END AS CLASIFICACION, mecanicos_suc.COSTO_HORA, ((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN  @fechaInicio AND  @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre)* mecanicos_suc.COSTO_HORA) AS Sueldo, 190 AS Objetivo,  (((select SUM(destajo_por_fecha_1.ttr) FROM destajo_por_fecha_1 JOIN mecanicos on mecanicos.id_mec = destajo_por_fecha_1.id_mec WHERE destajo_por_fecha_1.fecha_fact BETWEEN  @fechaInicio AND  @fechaFinal AND mecanicos.nombre = mecanicos_suc.nombre))*100/190) AS Alcance FROM mecanicos_suc  JOIN destajo_por_fecha_1 ON destajo_por_fecha_1.id_mec = mecanicos_suc.id_mec WHERE mecanicos_suc.no_empleado > 0 AND  mecanicos_suc.id_plaza = @idPlaza GROUP BY mecanicos_suc.id_mec, mecanicos_suc.nombre, mecanicos_suc.COSTO_HORA ORDER BY mecanicos_suc.id_mec"
}

