test("should receive old men older than 90 years", () => {
    const ages = [18, 29, 23, 60, 100, 97, 34, 1, 4, 59, 50];

    const predicate = (age: number) => age > 90;


    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(100);
})


test("should receive cheapCourses, cheaper than 160", () => {
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

    const cheapCourses = courses.filter(courses => courses.price < 160);


    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("css");
    expect(cheapCourses[1].title).toBe("ReactJS");
})

test("get only completed tasks", () => {
    const tasks = [
        {id:1, title:"Bread", isDone:false},
        {id:2, title:"Milk", isDone:true},
        {id:3, title:"Sugar", isDone:false},
        {id:4, title:"Beer", isDone:true},
    ]
    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id:1, title:"Bread", isDone:false},
        {id:2, title:"Milk", isDone:true},
        {id:3, title:"Sugar", isDone:false},
        {id:4, title:"Beer", isDone:true},
    ]
    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})