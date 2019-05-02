/* Write a Program to Flatten a given n-dimensional array */

const flatten = (passedArray) => {
	// Write your code here
if(passedArray!==null && Array.isArray(passedArray))
{	
	return flattenDeep(passedArray);
	function flattenDeep(passedArray) {
		return passedArray.reduce((accumulate, valueIs) => Array.isArray(valueIs) ? accumulate.concat(flattenDeep(valueIs)) : accumulate.concat(valueIs),[]);
	 }	 
}
return	null;

};
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/
//flatten([1, [2, 3], [[4], [5]]]);
module.exports = flatten;
