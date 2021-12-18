

const increaseAge = (u: UserType) => {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

test("big test", () => {

    let user: UserType = {
        name: "Evgeny",
        age:28
    }

    increaseAge(user)
    expect(user.age).toBe(29);
    const superman = user
    superman.age = 1000;
    expect(user.age).toBe(1000);
})


test("array test", () => {

    let users = [{
        name: "Evgeny",
        age:28
    },{
        name: "Dimych",
        age:32
    },{
        name: "Victor",
        age:50
    },]

    let admins = users

    admins.push({name: "bandit", age: 10})

    expect(users[3]).toEqual({name: "bandit", age: 10})
})

test("reference type test", () => {

    let user: UserType = {
        name: "Evgeny",
        age:28,
        address: {
            title:"Minsk"
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: "Olya",
        age:27,
        address: user.address
    }

    user2.address.title = "Canary"

    expect(user.address.title).toBe("Canary");
})

test("value type test", () => {

    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = 101;

    expect(users[3]).toEqual({name: "bandit", age: 10})
})


test("reference type array test", () => {

    const  address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Evgeny",
        age:28,
        address: address
        }
    let user2: UserType = {
        name: "Olya",
        age:27,
        address: address
    }
    const users = [user, user2, {name: "Katya", age: 18, address: address}]

    const admins = [user, user2]

    user2.address.title = "Canary"

    expect(user.address.title).toBe("Canary");
})