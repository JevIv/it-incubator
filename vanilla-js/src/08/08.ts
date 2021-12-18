

let user = {
    name: "Evgeny",
    age: 28,
    lessons: [{title: "1"}, {title: "2"}],
    address: {
        city: {
            title: "Ipswich"
        }
    }
}

console.log(user.address.city.title)
console.log(user["address"]["city"]["title"])


let users = ["Evgeny", "Dimych", "Igor", "Olya"]
console.log(users[0])

console.log(users["map"](e => e.toUpperCase()))
console.log(users.map(e => e.toUpperCase()))

let userObj = {
    "0": "Evgeny",
    "1": "Dimych",
    "2": "Igor",
    "3": "Olya",
}

console.log(userObj["0"])
console.log(userObj["1"])
console.log(userObj["2"])
console.log(userObj["table"]= "brown")
console.log(userObj)
console.log(userObj["How do you do?"]= "Alright!")
console.log(userObj)
console.log(userObj[null]= "null will be string!")
console.log(userObj)
console.log(userObj[{}]= "will give us [object object] as key")
console.log(userObj)

let users2 = {
    "0": "Evgeny",
    "1": "Dimych",
    "2": "Igor",
    "3": "Olya",
}

let keys = Object.keys(users2)
let values = Object.values(users2)

console.log(keys, values)