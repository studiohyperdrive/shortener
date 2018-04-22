import { defaults } from "./defaults";
import { presets } from "./presets";

import validate, * as validators from "./helpers/validators/index";
import format, * as formatters from "./helpers/formatters/index";
import { getRandomChars } from "./helpers/utils/index";

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
		validate(validators.target, target);
		this._target = target;
	}

	get length() {
		return this._length;
	}

	set length(length) {
		validate(validators.length, length);
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

		validate(validators.alphabet, alphabet);
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
		validate(validators.url, url);

		const id = getRandomChars(this.length, this.alphabet);

		return {
			id,
			original: url,
			target: format(
				formatters.target,
				format(formatters.trimSlashes, this.target),
				id
			),
		};
	}
}

export { Shortener };
