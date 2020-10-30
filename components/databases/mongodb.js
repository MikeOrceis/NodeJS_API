var mongoose = require('mongoose');
var mongo_server = process.env.MONGO_SERVR || "mongodb://localhost/test";
// connect to database
	mongoose.connect(mongo_server, {
		useNewUrlParser: true,
		useUnifiedTopology: true
		});
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
//	console.log('Connected to Mongo');
	});

