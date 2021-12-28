import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

type PropsType = {
    on: boolean
    onChange: () => void
}

const callback = action("on or off been clicked");

export const OnMode = (props: PropsType) => <UnControlledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode = (props: PropsType) => <UnControlledOnOff defaultOn={false} onChange={callback}/>;
export const DefaultInputValue = () => <input defaultValue={"yo"}/>;

export const ModeChanging = (props: PropsType) => {
    const [value, setValue] = useState<boolean>(true);
    return (
        <UnControlledOnOff on={value} onChange={setValue}/>
        )
};