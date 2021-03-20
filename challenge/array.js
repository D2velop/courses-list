"use strict";

// ---- INIT ----
import fs from 'fs';
/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {
   const rawData = fs.readFileSync(filePath);
   let array = JSON.parse(rawData);
   return array;
};

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Array} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
 export function searchOneFromLabel(list, label) {
    let found = false;
    for (let i = 0; !found && i < list.length; i++) {
       if (list[i].label === label){
          // console.log(list[i]);
          found = true;
          return list[i];
       }
    };
    if (!found) {
       // console.log(null);
       return null;
    }
 };
/**
 * Get the nth element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @param {Number} position
 * @returns {Object} the found element or null if no element were found
 */
 export function searchNthFromWeight(list, weight, position) {
   const foundWeights = [];
   for (let i = 0; i < list.length; i++) {
      if (list[i].weight === weight){
         foundWeights.push(list[i]);
      }
   };
   if (foundWeights[position-1]) {
      return foundWeights[position-1];
   } else {
      return null;
   }
 };

/**
 * Get the last element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
 export function searchLastFromWeight(list, weight) {
   const foundWeights = [];
   for (let i = 0; i < list.length; i++) {
      if (list[i].weight === weight){
         foundWeights.push(list[i]);
      }
   };
   return foundWeights.length > 0 ? foundWeights[foundWeights.length-1] : null;
 };

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
 export function searchAllFromWeight(list, weight) {
    const foundElements = []
    list.forEach(element => {
       if (element.weight === weight) {
          foundElements.push(element);
       }
    });
    return foundElements;
 };

/**
 * Get the nth element
 * @param {Array} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
 export function searchNthElement(list, position) {
    return list[position-1] ? list[position-1] : null;
 };

// ---- Sort ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
 export function sortOnWeight(list) {
   //  list.sort((element, nextElement) => {
   //    if (element.weight < nextElement.weight) return -1;
   //    if (element.weight > nextElement.weight) return 1;
   //    return 0;
   //  });
   //  return list;
   list.sort((element, nextElement) =>  element.weight - nextElement.weight);
   return list;
 };

/**
 * Sort an array based on weight value and at weight egual sort on label
 * @param {Array} list
 */
 export function sortOnWeightAndLabel(list) {
   list.sort((element, nextElement) => element.weight - nextElement.weight || element.label.localeCompare(nextElement.label));
   return list;
 };

// ---- Insert ----

/**
 * Insert a new element at first position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insertFirst(list, label, weight) {
    list.unshift({"label": label, "weight": weight});
    // console.log(list, list[0], list.length);
    return list;
 };
//  insertFirst([{ label: "four", weight: 30 },
//  { label: "six", weight: 18 },
//  { label: "three", weight: 11 },], "five", 5);

/**
 * Insert a new element at the last position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insertEnd(list, label, weight) {
   list.push({"label": label, "weight": weight});
   return list;
 };

/**
 * Insert an element at the nth position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the array
 */
 export function insertNth(list, label, weight, position) {
   list.splice(position-1, 0, {"label": label, "weight": weight});
   // console.log(list);
   return list;
 }

//  insertNth([{ label: "four", weight: 30 },
//  { label: "six", weight: 18 },
//  { label: "three", weight: 11 },], "five", 5, 3);

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
 * @returns {Number} the number of removed element, 0 if no element is removed
 */
 export function removeAll(list, weight) {}
