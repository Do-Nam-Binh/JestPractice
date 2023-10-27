const capitalize = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};

const reverseString = (str) => {
  let resultStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }
  return resultStr;
};

const calculator = (() => {
  const add = (x, y) => {
    return x + y;
  };

  const substract = (x, y) => {
    return x - y;
  };

  const divide = (x, y) => {
    return x / y;
  };

  const multiply = (x, y) => {
    return x * y;
  };

  return { add, substract, divide, multiply };
})();

const caesarCipher = (str, shift) => {
  const checkIfLetter = (char) => {
    const charNum = char.charCodeAt();

    if (charNum > 96 && charNum < 123) return true;

    return false;
  };

  let charCode = 0;
  let resultStr = "";
  let upper = false;
  for (let i = 0; i < str.length; i++) {
    let lower = str[i].toLowerCase();
    charCode = lower.charCodeAt();

    if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
      upper = true;
    } else {
      upper = false;
    }

    if (checkIfLetter(lower)) {
      charCode = charCode + shift;
      if (charCode > 122) {
        charCode = 96 + (charCode - 122);
      }
    }
    if (upper) {
      resultStr += String.fromCharCode(charCode).toUpperCase();
    } else {
      resultStr += String.fromCharCode(charCode);
    }
  }

  return resultStr;
};

const analyzeArray = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];

    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return {
    average: average / arr.length,
    min: min,
    max: max,
    length: arr.length,
  };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
