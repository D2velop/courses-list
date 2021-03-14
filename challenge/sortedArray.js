"use strict";

// ---- INIT ----

/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {}

// ---- SEARCH ----

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found element
 */
 export function searchAllFromWeight(list, weight) {}

 // ---- SORT ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
 export function sortOnWeight(list) {}

 // ---- INSERT ----

/**
 * Insert a new element in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insert(list, label, weight) {}

 // ---- DELETE ----

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