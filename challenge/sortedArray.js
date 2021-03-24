import fs from 'fs';
"use strict";

// ---- INIT ----

/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {
    filePath = fs.readFileSync('./data/1K_sorted.json');
    const data = JSON.parse(filePath);
    return data
}

// ---- SEARCH ----

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found element
 */
 export function searchAllFromWeight(list, weight) {
    const foundElement = list.filter((element) => element.weight === weight);
    if (!foundElement) {
      return null;
    } else {
      return foundElement;
    }
 }

 // ---- SORT ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
 export function sortOnWeight(list) {   
    return list.sort((a, b) => a.weight - b.weight);
 }
 // ---- INSERT ----

/**
 * Insert a new element in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} Position
 */
 export function insert(list, label, weight, position) {
  const newElement = { label, weight };
  return list.splice(position -1, 0, newElement);  
  }
  const data = [{ label: "one", weight: 23 },{ label: "two", weight: 24 },
                { label: "three", weight: 25 }];
console.log(data)
insert(data, "four",26);
console.log(data);

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
        (element) => element.weight === weight && element.label === label
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
    if (eltToRemove !== null) 
    {
        list.forEach(function(element, index, list){
            if(element.weight === weight){
                list.splice(index,eltToRemove.length);
            }
        })
      return eltToRemove.length;
    } 
    else 
    {
      return 0;
    }
   }