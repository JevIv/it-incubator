

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
console.log(tasks[todoLists[0].id])