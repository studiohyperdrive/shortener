import { trimSlashes as trimSlashesFormatter } from "./../index";

test("trims when there are no slashes", () => {
	expect(trimSlashesFormatter("hello")).toBe("hello");
});

test("trims leading slash", () => {
	expect(trimSlashesFormatter("/hello")).toBe("hello");
});

test("trims trailing slash", () => {
	expect(trimSlashesFormatter("hello/")).toBe("hello");
});

test("trims leading & trailing slashes", () => {
	expect(trimSlashesFormatter("/hello/")).toBe("hello");
});

test("trims multiple leading & trailing slashes", () => {
	expect(trimSlashesFormatter("//hello////")).toBe("hello");
});

test("Preserves non-leading & non-trailing slashes", () => {
	expect(trimSlashesFormatter("yes/no")).toBe("yes/no");
});

test("doesn't error when passing an invalid parameter", () => {
	expect(trimSlashesFormatter()).toBe(undefined);
	expect(trimSlashesFormatter([])).toBe(undefined);
	expect(trimSlashesFormatter({})).toBe(undefined);
	expect(trimSlashesFormatter(123)).toBe(undefined);
	expect(trimSlashesFormatter(false)).toBe(undefined);
	expect(trimSlashesFormatter(null)).toBe(undefined);
	expect(trimSlashesFormatter(undefined)).toBe(undefined);
});
