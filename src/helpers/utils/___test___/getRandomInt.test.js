import { getRandomInt } from "./../index";

test("gets random int between bounds", () => {
	const min = 0;
	const max = 10;
	const randomInt = getRandomInt(min, max);

	expect(randomInt).toBeGreaterThanOrEqual(min);
	expect(randomInt).toBeLessThan(max);
});
