// implement your own array method:
// reduce, filter, find, concat, push, pop, 
// slice, splice, some, every, reverse

// 1. myReduce
Array.prototype.myReduce = function(callback, initValue) {
    let acc = initValue;
    for (let i= 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
};

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 15

// 2. myFilter
Array.prototype.myFilter = function(callback) {
    let filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
};

// let numbers = [1, 2, 3, 4, 5];
// let filteredNumbers = numbers.myFilter(function(num) {
//   return num > 2;
// });
// console.log(filteredNumbers); // [3, 4, 5]

// 3. myFind
Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

// let numbers = [1, 2, 3, 4, 5];
// let foundNumber = numbers.myFind(function(num) {
//   return num > 2;
// });
// console.log(foundNumber); // 3

// 4. myConcat
Array.prototype.myConcat = function(...args) {
  let newArr = [...this];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      newArr.push(...args[i]);
    } else {
      newArr.push(args[i]);
    }
  }
  return newArr;
};

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = arr1.myConcat(arr2);
// console.log(newArr); // [1, 2, 3, 4, 5, 6]


//5. myPush
Array.prototype.myPush = function(...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length;
};

// let arr = [1, 2, 3];
// let newLength = arr.myPush(4, 5);
// console.log(newLength); // 5
// console.log(arr); // [1, 2, 3, 4, 5]

// 6. myPop
Array.prototype.myPop = function() {
  if (this.length === 0) return undefined;
  const lastElement = this[this.length - 1];
  this.length--;
  return lastElement;
}

// let arr = [1, 2, 3];
// let lastElement = arr.myPop();
// console.log(lastElement); // 3
// console.log(arr); // [1, 2]

//7. mySlice
Array.prototype.mySlice = function(startIndex, endIndex) {
  let slicedArr = [];
  for (let i = startIndex; i < endIndex; i++) {
    slicedArr.push(this[i]);
  }
  return slicedArr;
};

// let originalArray = [1, 2, 3, 4, 5];
// let slicedArray = originalArray.mySlice(1, 4); // returns [2, 3, 4]
// console.log(slicedArray)

//8. mySome
Array.prototype.mySome = function(callback) {
  for (let i = 0; i < this.length; i++){
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// let originalArray = [1, 2, 3, 4, 5];
// let isEven = originalArray.mySome((element) => {
//   return element % 2 === 0;
// }); // returns true
// console.log(isEven);

//9. myEvery
Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// let originalArray = [1, 2, 3, 4, 5];
// let isEven = originalArray.myEvery((element) => {
//   return element % 2 === 0;
// }); // returns false
// console.log(isEven);

// 10. myReverse
Array.prototype.myReverse = function() {
  let startIndex = 0;
  let endIndex = this.length - 1;
  while(startIndex < endIndex) {
    let temp = this[startIndex];
    this[startIndex] = this[endIndex];
    this[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
  return this;
};

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.myReverse()); // returns [5, 4, 3, 2, 1]
