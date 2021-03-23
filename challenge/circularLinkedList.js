import * as fs from "fs"

"use strict";

// ---- INIT ----

/**
 * Build a circular linked list from a given file path
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
            value: null,
            next: null
        },
        tail: null,
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

        if (i != (data.length - 1)) {
            currentObject = currentObject.next
        }

        linkedList.length++
    }
    linkedList.tail = currentObject
    linkedList.tail.next = linkedList.head


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
        next: tampon
    }
    list.length++;

    list.tail.next = list.head
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
        next: list.head
    }
    list.tail.next = newTail
    list.tail = newTail
    list.length++
}