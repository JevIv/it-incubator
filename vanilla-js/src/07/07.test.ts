
test("", () => {
    let props = {
        name: "Evgeny",
        age: 28,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nazvanie ulici"
            }
        }
    }

/*    const age = props.age;
    const lessons = props.lessons;*/

    const {age, lessons} = props;

    //const title = props.address.street.title

    const {title} = props.address.street

    const a = props.age;
    const l = props.lessons;

    expect(age).toBe(28);
    expect(lessons.length).toBe(2);
    expect(title).toBe("Nazvanie ulici")
})