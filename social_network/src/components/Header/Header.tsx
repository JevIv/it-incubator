import React from "react";
import s from"./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://user-images.githubusercontent.com/6764957/52892445-9045cf80-3136-11e9-9d5e-a1c47e505372.png"
                alt=""/>
        </header>
    );
}

export default Header;