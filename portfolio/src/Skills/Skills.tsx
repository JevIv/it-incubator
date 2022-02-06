import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"ReactJS"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"CSS"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>

                </div>
            </div>
        </div>
    );
};
