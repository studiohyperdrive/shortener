/**
 * Returns a random int between an inclusive min-value
 * and an exclusive max-value
 * @param {number} min
 * @param {number} max
 */
export const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};
