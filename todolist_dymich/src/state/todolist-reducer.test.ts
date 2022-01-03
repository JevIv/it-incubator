import {
    addTodolistAC,
    changeTodolistFilterAC, changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./todolists-reducer";
import {v1} from "uuid";
import {FilterValuesType, TodolistType} from "../App";

test("correct todolist should be removed",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();

    const startState:  Array<TodolistType> = [
        {id: toDoListId1, title: "What to learn", filter: "all"},
        {id: toDoListId2, title: "What to buy", filter: "all"},
    ];

    const endState = todolistsReducer(startState, removeTodolistAC(toDoListId1));

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(toDoListId2);

});

test("correct todolist should be added",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();
    let newTodoListTitle = "New Todolist";

    const startState:  Array<TodolistType> = [
        {id: toDoListId1, title: "What to learn", filter: "all"},
        {id: toDoListId2, title: "What to buy", filter: "all"},
    ];

    const endState = todolistsReducer(startState, addTodolistAC(newTodoListTitle));

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodoListTitle);
    expect(endState[2].filter).toBe("all");

});

test("correct todolist should change its name",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();
    let newTodoListTitle = "New Todolist";

    const startState:  Array<TodolistType> = [
        {id: toDoListId1, title: "What to learn", filter: "all"},
        {id: toDoListId2, title: "What to buy", filter: "all"},
    ];

    const endState = todolistsReducer(startState, changeTodolistTitleAC(newTodoListTitle,toDoListId2));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodoListTitle);
});

test("correct todolist filter should be changed",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();
    let newFilter: FilterValuesType= "completed";

    const startState:  Array<TodolistType> = [
        {id: toDoListId1, title: "What to learn", filter: "all"},
        {id: toDoListId2, title: "What to buy", filter: "all"},
    ];

    // const action= {
    //     type: "CHANGE-TODOLIST-FILTER"  as const,
    //     id: toDoListId2,
    //     filter: newFilter
    // };

    const endState = todolistsReducer(startState, changeTodolistFilterAC(newFilter,toDoListId2));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});