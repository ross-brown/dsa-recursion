/** product: calculate the product of an array of numbers. */

//base case -> [] returns 1
//recursive case -> return nums[0] * product(nums.slice(1))

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

//base case -> [] returns 0
//recursive case -> getting longest word from the REST of the array
// longest(words.slice(1))

function longest(words) {
  if (words.length === 0) return 0;

  const longestFromRest = longest(words.slice(1));

  if (words[0].length > longestFromRest) {
    return words[0].length;
  } else {
    return longestFromRest;
  }
}

/** everyOther: return a string with every other letter. */

//base case: empty string returns ""
//recursive case: return str[0] + everyOther(str.slice(2))

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

// base case: empty array is false
// recursive case: is first item val, if so, true, otherwise find(arr.slice(1),val)

function find(arr, val) {
  if (arr.length === 0) return false;
  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// base case: empty string is TRUE
// recursive: check if first and last char are equal, if so, recurse, otherwise false

function isPalindrome(str) {
  if (str.length === 0) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

/** revString: return a copy of a string, but in reverse. */

// base case: empty string return ""
// recursive: return str[str.length - 1] + revString(str.slice(0, str.length - 1))

function revString(str) {
  if (str.length === 0) return "";

  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// base case: [] -> return -1;
// recursive case: if first item is val return

function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;

  const restIndex = findIndex(arr.slice(1), val);
  if (restIndex !== -1) return restIndex + 1;

  return -1;
}

/** gatherStrings: given an object, return an array of all of the string values. */

// base case: loop finishes
// recursive case: if curr val is an object, recurse

function gatherStrings(obj) {
  const strings = [];

  for (let val of Object.values(obj)) {
    if (typeof val === "object" && !Array.isArray(val) && val !== null) {
      strings.push(...gatherStrings(val));
    } else if (typeof val === "string") {
      strings.push(val);
    }
  }

  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return false;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return true;
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, left, right = mid - 1);
  } else {
    return binarySearch(arr, val, left = mid + 1, right);
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, left, right = mid - 1);
  } else {
    return binarySearch(arr, val, left = mid + 1, right);
  }
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
