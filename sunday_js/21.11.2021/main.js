const students = [
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


// const arr = new Array()

//map
//1. return new array
//2. does not change element amount
//3. receive callback as parametr
//4. callback выполняет обработку и,или преобразование каждого элемента исходного массива
//5. новый массив состоим из return нашего callbacka
//6. исходный массив не изменяется(не мутирует)


const names = students.map(s => s.name)
console.log(names === students)

function getName(s) {
    return s.name
}

const itmap = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i])
        newArr[i] = result
    }
    return newArr
}

console.log(itmap(students, getName))

const getCopySt = s => ({...s})
console.log(itmap(students, getCopySt))


//filter
//1. return new array
//2. can change element amount
//3. receive callback as parametr
//4. callback выполняет обработку каждого элемента исходного массива
//5. callback возвращает true или false
//6. новый массив состоим из элементов исходного массива
//7. исходный массив не изменяется(не мутирует)

const itFilter = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {           //array[i] === true)
            const result = callback(array[i])
            newArr[i] = result
        }
    }
    return newArr
}

const filteredArr = students.filter(s => s.age >= 20)
console.log(filteredArr)
console.log(itFilter)



//find
//1. return элемент исходного массива
//2. return one element or does not return anything
//3. receive callback as parametr
//4. callback выполняет обработку каждого элемента исходного массива
//5. callback возвращает true или false
//6. return first element, on wich callback return true or underfined
//7. исходный массив не изменяется(не мутирует)


const itFind = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}

const getBob = s => s.name === "Bob"
console.log(itFind(students,getBob))