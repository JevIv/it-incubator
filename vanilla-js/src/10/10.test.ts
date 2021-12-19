import {makeHairCut, moveUser, upgradeUserLaptop, UserWithLaptopType} from "./10";
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
