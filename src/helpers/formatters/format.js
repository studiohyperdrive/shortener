/**
 * Calls the given formatter and passes args to it
 * @param {function} formatter
 * @param {*} args
 */
export const format = (formatter, ...args) => formatter(...args);
