import React from 'react';
import style from './Footer.module.css';
import {Nav} from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "../skills/skill/Skill";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <p>© Copyright 2022. Designed and developed by Evgeny Ivanov</p>
            </div>
        </div>
    );
};
