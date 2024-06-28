const user = {
    username: "swati",
    price: 999,
     welcomeMessage: function(){
       // console.log(`${this.username}, welcome to website`);
     }
    
    }
    user.welcomeMessage()

    function chai(){
        //console.log(this);
    }
    chai()


    
    //**************************************arrow function******************************** */

    //const addTwo = (num1, num2) => {
      //  return num1+num2
    //}

   // console.log(addTwo(3,4))


//const addTwo = (num1, num2) => (num1 + num2)
//console.log(addTwo(3,4))

//**************************in case of object */

const addTwo = (num1, num2) => ({username: "swati"})

console.log(addTwo(3,4))