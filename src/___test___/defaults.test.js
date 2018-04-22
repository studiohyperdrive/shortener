import { defaults } from "./../defaults";

test("default configuration has the required properties", () => {
	expect(defaults).toHaveProperty("length");
	expect(defaults).toHaveProperty("alphabet");
});

test("defaults are not writable", () => {
	expect(() => (defaults.newParam = true)).toThrowError();
	expect(() => delete defaults.alphabet).toThrowError();
});
