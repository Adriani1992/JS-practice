//store data in localStorage
localStorage.setItem("name", "Adriani")
localStorage.setItem("age",28)



//get data from localStorage

let name = localStorage.getItem("name")
let age = localStorage.age
console.log(name, age)

//updating data

// localStorage.setItem("name", "Jenny")
// localStorage.age = "29"

// name = localStorage.name
// age = localStorage.age

// console.log(name, age)



//clear data

localStorage.removeItem("name")

name = localStorage.getItem('name')
// localStorage.clear()

console.log(name, age)


// if you want to check the how to clear the item, plz comment the updating section 
//whereas if you want to test the updating secition you need to comment the clear section