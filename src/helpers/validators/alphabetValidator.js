/**
 * Validates a given alphabet to match the following conditions:
 * - alphabet is required
 * - contains only alphanumeric characters
 * - contains no duplicate characters
 * @param {string} alphabet
 */
export const alphabetValidator = (alphabet) => {
	if (!alphabet) {
		throw new Error("Missing required parameter: alphabet");
	}

	const illegal = alphabet.match(new RegExp("[\\W_]"));
	if (illegal) {
		throw new Error(
			`Illegal character found in alphabet: ${alphabet.charAt(illegal.index)}`
		);
	}

	const duplicate = alphabet.match(new RegExp("(.+)(?=.*?\\1)", "g"));
	if (duplicate) {
		throw new Error(`Duplicate character found in alphabet: ${duplicate[0]}`);
	}
};
