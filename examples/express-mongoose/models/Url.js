const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
	_id: String,
	url: String,
	counter: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model("Url", urlSchema);
