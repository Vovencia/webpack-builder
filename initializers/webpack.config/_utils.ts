const path = require('path');
export const ROOT = _path(__dirname, '..', '..');

function _path(...args) {
	return path.normalize(path.join(...args));
}

export function root(...args){
	return _path(ROOT, ...args);
}

export function source(...args){
	return root("source", ...args);
}

export function dist(...args){
	return root("dist", ...args);
}