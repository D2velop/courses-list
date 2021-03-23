import * as fs from "fs"

"use strict";

// ---- INIT ----

/**
 * Build a simple linked list from a given file path
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

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Object} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
export function searchOneFromLabel(list, label) {
    let found = false
    let notFound = false
    let currentObject = list.head

    while (found == false && notFound == false) {
        if (currentObject.value.label == label) {
            found = true
        }
        if (found == false) {
            currentObject = currentObject.next
        }
        if (currentObject == null) {
            notFound = true
        }
    }
    return currentObject
}

/**
 * Get the nth element from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchNthFromWeight(list, weight, position) {
    let notFound = false
    let currentObject = list.head
    let nthFound = 0

    while (nthFound != position && notFound == false) {
        if (currentObject.value.weight == weight) {
            nthFound++
        }
        if (nthFound != position) {
            currentObject = currentObject.next
        }
        if (currentObject == null) {
            notFound = true
        }
    }
    return currentObject
}

/**
 * Get the last element from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchLastFromWeight(list, weight) {
    let endOfTheList = false
    let currentObject = list.head
    let objectToReturn = null

    while (endOfTheList == false) {
        if (currentObject.value.weight == weight) {
            objectToReturn = currentObject
        }
        currentObject = currentObject.next
        if (currentObject == null) {
            endOfTheList = true
        }
    }
    return objectToReturn
}

/**
 * Get all elements from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
export function searchAllFromWeight(list, weight) {
    let endOfTheList = false
    let currentObject = list.head
    let arrayToReturn = []

    while (endOfTheList == false) {
        if (currentObject.value.weight == weight) {
            arrayToReturn.push(currentObject)
        }
        currentObject = currentObject.next
        if (currentObject == null) {
            endOfTheList = true
        }
    }
    return arrayToReturn
}

/**
 * Get the nth element
 * @param {Object} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
export function searchNthElement(list, position) {
    let cantFound = false
    let currentObject = list.head
    let nthFound = 1

    while (cantFound == false && nthFound != position) {
        if (nthFound != position) {
            nthFound++
            currentObject = currentObject.next
        }
        if (currentObject == null) {
            cantFound = true
        }
    }
    return currentObject
}

// ---- Sort ----

/**
 * Sort an array based on weight value
 * @param {Object} list
 */
export function sortOnWeight(list) {

    function sortOnWeightAndLabel(list) {
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
    if (list.length > 1) {
        let currentObject = list.head
        let arrayOfValue = []

        for (let i = 0; i < list.length; i++) {
            arrayOfValue.push(currentObject.value)
            currentObject = currentObject.next
        }
        sortOnWeightAndLabel(arrayOfValue)
        currentObject = list.head
        for (let i = 0; i < list.length; i++) {
            currentObject.value = arrayOfValue[i]
            currentObject = currentObject.next
        }
    }
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
        next: null
    }
    list.tail.next = newTail
    list.tail = newTail
    list.length++
}

/**
 * Insert a new element in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 */
export function insert(list, label, weight) {
    let newTail = {
        value: {
            label: label,
            weight: weight
        },
        next: null
    }
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
    let nthFound = 1

    while (cantFound == false && nthFound != position) {
        if (nthFound != position) {
            nthFound++
            currentObject = currentObject.next
        }
        if (currentObject == null) {
            cantFound = true
        }
    }

    let tampon = {
        value: {
            label: currentObject.value.label,
            weight: currentObject.value.weight
        },
        next: currentObject.next
    }

    currentObject.value.label = label
    currentObject.value.weight = weight
    currentObject.next = tampon
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

/**
 * Remove the first element
 * @param {Object} list
 * @returns {Number} the new list size
 */
export function removeHead(list) {
    let lengthNow = 0

    if (list.length != 0) {
        list.head = list.head.next
        list.length--;
        lengthNow = list.length
    }
    return lengthNow
}

/**
 * Remove the last element
 * @param {Object} list
 * @returns {Number} the new list size
 */
export function removeTail(list) {
    let newListSize = 0

    if (list.length != 0) {
        let currentObject = list.head
        while (currentObject.next.next != null) {
            currentObject = currentObject.next
        }
        currentObject.next = null
        list.tail = currentObject
        list.length--;
        newListSize = list.length
    }
    return newListSize
}

/**
 * Remove the nth element
 * @param {Object} list
 * @param {Number} position
 * @returns {Number} the new list size
 */
export function removeNth(list, position) {
    let cantFound = false
    let currentObject = list.head
    let nthFound = 1

    if (list.head == null) {
        return 0
    }
    if (position != 1) {
        let previousPositon = position - 1
        while (cantFound == false && nthFound != previousPositon) {
            if (nthFound != previousPositon) {
                nthFound++
                currentObject = currentObject.next
            }
            if (currentObject == null) {
                cantFound = true
            }
        }
        if (currentObject != null) {
            currentObject.next = currentObject.next.next
        }
        list.length--;
    } else {
        list.head = list.head.next
        list.length--;
    }
    return list.length
}