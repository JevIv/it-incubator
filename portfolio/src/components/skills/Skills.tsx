import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import skillsImg from "../../assets/images/ava_skills.png";
import react from "../../assets/icons/react-original.svg";


export type SkillsPropsType = {
    skillIcons: SkillIconType[]
}
type SkillIconType = {
    img :string
    desc: string
}

export const Skills = (props: SkillsPropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.content}>
                    <img
                        className={style.skillsAvatar}
                        src={skillsImg}
                        alt="Hi, I'm Evgeny Ivanov, Front-end Developer"
                    />
                    <div className={style.skills}>
{/*                        <Skill title={"JavaScript"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"TypeScript"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"React"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"Redux"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"HTML"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"CSS"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"Python"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"Django"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>
                        <Skill title={"Flask"} icon={"http"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ligula a congue elementum."}/>*/}
                        {props.skillIcons.map((s)=>{
                            return <Skill img={s.img} desc={s.desc}/>
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};
