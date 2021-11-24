const mongoose = require('mongoose');
const { mongodb } = require('../keytoserver/key');

mongoose
	.connect(mongodb.URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log('Conected to MongoDB'))
	.catch((err) => console.log('Failed to connect to connection to MongoDB, error: ' + err.message));
