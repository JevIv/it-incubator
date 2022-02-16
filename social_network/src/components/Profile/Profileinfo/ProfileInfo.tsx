import React from "react";
import s from "./Profileinfo.module.css";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";

export type ProfileInfoType = {
    profile:ProfileType
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (props.profile == null || undefined) {
        return <Preloader/>
    }
    /*const contactInfo = () => {
        let contacts = props.profile.contacts
        return Object.keys(contacts).map((key) => [Number(key), contacts[key]])
        // console.log(contacts)
        // for (const [key, value] of Object.entries(contacts)) {
        //     return (`${key}: ${value}`)
        //
        //    // if (contact !== null) {
        //    //      return obj[contact]
        //    //  }
        // }
    }*/
    return (
        <div>
            <div className={s.imageContaner}>
                <img
                    src="https://wallpapercave.com/wp/wp2581749.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : ""} alt=""/>
                <div>
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.contacts.github}</p>
                </div>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;