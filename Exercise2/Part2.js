// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

//dictionary
function uniqueChar1(str) {
  let dict = {};
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!dict[str[i]]) {
      dict[str[i]] = true;
      result += str[i];
    }
  }
  return result;
}
//set
function uniqueChar2(str) {
  let charSet = new Set();
  for (let i = 0; i < str.length; i++) {
    charSet.add(str[i]);
  }
  return Array.from(charSet).join('');
}

function uniqueChar(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str.charAt(i)) == -1) {
      result += str[i];
    }
  }
  return result;
}

// let inputStr = "thequickbrownfoxjumpsoverthelazydog";
// let outputStr = uniqueChar(inputStr);
// console.log(outputStr); // "thequickbrownfxjmpsvlazydg"

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function countFreq(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 0) {continue;}
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }
  return count;
}

// console.log(countFreq("hello world"))

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if(arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// const arr = [1, 3, 5, 7, 9];

// console.log(binarySearch(arr, 3)); // expected output: 1
// console.log(binarySearch(arr, 9)); // expected output: 4
// console.log(binarySearch(arr, 2)); // expected output: -1 (not found)
// console.log(binarySearch([], 5)); // expected output: -1 (not found)

// 19. Write a JavaScript function that returns array elements larger than a number.
function largerElements(arr, target) {
  return arr.filter(element => element > target);
}

// const arr = [1, 5, 7, 9, 11];
// const num = 6;
// console.log(largerElements(arr, num)); // Output: [7, 9, 11]

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateId(length) {
  const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return result;
}

// const randomId = generateId(8);
// console.log(randomId); // e.g. "G8f2hB7R"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function getSubsets(array, length, index = 0) {
  // initialize an empty array to store the result
  let result = [];
  // define a helper function that takes an extra parameter temp
  function helper(array, length, index, temp) {
    // loop through the array from index to end
    for (let i = index; i < array.length; i++) {
      // add the current element to temp
      temp.push(array[i]);
      // check if temp reaches the subset length
      if (temp.length === length) {
        // add a copy of temp to result
        result.push(temp.slice());
      } else {
        // call the helper function with next index and temp
        helper(array, length, i + 1, temp);
      }
      // remove the last element from temp
      temp.pop();
    }
  }
  // call the helper function with an empty temp array
  helper(array, length, index, []);
  // return the result array
  return result;
}

let arr = [1, 2, 3];
let subsetLength = 2;
let subsets = getSubsets(arr, subsetLength);
console.log(subsets); // [[1, 2], [1, 3], [2, 3], [1, 2, 3]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
function countOccurrences(str, letter) {
  return str.split('').filter(l => l === letter).length;
}

// let string = 'microsoft.com';
// let letter = 'o';
// let result = countOccurrences(string, letter);
// console.log(result); // 3

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
function firstNotRepeatedChar(str) {
  let dict = {}
  for (let i = 0; i < str.length; i++) {
    if (!dict[str[i]]) {
      dict[str[i]] = 1;
    } else {
      dict[str[i]]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (dict[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

// let string = 'abacddbec';
// let result = firstNotRepeatedChar(string);
// console.log(result); // 'e'

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
// works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if
// they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

// const arr1 = [5, 3, 8, 4, 6];
// bubbleSort(arr1);
// console.log(arr1); // [8, 6, 5, 4, 3]

// const arr2 = [1, 2, 3, 4, 5];
// bubbleSort(arr2);
// console.log(arr2); // [5, 4, 3, 2, 1]

// const arr3 = [5, 4, 3, 2, 1];
// bubbleSort(arr3);
// console.log(arr3); // [5, 4, 3, 2, 1]

// const arr4 = [3];
// bubbleSort(arr4);
// console.log(arr4); // [3]

// const arr5 = [];
// bubbleSort(arr5);
// console.log(arr5); // []

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
// output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function Longest_Country_Name1(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
}

function Longest_Country_Name(arr) {
  return arr.reduce((longest, current) => current.length > longest.length? current: longest)
}

// console.log(Longest_Country_Name(["Australia", "United Kingdom","Germany", "United States of America"]));
// Output: "United States of America"

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let charSet = new Set();
  let longestSubstring = '';
  
  while (end < str.length) {
    if (!charSet.has(str[end])) {
      charSet.add(str[end]);
      end++;
      if (charSet.size > maxLength) {
        maxLength = charSet.size;
        longestSubstring = str.substring(start, end);
      }
    } else {
      charSet.delete(str[start]);
      start++;
    }
  }
  
  return longestSubstring;
}


// console.log(findLongestSubstring('abcabcbb')); // 'abc'
// console.log(findLongestSubstring('bbbbb')); // 'b'
// console.log(findLongestSubstring('pwwkew')); // 'wke'

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor
// problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For
// example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed
// to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three,
// but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are
// themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one
// substring or returning the maximum length of a palindromic substring.
function allPalindromicSubstrings(str) {
  let palindromes = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.substring(i, j);

      if (isPalindrome(substr)) {
        palindromes.push(substr);
      }
    }
  }

  let maxLength = Math.max(...palindromes.map(str => str.length));
  return palindromes.filter(str => str.length === maxLength);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// console.log(allPalindromicSubstrings("abracadabra")); // ["aca", "ada"]
// console.log(allPalindromicSubstrings("bananas")); // ["anana"]

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// function greet(callback) {
//   const name = prompt('What is your name?');
//   callback(name);
// }

// greet(sayHello);

// 29. Write a JavaScript function to get the function name.
function getFunctionName(fn) {
  return fn.name;
}
function add(a, b) {
  return a + b;
}

// console.log(getFunctionName(add)); // "add"
