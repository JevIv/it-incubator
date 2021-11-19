import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.imageContaner}>
                <img
                    src="https://wallpapercave.com/wp/wp2581749.jpg"
                    alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>

            Main content
        </div>
    );
}

export default Profile;