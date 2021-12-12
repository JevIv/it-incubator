

const todoListID_1 = "ds1485578fdsf"
const todoListID_2 = "ds1485578fdsf"

const todoLists = [                     //massiv objektov
    {
        id: todoListID_1,
        title: "What to learn",
        filter: "all",
        /*tasks: [
            {id: 11, title: "HTML", isDone: true},
            {id: 12, title: "React", isDone: false},
            {id: 13, title: "Css", isDone: false},
        ]*/
    },
    {
        id: todoListID_2,
        title: "What to buy",
        filter: "all",
        /*tasks: [
            {id: 21, title: "Milk", isDone: true},
            {id: 22, title: "Beer", isDone: true},
            {id: 23, title: "Bread", isDone: true},
        ]*/
    },
]

const tasks = {                         //objekr massivov
    [todoListID_1]: [
        {id: 11, title: "HTML", isDone: true},
        {id: 12, title: "React", isDone: false},
        {id: 13, title: "Css", isDone: false},
    ],
    [todoListID_2]: [
        {id: 21, title: "Milk", isDone: true},
        {id: 22, title: "Beer", isDone: true},
        {id: 23, title: "Bread", isDone: true},
    ]
}

console.log(tasks[todoListID_1])
console.log(tasks[todoListID_1].find(t => t.title === "HTML"))
console.log(tasks[todoListID_1].map(t => ({...t, isDone:false})))
console.log(tasks[todoLists[0].id])
console.log(tasks[todoListID_2].map(t => {
    if(t.title === "Meat"){
        return {...t, title: "Pork"}
}}))

//filter
//map
//reduce

const nums = [1,2,3,4,5,5]
console.log(nums.reduce((acc, el) => acc + el, 0))

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => {
    if(el.age > 20){
        acc.push(el.name)
        return acc // ne objazateljnij return
        //return acc.concat(el.name)
    }
    return acc //obezateljnij return
},[]))
// el.age > 20 ? [...acc,st.name] : acc
// el.age > 20 ? acc.concat(st.name) : acc

console.log(students
    .filter(s => s.age > 20)
    .map(s => s.name)
)

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

console.log(students.reduce((acc, el)=> {
    if (acc.scores > el.scores) {
        return acc
    }
    return el
}))
