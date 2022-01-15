
import {TasksStateType} from "../AppWithRedux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleStatusAC, removeTaskAC, tasksReducer} from "./tasks-reducer";
import {addTodolistAC, removeTodolistAC} from "./todolists-reducer";

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

test("new task should be added to correct array",()=> {

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

test("new array should be added when new todolist is added",()=> {

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

    const action = addTodolistAC("new todolist");
    const endState = tasksReducer(startState, action);

    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "toDoListId1" && k != "toDoListId2");
    if (!newKey){
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);

});

test("property with todolistId should be deleted",()=> {

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

    const action = removeTodolistAC("toDoListId2");
    const endState = tasksReducer(startState, action);

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["toDoListId2"]).not.toBeDefined();

});