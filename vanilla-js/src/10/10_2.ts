
export const usersArray = ["Evgeny", "Dimych", "Igor", "Olya"]


export const userObj = {
    "0": "Evgeny",
    "1": "Dimych",
    "2": "Igor",
    "3": "Olya",
}

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    "101": {id:101, name: "Evgeny"},
    "112": {id:112, name: "Dimych"},
    "114": {id:114, name: "Igor"},
    "1213": {id:1213, name: "Olya"},
}

console.log(users[101])

let user = {id: 100500, name: "igor"}

users[user.id] = user;
delete users[user.id]
user[user.id].name = "Victor"

export const usersArray2 = [
    {id:101, name: "Evgeny"},
    {id:112, name: "Dimych"},
    {id:114, name: "Igor"},
    {id:1213, name: "Olya"},
]

//usersArray2.find(u => u.id === 1213)

//usersArray2.push(user)
//let usersCopy = [...usersArray2.filter(), user]
let usersArray2 = usersArray2.filter(u => u.id !== user.id)
