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
    const pool = await obtenerConexion()
    const resultado = await pool
        .request()
        .input("IDTECNICO", req.params.id)
        .input("SITUACION", req.params.factura)
        .query(querys.calcularNominaMecanico)
        console.log(resultado.recordset)
        return res.json(resultado.recordset)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }  
}

export const nominaMecanico = async (req, res) => {
    try {
        const pool = await obtenerConexion()
        const resultado = await pool 
        .request()
        .input("fechaInicio", req.params.fechaInicio)
        .input("fechaFinal", req.params.fechaFinal)
        .input("noEmpleado", req.params.noEmpleado)
        .query(querys.nominaMecanico)
        return res.json(resultado.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const detallesNominaMecanico = async (req, res) => {
    try {
        const pool = await obtenerConexion()
        const resultado = await pool 
        .request()
        .input("fechaInicio", req.params.fechaInicio)
        .input("fechaFinal", req.params.fechaFinal)
        .input("noEmpleado", req.params.noEmpleado)
        .query(querys.detallesNominaMecanico)
        return res.json(resultado.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const nominaAllMecanicos = async (req, res) => {
    try {
        const pool = await obtenerConexion()
        const resultado = await pool
        .request()
        .input("fechaInicio", req.params.fechaInicio)
        .input("fechaFinal", req.params.fechaFinal)
        .input("idPlaza",req.params.idPlaza)
        .query(querys.nominaAllMecanicos)
        return res.json(resultado.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}