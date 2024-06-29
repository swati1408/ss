//if

if(2 == "2"){
    //console.log("executed");
}

const temperature = true

if(temperature < 50){
    //console.log("less than 50");
}
else{
    //console.log("temperature is greater than 50");
}

//console.log("execute");

const score = 300

if(score > 100){
const power = "fly"
//console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);



//**************************Shorthand notation************************ */

const balance = 1000
 
//if(balance > 500) console.log("test")                  //implicit scope
  
//, is used to write multiple lines in above


if(balance < 500) {
    //console.log("less than 750");
}
else if (balance <750) {
    //console.log("less than 750");
}
else if(balance < 900){
    //console.log("less than 750");
}
else {
    //console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const LoggedInfromGoogle = false
const LoggedInfromEmail = true

if (userLoggedIn && debitCard ) {
    //console.log("Allow to buy course");
}
if(LoggedInfromGoogle || LoggedInfromEmail){
    //console.log("User logged in");
}





