'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    //if either is undefined
    if(val1 === undefined || val2 === undefined){
        return val1===val2;
    }
    //if both are primitive
    if(val1===val2){
        return true;
    }

    //if both objects
    else if (typeof val1 === 'object' && typeof val2 === 'object'){
        //if both arrays
        if(Array.isArray(val1) === true && Array.isArray(val2) === true){
            return deepArray(val1, val2);
        } else if(Array.isArray(val1) === false && Array.isArray(val2) === false){
            return deepObject(val1, val2);
        }
        
    }
    //if an if statement was not ran then one of them an array and the other is just an object
    return false;
}

//helper functions to make the program look cleaner:
function deepObject(val1, val2){
    if(val1===undefined || val2===undefined || val1===null || val2===null){
        return val1===val2;
    }
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for(let key of keys1){
        if(!keys2.includes(key) || !deepEqual(val1[key], val2[key])){
            return false;
        }
    }

    return true;
}

function deepArray(val1, val2){
    if (val1.length !== val2.length) {
        return false;
    }
    for (let i = 0; i < val1.length; i++) {
        if (!deepEqual(val1[i], val2[i])) {
            return false;
        }
    }
    return true;
}

// Don't add or change anything below this comment.
module.exports = deepEqual;