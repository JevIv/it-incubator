import {
    addNewBooksToUser,
    makeHairCut,
    moveUser,
    moveUserToAnotherHouse,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLaptopType
} from "./10";
import {UserType} from "./10";


test("reference type test", () => {

    let user: UserType = {
        name: "Evgeny",
        age: 28,
        hair: 32,
        address: {
            city:"Minsk"
        }
    }

    const awesomeUser = makeHairCut(user, 2)

    user.address.city = "Kiev"


    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
})

test("change address", () => {

    let user: UserWithLaptopType = {
        name: "Evgeny",
        age: 28,
        hair: 32,
        address: {
            city:"Minsk",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
    }

    const movedUser = moveUser(user, "Kiev")


    expect(user).not.toBe(movedUser);
    expect(movedUser.address).not.toBe(user.address);
    expect(movedUser.laptop).toBe(user.laptop);
    expect(movedUser.address.city).toBe("Kiev");
})

test("upgrade laptop to macbook", () => {

    let user: UserWithLaptopType = {
        name: "Evgeny",
        age: 28,
        hair: 32,
        address: {
            city:"Minsk",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
    }

    const userWithNewLaptop = upgradeUserLaptop(user, "MacBook")


    expect(user).not.toBe(userWithNewLaptop);
    expect(userWithNewLaptop.laptop).not.toBe(user.laptop);
    expect(userWithNewLaptop.address).toBe(user.address);
    expect(user.laptop.title).toBe("Lenovo");
    expect(userWithNewLaptop.laptop.title).toBe("MacBook");
})

test("change house number", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Evgeny",
        age: 28,
        hair: 32,
        address: {
            city:"Minsk",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["css", "html", "js", "react"]
    }

    const userWithNewLaptop = moveUserToAnotherHouse(user, 99)


    expect(user).not.toBe(userWithNewLaptop);
    expect(userWithNewLaptop.address).not.toBe(user.address);
    expect(userWithNewLaptop.address.house).toBe(99);
})
test("add new books to user", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Evgeny",
        age: 28,
        hair: 32,
        address: {
            city:"Minsk",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, ["ts", "rest api"])


    expect(user).not.toBe(userCopy);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[4]).toBe("ts");
    expect(userCopy.books[5]).toBe("rest api");
})
test("update book", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Evgeny",
        age: 28,
        hair: 32,
        address: {
            city:"Minsk",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts")


    expect(user).not.toBe(userCopy);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[4]).toBe("ts");})