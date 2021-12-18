import {UsersType} from "./08_2";

let users = UsersType

beforeEach(() => {
    users = {
        "101": {id:101, name: "Evgeny"},
        "112": {id:112, name: "Dimych"},
        "114": {id:114, name: "Igor"},
        "1213": {id:1213, name: "Olya"},
    }
})


test("should update user", () => {
    users["1213"].name = "Ekaterina"

    expect(users["1"]).toEqual({id: 1, name: "Ekaterina"});
})

test("should delete user", () => {
    delete users["1"]

    expect(users["1"]).toBeUndefined;
})