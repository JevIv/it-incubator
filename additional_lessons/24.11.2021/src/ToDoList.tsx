import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {filterType} from "../../../todolist/src/App";
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

function Todolist(props: PropsType) {

    const [title, setTitle] = useState('')
    console.log(title)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // if ((event.key === 'Control')|| event.key==='Enter'){
        if (event.ctrlKey) {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }
    const changeFilterAllHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            {/*<button onClick={addTaskHandler}>+</button>*/}
            <Button name={"+"} callback={() => addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => <li>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    {/*<button onClick={() => removeTaskHandler(t.id)}>x</button>*/}
                    <Button name={"X"} callback={() => removeTaskHandler(t.id)}/>
                    {/*<button onClick={() => {props.removeTask(t.id)}}>x</button>*/}
                </li>)
            }
        </ul>
        <div>
            <Button name={'All'} callback={()=>changeFilterAllHandler('all')}/>
            <Button name={'Active'} callback={()=>changeFilterAllHandler('active')}/>
            <Button name={'Completed'} callback={()=>changeFilterAllHandler('completed')}/>
        </div>
    </div>
}

export default Todolist;

