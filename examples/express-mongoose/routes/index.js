const urlController = require("../controllers/url");

module.exports = (app) => {
	// route to create and return a shortened URL given a long URL
	app.post("/api/shorten", urlController.shorten);

	// route to redirect the visitor to their original URL given the short URL
	app.get("/:id", urlController.unshorten);
};
