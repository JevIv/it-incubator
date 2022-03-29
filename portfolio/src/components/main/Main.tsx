import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'
import {Header} from "../header/Header";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${style.mainContainer}`}>
                <div className={style.greetingContainer}>
                    {/*<div className={style.greeting}>*/}
                    {/*    <span>Hi There,</span>*/}
                    {/*    <h1>I'm Evgeny Ivanov,</h1>*/}
                    {/*    <p>A Frontend Developer.</p>*/}
                    {/*</div>*/}

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

                    {/*                    <div className={style.left}>
                        <span className={style.greeting}>Hi,</span>
                        <h1>Evgeny </h1>
                        <p>Front-end </p>
                    </div>
                    <div className={style.right}>
                        <span className={style.greeting}>I'm</span>
                        <h1> Ivanov</h1>
                        <p>Developer</p>
                    </div>*/}
                </div>
                {/*<div className={style.avatar}></div>*/}
            </div>

        </div>
    );
};
