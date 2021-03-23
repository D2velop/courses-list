import * as fs from "fs"

"use strict";

// ---- INIT ----

/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {
    return JSON.parse(
        fs.readFileSync(filePath, "UTF8", (err, data) => {
            return data
        }))
}

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Array} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
export function searchOneFromLabel(list, label) {
    let elementToReturn = list.find(element => element.label == label)
    if (elementToReturn == undefined) {
        elementToReturn = null
    }
    return elementToReturn
}

/**
 * Get the nth element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @param {Number} position
 * @returns {Object} the found element or null if no element were found
 */
export function searchNthFromWeight(list, weight, position) {
    let index = 0
    let elementToReturn;

    for (let i = 1; i < position; i++) {
        index = list.findIndex(element => element.weight == weight)
        list = list.slice(index + 1)
    }
    elementToReturn = list.find(element => element.weight == weight)
    if (elementToReturn == undefined || elementToReturn == -1) {
        elementToReturn = null
    }
    return elementToReturn
}

/**
 * Get the last element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchLastFromWeight(list, weight) {
    list = list.reverse()
    let elementToReturn = list.find(element => element.weight == weight)
    if (elementToReturn == undefined) {
        elementToReturn = null
    }
    return elementToReturn
}


/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
export function searchAllFromWeight(list, weight) {
    let allWeightArray = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].weight == weight) {
            allWeightArray.push(list[i])
        }
    }
    return allWeightArray
}


/**
 * Get the nth element
 * @param {Array} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
export function searchNthElement(list, position) {
    let elementToReturn = null
    if (list[position - 1] != undefined) {
        elementToReturn = list[position - 1]
    }
    return elementToReturn
}

// ---- Sort ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
export function sortOnWeight(list) {
    list.sort(function(a, b) {
        return a.weight - b.weight
    })
}

/**
 * Sort an array based on weight value and at weight egual sort on label
 * @param {Array} list
 */
export function sortOnWeightAndLabel(list) {
    list.sort(function(a, b) {
        return a.weight - b.weight
    })

    list.sort(function(a, b) {
        if (a.weight == b.weight) {
            let responseToReturn = 0
            if (a.label < b.label) { responseToReturn = -1 }
            if (a.label > b.label) { responseToReturn = 1 }
            return responseToReturn
        }
    })
}

// ---- Insert ----

/**
 * Insert a new element at first position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertFirst(list, label, weight) {
    let element = {
        "label": label,
        "weight": weight
    }
    list.unshift(element)
}

/**
 * Insert a new element at the last position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertEnd(list, label, weight) {
    let element = {
        "label": label,
        "weight": weight
    }
    list.push(element)
}

/**
 * Insert an element at the nth position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the array
 */
export function insertNth(list, label, weight, position) {
    position = position - 1
    let element = {
        "label": label,
        "weight": weight
    }
    list.splice(position, 0, element)
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
    let position = -1
    for (let i = 0; i < list.length; i++) {
        if (list[i].label == label && list[i].weight == weight) {
            position = i
        }
    }
    list.splice(position, 1)
    if (position != -1) {
        position++
    }
    return position
}


/**
 * Remove all elements from a specific weight
 * @param {Array} list
 * @param {Number} weight
 * @returns {Number} the number of removed element, 0 if no element is removed
 */
export function removeAll(list, weight) {
    let count = 0

    while (list.find(element => element.weight == weight)) {
        let index = list.findIndex(element => element.weight == weight)
        count++
        list.splice(index, 1)
    }
    return count
}