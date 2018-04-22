/**
 * Formats a target in the following formats:
 * - url/id if no placeholder is found
 * - replaces the placeholder "{id}" if it is found
 * @param {string} url
 * @param {string} id
 */
export const targetFormatter = (url, id) => {
	const placeholder = "{id}";

	if (!~url.indexOf(placeholder)) {
		return `${url}/${id}`;
	} else {
		return url.replace(placeholder, id);
	}
};
