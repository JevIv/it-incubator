import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<h2 className={style.title}>Skills</h2>*/}
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JavaScript"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"TypeScript"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"React"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"Redux"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"HTML"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"CSS"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"Python"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"Django"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                    <Skill title={"Flask"} icon={"http"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>

                </div>
            </div>
        </div>
    );
};
