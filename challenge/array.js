"use strict";

// ---- INIT ----

/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {}

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Array} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
 export function searchOneFromLabel(list, label) {}

/**
 * Get the nth element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @param {Number} position
 * @returns {Object} the found element or null if no element were found
 */
 export function searchNthFromWeight(list, weight, position) {}

/**
 * Get the last element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
 export function searchLastFromWeight(list, weight) {}

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
 export function searchAllFromWeight(list, weight) {}

/**
 * Get the nth element
 * @param {Array} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
 export function searchNthElement(list, position) {}

// ---- Sort ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
 export function sortOnWeight(list) {}

/**
 * Sort an array based on weight value and at weight egual sort on label
 * @param {Array} list
 * @param {Number} weight
 */
 export function sortOnWeightAndLabel(list) {}

// ---- Insert ----

/**
 * Insert a new element at first position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insertFirst(list, label, weight) {}

/**
 * Insert a new element at the last position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insertEnd(list, label, weight) {}

/**
 * Insert an element at the nth position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the array
 */
 export function insertNth(list, label, weight, position) {}

// ---- Delete ----

/**
 * Remove an element from its weight and label
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @returns {Number} the position of the removed element, -1 if no element is removed
 */
 export function removeFirst(list, label, weight) {}

/**
 * Remove all elements from a specific weight
 * @param {Array} list
 * @param {Number} weight
 * @returns {Number} the number of removed element, -1 if no element is removed
 */
 export function removeAll(list, weight) {}
