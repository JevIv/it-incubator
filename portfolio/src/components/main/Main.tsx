import React from 'react';
import style from './Main.module.scss';
import greetingImg from "../../assets/images/hello_ava2.png";

export const Main = () => {
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
                <img
                    className={style.greetingAvatar}
                    src={greetingImg}
                    alt="Hi, I'm Evgeny Ivanov, Front-end Developer"
                />
            </div>

        </div>
    );
};
