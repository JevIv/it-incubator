//typeof - to check type
// Примитивы: string, number, boolean, null,
//            undefined, NaN = not a number,
//            Symbol, BigInt, Infinity

const test = "str"
console.log(typeof test) // give us string with value "string"

const test2 = null
console.log(typeof test2) // give us string with value Object

// Обьекты: object, array, function

const test3 = {} // and []
console.log(typeof test3) // give us string with value "object"

const test4 = []
console.log((Array.isArray(test4))) // true

const test5 = {
    name: "Bob"
}
console.log(test5.name)
console.log(test5["user name"])

//Ссылочный тип данных:
const user = { //
    name: "Bob" //литерал обьекта,создан в ячейке памяти
}
console.log(user)

const user_2 = user
user_2.name = "Alex"

console.log(user_2)
console.log(user)

const copyUser = {...user} //spred operator to make copy
copyUser.name = "Bob"
console.log(copyUser)
console.log(copyUser === user) //false, because two diferent objects,
//because we have two different links
console.log(copyUser === user)
//const deepCopyUser = {...user, friends: [...user.friends]}
//deepCopyUser.friends.push("Olga")
//console.log(deepCopyUser)


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

const newArr = students.map((st) => `<li>Hi, ${st.name}! You have ${st.name} scores.<li/>`)
console.log(newArr)

// method map returns new array

