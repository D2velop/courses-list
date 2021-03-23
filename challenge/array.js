'use strict';
import fs from 'fs';
// ---- INIT ----

/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {
	const arrayWithDataObj = JSON.parse(fs.readFileSync(filePath));
	return arrayWithDataObj;
}

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Array} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
export function searchOneFromLabel(list, label) {
	const foundElement = list.find((element) => element.label === label);
	if (!foundElement) {
		return null;
	} else {
		return foundElement;
	}
}

/**
 * Get the nth element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @param {Number} position
 * @returns {Object} the found element or null if no element were found
 */
export function searchNthFromWeight(list, weight, position) {
	const sortFromWeight = list.filter((element) => element.weight === weight);
	const nthEltSortFromWeight = sortFromWeight[position - 1];

	if (!nthEltSortFromWeight || nthEltSortFromWeight.length === 0) {
		return null;
	} else {
		return nthEltSortFromWeight;
	}
}

/**
 * Get the last element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchLastFromWeight(list, weight) {
	let lastEl = null;
	for (let i = 0; i < list.length; i++) {
		if (list[i].weight === weight) {
			lastEl = list[i];
		}
	}
	if (!lastEl || lastEl === undefined) {
		return null;
	} else {
		return lastEl;
	}
}

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
export function searchAllFromWeight(list, weight) {
	const elementFound = list.filter((element) => element.weight === weight);
	if (!elementFound) {
		return null;
	} else {
		return elementFound;
	}
}

/**
 * Get the nth element
 * @param {Array} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
export function searchNthElement(list, position) {
	const foundNthElement = list[position - 1];
	if (foundNthElement === undefined || !foundNthElement) {
		return null;
	} else {
		return foundNthElement;
	}
}

// ---- Sort ----

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

/**
 * Sort an array based on weight value and at weight egual sort on label
 * @param {Array} list
 */
export function sortOnWeightAndLabel(list) {
	return list.sort(
		(a, b) => a.weight - b.weight || a.label.localeCompare(b.label),
	);
}

// sortOnWeightAndLabel(data1k);

// console.log(data1k);

// ---- Insert ----

/**
 * Insert a new element at first position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertFirst(list, label, weight) {
	const newElt = { label, weight };
	return list.unshift(newElt);
}

/**
 * Insert a new element at the last position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertEnd(list, label, weight) {
	const newElt = { label, weight };
	return list.push(newElt);
}

/**
 * Insert an element at the nth position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the array
 */
export function insertNth(list, label, weight, position) {
	const newElt = { weight, label };
	return list.splice(position - 1, 0, newElt);
}

// ---- Delete ----

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
 * @returns {Number} the number of removed element, 0 if no element is removed
 */
export function removeAll(list, weight) {
	const eltToRemove = list.filter((element) => element.weight === weight);
	if (eltToRemove !== null) {
		list.forEach((element) => {
			if (element.weight === weight) {
				delete element.weight;
			}
		});
		return eltToRemove.length;
	} else {
		return 0;
	}
}
