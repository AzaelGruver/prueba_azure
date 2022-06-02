import { obtenerConexion, querys } from '../database'

export const obtenerMecanicos = async ( req, res )=> {
    try {
        const pool = await obtenerConexion();
        const resultado = await pool.request().query(querys.getAllMecanicos)
        res.json(resultado.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const agregarRescates = async (req, res) => {
  try {
      
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }  
}