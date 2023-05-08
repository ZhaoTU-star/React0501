// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNumber(number) {
  let reversed = 0;
  while (number > 0) {
    reversed = (reversed * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return reversed;
}

// function reverseNumber2(number) {
//   let str = number.toString();
//   let reversedStr = str.split("").reverse().join("");
//   let reversedNumber = parseInt(reversedStr);
//   return reversedNumber;
// }

// let x = 32243;
// console.log(reverseNumber(x)); // Output: 34223

// 2. Write a JavaScript function that checks whether 
//    a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads 
//    the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    while (left < right && str[left] == ' ') {
      left++;
    }
    while (left < right && str[right] == ' ') {
      right--;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// function isPalindrome1(str) {
//   // Convert the string to lowercase and remove all non-alphanumeric characters
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
//   // Reverse the string
//   let reversedStr = str.split('').reverse().join('');
  
//   // Compare the original string with the reversed string
//   return str === reversedStr;
// }


// let str1 = 'madam';
// let str2 = 'nurses run';
// let str3 = 'hello';

// console.log(isPalindrome(str1)); // Output: true
// console.log(isPalindrome(str2)); // Output: true
// console.log(isPalindrome(str3)); // Output: false

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function genCombinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let substring = '';
    for (let j = i; j < str.length; j++) {
      substring += str[j];
      result.push(substring);
    }
  }
  return result;
}
// Example usage
// console.log(genCombinations('dog')); // Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

// 4. Write a JavaScript function that returns a passed string 
// with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortString(str) {
  return str.split('').sort().join('');
}

// const myString = "webmaster";
// const sortedString = sortString(myString);
// console.log(sortedString); // outputs "abeemrstw"

// 5. Write a JavaScript function that accepts a string as 
// a parameter and converts the first letter of each word 
// of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function capitalize(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// let sentence = "the quick brown fox jumps over the lazy dog";
// let capitalizedSentence = capitalize(sentence);
// console.log(capitalizedSentence);

// 6. Write a JavaScript function that accepts a string as a parameter 
// and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function findLongestWord(str) {
  const wordsArr = str.split(' ');
  return wordsArr.reduce((longestWord, curWord) => {
    return curWord.length > longestWord.length? curWord: longestWord;
  },'');
}

// const longestWord = findLongestWord('Web Development Tutorial');
// console.log(longestWord); // Output: Development


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// const str = 'The quick brown fox';
// const numVowels = countVowels(str);
// console.log(numVowels); // Output: 5

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
// itself.
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(7)); // Output: true
// console.log(isPrime(15)); // Output: false
// console.log(isPrime(23)); // Output: true
// console.log(isPrime(100)); // Output: false

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(value) {
  return typeof value;
}

// console.log(getType("hello")); // Output: "string"
// console.log(getType(42)); // Output: "number"
// console.log(getType(true)); // Output: "boolean"
// console.log(getType({})); // Output: "object"
// console.log(getType(undefined)); // Output: "undefined"
// console.log(getType(function() {})); // Output: "function"

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j? 1: 0);
    }
    result.push(row);
  }
  return result;
}

// console.log(identityMatrix(3));
// // Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

// console.log(identityMatrix(5));
// // Output: [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
// greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
function secondSmallestAndGreatest(arr) {
  arr.sort((a,b) => a - b);
  let uniqueArr = arr.filter((item, pos) => arr.indexOf(item) == pos);

  return [uniqueArr[1], uniqueArr[uniqueArr.length - 2]]
}

// var arr = [1, 1, 2, 3, 5, 4, 8, 5];
// var result = secondSmallestAndGreatest(arr);
// console.log(result); // [2, 5]

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper
// positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
// + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

// console.log(isPerfect(6)); // true
// console.log(isPerfect(28)); // true
// console.log(isPerfect(496)); // true
// console.log(isPerfect(8128)); // true
// console.log(isPerfect(10)); // false

// 13. Write a JavaScript function to compute the factors of a positive integer.
function getFactors(num) {
  let factors = [];
  for (let i = 1; i < num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factors.push(num);
  return factors;
}

// console.log(getFactors(15)); // [1, 3, 5, 15]
// console.log(getFactors(16)); // [1, 2, 4, 8, 16]
// console.log(getFactors(17)); // [1, 17]

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function amountToCoins(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    while (coin <= amount) {
      result.push(coin);
      amount -= coin;
    }
  }
  return result;
}

// let coins = [25, 10, 5, 2, 1];
// let amount = 46;
// let result = amountToCoins(amount, coins);
// console.log(result); // [25, 10, 10, 1]

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
// from the user and display the result.
function getExponent(b, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= b;
  }
  return result;
}

let base = prompt("Enter the base:");
let exponent = prompt("Enter the exponent:");
let result = getExponent(base, exponent);
console.log(`${base}^${exponent} = ${result}`);
alert("The result is: " + result)
