import { getRandomChar } from "./../index";

test("gets random char from string", () => {
	const string = "spaceship";
	const char = getRandomChar(string);

	expect(string).toContain(char);
});
