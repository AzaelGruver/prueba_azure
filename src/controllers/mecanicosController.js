import { obtenerConexion, querys } from '../database'
//obtiene todos los mecanicos por plaza
export const obtenerMecanicos = async ( req, res )=> {
    try {
        const pool = await obtenerConexion()
        const resultado = await pool.request().query(querys.getMecanicos)
        res.json(resultado.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
// Calcular pago, por horas trabajadas
export const calcularHorasMecanico = async (req, res) => {
  try {
      const sueldoBase = 3700
      
      const pool = await obtenerConexion()
      const resultado = await pool.request().query(querys.calcularHorasMecanico)
      console.log(resultado)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }  
}