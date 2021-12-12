import React from "react";

const callback = () => {
    alert ("hey")
}

//setTimeout(callback, 1000); // call function(callback) after 1 sec


export const User = () => {

    const deleteUser = () => {
        alert("User deleted");
    }
    const saveUser = () => {
        alert("User saved");
    }
    const onNameChanged = () => {
        console.log("Name changed");
    }

    return(
        <div>
            <textarea cols={30}
                      rows={5}
                      onChange={onNameChanged}>Evgeny</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
            <div onClick={deleteUser}>delete</div>
            <div onClick={saveUser}>save</div>
        </div>
    )
}