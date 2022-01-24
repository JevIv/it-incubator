import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "../Todolist";


export default {
    title: "Task Component",
    component: Task
}

const checkBoxHandlerCallback = action("Status changed")
const onChangeTitleHandlerCallback = action("Title changed")
const onRemoveHandlerCallback = action("Task removed")

export const TaskBaseExample = () => {
    return <>
        <Task
            task={{id: "1", isDone: true, title: "CSS"}}
            todoListId={"todoListId1"}
            checkBoxHandler={checkBoxHandlerCallback}
            onChangeTitleHandler={onChangeTitleHandlerCallback}
            onRemoveHandler={onRemoveHandlerCallback}
        />
        <Task
            task={{id: "2", isDone: false, title: "JS"}}
            todoListId={"todoListId2"}
            checkBoxHandler={checkBoxHandlerCallback}
            onChangeTitleHandler={onChangeTitleHandlerCallback}
            onRemoveHandler={onRemoveHandlerCallback}
        />
    </>
}