
import {TasksStateType} from "../App";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleStatusAC, removeTaskAC, tasksReducer} from "./tasks-reducer";

test("correct task should be removed from correct array",()=> {

    const startState:  TasksStateType = {
        "toDoListId1": [
            {id: "1", title: "CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
            {id: "4", title: "Html", isDone: true},
        ],
        "toDoListId2": [
            {id: "1", title: "Book", isDone: true},
            {id: "2", title: "Milk", isDone: true},
            {id: "3", title: "Beer", isDone: false},
            {id: "4", title: "Bread", isDone: true},
        ]
    }

    const action = removeTaskAC("2", "toDoListId2");
    const endState = tasksReducer(startState, action);

    expect(endState["toDoListId1"].length).toBe(4);
    expect(endState["toDoListId2"].length).toBe(3);
    expect(endState["toDoListId2"].every(t => t.id != "2")).toBeTruthy();

});


test("correct task should be removed from correct array",()=> {

    const startState:  TasksStateType = {
        "toDoListId1": [
            {id: "1", title: "CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
            {id: "4", title: "Html", isDone: true},
        ],
        "toDoListId2": [
            {id: "1", title: "Book", isDone: true},
            {id: "2", title: "Milk", isDone: true},
            {id: "3", title: "Beer", isDone: false},
            {id: "4", title: "Bread", isDone: true},
        ]
    }

    const action = addTaskAC("juice", "toDoListId2");
    const endState = tasksReducer(startState, action);

    expect(endState["toDoListId1"].length).toBe(4);
    expect(endState["toDoListId2"].length).toBe(5);
    expect(endState["toDoListId2"][0].id).toBeDefined();
    expect(endState["toDoListId2"][0].title).toBe("juice");
    expect(endState["toDoListId2"][0].isDone).toBe(false);

});


test("status of specified task should be changed",()=> {

    const startState:  TasksStateType = {
        "toDoListId1": [
            {id: "1", title: "CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
            {id: "4", title: "Html", isDone: true},
        ],
        "toDoListId2": [
            {id: "1", title: "Book", isDone: true},
            {id: "2", title: "Milk", isDone: true},
            {id: "3", title: "Beer", isDone: false},
            {id: "4", title: "Bread", isDone: true},
        ]
    }

    const action = changeTaskStatusAC("2", "toDoListId2", false);
    const endState = tasksReducer(startState, action);

    expect(endState["toDoListId1"][1].isDone).toBeTruthy();
    expect(endState["toDoListId2"][1].isDone).toBeFalsy();

});

test("title of specified task should be changed",()=> {

    const startState:  TasksStateType = {
        "toDoListId1": [
            {id: "1", title: "CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
            {id: "4", title: "Html", isDone: true},
        ],
        "toDoListId2": [
            {id: "1", title: "Book", isDone: true},
            {id: "2", title: "Milk", isDone: true},
            {id: "3", title: "Beer", isDone: false},
            {id: "4", title: "Bread", isDone: true},
        ]
    }

    const action = changeTaskTitleStatusAC("2", "toDoListId2", "MilkyWay");
    const endState = tasksReducer(startState, action);

    expect(endState["toDoListId1"][1].title).toBe("JS");
    expect(endState["toDoListId2"][1].title).toBe("MilkyWay");

});