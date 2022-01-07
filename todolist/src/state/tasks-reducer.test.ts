import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./tasks-reducer";
import {TaskStateType, TodoListType} from "../App";
import {AddTodolistAC, RemoveTodolistAC, todoListsReducer} from "./todolist-reducer";


test("correct task should be removed from correct array",()=> {

    const startState:  TaskStateType = {
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

    const startState:  TaskStateType = {
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

    const startState:  TaskStateType = {
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

    const startState:  TaskStateType = {
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

    const action = changeTaskTitleAC("2", "toDoListId2", "MilkyWay");
    const endState = tasksReducer(startState, action);

    expect(endState["toDoListId1"][1].title).toBe("JS");
    expect(endState["toDoListId2"][1].title).toBe("MilkyWay");

});

test("new array should be added when new todolist is added",()=> {

    const startState:  TaskStateType = {
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

    const action = AddTodolistAC("new todolist");
    const endState = tasksReducer(startState, action);

    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "toDoListId1" && k != "toDoListId2");
    if (!newKey){
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);

});

test('ids should be equals', () => {
    const startTasksState: TaskStateType = {};
    const startTodolistsState: Array<TodoListType> = [];

    const action = AddTodolistAC("new todolist");

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todoListsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.id);
    expect(idFromTodolists).toBe(action.id);
});

test('property with todolistId should be deleted', () => {
    const startState: TaskStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };

    const action = RemoveTodolistAC("todolistId2");
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});


