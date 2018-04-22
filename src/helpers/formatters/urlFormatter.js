/**
 * Formats an url in the following format: protocol://host/path/id
 * @param {string} protocol
 * @param {string} host
 * @param {string} path
 * @param {string} id
 */
export const urlFormatter = (protocol, host, path, id) => {
	return `${protocol}://${host}${path ? `/${path}` : ""}${id ? `/${id}` : ""}`;
};
