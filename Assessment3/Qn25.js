//Write a program that finds the day and date 3 months from today.
//Eg:
//Today’s date: 27/01/2022, Program should print 27/03/2022 and sunday.


const date= new Date();

console.log(`Today is ${date.toLocaleString('en-US')}`)
let month=date.getMonth();


function newDate(date,month){
    let newMonth=month+3;
    date.setMonth(newMonth);
    return date;
}
newDate(date,month);
let day=date.getDay();
console.log(`Three months from today is ${date.toLocaleString('en-US')}}`);