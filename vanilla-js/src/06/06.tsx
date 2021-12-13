import React, {MouseEvent, ChangeEvent} from "react";

const callback = () => {
    alert ("hey")
}

//setTimeout(callback, 1000); // call function(callback) after 1 sec


export const User = () => {

/*    const search = (event: MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.value;
    }*/

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
        //alert("User deleted");
    }
    const saveUser = () => {
        alert("User saved");
    }
    const onNameChanged = () => {
        console.log("Name changed");
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("Age changed: " + event.currentTarget.value);
    }

    const lostFocusHandler = () => {
        console.log("focus lost");
    }

    return(
        <div>
            <textarea cols={30}
                      rows={5}
                      onChange={onNameChanged}
                      onBlur={lostFocusHandler}>Evgeny</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
{/*            <button name={"delete"} onClick={search}>Search</button>*/}
            <button name={"save"} onClick={deleteUser}>X</button>
            {/*<div onClick={deleteUser}>delete</div>*/}
            <div onClick={saveUser}>save</div>
        </div>
    )
}