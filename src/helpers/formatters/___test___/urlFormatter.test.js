import { url as urlFormatter } from "./../index";

test("formats with all parameters", () => {
	expect(urlFormatter("http", "studiohyperdrive.be", "s", "sp4c3")).toBe(
		"http://studiohyperdrive.be/s/sp4c3"
	);
});

test("formats without path parameter", () => {
	expect(urlFormatter("http", "studiohyperdrive.be", "", "sp4c3")).toBe(
		"http://studiohyperdrive.be/sp4c3"
	);
});

test("formats without id parameter", () => {
	expect(urlFormatter("http", "studiohyperdrive.be", "s", "")).toBe(
		"http://studiohyperdrive.be/s"
	);
});

test("formats without path & id parameter", () => {
	expect(urlFormatter("http", "studiohyperdrive.be", "", "")).toBe(
		"http://studiohyperdrive.be"
	);
});
