import React from 'react';
import style from "./LocationButton.module.scss";


export const LocationButton = () => {
    return (
        <div>
            <button className={style.button}>
                <div className={style.arrow}></div>
            </button>
        </div>
    );
};
