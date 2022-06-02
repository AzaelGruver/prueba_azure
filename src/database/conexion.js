import sql from 'mssql'
import config from '../config'

const configuracion = {
    user: "powerbi",
    password:"Soporte1",
    server: "10.74.210.149",
    database: "BUSINESS_PRO",
    options: {
        encrypt: false, //debe ser true cuando se haga el deploy a azure
        trustServerCertificate: true
    }
}
export const obtenerConexion = async () => {
    try {
        const pool = await sql.connect(configuracion)
        return pool;
    } catch (error) {
        console.log(error)
    }
}
// obtenerConexion()