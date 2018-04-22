import { getRandomChars } from "./../index";

test("gets string of random chars from alphabet", () => {
	const length = 7;
	const alphabet =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	const string = getRandomChars(length, alphabet);

	expect(string.length).toEqual(length);
	expect(new RegExp(`[${alphabet}]{${length}}`).test(string)).toBe(true);
});
