import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action("accordion mode been fired");

export const MenuCollapsedMode = () => <UncontrolledAccordion title={"Menu"} />;

export const ModeChanging = () => {
    return (
        <UncontrolledAccordion title={"Users"} />
        )
};