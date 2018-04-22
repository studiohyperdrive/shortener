import { alphabet as alphabetValidator } from "./../index";

test("validates a valid alphabet", () => {
	const alphabet =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	expect(() => alphabetValidator(alphabet)).not.toThrowError();
});

test("invalidates a missing alphabet", () => {
	expect(() => alphabetValidator()).toThrowError(
		"Missing required parameter: alphabet"
	);
	expect(() => alphabetValidator("")).toThrowError(
		"Missing required parameter: alphabet"
	);
	expect(() => alphabetValidator(undefined)).toThrowError(
		"Missing required parameter: alphabet"
	);
	expect(() => alphabetValidator(null)).toThrowError(
		"Missing required parameter: alphabet"
	);
});

test("invalidates illegal character in alphabet", () => {
	const illegalCharacter = "?";
	const alphabet = `abcdefghijklmnopqrstuvwxyzABC${illegalCharacter}DEFGHIJKLMNOPQRSTUVWXYZ0123456789`;

	expect(() => alphabetValidator(alphabet)).toThrowError(
		`Illegal character found in alphabet: ${illegalCharacter}`
	);
});

test("invalidates duplicate character in alphabet", () => {
	const duplicateCharacter = "S";
	const alphabet = `abcdefghijklm${duplicateCharacter}nopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;

	expect(() => alphabetValidator(alphabet)).toThrowError(
		`Duplicate character found in alphabet: ${duplicateCharacter}`
	);
});
