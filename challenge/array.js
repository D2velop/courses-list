import fs from "fs";
import { CLIENT_RENEG_LIMIT } from "tls";
("use strict");

// ---- INIT ----
/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {
  filePath = fs.readFileSync("./data/1K.json");
  const data = JSON.parse(filePath);
  return data;
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
  const foundElement = list.filter((element) => element.weight === weight);
  const nthElement = foundElement[position - 1];
  if (!nthElement || nthElement.length === 0) {
    return null;
  } else {
    return nthElement;
  }
}

/**
 * Get the last element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchLastFromWeight(list, weight) {
  let lastElement = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i].weight === weight) {
      lastElement = list[i];
    }
  }
  if (!lastElement) {
    return null;
  } else {
    return lastElement;
  }
}

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
export function searchAllFromWeight(list, weight) {
  const foundElement = list.filter((element) => element.weight === weight);
  if (!foundElement) {
    return null;
  } else {
    return foundElement;
  }
}

/**
 * Get the nth element
 * @param {Array} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
export function searchNthElement(list, position) {
  const nthElement = list[position];
  if (!nthElement) {
    return null;
  } else {
    return list[position - 1];
  }
}

// ---- Sort ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
export function sortOnWeight(list) {
  return list.sort((a, b) => a.weight - b.weight);
}

/**
 * Sort an array based on weight value and at weight egual sort on label
 * @param {Array} list
 */
export function sortOnWeightAndLabel(list) {
  return list.sort(
    (a, b) => a.weight - b.weight || a.label.localeCompare(b.label)
  );
}
// ---- Insert ----

/**
 * Insert a new element at first position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertFirst(list, label, weight) {
  const newElement = { label, weight };
  return list.unshift(newElement);
}

/**
 * Insert a new element at the last position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertEnd(list, label, weight) {
  const newElement = { label, weight };
  return list.push(newElement);
}

/**
 * Insert an element at the nth position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the array
 */
export function insertNth(list, label, weight, position) {
  const newElement = { weight, label };
  return list.splice(position -1, 0, newElement);
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
 * @returns {Number} the number of removed element, 0 if no element is removed
 */
export function removeAll(list, weight) {
  const eltToRemove = list.filter((element) => element.weight === weight);
  if (eltToRemove !== null) 
  {
      list.forEach(function (element)
       {
            if (element.weight === weight) 
            {
            delete element.weight;
            }
        });
    return eltToRemove.length;
  } 
  else 
  {
    return 0;
  }
}
