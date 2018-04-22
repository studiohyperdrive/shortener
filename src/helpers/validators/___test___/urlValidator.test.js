import { url as urlValidator } from "./../index";

test("validates a valid url", () => {
	expect(() => urlValidator("http://hyperdrive.studio/")).not.toThrowError();
	expect(() => urlValidator("https://allow-hyphen.com/s/")).not.toThrowError();
	expect(() =>
		urlValidator("http://www.allow-hyphen.com/shorten")
	).not.toThrowError();
	expect(() =>
		urlValidator("https://subdomain.hyperdrive.studio?shorten")
	).not.toThrowError();
	expect(() =>
		urlValidator("http://studiohyperdrive.studio#anchor")
	).not.toThrowError();
	expect(() => urlValidator("https://hyp3rdr1v3.studio")).not.toThrowError();
});

test("invalidates a missing url", () => {
	expect(() => urlValidator()).toThrowError("Missing required parameter: url");
	expect(() => urlValidator("")).toThrowError(
		"Missing required parameter: url"
	);
	expect(() => urlValidator(undefined)).toThrowError(
		"Missing required parameter: url"
	);
	expect(() => urlValidator(null)).toThrowError(
		"Missing required parameter: url"
	);
});

test("invalidates an invalid url", () => {
	let invalidUrl;

	invalidUrl = "hyperdrive.studio";
	expect(() => urlValidator(invalidUrl)).toThrowError(
		`Invalid value for parameter url: ${invalidUrl}`
	);

	invalidUrl = "http:/www.google.com";
	expect(() => urlValidator(invalidUrl)).toThrowError(
		`Invalid value for parameter url: ${invalidUrl}`
	);

	invalidUrl = "https://studiohyperdrive.beç$$";
	expect(() => urlValidator(invalidUrl)).toThrowError(
		`Invalid value for parameter url: ${invalidUrl}`
	);
});
