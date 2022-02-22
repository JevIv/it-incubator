import {AddItemForm} from "./AddItemForm";
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "AddItemForm Component",
    component: AddItemForm
}

const callback = action("Button add was pressed inside the form")

export const AddItemBaseExample = (props:any) => {
    return <AddItemForm addItem={callback} />
}