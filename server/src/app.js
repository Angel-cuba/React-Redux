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
app.use(cors());
//MIDDLEWARES
app.use(morgan('dev'));

//Image
const imageName = time();
const storage = multer.diskStorage({
	destination: path.join(__dirname, 'public/upload'),
	filename: (req, file, cb) => {
		cb(null, imageName + path.extname(file.originalname));
	},
});
app.use(multer({ storage }).single('selectedFile'));
//
// app.use(express.json({}))
// app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit: '20mb', extended:true }));
// app.use(express.text({ limit: '20mb'}));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
//routes
// las rutas deben estar siempre después de la definición del CORS
app.use('/api', router);
app.use('/api/user', userRouter);

//
export default app;
