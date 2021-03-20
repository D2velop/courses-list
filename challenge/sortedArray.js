"use strict";

// ---- INIT ----
import fs from 'fs';
import {isEqual, isEqualWeight, removeEach} from './helpers';
import sort from './fusionSortWeight';
/**
 * Build an array from a given file path
 * @param {String} filePath
 * @returns {Array} the newly built array reference
 */
export function buildArray(filePath) {
    let rawdata = fs.readFileSync(filePath);
    let obj = JSON.parse(rawdata);
    return obj;
}

// ---- SEARCH ----

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found element
 */
 export function searchAllFromWeight(list, weight) {
    let arrayAllWeight = new Array();

    for(let i=0; i<list.length; i++){
        if(isEqualWeight(list[i], weight)){
            arrayAllWeight.push(list[i]);
            i++;
            while(isEqualWeight(list[i], weight) && i<list.length){
                arrayAllWeight.push(list[i]);
                i++
            }
            break;
        }
    }
    return arrayAllWeight;
 }

 // ---- SORT ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
 export function sortOnWeight(list) {
     sort(list, 0, list.length-1);
     return list;
 }

 // ---- INSERT ----

/**
 * Insert a new element in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insert(list, label, weight, position) {
    let itemAdd=`{ "label":"${label}", "weight": ${weight} }`;
    let jsonAdd = JSON.parse(itemAdd);
    let initialLength = list.length;
    
    for(let i = initialLength; i > 0; i--){
        list[i] = list[i-1];
    }
    list[position-1] = jsonAdd;
 }
 
 export function insertFirst(list, label, weight){
     insert(list, label, weight, 1);
 }

 export function insertLast(list, label, weight){
    let itemAdd=`{ "label":"${label}", "weight": ${weight} }`;
    let jsonAdd = JSON.parse(itemAdd);
    list.push(jsonAdd);
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
    for(let i=0; i<list.length; i++){

        if(isEqual(list[i], label, weight)){
           list.splice(i,1);
           return i+1;
        }
    }
    return -1;
  }


  /**
   * Remove all elements from a specific weight
   * @param {Array} list
   * @param {Number} weight
   * @returns {Number} the number of removed element, -1 if no element is removed
   */
   export function removeAll(list, weight) {
        let initialLength = list.length;
        removeEach(list,0,weight);
        return initialLength - list.length;
   }