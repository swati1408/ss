//singleton
//Object.create

//object literals
const Jsuser = {
    name: "Swati",
    age: 18,
    location: "Pinjore",
    email: "swatigooggle.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])

Jsuser.email = "swatichatgpt.com"
Object.freeze(Jsuser)
Jsuser.email = "swati@microsoft.com"
console.log(Jsuser);


