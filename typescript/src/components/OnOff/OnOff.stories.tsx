import React, {useState} from 'react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
}

type PropsType = {
    on: boolean
    onChange: () => void
}

const callback = action("on or off been clicked");

export const OnMode = (props: PropsType) => <OnOff on={true} onChange={callback}/>;
export const OffMode = (props: PropsType) => <OnOff on={false} onChange={callback}/>;

export const ModeChanging = (props: PropsType) => {
    const [value, setValue] = useState<boolean>(true);
    return (
        <OnOff on={value} onChange={setValue}/>
        )
};