'use strict';

// ---- INIT ----
import fs from 'fs';
/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {
	const arrayWithDataObj = JSON.parse(fs.readFileSync(filePath));
	return arrayWithDataObj;
}

// ---- SEARCH ----

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found element
 */
export function searchAllFromWeight(list, weight) {
	const elementFound = list.filter((element) => element.weight === weight);
	if (!elementFound) {
		return null;
	} else {
		return elementFound;
	}
}

// ---- SORT ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
export function sortOnWeight(list) {
	if (Array.isArray(list) && typeof list !== undefined) {
		return list.sort((a, b) => a.weight - b.weight);
	} else {
		return null;
	}
}

// ---- INSERT ----

/**
 * Insert a new element in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insert(list, label, weight) {
	const newElt = { label, weight };
	return list.push(newElt);
}

// ---- DELETE ----

/**
 * Remove an element from its weight and label
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @returns {Number} the position of the removed element, -1 if no element is removed
 */
export function removeFirst(list, label, weight) {
	const foundElement = list.find(
		(element) => element.weight === weight && element.label === label,
	);
	const index = list.indexOf(foundElement);
	if (foundElement) {
		list.splice(index, 1);
	} else {
		return -1;
	}
	return index + 1;
}

/**
 * Remove all elements from a specific weight
 * @param {Array} list
 * @param {Number} weight
 * @returns {Number} the number of removed element, -1 if no element is removed
 */
export function removeAll(list, weight) {
	const eltToRemove = list.filter((element) => element.weight === weight);
	if (eltToRemove !== null) {
		list.forEach(function (element, index, list) {
			if (element.weight === weight) {
				list.splice(index, eltToRemove.length);
			}
		});
		return eltToRemove.length;
	} else {
		return 0;
	}
}
