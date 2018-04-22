/**
 * Trims slashes from the start and end of a given string
 * @param {string} string
 */
export const trimSlashesFormatter = (string) => {
	if (string && typeof string === "string") {
		return string.replace(/^(\/)*|(\/)*$/g, "");
	}
};
