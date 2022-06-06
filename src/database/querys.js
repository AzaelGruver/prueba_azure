export const querys = {
    getMecanicos: "SELECT DISTINCT no_empleado , nombre FROM dbo.mecanicos WHERE no_empleado != '' ORDER BY nombre ASC",
    calcularHorasMecanico: 'SELECT '
}