


export type ManType = {
    name:string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

/*
const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}
*/

const dimychTransformator = (man: ManType) => ({ //with () we construct object
    stack: ["css, html", "js", "tdd", "react"], // const func = (props) => (object)
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})


const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alex", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const devs2 = [
    d1,d2,d3
]
console.log(devs2)

const dev3 = people.map(dimychTransformator)
console.log(dev3)

// with map
const dev4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))
console.log(dev4)


const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Wellcome to IT-incubator`)
