/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert =(testObj, value) => {
	// Write your code here

	if(Array.isArray(testObj) )
	{
		return testObj.reduce((obj, item)=>{obj[item[value]]= item;return obj;},{});
	}
	
	return null;
		
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/
//convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
module.exports = convert;
