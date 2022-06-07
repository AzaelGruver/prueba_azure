import { obtenerConexion, querys } from '../database'
//obtiene todos los mecanicos por plaza
export const obtenerMecanicos = async ( req, res )=> {
    try {
        const pool = await obtenerConexion()
        const resultado = await pool.request().query(querys.getMecanicos)
        console.log(resultado)
        res.json(resultado.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
// Calcular pago, por horas trabajadas
export const reporteMecanico = async (req, res) => {
  try {
    console.log(req.params)
    const pool = await obtenerConexion()
    const resultado = await pool
        .request()
        .input("IDTECNICO", req.params.id)
        .input("SITUACION", req.params.factura)
        .query(querys.calcularNominaMecanico)

        return res.json(resultado.recordset)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }  
}