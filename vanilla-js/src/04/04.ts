

const ages = [18, 29, 23, 60, 100, 97, 34, 1, 4, 59, 50];

/*const predicate = (age: number) => {
    return age > 90;
}*/
const predicate = (age: number) => age > 90;


const oldAges = [100, 97] //>90


type CourseType = {
    title: string
    price: number
}

const courses = [
    {
        title: "css",
        price: 100
    },
    {
        title: "JS",
        price: 200
    },
    {
        title: "ReactJS",
        price: 150
    },
]

const cheapPredicate = (courses: CourseType) => {
    return courses.price < 160;
}

const cheapCourses = [{
    title: "css",
    price: 100
},
    {
        title: "ReactJS",
        price: 150
    },
];