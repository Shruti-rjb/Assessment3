//Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean,
// function, number, string, and undefined.


function detect_data_type(value)
{
    let types = [Function, Number, String, Boolean, Object];
    
    if (typeof value === "object" || typeof value === "function") 
    {
     for (let i = 0; i < types.length; i++) 
     {
            if (value instanceof types[i]) 
            {
                return types[i];
            }
      }
    }

    return typeof value;
}

console.log(detect_data_type('Hello Js'));
console.log(detect_data_type(true));
console.log(detect_data_type(55));
console.log(detect_data_type( ));





// const object1 = {
//     a: 'somestring',
//     b: 10,
   
//   };
  
//   let res = Object.values(object1);
//   console.log(detect_data_type(res));

