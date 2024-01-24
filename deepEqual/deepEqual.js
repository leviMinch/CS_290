'use strict';
// Don't add or change anything above this comment.

/*
 * Extra resource used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * Everything else used was from the canvas pages and the lecture videos
 */

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    //if either is undefined, check if the other is undefined and return the value 
    if(val1 === undefined || val2 === undefined){
        return val1===val2;
    }
    //if both are primitive 
    if(val1===val2){
        return true;
    }

    //if both objects
    else if (typeof val1 === 'object' && typeof val2 === 'object'){
        //if both arrays run the deepArray function
        if(Array.isArray(val1) === true && Array.isArray(val2) === true){
            return deepArray(val1, val2);
        } 
        //if both objects run the deepObject function
        else if(Array.isArray(val1) === false && Array.isArray(val2) === false){
            return deepObject(val1, val2);
        }
    }
    //if an if statement was not ran then the values are not the same
    return false;
}

//helper functions to allow for recursion and to make the code more readable
function deepObject(val1, val2){
    //if either is null or undefined, check if the other is null or undefined and return the value
    if(val1===undefined || val2===undefined || val1===null || val2===null){
        return val1===val2;
    }
    //get the keys of the objects
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    //if the keys are not the same length or if the keys are not the same return false
    if (keys1.length !== keys2.length) {
        return false;
    }

    //loop through the keys and check if the keys are the same and if the values are the same
    for(let key of keys1){
        //if the keys are not the same or if the values are not the same return false
        if(!keys2.includes(key) || !deepEqual(val1[key], val2[key])){
            return false;
        }
    }
    return true;
}

function deepArray(val1, val2){
    //if the lenghts are not the same then they are not the same
    if (val1.length !== val2.length) {
        return false;
    }
    //loop through the array and check if the values are the same
    for (let i = 0; i < val1.length; i++) {
        //check if the values are the same using deepEqual, if they are not return false
        if (!deepEqual(val1[i], val2[i])) {
            return false;
        }
    }
    return true;
}

// Don't add or change anything below this comment.
module.exports = deepEqual;