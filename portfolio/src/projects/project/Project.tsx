import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    photo: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.photo}>
                <button className={style.button}>Open</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
};
