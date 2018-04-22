import { getRandomInt } from "./getRandomInt";

/**
 * Returns a random character from a given string
 * @param {string} string
 */
export const getRandomChar = (string) => {
	return string[getRandomInt(0, string.length)];
};
