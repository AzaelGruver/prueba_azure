import { config } from 'dotenv'
config()

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "powerbi",
    dbPassword: process.env.DB_PASSWORD || "Soporte1",
    dbServer: process.env.DB_SERVER || "10.74.210.149",
    dbDatabase: process.env.DB_DATABASE || "BUSINESS_PRO",

}