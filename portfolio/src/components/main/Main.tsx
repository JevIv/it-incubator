import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.greetingContainer}>
                    {/*<div className={style.greeting}>*/}
                    {/*    <span>Hi There,</span>*/}
                    {/*    <h1>I'm Evgeny Ivanov,</h1>*/}
                    {/*    <p>A Frontend Developer.</p>*/}
                    {/*</div>*/}
                    <div className={style.left}>
                        <span className={style.greeting}>Hi There</span>
                        <h1>I'm Evgeny </h1>
                        <p>A Frontend </p>
                    </div>
                    <div className={style.right}>
                        <span className={style.greeting}>,</span>
                        <h1> Ivanov,</h1>
                        <p>Developer.</p>
                    </div>
                </div>
                {/*<div className={style.avatar}></div>*/}
            </div>

        </div>
    );
};
