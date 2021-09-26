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
     // app.use(express.json({limit: '20mb'}))
     // app.use(express.urlencoded({ limit: '20mb', parameterLimit: 100000, extended: true }))
     app.use(express.json())
     app.use(express.urlencoded({ extended: false }))
     //routes
     // las rutas deben estar siempre después de la definición del CORS
     app.use('/api',router)

     //
export default app


