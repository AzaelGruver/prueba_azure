import sql from 'mssql'
import config from '../config'

const configuracion = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server:  process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, //debe ser true cuando se haga el deploy a azure
        trustServerCertificate: false
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