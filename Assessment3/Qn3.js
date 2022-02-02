//To find the distinct charcters on the string

let input = prompt("Enter the string:");
console.log("The distinct characters in given string are:");

for(let i =0 ; i < input.length; i++)
{
    let count = 0;
    for(let j=0 ; j< input.length ;j++)
    {
        if(input.charAt(i)==input.charAt(j) && i!=j)
        {
            count=1;
            break;
        }
    } 
    console.log(input.charAt(i) );
}
