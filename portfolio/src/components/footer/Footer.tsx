import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../../common/styles/Container.module.css";

const contactIcons = [{
    "linkedIn": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png",
    "github": "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    "gmail": "https://freesvg.org/img/1534129544.png",
}]
const contactLinks = [{
    "linkedIn": "https://www.linkedin.com/in/evgeny-ivanov-22229414b/",
    "github": "https://github.com/JevIv",
    "gmail": "mailto:jevgenijs240693@gmail.com",
}]

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footerIcons}>
                    <a href={contactLinks[0].linkedIn}
                       target="_blank">
                        <img className={style.footerIcon}
                             src={contactIcons[0].linkedIn}
                             alt="LinkedIn"/>
                    </a>
                    <a href={contactLinks[0].github}
                       target="_blank">
                        <img className={style.footerIcon}
                             src={contactIcons[0].github}
                             alt="Github"/></a>
                    <a href={contactLinks[0].gmail}
                       target="_blank">
                        <img className={style.footerIcon}
                             src={contactIcons[0].gmail}
                             alt="Gmail"/></a>
                </div>
                <p>© Copyright 2022. <br/>Designed and developed by Evgeny Ivanov</p>
            </div>
        </div>
    );
};
