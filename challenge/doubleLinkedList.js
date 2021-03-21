"use strict";

// ---- INIT ----
import fs from 'fs';
import { memoryUsage } from 'process';
import {isEqualLabel, createNode} from './helpers';
import { chainListDouble } from './chainListDouble';

/**
 * Build a double linked list from a given file path
 * @param {String} filePath
 * @returns {Object} the newly built linked list reference
 */
 export function buildArray(filePath) {
    let rawdata = fs.readFileSync(filePath);
    let obj = JSON.parse(rawdata);
    let doubleLinkedList = new chainListDouble();
    doubleLinkedList.build(obj);
    return doubleLinkedList;
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
    list.head.prev = newNode;
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
    newNode.prev = list.tail;
    list.tail.next = newNode;
    list.tail = newNode;
    list.length ++;
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
        newNode.next = currentElement;
        newNode.prev = currentElement.prev;
        currentElement = newNode;
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
            if(currentElement.prev === null){
                list.head = currentElement.next;
            }
            else if(currentElement.next === null){
                previousElement.next = null;
                list.tail = previousElement;
            }
            else{
                currentElement.next.prev = previousElement;
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

