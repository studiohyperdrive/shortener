import validate from "./../index";

test("calls validator with single argument", () => {
	const validator = jest.fn();
	const arg = 123;

	validate(validator, arg);

	expect(validator).toHaveBeenCalledWith(arg);
});
