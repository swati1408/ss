if(true){
let a = 10
const b = 20
var c = 30
}
//console.log(a);
//console.log(b);
//console.log(c);

var c = 300

if(true) {
    let a = 10
    const b = 20
    c=30
}

//console.log(c);

//******************Nested scope*****************

function one(){
    const username = "swati"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()

if(true) {
    const username = "swati"
    if(username === "swati")  {
        const website ="youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//*****************************intersting *************************

console.log(addone(5));
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2

}


