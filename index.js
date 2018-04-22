const Shortener = require("./dist/index.cjs.js");

const sh = new Shortener({
	alphabet: "base58",
	target: "https://shd.be/s?id={id}",
});

console.log(sh.shorten("https://www.google.com"));

console.log(sh.getInfo());
