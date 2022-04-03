import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import skillsImg from "../../assets/images/ava_skills.png";
import {Separator} from "../../common/components/Separation/Separation";


export type SkillsPropsType = {
    skillIcons: SkillIconType[]
}
type SkillIconType = {
    img: string
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
                        alt="Hi, Here you can see my skills"
                    />
                    <Separator/>
                    <div className={style.skills}>
                        {props.skillIcons.map((s) => {
                            return <Skill img={s.img} desc={s.desc}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
