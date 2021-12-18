
/*type LessonType = {
    title: string
}*/



import {ManType} from "./07";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Evgeny",
        age: 28,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nazvanie ulici"
            }
        }
    }
})


test("", () => {

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


test("", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1,ls2] =props.lessons

    expect(l1).toBe("1");
    expect(l2).toBe("2");

    expect(ls1).toBe("1");
    expect(ls2).toBe("2");

})