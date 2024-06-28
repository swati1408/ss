//Immediately Invoked Function Expression(IIFE)

(function ss(){
    //console.log(`DB CONNECTED`);
}) ();

( () =>{
   // console.log(`DB CONNECTED Two`);
}) ();

( (name) => {
    console.log(`DB connected ${name}`);
} ) ('swati')