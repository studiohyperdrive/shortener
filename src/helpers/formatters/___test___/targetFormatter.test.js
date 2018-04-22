import { target as targetFormatter } from "./../index";

test("formats with all parameters", () => {
	expect(targetFormatter("http://hyperdrive.studio", "meow")).toBe(
		"http://hyperdrive.studio/meow"
	);
});

test("formats with an id placeholder", () => {
	expect(targetFormatter("http://hyperdrive.studio/{id}/shorten", "meow")).toBe(
		"http://hyperdrive.studio/meow/shorten"
	);
});
