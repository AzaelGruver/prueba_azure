import sql from 'mssql'
import config from '../config'
const configuracion = {
    user: config.dbUser,
    password:config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
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