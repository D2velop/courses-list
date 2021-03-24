import fs from 'fs';
"use strict";

// ---- INIT ----

/**
 * Build a double linked list from a given file path
 * @param {String} filePath
 * @returns {Object} the newly built linked list reference
 */
 export function buildArray(filePath) {
    filePath = fs.readFileSync('./data/1K.json');
    const data = JSON.parse(filePath);
    return data
 }

// ---- INSERT ----

/**
 * Insert a new element at first position in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insertHead(list, label, weight) {}

 /**
  * Insert a new element at the last position in the list
  * @param {Object} list
  * @param {String} label
  * @param {Number} weight
  */
 export function insertTail(list, label, weight) {}
 
 /**
  * Insert an element at the nth position in the list
  * @param {Object} list
  * @param {String} label
  * @param {Number} weight
  * @param {Number} position the position to insert the new element in the list
  */
 export function insertNth(list, label, weight, position) {}

 // ---- DELETE ----

/**
 * Remove all elements from a specific weight
 * @param {Object} list
 * @param {Number} weight
 * @returns {Number} the number of removed element, -1 if no element is removed
 */
 export function removeAll(list, weight) {}

