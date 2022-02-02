// Write a JavaScript function to get the last element of an array. Passing a
// parameter 'n' will return the last 'n' elements of the array

const lastElement = (array , num) => {
    if(array == null)
    {
        return 0;
    }
    if(num == null)
    {
        return array[array.length-1];
    }
   
};


console.log(lastElement([1,2,3]))
console.log(lastElement([2,5,7]))

