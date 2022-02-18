import React from "react";
import s from"./Header.module.css";
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://user-images.githubusercontent.com/6764957/52892445-9045cf80-3136-11e9-9d5e-a1c47e505372.png"
                alt=""/>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? props.login
                        : <NavLink to={"/login"}>Login</NavLink>}
                </div>
        </header>
    );
}

export default Header;