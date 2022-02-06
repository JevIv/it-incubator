import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There,</span>
                    <h1>I'm Evgeny Ivanov,</h1>
                    <p>A Frontend Developer.</p>
                </div>
                <div className={style.avatar}></div>
            </div>

        </div>
    );
};
