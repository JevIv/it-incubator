import React from 'react';
import style from './Skill.module.scss';
import {SkillsPropsType} from "../Skills";

type SkillIconType = {
    img :string
    desc: string
}

export const Skill = (props: SkillIconType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img
                    //className={style.skillsAvatar}
                    src={props.img}
                    alt={props.desc}
                />
                <div className={style.iconName}>{props.desc}</div>
            </div>
        </div>
    );
};
