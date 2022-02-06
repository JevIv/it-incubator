import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={"JS"} photo={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Project title={"ReactJS"} photo={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Project title={"CSS"} photo={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                </div>
            </div>
        </div>
    );
};
