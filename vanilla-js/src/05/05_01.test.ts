import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = []


beforeEach(
    ()=> {
        people = [
            {name: "Andrew Ivanov", age: 33},
            {name: "Alex Petrov", age: 24},
            {name: "Dmitry Sidorov", age: 18},
        ]
    }
)

test("should receive array of greeting messages ", () => {

    //const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Wellcome to IT-incubator`)

    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Wellcome to IT-incubator");
    expect(messages[1]).toBe("Hello Alex. Wellcome to IT-incubator");
    expect(messages[2]).toBe("Hello Dmitry. Wellcome to IT-incubator");

})