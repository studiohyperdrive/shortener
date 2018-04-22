'use strict';

const presets = Object.freeze({
	alphanumeric: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
	alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
	numeric: "0123456789",
	base58: "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789",
	base56: "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789",
	base32: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
	base16: "ABCDEF0123456789",
});

const defaults = Object.freeze({
	length: 5,
	alphabet: presets.base58,
});

const validate = (validator, value) => validator(value);

/**
 * Validates a given target to match the following conditions:
 * - target is required
 * - target is a valid url
 * @param {object|string} target
 */
const targetValidator = (target) => {
	if (!target) {
		throw new Error("Missing required parameter: target");
	}

	if (
		!new RegExp(
			"^" +
				// protocol identifier
				"(?:(?:https?|s?ftp)://)" +
				// user:pass authentication
				"(?:\\S+(?::\\S*)?@)?" +
				"(?:" +
				// IP address exclusion
				// private & local networks
				"(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
				"(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
				"(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
				// IP address dotted notation octets
				// excludes loopback network 0.0.0.0
				// excludes reserved space >= 224.0.0.0
				// excludes network & broacast addresses
				// (first & last IP address of each class)
				"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
				"(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
				"(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
				"|" +
				// host name
				"(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
				// domain name
				"(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
				// TLD identifier
				"(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
				// TLD may end with dot
				"\\.?" +
				")" +
				// port number
				"(?::\\d{2,5})?" +
				// resource path
				"(?:[/?#]\\S*)?" +
				"$",
			"i"
		).test(target)
	) {
		throw new Error(`Invalid value for parameter target: ${target}`);
	}
};

/**
 * Validates a given target to match the following conditions:
 * - target is required
 * - target is a valid url
 * @param {object|string} target
 */
const urlValidator = (url) => {
	if (!url) {
		throw new Error("Missing required parameter: url");
	}

	if (
		!new RegExp(
			"^" +
				// protocol identifier
				"(?:(?:https?|s?ftp)://)" +
				// user:pass authentication
				"(?:\\S+(?::\\S*)?@)?" +
				"(?:" +
				// IP address exclusion
				// private & local networks
				"(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
				"(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
				"(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
				// IP address dotted notation octets
				// excludes loopback network 0.0.0.0
				// excludes reserved space >= 224.0.0.0
				// excludes network & broacast addresses
				// (first & last IP address of each class)
				"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
				"(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
				"(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
				"|" +
				// host name
				"(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
				// domain name
				"(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
				// TLD identifier
				"(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
				// TLD may end with dot
				"\\.?" +
				")" +
				// port number
				"(?::\\d{2,5})?" +
				// resource path
				"(?:[/?#]\\S*)?" +
				"$",
			"i"
		).test(url)
	) {
		throw new Error(`Invalid value for parameter url: ${url}`);
	}
};

/**
 * Validates a given length to match the following conditions:
 * - length is required
 * - length is a positive integer
 * @param {number} length
 */
const lengthValidator = (length) => {
	if (!length) {
		throw new Error("Missing required parameter: length");
	}

	if (!Number.isInteger(length) || length <= 0) {
		throw new Error(`Invalid value for parameter length: ${length}`);
	}
};

/**
 * Validates a given alphabet to match the following conditions:
 * - alphabet is required
 * - contains only alphanumeric characters
 * - contains no duplicate characters
 * @param {string} alphabet
 */
const alphabetValidator = (alphabet) => {
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

/**
 * Calls the given formatter and passes args to it
 * @param {function} formatter
 * @param {*} args
 */
const format = (formatter, ...args) => formatter(...args);

/**
 * Trims slashes from the start and end of a given string
 * @param {string} string
 */
const trimSlashesFormatter = (string) => {
	if (string && typeof string === "string") {
		return string.replace(/^(\/)*|(\/)*$/g, "");
	}
};

/**
 * Formats an url in the following format: protocol://host/path/id
 * @param {string} protocol
 * @param {string} host
 * @param {string} path
 * @param {string} id
 */

/**
 * Formats a target in the following formats:
 * - url/id if no placeholder is found
 * - replaces the placeholder "{id}" if it is found
 * @param {string} url
 * @param {string} id
 */
const targetFormatter = (url, id) => {
	const placeholder = "{id}";

	if (!~url.indexOf(placeholder)) {
		return `${url}/${id}`;
	} else {
		return url.replace(placeholder, id);
	}
};

/**
 * Returns a random int between an inclusive min-value
 * and an exclusive max-value
 * @param {number} min
 * @param {number} max
 */
const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Returns a random character from a given string
 * @param {string} string
 */
const getRandomChar = (string) => {
	return string[getRandomInt(0, string.length)];
};

/**
 * Returns a random string of characters composed from a given alphabet of
 * @param {number} length
 * @param {string} alphabet
 */
const getRandomChars = (length, alphabet) => {
	return [...Array(length)].map(() => getRandomChar(alphabet)).join("");
};

class Shortener {
	constructor({
		target,
		length = defaults.length,
		alphabet = defaults.alphabet,
	} = {}) {
		this.setConfiguration({ target, length, alphabet });
	}

	get target() {
		return this._target;
	}

	set target(target) {
		validate(targetValidator, target);
		this._target = target;
	}

	get length() {
		return this._length;
	}

	set length(length) {
		validate(lengthValidator, length);
		this._length = length;
	}

	get alphabet() {
		return this._alphabet;
	}

	set alphabet(alphabet) {
		// check if alphabet is set to a preset
		if (presets[alphabet]) {
			alphabet = presets[alphabet];
		}

		validate(alphabetValidator, alphabet);
		this._alphabet = alphabet;
	}

	/**
	 * apply all configuration params to the current instance
	 * @param {object} target
	 * @param {number} length
	 * @param {string} alphabet
	 */
	setConfiguration({
		target,
		length = defaults.length,
		alphabet = defaults.alphabet,
	} = {}) {
		Object.assign(this, { target, length, alphabet });
	}

	/**
	 * Gets information about the current configuration
	 */
	getInfo() {
		const config = {
			target: this.target,
			length: this.length,
			alphabet: this.alphabet,
		};

		const possibilities = Math.pow(this.alphabet.length, this.length);
		const probability = 1 / possibilities;

		return {
			config,
			collisionInfo: {
				possibilities,
				probability,
			},
		};
	}

	/**
	 * Shortens a given url with the current configuration of the shortener
	 * @param {string} url
	 */
	shorten(url) {
		validate(urlValidator, url);

		const id = getRandomChars(this.length, this.alphabet);

		return {
			id,
			original: url,
			target: format(
				targetFormatter,
				format(trimSlashesFormatter, this.target),
				id
			),
		};
	}
}

module.exports = Shortener;
