/*

Your are given a string “hello_i_am_string” convert the given string to:
“helloIAmString”
“hello i am string”
“Hello i am string”
“Hello I Am String”
“HELLOIAMSTRING”


*/

let string ="hello_i_am_string"




 //“HELLOIAMSTRING”


 let array = string.split("_");
 let result = array.join("");
 console.log(result.toUpperCase());



 
// "hello i am string"

// let array = string.split("_");
// let result = array.join(" ");
// console.log(result)




// "Hello i am string"

// let array = string.split("_");
// let temp = array[0].charAt(0).toUpperCase() + array[0].slice(1);
// array[0] = temp;
// let result = array.join(" ");
// console.log(result)






// "helloIamString"

// let array = string.split("_");
// for(let i = 1; i < array.length; i++){
//     array[i] = array[i][0].toUpperCase() + array[i].slice(1);
// }

// console.log(array.join(""));




//"Hello I Am String"

// let array = string.split("_");

// for(let i = 0; i < array.length;i++){
//     let temp = array[i][0].toUpperCase() + array[i].slice(1);
//     array[i] = temp;
// }

// console.log(array.join(" "));