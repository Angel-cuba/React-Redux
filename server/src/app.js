import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import { serverPORT } from './keytoserver/key';
import router from './routes/post.routes';
import userRouter from './routes/user.routes';
import multer from 'multer';

import { time } from './helpers/libs';

const app = express();

//Puerto
app.set('port', serverPORT.PORT || '');
//CORS
// app.use(function(req, res, next) {
// 		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 		res.header({ 'Access-Control-Allow-Origin': 'http://localhost:3000'});

// 		next();
// 	});
// //http://localhost:3000
 	  let options =  	{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};
// app.use(cors());options
//MIDDLEWARES
app.use(morgan('dev'));


app.get('/', (req, res) => {
     res.send('App running on Heroku');
})

app.use(express.json({limit: '20mb', extended:true }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
//routes
// las rutas deben estar siempre después de la definición del CORS
app.use('/api',cors(options), router);
app.use('/api/user', cors(options), userRouter);

//
export default app;
