import express from 'express';
import cors from 'cors'
import morgan from 'morgan'

import { serverPORT } from './keytoserver/key'
import router from './routes/routes'

const app = express()


     //Puerto
     app.set('port', serverPORT.PORT || '')
     //CORS
     app.use(cors())
     //MIDDLEWARES
     app.use(morgan('dev'))

     //
     app.use(express.urlencoded({ extended: false }))
     app.use(express.json())

     //routes
     // las rutas deben estar siempre después de la definición de CORS
     app.use('/api',router)

     //
export default app


