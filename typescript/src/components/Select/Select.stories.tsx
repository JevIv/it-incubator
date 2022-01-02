import React from 'react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

export const BaseExample = (props: SelectPropsType) => <>

    <Select value={"1"}
            onChange={action("Value changed")}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}]}/>
</>;

export const WithValue = (props: SelectPropsType) => <>

    <Select value={"2"}
            onChange={action("Value changed")}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}]}/>
</>;

export const WithoutValue = (props: SelectPropsType) => <>

    <Select onChange={action("Value changed")}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}]}/>
</>;
