const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { serverPORT } = require('./keytoserver/key');
const router = require('./routes/post.routes');
const userRouter = require('./routes/user.routes');

module.exports = (app) => {
	//Puerto
	app.set('port', serverPORT.PORT || '');

	// let options = {
	// 	origin: '*',
	// 	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	// 	preflightContinue: false,
	// 	optionsSuccessStatus: 204,
	// };
	// app.use(cors());options
	//MIDDLEWARES
	// app.use(cors());
	const corsOptions = {
		// origin: 'https://sleepy-ardinghelli-519d00.netlify.app',
		origin: '*',
		credentials: true, //access-control-allow-credentials:true
		optionSuccessStatus: 200,
	};
	app.use(cors(corsOptions));
	app.use(morgan('dev'));

	app.get('/', (req, res) => {
		res.send('App running on Heroku');
	});

	app.use(express.json({ limit: '20mb', extended: true }));
	app.use(express.urlencoded({ limit: '20mb', extended: true }));
	//routes
	// las rutas deben estar siempre después de la definición del CORS
	app.use('/api', router);
	app.use('/api/user', userRouter);

	return app;
};
