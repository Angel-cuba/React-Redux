import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
	// console.log(req.headers);
	try {
		const token = req.headers.authorization.split(' ')[1];
		const isCustomAuthorization = token.length < 500;
		console.log(token.length);
		let decodedData;

		if (token) {
			decodedData = jwt.verify(token, process.env.COOKIE_SECURE);
			//process.env.COOKIE_SECURE
			// console.log('---------------------', decodedData);
			// console.log(isCustomAuthorization);
			// let finalDecodedData = jwt.verify(decodedData, process.env.COOKIE_SECURE, {
			// 	algorithms: ['RS256'],
			// });
			console.log('---------------', decodedData);

			req.userId = decodedData.id;
		} else {
			decodedData = jwt.decode(token);
			console.log(decodedData);

			req.userId = decodedData.sub;
		}

		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
