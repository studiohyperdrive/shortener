import format from "./../index";

test("calls formatter with single argument", () => {
	const formatter = jest.fn();
	const arg = 123;

	format(formatter, arg);

	expect(formatter).toHaveBeenCalledWith(arg);
});

test("calls formatter with multiple arguments", () => {
	const formatter = jest.fn();
	const args = [1, 2, 3];

	format(formatter, ...args);

	expect(formatter).toHaveBeenCalledWith(...args);
});
