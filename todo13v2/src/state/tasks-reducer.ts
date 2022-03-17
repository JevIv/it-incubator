import {v1} from 'uuid';
import {
    AddTodolistActionType, changeTodolistTitleAC,
    RemoveTodolistActionType,
    setTodolistsAC,
    SetTodolistsActionType
} from './todolists-reducer';
import {TasksStateType} from "../app/App";
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, UpdateTaskModelType} from "../api/todolist-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "../app/store";
import {setAppErrorAC, setAppStatusAC, SetStatusActionType} from "../app/app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK',
    task: TaskType
    //todolistId: string
    //title: string
}

export type UpdateTaskActionType = {
    type: 'UPDATE-TASK-STATUS',
    todolistId: string
    taskId: string
    model: UpdateDomainTaskModelType
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    todolistId: string
    taskId: string
    title: string
}

export type SetTaskActionType = {
    type: 'SET-TASKS',
    tasks: Array<TaskType>
    todolistId: string
}

type ActionsType = RemoveTaskActionType
    | AddTaskActionType
    | UpdateTaskActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodolistsActionType
    | SetTaskActionType

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId];
            const newTasks = tasks.filter(t => t.id != action.taskId);
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            const stateCopy = {...state}
            const newTask = action.task
            // const newTask: TaskType = {
            //     id: v1(),
            //     title: action.title,
            //     status: TaskStatuses.New,
            //     description: "",
            //     priority: TaskPriorities.Low,
            //     startDate: "",
            //     deadline: "",
            //     todoListId: "",
            //     order: 0,
            //     addedDate: "",
            // }
            //const tasks = stateCopy[action.todolistId];
            const tasks = stateCopy[action.task.todoListId];
            const newTasks = [newTask, ...tasks];
            //stateCopy[action.todolistId] = newTasks;
            stateCopy[action.task.todoListId] = newTasks;
            return stateCopy;
        }
        case 'UPDATE-TASK-STATUS': {
            let todolistTasks = state[action.todolistId];
            let newTasksArray = todolistTasks
                .map(t => t.id === action.taskId ? {...t, status: action.model.status} : t);

            state[action.todolistId] = newTasksArray;
            return ({...state});
        }
        case 'CHANGE-TASK-TITLE': {
            let todolistTasks = state[action.todolistId];
            // найдём нужную таску:
            let newTasksArray = todolistTasks
                .map(t => t.id === action.taskId ? {...t, title: action.title} : t);

            state[action.todolistId] = newTasksArray;
            return ({...state});
        }
        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todolist.id]: []
            }
        }
        case 'REMOVE-TODOLIST': {
            const copyState = {...state};
            delete copyState[action.id];
            return copyState;
        }
        case "SET-TODOLISTS": {
            const copyState = {...state};
            action.todolists.forEach(tl => {
                copyState[tl.id] = [];
            })
            return copyState;
        }
        case "SET-TASKS": {
            const copyState = {...state};
            copyState[action.todolistId] = action.tasks
            return copyState;
        }
        default:
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}
/*export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}*/
export const addTaskAC = (task: TaskType): AddTaskActionType => {
    return {type: 'ADD-TASK', task}
}
export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string): UpdateTaskActionType => {
    return {type: 'UPDATE-TASK-STATUS', model, todolistId, taskId}
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', title, todolistId, taskId}
}
export const setTasksAC = (tasks: Array<TaskType>, todolistId: string): SetTaskActionType => {
    return {type: 'SET-TASKS', tasks, todolistId}
}

export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            dispatch(setTasksAC(res.data.items, todolistId))
            dispatch(setAppStatusAC("succeeded"))
        })
}

export const removeTask = (taskId: string, todolistId: string) => { //removeTaskThunkCreator
    return (dispatch: Dispatch) => {
        todolistsAPI.deleteTasks({todolistId, taskId})
            .then(res => {
                const action = removeTaskAC(taskId, todolistId);
                dispatch(action);
            })
    }
}
export const addTaskTC = (title: string, todolistId: string) => { //removeTaskThunkCreator
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC("loading"))
        todolistsAPI.createTask(todolistId, title)
            .then(res => {
                if (res.data.resultCode === 0){
                    const task = res.data.data.item
                    const action = addTaskAC(task);
                    dispatch(action);
                    dispatch(setAppStatusAC("succeeded"))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch((error) => {
                handleServerNetworkError(error, dispatch)
            })
    }
}

export type UpdateDomainTaskModelType = {
    description?: string
    title?: string
    status?: number
    priority?: number
    startDate?: string
    deadline?: string
}

export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) => {
    return (dispatch: Dispatch, getState: ()=> AppRootStateType) => {

        const state = getState()
        const task = state.tasks[todolistId].find(t => t.id === taskId)
        if(!task){
            //throw new Error("task not found in the state")
            console.warn("task not found in the state")
            return
        }

        const apiModel: UpdateDomainTaskModelType = {
            description: task.description,
            title: task.title,
            priority: task.priority,
            startDate: task.startDate,
            deadline: task.deadline,
            //...task,
            status: task.status,
            ...domainModel
        }
        todolistsAPI.updateTask(todolistId, taskId, apiModel)
            .then((res) => {
                if (res.data.resultCode === 0) {
                dispatch(updateTaskAC(taskId, domainModel, todolistId))
                }else {
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch((error) => {
                handleServerNetworkError(error, dispatch)
            })
    }
}