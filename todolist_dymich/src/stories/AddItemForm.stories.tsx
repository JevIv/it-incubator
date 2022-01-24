import React from "react";
import {action} from "@storybook/addon-actions";
import {AddItemForm} from "../AddItemForm";


export default {
    title: "AddItemForm Component",
    component: AddItemForm,
}

const callback = action("Button 'add' been pressed inside tha form")

export const AddItemFormBaseExample = () => {
    return <AddItemForm addItem={callback}/>
}