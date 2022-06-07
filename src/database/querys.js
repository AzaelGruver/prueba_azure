export const querys = {
    // getMecanicos: "SELECT DISTINCT no_empleado , nombre FROM dbo.mecanicos WHERE no_empleado != '' ORDER BY nombre ASC",
    getMecanicos: "SELECT  DISTINCT id_mec, no_empleado, nombre, id_plaza FROM dbo.mecanicos_suc",
    calcularNominaMecanico: 'SELECT * FROM dbo.prenomina WHERE IDTECNICO= @IDTECNICO AND SITUACION= @SITUACION'
}   