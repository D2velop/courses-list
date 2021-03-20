"use strict";

// ---- INIT ----
import fs from 'fs';
import sort from './fusionSort';
import {isEqual, removeEach} from './helpers';
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

// ---- Search ----

/**
 * Get the first element with the label given as parameter
 * @param {Array} list
 * @param {String} label
 * @returns {Object} the found element or null if no element were found
 */
 export function searchOneFromLabel(list, searchLabel) {
    
    let index = 0;

    for(let i=0; i<list.length; i++)
    {
        if(list[i].label === searchLabel){
            return list[i];
        }
    }

    return null;
    
 }

/**
 * Get the nth element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @param {Number} position
 * @returns {Object} the found element or null if no element were found
 */
 export function searchNthFromWeight(list, weight, position) {
     let positionCount = 0;

     for(let i=0; i < list.length; i++){
        if(list[i].weight === weight)
        {
            positionCount++;
        } 
        if(positionCount === position){
            return(list[i]);
        }
     }
     return null;
     
 }

/**
 * Get the last element from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Object} the found element or null if no element were found
 */
 export function searchLastFromWeight(list, weight) {
    for(let i=list.length-1; i!=0; i--)
    {
        if(list[i].weight === weight){
            return list[i];
        }
    }
    return null;
 }

/**
 * Get all elements from a specific weight given as parameter
 * @param {Array} list
 * @param {Number} weight
 * @returns {Array} all found elements
 */
 export function searchAllFromWeight(list, weight) {
     let arrayAllWeight = new Array();
     for(let element of list){
         if(element.weight === weight){
             arrayAllWeight.push(element);
         }
     }
     return arrayAllWeight;
 }

/**
 * Get the nth element
 * @param {Array} list
 * @param {Number} position
 * @returns {Object} the nth element or null if no element
 */
 export function searchNthElement(list, position) {
     if(position-1 <= list.length){
         return list[position-1];
     }
     return null;
 }

// ---- Sort ----

/**
 * Sort an array based on weight value
 * @param {Array} list
 */
 export function sortOnWeight(list) {
     let tableIsSort = true;

     for(let i = list.length; i>1; i--){
         tableIsSort = true;
         for(let j=0; j<i-1; j++){
             if(list[j+1].weight < list[j].weight){
                 let temp = list[j+1];
                 list[j+1] = list[j];
                 list[j] = temp;
                 tableIsSort = false; 
             }
         }
         if(tableIsSort){
             break;
         }
     }
     return list;
 }

/**
 * Sort an array based on weight value and at weight egual sort on label
 * @param {Array} list
 */
 export function sortOnWeightAndLabel(list) {
    sort(list, 0, list.length-1)
    return list;
 }

// ---- Insert ----

/**
 * Insert a new element at first position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insertFirst(list, label, weight) {
    let itemAdd=`{ "label":"${label}", "weight": ${weight} }`;
    let jsonAdd = JSON.parse(itemAdd);
    list.unshift(jsonAdd);
 }

/**
 * Insert a new element at the last position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 */
 export function insertEnd(list, label, weight) {
    let itemAdd=`{ "label":"${label}", "weight": ${weight} }`;
    let jsonAdd = JSON.parse(itemAdd);
    list.push(jsonAdd);
 }

/**
 * Insert an element at the nth position in the array
 * @param {Array} list
 * @param {String} label
 * @param {Number} weight
 * @param {Number} position the position to insert the new element in the array
 */
 export function insertNth(list, label, weight, position) {
    let itemAdd=`{ "label":"${label}", "weight": ${weight} }`;
    let jsonAdd = JSON.parse(itemAdd);
    let initialLength = list.length;
    
    for(let i = initialLength; i > 0; i--){
        list[i] = list[i-1];
    }
    list[position-1] = jsonAdd;
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
 * @returns {Number} the number of removed element, 0 if no element is removed
 */
 export function removeAll(list, weight) {
    let initialLength = list.length;
    removeEach(list,0,weight)
    return initialLength - list.length;
 }
 