const Url = require("../models/Url");

const Shortener = require("@studiohyperdrive/shortener");
const shortener = new Shortener({
	target: "http://localhost.be:3000",
});

module.exports.shorten = (req, res) => {
	const { url } = req.body;

	const shortenedUrl = shortener.shorten(url);

	new Url({
		_id: shortenedUrl.id,
		url: shortenedUrl.original,
	}).save();

	res.json({
		url: shortenedUrl.target,
	});
};

module.exports.unshorten = (req, res) => {
	const { id } = req.params;

	Url.findByIdAndUpdate(id, { $inc: { counter: 1 } }, (err, { url }) => {
		if (!err) {
			res.redirect(url);
		}
	});
};
