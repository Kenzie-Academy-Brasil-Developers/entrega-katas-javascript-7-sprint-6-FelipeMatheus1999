const majorTen = (elt) => {
  return elt > 10;
};

let myArr = [5, 3, 2, 4, 12, 25];
let arrLetters = ["felipe", "matheus", "rabelo"];

const newForEach = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, array);
  }
};

const newFill = (array, value, initialIndex = 0, endIndex = array.length) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i >= initialIndex && i < endIndex) {
      newArray.push(value);
    } else {
      newArray.push(array[i]);
    }
  }

  return (array = newArray);
};

const newMap = (array, callBack) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let result = callBack(array[i]);

    newArr.push(result);
  }

  return newArr;
};

const newSome = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    result = callBack(array[i]);

    if (result === true) {
      return result;
    }
  }

  return false;
};

const newFind = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    let result = callBack(array[i]);

    if (result === true) {
      return array[i];
    }
  }

  return undefined;
};

const newFindIndex = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    let result = callBack(array[i]);

    if (result === true) {
      return i;
    }
  }

  return -1;
};

const newEvery = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    let result = callBack(array[i]);

    if (result == false) {
      return false;
    }
  }

  return true;
};

const newFilter = (array, callBack) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i]) === true) {
      newArr.push(array[i]);
    }
  }

  return newArr;
};

// const newConcat = () => {

// }

const newIncludes = (array, elt) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elt) {
      return true;
    }
  }

  return false;
};

const newIndexOF = (array, elt) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elt) {
      return i;
    }
  }

  return -1;
};

const newJoin = (array, separator) => {
  let newString = "";

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      newString += `${array[i]}`;
    } else {
      newString += `${separator}${array[i]}`;
    }
  }

  return newString;
};

const newReduce = (array, callBack) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += callBack(array[i]);
  }

  return result;
};

const oi = (value) => {
  return value;
};
