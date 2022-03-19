import React, {CSSProperties} from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    style: CSSProperties | undefined
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <button className={style.button}>Open</button>
            </div>
            <div className={style.projectIfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>
        </div>
    );
};
