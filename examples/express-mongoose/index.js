const express = require("express");
const app = express();

// Init global middleware
require("./middleware/global")(app);

// Init database
require("./middleware/db");

// Init routes
require("./routes")(app);

app.listen(3000, () => {
	console.log("Server listening on port 3000"); // eslint-disable-line no-console
});
