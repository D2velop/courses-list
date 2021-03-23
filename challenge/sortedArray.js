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

// ---- SEARCH ----

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found element
 */
export function searchAllFromWeight(list, weight) {
    const elementsFound = []
    list.forEach(element => {
        if (element.weight == weight) {
            elementsFound.push(element)
        }
    });
    return elementsFound
}

// ---- SORT ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
export function sortOnWeight(list) {
    list.sort(function(a, b) {
        return a.weight - b.weight
    })
}

// ---- INSERT ----

/**
 * Insert a new element in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
export function insert(list, label, weight, position) {
    let element = {
        "label": label,
        "weight": weight
    }
    list.splice(position, 0, element)
}

// ---- DELETE ----

/**
 * Remove an element from its weight and label
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @returns {Number} the position of the removed element, -1 if no element is removed
 */
export function removeFirst(list, label, weight) {
    let index = list.findIndex((element) => element.weight == weight && element.label == label)

    list.splice(index, 1)
    if (index != null) {
        index++
    }
    if (index == 0) {
        index = -1
    }
    return index
}

/**
 * Remove all elements from a specific weight
 * @param {Array} list
 * @param {Number} weight
 * @returns {Number} the number of removed element, -1 if no element is removed
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