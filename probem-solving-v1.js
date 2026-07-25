// extract max number from any array of numbers

// const findMaxNum = (arr) => {
//   let maxNum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }

//   return maxNum;
// };

// const arr = [-2, -1, -19];
// console.log(findMaxNum(arr));

// find the missing number from the given array (sorted array) and return that number only

// const findMissigNum = (arr) => {
//   let properArr = [];
//   let missingNumber;

//   for (let i = 0; i < arr.length; i++) {
//     properArr.push(i + 1);
//   }

//   for (let i = 0; i < properArr.length; i++) {
//     if (properArr[i] !== arr[i]) {
//       missingNumber = properArr[i];
//       break;
//     }
//   }

//   return missingNumber;
// };

// const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// console.log(findMissigNum(arr));

 
 const moveZerosToEnd = (arr) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
};

const arr = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr));