const majorTen = (elt) => {
    return elt > 10
}

let myArr = [5, 3, 2, 4, 12, 25];
let arrLetters = ['felipe', 'matheus', 'rabelo'] 

const newForEach = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i], i, array);
    }
}

// const newFill = (value, array, indexStart, indexEnd) => {
//     if (indexStart !== undefined && indexEnd !== undefined && indexStart >= 0 && indexEnd >= 0) {
//         for (let i = indexStart; i <= indexEnd; i++) {
//             array[i] = value;
//         }

//         return array
//     }

//     else if (indexStart !== undefined && indexEnd !== undefined && indexStart >= 0 && indexEnd < 0) {
//         let turn = indexStart - indexEnd;
        
//         for (let i = indexStart; i <= indexEnd; i++) {
//             array[i] = value;
//         }

//         return array
//     }
// }

// console.log(newFill(3, myArr, 3, 5))

const newMap = (array, callBack) => {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let result = callBack(array[i]);
        
        newArr.push(result);
    }

    return newArr;
}

const newSome = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        result = callBack(array[i])

        if (result === true) {
            return result
        }
    }

    return false;
}

const newFind = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        let result = callBack(array[i])

        if (result === true) {
            return array[i];
        }
    }

    return undefined;
}

const newFindIndex = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        let result = callBack(array[i])

        if (result === true) {
            return i;
        }
    }

    return -1;
}

const newEvery = (array, callBack) => {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let result = callBack(array[i])

        if (result == true) {
            count++;
        }
    }

    if (count === array.length) {
        return true;
    }

    return false;
}

const newFilter = (array, callBack) => {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i]) === true) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

// const newConcat = () => {
    
// }

const newIncludes = (array, elt) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elt) {
            return true;
        }
    }

    return false;
}

const newIndexOF = (array, elt) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elt) {
            return i;
        }
    }

    return -1;
}

const newJoin = (array, separator) => {
    let newString = "";
    
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            newString += `${array[i]}`
        }

        else {
            newString += `${separator}${array[i]}`
        }
    }

    return newString;
}

const newReduce = (array, callBack) => {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        result += callBack(array[i])
    }

    return result;
}