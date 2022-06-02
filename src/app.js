import express from 'express'
import config from './config'
import mecanicosRoutes from './routes/mecanicos.routes'

const app = express()

//configuración del puerto
app.set('port', config.port)
app.use(mecanicosRoutes)

export default app