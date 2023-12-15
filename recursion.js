/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestsofar =0) {
if(idx === words.length) return longestsofar;
longestsofar = Math.max(words[idx].length, longestsofar);
return longest(words, idx+1, longestsofar)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newstr='') {
  if(idx >= str.length) return newstr;
  newstr += str[idx];
  return everyOther(str, idx+2, newstr)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  if (idx >= Math.floor(str.length / 2)) {
    return true;
  }
   if (str[idx] !== str[str.length - 1 - idx]) {
    return false;
  }

  return isPalindrome(str, idx + 1);
}

9
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
if(idx === arr.length) return -1;
if(arr[idx] === val) return idx;
return findIndex(arr,val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, newstr="") {
if(newstr.length === str.length) return newstr;
newstr =str[idx] + newstr;
return revString(str, idx+1, newstr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let strings = [];
for(let key in obj){
  if(typeof obj[key] === 'string'){
    strings.push(obj[key]);
  }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
    strings = strings.concat(gatherStrings(obj[key]));
  }
}
return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
let left =0;
let right = arr.length -1;

while(left <= right){
  let mid = Math.floor((left+right)/2);

  if(arr[mid] === val){
    return mid;
  }else if (arr[mid] < val){
    left = mid+1;
  }else{
    right = mid-1;
  }
}
return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
