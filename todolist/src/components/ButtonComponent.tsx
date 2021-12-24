import React from 'react';
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

type propsType={
    name:string
    callback:()=>void
}

export const ButtonComponent = (props:propsType) => {
    const onClickHandler = () =>{
        props.callback()
    }
    return (
        //<button onClick={onClickHandler}>{props.name}</button>
        <AddBoxOutlinedIcon fontSize={"large"} color={"primary"} onClick={onClickHandler}>{props.name}</AddBoxOutlinedIcon>
    )
}