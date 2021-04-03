"use strict";

// ---- INIT ----
import fs from 'fs';
import { memoryUsage } from 'process';
import {chainList} from './chainList';
import { elementList } from './elementList';
import {isEqualLabel, createNode} from './helpers';
import { Object } from './node';
/**
 * Build a simple linked list from a given file path
 * @param {String} filePath
 * @returns {Object} the newly built linked list reference
 */
export function buildLinkedList(filePath) {
    let rawdata = fs.readFileSync(filePath);
    let obj = JSON.parse(rawdata);
    let linkedList = new chainList();
    linkedList.build(obj);
    return linkedList;

}

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Object} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
export function searchOneFromLabel(list, label) {
    let currentElement = list.head;
    for(let i=0; i<list.length; i++){
        if(currentElement.value.label === label){
            return currentElement;
        }
        currentElement = currentElement.next;
    }
    

return null;
}

/**
 * Get the nth element from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchNthFromWeight(list, weight, position) {
    let currentElement = list.head;
    let numberFound = 0;
    for(let i=0; i<list.length; i++){
        if(currentElement.value.weight === weight){
            numberFound ++;
        }
        if(numberFound === position){
            return currentElement;
        }
        currentElement = currentElement.next;
    }
    return null;
}

/**
 * Get the last element from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
export function searchLastFromWeight(list, weight) {
    let currentElement = list.head;
    let foundElement = null;
    for(let i=0; i<list.length; i++){
        if(currentElement.value.weight === weight){
            foundElement = currentElement;
        }
        currentElement = currentElement.next;
    }
    return foundElement;
}

/**
 * Get all elements from a specific weight given as parameter
 * @param {Object} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
export function searchAllFromWeight(list, weight) {
    let currentElement = list.head;
    let foundElement = new Array();
    for(let i=0; i<list.length; i++){
        if(currentElement.value.weight === weight){
            foundElement.push(currentElement);
        }
        currentElement = currentElement.next;
    }
    return foundElement;
}

/**
 * Get the nth element
 * @param {Object} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
export function searchNthElement(list, position) {
    let currentElement = list.head;
    for(let i=0; i<list.length; i++){
        if(i+1 === position){
            return currentElement;
        }
        currentElement = currentElement.next;
    }
    return null;
}

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
    const nodeCopy = node;
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
    const headCopy = list.head;
  
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
export function insertHead(list, label, weight) {
    const newNode = createNode(label, weight);
    newNode.next = list.head;
    list.head = newNode;
    list.length ++;
    

}

/**
 * Insert a new element at the last position in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 */
export function insertTail(list, label, weight) {
    const newNode = createNode(label, weight)
    list.tail.next = newNode;
    list.tail = newNode;
    list.length ++;
}
/**
 * Insert a new element in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 */
export function insert(list, label, weight) {
    
    insertHead(list, label, weight);


}

/**
 * Insert an element at the nth position in the list
 * @param {Object} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the list
 */
export function insertNth(list, label, weight, position) {
    const newNode = createNode(label, weight)
    let initialLength = list.length;

    if(position === 1){
        insertHead(list, label, weight);
    }
    else if(position === initialLength+1){
        insertTail(list, label, weight);
    }
    else{
        let currentElement = list.head;
        let previous = currentElement;
        let currentIndex = 1;
        while(currentIndex < position){
            previous = currentElement;
            currentElement = currentElement.next;
            currentIndex ++;
        }
        newNode.next = currentElement
        currentElement = newNode;
        previous.next = currentElement;
        list.length ++;
    }
}

// ---- DELETE ----

/**
 * Remove all elements from a specific weight
 * @param {Object} list
 * @param {Number} weight
 * @returns {Number} the number of removed element, -1 if no element is removed
 */
export function removeAll(list, weight) {
    let previousElement = null;
    let currentElement = list.head;
    let numberDeleted = 0;

    while(currentElement != null){
        if(currentElement.value.weight === weight){
            if(previousElement === null){
                list.head = currentElement.next;
            }
            else if(currentElement.next === null){
                previousElement.next = currentElement.next;
                list.tail = previousElement;
            }
            else{
                previousElement.next = currentElement.next;
            }
            list.length --;
            numberDeleted ++;
        }
        previousElement = currentElement;
        currentElement = currentElement.next;
    }
    
    if(numberDeleted > 0){
        return numberDeleted;
    }
    return -1;
   
}

/**
 * Remove the first element
 * @param {Object} list
 * @returns {Number} the new list size
 */
export function removeHead(list) {
    if(list.length === 0){
        return 0;
    }
    let currentElement = list.head;
    list.head = currentElement.next;
    list.length--;
    return list.length;
}

/**
 * Remove the last element
 * @param {Object} list
 * @returns {Number} the new list size
 */
export function removeTail(list) {
    if(list.length === 0){
        return 0;
    }
    if(list.head.next === null){
        removeHead(list);
        return list.length;
    }
    let secondLast = list.head;
    while(secondLast.next.next != null){
        secondLast = secondLast.next;
    }
    secondLast.next = null;
    list.tail = secondLast;
    list.length --;
    return list.length;
}

/**
 * Remove the nth element
 * @param {Object} list
 * @param {Number} position
 * @returns {Number} the new list size
 */
export function removeNth(list, position) {
    if(list.length === 0){
        return list.length;
    }
    let currentElement = list.head;
    if(position === 1){
        removeHead(list);
    }
    else if(position === list.length){
        removeTail(list);
    }
    else{
        for(let i=0; i<position-2; i++){
            currentElement = currentElement.next;
        }
        currentElement.next = currentElement.next.next;
        list.length --;
    }
    return list.length;

}

