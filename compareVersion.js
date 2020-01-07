/**
 * Takes in two strings and returns a string indicating if the first string is
 * before, after, or equal to the second string.
 * Where "before", "after" and "equal" are based interpretation as software version numbers.
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

const compareVersion = function(version1, version2) {
  let re = /\.[0]+/g
  let v1 = ('.' + version1).replace(re, '.').split('.')
  let v2 = ('.' + version2).replace(re, '.').split('.')
  let len1 = v1.length
  let len2 = v2.length
  for (let i = 0; i < Math.max(len1, len2); i++) {
    if (~~v1[i] > ~~v2[i]) return `${version1} after ${version2}`
    if (~~v1[i] < ~~v2[i]) return `${version1} before ${version2}`
  }
  return `${version1} equal ${version2}`
};


// Examples:
// 1.0.0 is "before" 1.0.1

console.assert(compareVersion('1.0.0', '1.0.1') === '1.0.0 before 1.0.1')

// 2.0 is "after" 1.0.0
console.assert(compareVersion('2.0', '1.0.0') === '2.0 after 1.0.0')

// 122.0.0.0.1123 is "equal" 122.0.0.0.1123
console.assert(compareVersion('122.0.0.0.1123', '122.0.0.0.1123') === '122.0.0.0.1123 equal 122.0.0.0.1123')