import React from 'react';
import style from './Main.module.scss';
import hello_ava from "../../assets/images/todolist.svg";

export const Main = () => {
    const greetingAvatar = {
        backgroundImage: `url(${hello_ava})`,
    };
    return (
        <div className={style.mainBlock}>
            <div className={`${style.mainContainer}`}>
                <div className={style.greetingContainer}>
                    <h1>
                        <div className={style.left}>
                            <div className={style.titleText}>
                                Hi,<br/>
                                Evgeny<br/>
                                Front-end<br/>
                            </div>
                        </div>
                        <div className={style.right}>
                            <div className={style.titleText}>
                                I'm<br/>
                                Ivanov<br/>
                                Developer<br/>
                            </div>
                        </div>
                    </h1>
                </div>
                <div className={style.image} style={greetingAvatar}></div>
            </div>

        </div>
    );
};
