"use strict";

// ---- INIT ----

/**
 * Build a simple linked list from a given file path
 * @param {String} filePath
 * @returns {Object} the newly built linked list reference
 */
export function buildLinkedList(filePath) {}

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Object} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
export function searchOneFromLabel(list, label) {}

/**
 * Get the nth element from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchNthFromWeight(list, weight) {}

/**
 * Get the last element from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchLastFromWeight(list, weight) {}

/**
 * Get all elements from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
export function searchAllFromWeight(list, weight) {}

/**
 * Get the nth element
 * @param {Object} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
export function searchNthElement(list, position) {}

// ---- Sort ----

/**
 * Sort an array based on weight value
 * @param {Object} list
 */
export function sortOnWeight(list) {
  const sortedList = mergeSort(list);
  list.head = sortedList.head;
  list.tail = sortedList.tail;
  list.length = sortedList.length;
}

function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }

  const left = { head: null, tail: null, length: 0 };
  const right = { head: null, tail: null, length: 0 };

  let currentNode = list.head;
  let index = 0;

  while (currentNode !== null) {
    if (index < list.length / 2) {
      addTail(left, currentNode);
    } else {
      addTail(right, currentNode);
    }
    currentNode = currentNode.next;
    index++;
  }

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = { head: null, tail: null, length: 0 };

  while (left.length > 0 && right.length > 0) {
    if (left.head.value.weight <= right.head.value.weight) {
      addTail(result, pop(left));
    } else {
      addTail(result, pop(right));
    }
  }

  while (left.length > 0) {
    addTail(result, pop(left));
  }

  while (right.length > 0) {
    addTail(result, pop(right));
  }

  return result;
}

function addTail(list, node) {
  const nodeCopy = Object.assign({}, node, { next: null });
  if (list.head === null) {
    list.head = nodeCopy;
  }

  if (list.tail !== null) {
    list.tail.next = nodeCopy;
  }

  list.tail = nodeCopy;
  list.length++;
}

function pop(list) {
  const newHead = list.head.next;
  const headCopy = Object.assign({}, list.head, { next: null });

  list.head = newHead;
  list.length--;
  return headCopy;
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
 * Insert a new element in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 */
export function insert(list, label, weight) {}

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

/**
 * Remove the first element
 * @param {Object} list
 * @returns {Number} the new list size
 */
 export function removeHead(list) {}

/**
 * Remove the last element
 * @param {Object} list
 * @returns {Number} the new list size
 */
 export function removeTail(list) {}

 /**
 * Remove the nth element
 * @param {Object} list
 * @param {Number} position
 * @returns {Number} the new list size
 */
  export function removeNth(list, position) {}
