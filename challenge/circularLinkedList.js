import fs from 'fs';
"use strict";

// ---- INIT ----

/**
 * Build a circular linked list from a given file path
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

