import { target as targetValidator } from "./../index";

test("validates a valid target", () => {
	expect(() => targetValidator("http://hyperdrive.studio/")).not.toThrowError();
	expect(() =>
		targetValidator("https://allow-hyphen.com/s/")
	).not.toThrowError();
	expect(() =>
		targetValidator("http://www.allow-hyphen.com/shorten")
	).not.toThrowError();
	expect(() =>
		targetValidator("https://subdomain.hyperdrive.studio?shorten")
	).not.toThrowError();
	expect(() =>
		targetValidator("http://studiohyperdrive.studio#anchor")
	).not.toThrowError();
	expect(() => targetValidator("https://hyp3rdr1v3.studio")).not.toThrowError();
});

test("invalidates an invalid target", () => {
	let invalidTarget;

	invalidTarget = "hyperdrive.studio";
	expect(() => targetValidator(invalidTarget)).toThrowError(
		`Invalid value for parameter target: ${invalidTarget}`
	);

	invalidTarget = "http:/www.google.com";
	expect(() => targetValidator(invalidTarget)).toThrowError(
		`Invalid value for parameter target: ${invalidTarget}`
	);

	invalidTarget = "https://studiohyperdrive.beç$$";
	expect(() => targetValidator(invalidTarget)).toThrowError(
		`Invalid value for parameter target: ${invalidTarget}`
	);
});

test("invalidates a missing target", () => {
	expect(() => {
		targetValidator();
	}).toThrow();
});

test("invalidates an invalid type for target", () => {
	expect(() => {
		targetValidator(123);
	}).toThrow();
});
