import * as fs from "fs"
"use strict";

// ---- INIT ----

/**
 * Build a double linked list from a given file path
 * @param {String} filePath
 * @returns {Object} the newly built linked list reference
 */
export function buildLinkedList(filePath) {
    let data = JSON.parse(
        fs.readFileSync(filePath, "UTF8", (err, data) => {
            return data
        }))

    let linkedList = {
        head: {
            prev: null,
            value: null,
            next: null
        },
        length: 0
    }

    let currentObject = linkedList.head

    for (let i = 0; i < data.length; i++) {
        let value = data[i]
        let next = data[i + 1]

        if (data[i + 1] == undefined) {
            next = null
        }

        currentObject.value = value
        currentObject.next = {
            value: null,
            next: null
        }

        currentObject = currentObject.next
        linkedList.length++
    }
    return linkedList
}

// ---- INSERT ----

/**
 * Insert a new element at first position in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertHead(list, label, weight) {
    let tampon = list.head
    list.head = {
        value: {
            label: label,
            weight: weight
        },
        next: tampon,
        prev: null
    }
    list.length++
}

/**
 * Insert a new element at the last position in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertTail(list, label, weight) {
    let newTail = {
        value: {
            label: label,
            weight: weight
        },
        next: null,
        prev: list.tail
    }
    list.tail.next = newTail
    list.tail = newTail
    list.length++
}

/**
 * Insert an element at the nth position in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the list
 */
export function insertNth(list, label, weight, position) {
    let cantFound = false
    let currentObject = list.head
    let previousObject = null
    let nthFound = 1

    while (cantFound == false && nthFound != position) {
        if (nthFound != position) {
            nthFound++
            previousObject = currentObject
            currentObject = currentObject.next
        }
        if (currentObject == null) {
            cantFound = true
        }
    }

    let objectToInsert = {
        value: {
            label: label,
            weight: weight
        },
        next: null,
        prev: null
    }

    previousObject.next = null
    currentObject.prev = null
    previousObject.next = objectToInsert
    currentObject.prev = objectToInsert
    objectToInsert.prev = previousObject
    objectToInsert.next = currentObject
    list.length++
}

// ---- DELETE ----

/**
 * Remove all elements from a specific weight
 * @param {Object} list
 * @param {Number} weight
 * @returns {Number} the number of removed element, -1 if no element is removed
 */
export function removeAll(list, weight) {
    let endOfTheList = false
    let currentObject = list.head
    let count = 0

    if (currentObject.value.weight == weight) {
        currentObject = currentObject.next
        count++;
        list.length--;
    }
    while (endOfTheList == false) {
        if (currentObject.next != null) {
            if (currentObject.next.value.weight == weight) {
                let objectToRemove = currentObject.next
                currentObject.next = currentObject.next.next
                currentObject.prev = currentObject.prev.prev
                objectToRemove = null
                count++;
                list.length--;
            }
        }
        currentObject = currentObject.next
        if (currentObject == null) {
            endOfTheList = true
        }
    }
    return count
}