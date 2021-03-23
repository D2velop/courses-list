'use strict';

// ---- INIT ----

import fs from 'fs';

class LinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	prepend(value) {
		// Make new node to be a head.
		const newNode = new LinkedListNode(value, this.head);
		this.head = newNode;

		// If there is no tail yet let's make new node a tail.
		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	append(value) {
		const newNode = new LinkedListNode(value);

		// If there is no head yet let's make new node a head.
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		// Attach new node to the end of linked list.
		this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}
}
const test = new LinkedList();
// test.prepend({ weight: 85, label: 'six' });
test.append({ weight: 9999, label: 'onetwothreefor' });
console.log(test);
// const test = new LinkedListNode(
// 	JSON.parse(fs.readFileSync('../data/1K.json')),
// 	null,
// );
// console.log(test.lenght);

/**
 * Build a simple linked list from a given file path
 * @param {String} filePath
 * @returns {Object} the newly built linked list reference
 */
export function buildLinkedList(filePath) {
	// const list = JSON.parse(fs.readFileSync(filePath));
	// const test = new LinkedList();
	// return test;
	// test.insertHead(list);
}

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
export function sortOnWeight(list) {}

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
