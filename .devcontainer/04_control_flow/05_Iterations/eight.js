const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function (acc, currval){
  //  console.log(`acc: ${acc} and currval: ${currval}`)
 //   return acc + currval
//}, 0)
//console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js cousre",
        price: 999
    },
    {
        itemName: "py cousre",
        price: 999
    },
    {
        itemName: "mobile dev cousre",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);