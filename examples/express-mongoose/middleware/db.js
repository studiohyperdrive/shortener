const mongoose = require("mongoose");

mongoose
	.connect(`mongodb://localhost:27017/shortener`)
	.then(() => {
		console.log("Initialized database"); // eslint-disable-line no-console
	})
	.catch((err) => {
		console.log("Error initalizing database.", err); // eslint-disable-line no-console
	});
