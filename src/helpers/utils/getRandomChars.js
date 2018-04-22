import { getRandomChar } from "./getRandomChar";

/**
 * Returns a random string of characters composed from a given alphabet of
 * @param {number} length
 * @param {string} alphabet
 */
export const getRandomChars = (length, alphabet) => {
	return [...Array(length)].map(() => getRandomChar(alphabet)).join("");
};
