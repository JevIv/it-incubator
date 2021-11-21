import React from "react";
import s from "./Profileinfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imageContaner}>
                <img
                    src="https://wallpapercave.com/wp/wp2581749.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;