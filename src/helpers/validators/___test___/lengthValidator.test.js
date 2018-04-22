import { length as lengthValidator } from "./../index";

test("validates a valid length", () => {
	expect(() => lengthValidator(4)).not.toThrowError();
	expect(() => lengthValidator(6)).not.toThrowError();
	expect(() => lengthValidator(123)).not.toThrowError();
});

test("invalidates a missing length", () => {
	expect(() => lengthValidator()).toThrowError(
		"Missing required parameter: length"
	);
	expect(() => lengthValidator("")).toThrowError(
		"Missing required parameter: length"
	);
	expect(() => lengthValidator(undefined)).toThrowError(
		"Missing required parameter: length"
	);
	expect(() => lengthValidator(null)).toThrowError(
		"Missing required parameter: length"
	);
});

test("invalidates an invalid length", () => {
	let invalidLength;

	invalidLength = "stringzz";
	expect(() => lengthValidator(invalidLength)).toThrowError(
		`Invalid value for parameter length: ${invalidLength}`
	);

	invalidLength = "123";
	expect(() => lengthValidator(invalidLength)).toThrowError(
		`Invalid value for parameter length: ${invalidLength}`
	);

	invalidLength = {};
	expect(() => lengthValidator(invalidLength)).toThrowError(
		`Invalid value for parameter length: ${invalidLength}`
	);

	invalidLength = -5;
	expect(() => lengthValidator(invalidLength)).toThrowError(
		`Invalid value for parameter length: ${invalidLength}`
	);

	invalidLength = 6.66;
	expect(() => lengthValidator(invalidLength)).toThrowError(
		`Invalid value for parameter length: ${invalidLength}`
	);
});
