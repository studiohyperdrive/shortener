/**
 * Validates a given length to match the following conditions:
 * - length is required
 * - length is a positive integer
 * @param {number} length
 */
export const lengthValidator = (length) => {
	if (!length) {
		throw new Error("Missing required parameter: length");
	}

	if (!Number.isInteger(length) || length <= 0) {
		throw new Error(`Invalid value for parameter length: ${length}`);
	}
};
