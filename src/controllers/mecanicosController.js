import { obtenerConexion } from '../database/conexion'

export const obtenerMecanicos = async ( req, res )=> {
    try {
        const pool = await obtenerConexion();
        const resultado = await pool.request().query('SELECT * FROM dbo.mecanicos')
        // console.log(resultado)
        res.json(resultado.recordset)
        
    } catch (error) {
        console.log(error)
    }
}