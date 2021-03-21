"use strict";

// ---- INIT ----
import fs from 'fs';
import { memoryUsage } from 'process';
import { createNode} from './helpers';
import { circularChainList } from './circularChainList';
/**
 * Build a circular linked list from a given file path
 * @param {String} filePath
 * @returns {Object} the newly built linked list reference
 */
export function buildLinkedList(filePath) {
    let rawdata = fs.readFileSync(filePath);
    let obj = JSON.parse(rawdata);
    let linkedList = new circularChainList();
    linkedList.build(obj);
    return linkedList;
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
    list.tail.next = list.head;
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
    newNode.next = list.head;
    list.tail.next = newNode;
    list.tail = newNode;
    list.length ++;
 }

