import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import todoImage from "./../../assets/images/todolist.svg";
import socialImage from "./../../assets/images/social_network.svg";


export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"My Projects"}/>
                <div className={style.projects}>
                    <Project
                        title={"Todo list"}
                        style={todolist}
                        description={"Lorem ipsum dolor sit amet, consectetur " +
                        "adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Project
                        style={social}
                        title={"Social network"}
                        description={"Lorem ipsum dolor sit amet, " +
                        "consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Project
                        title={"Portfolio"}
                        style={todolist}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Donec blandit ligula a congue elementum."}/>
                </div>
            </div>
        </div>
    );
};
