//Dates

let myDate = new Date()
 //console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

//let myCreateDate = new Date(2023, 0, 23)
//console.log(myCreateDate.toDateString());

let myCreateDate = new Date(2024, 5, 12, 4, 30)
//console.log(myCreateDate.toDateString());
//console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());

//console.log(Math.floor(Date.now()/1000));      //miliseconds

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getFullYear());
//console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long",

})



