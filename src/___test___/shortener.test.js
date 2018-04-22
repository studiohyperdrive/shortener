import Shortener from "./../index";
import { defaults } from "./../defaults";
import { presets } from "./../presets";

test("constructor - errors when no configuration is passed", () => {
	expect(() => new Shortener()).toThrowError();
});

test("constructor - correctly sets configuration", () => {
	const configuration = {
		target: "https://hyperdrive.studio/s",
		length: 5,
		alphabet: "abcdefghijklmnopqrstuvwxyz",
	};

	const shortener = new Shortener(configuration);

	expect(shortener).toHaveProperty("target");
	expect(shortener.target).toBe(configuration.target);

	expect(shortener).toHaveProperty("length");
	expect(shortener.length).toBe(configuration.length);

	expect(shortener).toHaveProperty("alphabet");
	expect(shortener.alphabet).toBe(configuration.alphabet);
});

test("constructor - correctly defaults optional configuration", () => {
	const configuration = {
		target: "https://hyperdrive.studio/s",
	};

	const shortener = new Shortener(configuration);

	expect(shortener).toHaveProperty("target");
	expect(shortener.target).toBe(configuration.target);

	expect(shortener).toHaveProperty("length");
	expect(shortener.length).toBe(defaults.length);

	expect(shortener).toHaveProperty("alphabet");
	expect(shortener.alphabet).toBe(defaults.alphabet);
});

test("constructor - correctly sets alphabet preset", () => {
	const configuration = {
		target: "https://hyperdrive.studio/s",
		alphabet: "numeric",
	};

	const shortener = new Shortener(configuration);

	expect(shortener).toHaveProperty("alphabet");
	expect(shortener.alphabet).toBe(presets.numeric);
});

test("setConfiguration - errors when no configuration is passed", () => {
	expect(() => {
		const configuration = {
			target: "https://hyperdrive.studio/s",
		};

		const shortener = new Shortener(configuration);

		shortener.setConfiguration();
	}).toThrowError();
});

test("setConfiguration - correctly sets configuration", () => {
	const configuration = {
		target: "https://hyperdrive.studio/s",
		length: 5,
		alphabet: "abcdefghijklmnopqrstuvwxyz",
	};

	const shortener = new Shortener(configuration);

	expect(shortener).toHaveProperty("target");
	expect(shortener.target).toBe(configuration.target);

	expect(shortener).toHaveProperty("length");
	expect(shortener.length).toBe(configuration.length);

	expect(shortener).toHaveProperty("alphabet");
	expect(shortener.alphabet).toBe(configuration.alphabet);

	const newConfiguration = {
		target: "http://studiohyperdrive.be",
		length: 4,
		alphabet: "ABCDEF",
	};

	shortener.setConfiguration(newConfiguration);

	expect(shortener).toHaveProperty("target");
	expect(shortener.target).toBe(newConfiguration.target);

	expect(shortener).toHaveProperty("length");
	expect(shortener.length).toBe(newConfiguration.length);

	expect(shortener).toHaveProperty("alphabet");
	expect(shortener.alphabet).toBe(newConfiguration.alphabet);
});

test("setConfiguration - correctly defaults optional configuration", () => {
	const configuration = {
		target: "https://hyperdrive.studio/s",
	};

	const shortener = new Shortener(configuration);
	shortener.setConfiguration(configuration);

	expect(shortener).toHaveProperty("target");
	expect(shortener.target).toBe(configuration.target);

	expect(shortener).toHaveProperty("length");
	expect(shortener.length).toBe(defaults.length);

	expect(shortener).toHaveProperty("alphabet");
	expect(shortener.alphabet).toBe(defaults.alphabet);
});

test("gets info about the current shortener instance", () => {
	const configuration = {
		length: 5,
		alphabet: "abcdefghijklmnopqrstuvwxyz",
		target: "https://hyperdrive.studio/s",
	};

	const shortener = new Shortener(configuration);
	const info = shortener.getInfo();

	expect(info).toHaveProperty("config");

	expect(info.config).toHaveProperty("length");
	expect(info.config.length).toBe(configuration.length);

	expect(info.config).toHaveProperty("alphabet");
	expect(info.config.alphabet).toBe(configuration.alphabet);

	expect(info.config).toHaveProperty("target");
	expect(info.config.target).toBe(configuration.target);

	expect(info).toHaveProperty("collisionInfo");

	expect(info.collisionInfo).toHaveProperty("possibilities");
	expect(info.collisionInfo.possibilities).toBe(
		Math.pow(configuration.alphabet.length, configuration.length)
	);

	expect(info.collisionInfo).toHaveProperty("probability");
	expect(info.collisionInfo.probability).toBe(
		1 / Math.pow(configuration.alphabet.length, configuration.length)
	);
});

test("shortens url", () => {
	const configuration = {
		length: 5,
		target: "https://hyperdrive.studio/s",
	};

	const shortener = new Shortener(configuration);
	const url = "https://www.google.com";
	const shortened = shortener.shorten(url);

	expect(shortened).toHaveProperty("id");
	expect(shortened.id.length).toBe(configuration.length);

	expect(shortened).toHaveProperty("original");
	expect(shortened.original).toBe(url);

	expect(shortened).toHaveProperty("target");
	expect(typeof shortened.target).toBe("string");
	expect(shortened.target).toContain(shortened.id);
});

test("throws error when trying to shorten invalid url", () => {
	const shortener = new Shortener({
		length: 5,
		target: "https://hyperdrive.studio/s",
	});

	const invalidUrl = "httpswww.google.com";

	expect(() => {
		shortener.shorten(invalidUrl);
	}).toThrowError(`Invalid value for parameter url: ${invalidUrl}`);
});
