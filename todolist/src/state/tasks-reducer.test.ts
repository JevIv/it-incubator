import {
    AddTodolistAC,
    ChangeTodolistFilterAC, ChangeTodolistTitleAC,
    RemoveTodolistAC,
    todoListsReducer
} from "./todolist-reducer";
import {v1} from "uuid";
import {filterType, TodoListType} from "../App";

test("correct todolist should be removed",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();

    const startState:  Array<TodoListType> = [
        {id: toDoListId1, title: "What to learn", filter: "All"},
        {id: toDoListId2, title: "What to buy", filter: "All"},
    ];

    const endState = todoListsReducer(startState, RemoveTodolistAC(toDoListId1));

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(toDoListId2);

});

test("correct todolist should be added",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();
    let newTodoListTitle = "New Todolist";

    const startState:  Array<TodoListType> = [
        {id: toDoListId1, title: "What to learn", filter: "All"},
        {id: toDoListId2, title: "What to buy", filter: "All"},
    ];

    const endState = todoListsReducer(startState, AddTodolistAC(newTodoListTitle));

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodoListTitle);
    expect(endState[2].filter).toBe("All");

});

test("correct todolist should change its name",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();
    let newTodoListTitle = "New Todolist";

    const startState:  Array<TodoListType> = [
        {id: toDoListId1, title: "What to learn", filter: "All"},
        {id: toDoListId2, title: "What to buy", filter: "All"},
    ];

    const endState = todoListsReducer(startState, ChangeTodolistTitleAC(newTodoListTitle,toDoListId2));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodoListTitle);
});

test("correct todolist filter should be changed",()=> {

    let toDoListId1 = v1();
    let toDoListId2 = v1();
    let newFilter: filterType= "Completed";

    const startState:  Array<TodoListType> = [
        {id: toDoListId1, title: "What to learn", filter: "All"},
        {id: toDoListId2, title: "What to buy", filter: "All"},
    ];

    // const action= {
    //     type: "CHANGE-TODOLIST-FILTER"  as const,
    //     id: toDoListId2,
    //     filter: newFilter
    // };

    const endState = todoListsReducer(startState, ChangeTodolistFilterAC(newFilter,toDoListId2));

    expect(endState[0].filter).toBe("All");
    expect(endState[1].filter).toBe(newFilter);
});