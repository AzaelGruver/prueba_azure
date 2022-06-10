import express from 'express'
import mecanicosRoutes from './routes/mecanicos.routes'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
const PORT  = 4000
// configuración del puerto
app.set('port', PORT)
// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// rutas
app.use('/api',mecanicosRoutes)

export default app