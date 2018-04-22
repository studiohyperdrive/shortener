import { presets } from "./../presets";

test("contain correct presets with their value", () => {
	expect(presets).toHaveProperty("alphanumeric");
	expect(presets.alphanumeric).toBe(
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	);

	expect(presets).toHaveProperty("alphabetic");
	expect(presets.alphabetic).toBe(
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	);

	expect(presets).toHaveProperty("numeric");
	expect(presets.numeric).toBe("0123456789");

	expect(presets).toHaveProperty("base58");
	expect(presets.base58).toBe(
		"abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789"
	);

	expect(presets).toHaveProperty("base56");
	expect(presets.base56).toBe(
		"abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789"
	);

	expect(presets).toHaveProperty("base32");
	expect(presets.base32).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

	expect(presets).toHaveProperty("base16");
	expect(presets.base16).toBe("ABCDEF0123456789");
});

test("presets are not writable", () => {
	expect(() => (presets.newPreset = "abc")).toThrowError();
	expect(() => delete presets.numeric).toThrowError();
});
