import express from 'express'
import config from './config'
import mecanicosRoutes from './routes/mecanicos.routes'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

// configuración del puerto
app.set('port', config.port)
// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// rutas
app.use('/api',mecanicosRoutes)

export default app